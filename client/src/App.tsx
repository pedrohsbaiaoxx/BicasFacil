import React from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { CookieConsent } from "./components/ui/CookieConsent";
import NotFound from "./pages/not-found";
import HomePage from "./pages/Home";
import { LoginPage } from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { RegisterProfessionalPage } from "./pages/auth/RegisterProfessionalPage";
import { RegisterCompanyPage } from "./pages/auth/RegisterCompanyPage";
import ServicosPage from './pages/servicos';
import ImoveisPage from './pages/imoveis';
import ImoveisVendaPage from './pages/imoveis/venda';
import ImoveisAluguelPage from './pages/imoveis/aluguel';
import VeiculosPage from './pages/veiculos';
import VeiculosCarrosPage from './pages/veiculos/carros';
import VeiculosMotosPage from './pages/veiculos/motos';
import VeiculosCaminhoesPage from './pages/veiculos/caminhoes';
import LojasPage from './pages/lojas';
import IAHubPage from './pages/ia-hub';
import OutrosServicosPage from './pages/outros';
import ServicosPublicosPage from './pages/servicos-publicos';
import RHPage from './pages/rh';
import MasterDashboard from './pages/admin/master';
import EmpresaDashboard from './pages/admin/empresa';
import UsuariosPage from './pages/admin/master/usuarios';
import EmpresasPage from './pages/admin/master/empresas';
import ServicosAdminPage from './pages/admin/master/servicos';
import RelatoriosPage from './pages/admin/master/relatorios';
import ConfiguracoesPage from './pages/admin/master/configuracoes';
import PermissoesPage from './pages/admin/master/permissoes';
import PintoresPage from './pages/servicos/pintores';
import EncanadoresPage from './pages/servicos/encanadores';
import EngenheirosPage from './pages/servicos/engenheiros';
import ManicuresPage from './pages/servicos/manicures';
import CabeleireirosPage from './pages/servicos/cabeleireiros';
import { Layout } from "./components/layout";
import MateriaisConstrucaoPage from './pages/lojas/materiais-construcao';
import MoveisDecoracaoPage from './pages/lojas/moveis-decoracao';
import EletrodomesticosPage from './pages/lojas/eletrodomesticos';
import SupermercadosPage from './pages/lojas/supermercados';
import AssistentePage from './pages/ia-hub/assistente';
import DocumentosPage from './pages/ia-hub/documentos';
import PrevisoesPage from './pages/ia-hub/previsoes';
import RecomendacoesPage from './pages/ia-hub/recomendacoes';
import EnergiaPage from './pages/servicos-publicos/energia';
import AguaEsgotoPage from './pages/servicos-publicos/agua-esgoto';
import LimpezaPage from './pages/servicos-publicos/limpeza';
import IluminacaoPage from './pages/servicos-publicos/iluminacao';
import VagasPage from './pages/rh/vagas';
import CurriculosPage from './pages/rh/curriculos';
import TreinamentosPage from './pages/rh/treinamentos';
import ConsultoriaPage from './pages/rh/consultoria';
import CompanyRegisterPage from './pages/register/company';
import OrgaosPublicosPage from './pages/orgaos-publicos';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/cadastrar" component={RegisterPage} />
      <Route path="/cadastrar/profissional" component={RegisterProfessionalPage} />
      <Route path="/cadastrar/empresa" component={RegisterCompanyPage} />
      <Route path="/servicos" component={ServicosPage} />
      <Route path="/servicos/pintores" component={PintoresPage} />
      <Route path="/servicos/encanadores" component={EncanadoresPage} />
      <Route path="/servicos/engenheiros" component={EngenheirosPage} />
      <Route path="/servicos/manicures" component={ManicuresPage} />
      <Route path="/servicos/cabeleireiros" component={CabeleireirosPage} />
      <Route path="/imoveis" component={ImoveisPage} />
      <Route path="/imoveis/venda" component={ImoveisVendaPage} />
      <Route path="/imoveis/aluguel" component={ImoveisAluguelPage} />
      <Route path="/veiculos" component={VeiculosPage} />
      <Route path="/veiculos/carros" component={VeiculosCarrosPage} />
      <Route path="/veiculos/motos" component={VeiculosMotosPage} />
      <Route path="/veiculos/caminhoes" component={VeiculosCaminhoesPage} />
      <Route path="/lojas" component={LojasPage} />
      <Route path="/lojas/materiais-construcao" component={MateriaisConstrucaoPage} />
      <Route path="/lojas/moveis-decoracao" component={MoveisDecoracaoPage} />
      <Route path="/lojas/eletrodomesticos" component={EletrodomesticosPage} />
      <Route path="/lojas/supermercados" component={SupermercadosPage} />
      <Route path="/ia-hub" component={IAHubPage} />
      <Route path="/ia-hub/assistente" component={AssistentePage} />
      <Route path="/ia-hub/documentos" component={DocumentosPage} />
      <Route path="/ia-hub/previsoes" component={PrevisoesPage} />
      <Route path="/ia-hub/recomendacoes" component={RecomendacoesPage} />
      <Route path="/outros" component={OutrosServicosPage} />
      <Route path="/servicos-publicos" component={ServicosPublicosPage} />
      <Route path="/servicos-publicos/energia" component={EnergiaPage} />
      <Route path="/servicos-publicos/agua-esgoto" component={AguaEsgotoPage} />
      <Route path="/servicos-publicos/limpeza" component={LimpezaPage} />
      <Route path="/servicos-publicos/iluminacao" component={IluminacaoPage} />
      <Route path="/rh" component={RHPage} />
      <Route path="/rh/vagas" component={VagasPage} />
      <Route path="/rh/curriculos" component={CurriculosPage} />
      <Route path="/rh/treinamentos" component={TreinamentosPage} />
      <Route path="/rh/consultoria" component={ConsultoriaPage} />
      <Route path="/admin/master" component={MasterDashboard} />
      <Route path="/admin/empresa" component={EmpresaDashboard} />
      <Route path="/admin/master/usuarios" component={UsuariosPage} />
      <Route path="/admin/master/empresas" component={EmpresasPage} />
      <Route path="/admin/master/servicos" component={ServicosAdminPage} />
      <Route path="/admin/master/relatorios" component={RelatoriosPage} />
      <Route path="/admin/master/configuracoes" component={ConfiguracoesPage} />
      <Route path="/admin/master/permissoes" component={PermissoesPage} />
      <Route path="/register/company" component={CompanyRegisterPage} />
      <Route path="/orgaos-publicos" component={OrgaosPublicosPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
      <Toaster />
      <CookieConsent />
    </QueryClientProvider>
  );
}

export default App;
