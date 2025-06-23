import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { config } from "./config";
import cors from "cors";

const app = express();

// Configuração para proxy
app.set('trust proxy', 1);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(config.cors));

// Middleware para configurar headers de proxy
app.use((req, res, next) => {
  // Configurar headers para funcionar com proxy
  res.setHeader('X-Forwarded-Proto', req.headers['x-forwarded-proto'] || 'http');
  res.setHeader('X-Forwarded-Host', req.headers['x-forwarded-host'] || req.headers.host || 'localhost');
  res.setHeader('X-Forwarded-For', req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown');
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      throw err;
    });

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Configuração para aceitar conexões de qualquer IP (necessário para proxy)
    const host = config.nodeEnv === 'production' ? '0.0.0.0' : '127.0.0.1';
    
    server.listen(config.port, host, () => {
      log(`Server running at http://${host}:${config.port}`);
      log(`Production mode: ${config.nodeEnv === 'production' ? 'Yes' : 'No'}`);
      log(`CORS origins: ${config.cors.origin.join(', ')}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();
