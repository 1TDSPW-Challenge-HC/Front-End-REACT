// FrontCH/src/routes/Cadastro/index.tsx
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import type { CadastroData } from "../../types/auth";

type CadastroForm = CadastroData & {
  confirmarSenha: string;
};

export default function Cadastro() {
  const navigate = useNavigate();
  const [cadastroMessage, setCadastroMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroForm>();

  const senha = watch("senha");

  const onSubmit: SubmitHandler<CadastroForm> = async (data) => {
    try {
      const { confirmarSenha, ...cadastroData } = data;
      await api.cadastrar(cadastroData);
      
      setCadastroMessage("Cadastro realizado com sucesso!");
      setSuccess(true);
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setCadastroMessage("Erro ao cadastrar. Email já pode estar em uso.");
      setSuccess(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="w-full max-w-md bg-[var(--background-section)] rounded-lg shadow-lg p-8">
        <h2 className="text-[var(--titulo-destaque)] text-3xl font-bold mb-6 text-center">
          Cadastro
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              className="w-full p-2 border border-[var(--detalhe-complementar)] rounded"
              {...register("nome", {
                required: "Nome é obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" }
              })}
            />
            {errors.nome && (
              <small className="text-sm text-red-500">{errors.nome.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="w-full p-2 border border-[var(--detalhe-complementar)] rounded"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido"
                }
              })}
            />
            {errors.email && (
              <small className="text-sm text-red-500">{errors.email.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="dtNascimento" className="text-sm font-medium text-gray-700">
              Data de nascimento
            </label>
            <input
              type="date"
              id="dtNascimento"
              className="w-full p-2 border border-[var(--detalhe-complementar)] rounded"
              {...register("dtNascimento", {
                required: "Data de nascimento é obrigatória"
              })}
            />
            {errors.dtNascimento && (
              <small className="text-sm text-red-500">{errors.dtNascimento.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              className="w-full p-2 border border-[var(--detalhe-complementar)] rounded"
              {...register("senha", {
                required: "Senha é obrigatória",
                minLength: { value: 6, message: "Mínimo de 6 caracteres" }
              })}
            />
            {errors.senha && (
              <small className="text-sm text-red-500">{errors.senha.message}</small>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmarSenha" className="text-sm font-medium text-gray-700">
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Confirme sua senha"
              className="w-full p-2 border border-[var(--detalhe-complementar)] rounded"
              {...register("confirmarSenha", {
                required: "Confirmação de senha é obrigatória",
                validate: (value) => value === senha || "As senhas não coincidem"
              })}
            />
            {errors.confirmarSenha && (
              <small className="text-sm text-red-500">{errors.confirmarSenha.message}</small>
            )}
          </div>

          {cadastroMessage && (
            <small className={`text-sm text-center ${success ? "text-green-500" : "text-red-500"}`}>
              {cadastroMessage}
            </small>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-[var(--background-header)] text-[var(--texto-claro)] rounded hover:opacity-90 transition-opacity"
          >
            Cadastrar
          </button>

          <p className="text-center text-sm text-gray-600">
            Já tem conta?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[var(--texto-destaque)] hover:underline"
            >
              Faça login
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}