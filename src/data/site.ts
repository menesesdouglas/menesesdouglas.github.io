/**
 * Único arquivo que você precisa editar para publicar.
 * Campos marcados como `null` são opcionais e são omitidos automaticamente
 * da interface enquanto não estiverem preenchidos.
 */
interface SiteConfig {
  nome: string;
  nomeCompleto: string;
  papel: string;
  empresa: string;

  /** Preencha quando o CNPJ estiver aberto. Enquanto `null`, o rodapé omite. */
  cnpj: string | null;

  cidade: string;
  atendimento: string;
  email: string;

  whatsappNumero: string;
  whatsappMensagem: string;

  github: string;
  linkedin: string;
  instagram: string;
}

export const site: SiteConfig = {
  nome: 'Douglas Meneses',
  nomeCompleto: 'Douglas Meneses Lima Oliveira',
  papel: 'Fundador e Engenheiro de Computação',
  empresa: 'Farol Labs',

  cnpj: null,

  cidade: 'Feira de Santana — BA',
  atendimento: 'Atendimento remoto em todo o Brasil',

  email: 'menesesdouglas.fx@gmail.com',

  whatsappNumero: '5575992652715',
  whatsappMensagem: 'Olá, vi seu portfólio e quero conversar sobre um projeto',

  github: 'https://github.com/menesesdouglas',
  linkedin: 'https://www.linkedin.com/in/menesesdouglas',
  instagram: 'https://instagram.com/mneses_do',
};

export const whatsappUrl =
  `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(site.whatsappMensagem)}`;