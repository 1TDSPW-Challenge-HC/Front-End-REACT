// FrontCH/src/routes/Login/index.tsx
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import type { LoginData } from "../../types/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await api.login(data);
      
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/");
        window.location.reload();
      } else {
        setLoginError("Email ou senha incorretos");
      }
    } catch (error) {
      setLoginError("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="w-full max-w-md bg-[var(--background-section)] rounded-lg shadow-lg p-8">
        <h2 className="text-[var(--titulo-destaque)] text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

          {loginError && (
            <small className="text-sm text-red-500 text-center">{loginError}</small>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-[var(--background-header)] text-[var(--texto-claro)] rounded hover:opacity-90 transition-opacity"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-gray-600">
            Não tem conta?{" "}
            <button
              type="button"
              onClick={() => navigate("/cadastro")}
              className="text-[var(--texto-destaque)] hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}