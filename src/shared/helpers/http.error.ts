import { AxiosError } from 'axios';

export const errorStack: Record<string, string> = {
  [AxiosError.ECONNABORTED]: 'Erro: Tempo limite da solicitação excedido.',
  [AxiosError.ERR_FR_TOO_MANY_REDIRECTS]:
    'Erro: Muitos redirecionamentos ocorreram.',
  [AxiosError.ERR_BAD_OPTION_VALUE]: 'Erro: Valor de opção inválido.',
  [AxiosError.ERR_NETWORK]: 'Erro de rede: Verifique sua conexão de internet.',
  [AxiosError.ERR_BAD_RESPONSE]:
    'Erro de resposta do servidor: A resposta não foi válida.',
  [AxiosError.ERR_BAD_REQUEST]:
    'Erro de requisição: A requisição não foi válida.',
  [AxiosError.ERR_NOT_SUPPORT]: 'Erro: Funcionalidade não suportada.',
  [AxiosError.ERR_INVALID_URL]: 'Erro: URL inválida.',
  [AxiosError.ERR_CANCELED]: 'Erro: Requisição cancelada.',
  [AxiosError.ETIMEDOUT]: 'Erro: Tempo limite da solicitação excedido.',
};
