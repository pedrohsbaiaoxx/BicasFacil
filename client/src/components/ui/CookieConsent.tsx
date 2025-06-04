import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
          <a href="/politica-de-privacidade" className="underline hover:text-primary">
            Política de Privacidade
          </a>
          .
        </p>
        <Button onClick={handleAccept} variant="outline" className="whitespace-nowrap text-white border-white hover:bg-white hover:text-gray-900">
          Aceitar e Fechar
        </Button>
      </div>
    </div>
  );
} 