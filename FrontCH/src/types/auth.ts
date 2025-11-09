// FrontCH/src/types/auth.ts

export type User = {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
  dtNascimento: string;
};

export type LoginData = {
  email: string;
  senha: string;
};

export type CadastroData = {
  nome: string;
  email: string;
  senha: string;
  dtNascimento: string;
};