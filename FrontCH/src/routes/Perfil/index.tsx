import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { User } from "../../types/auth";

type PerfilForm = {
  nome: string;
  dtNascimento: string;
};

export default function Perfil() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PerfilForm>();

  // Normaliza diferentes formatos de data para o formato aceito pelo input[type=date] (yyyy-mm-dd)
  const normalizeDate = (value?: string) => {
    if (!value) return "";
    // se estiver no formato dd/mm/aaaa -> converte
    if (value.includes("/")) {
      const parts = value.split("/");
      if (parts.length === 3) {
        const [d, m, y] = parts;
        return `${y.padStart(4, "0")}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
      }
    }
    // se for ISO ou tiver T -> pega os 10 primeiros caracteres (yyyy-mm-dd)
    if (value.includes("T")) return value.slice(0, 10);
    if (value.length >= 10) return value.slice(0, 10);
    return value;
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      reset({
        nome: parsedUser.nome,
        dtNascimento: normalizeDate(parsedUser.dtNascimento)
      });
    } else {
      navigate("/login");
    }
  }, [navigate, reset]);

  const onSubmit: SubmitHandler<PerfilForm> = async (data) => {
    if (!user?.idUsuario) return;

    try {
      // enviar o payload completo (merge) para evitar que o backend rejeite por campos faltando
      const payload = { ...user, ...data, dtNascimento: normalizeDate(data.dtNascimento) } as any;
      const updatedUser = await api.atualizar(Number(user.idUsuario), payload);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setMessage("Dados atualizados com sucesso!");
      setIsEditing(false);
      
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Erro ao atualizar dados.");
    }
  };

  const handleDelete = async () => {
    if (!user?.idUsuario) return;

    try {
      await api.deletar(Number(user.idUsuario));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      setMessage("Erro ao deletar conta.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4 bg-[var(--background)]">
      <div className="w-full max-w-2xl bg-[var(--background-section)] rounded-lg shadow-lg p-8">
        <h2 className="text-[var(--titulo-destaque)] text-3xl font-bold mb-6 text-center">
          Meu Perfil
        </h2>

        {message && (
          <div className={`p-3 rounded mb-4 text-center ${
            message.includes("sucesso") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
            <small className="text-xs text-gray-500">O email não pode ser alterado</small>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              disabled={!isEditing}
              className={`w-full p-2 border border-[var(--detalhe-complementar)] rounded ${
                !isEditing ? "bg-gray-50" : ""
              }`}
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
            <label htmlFor="dtNascimento" className="text-sm font-medium text-gray-700">
              Data de nascimento
            </label>
            <input
              type="date"
              id="dtNascimento"
              disabled={!isEditing}
              className={`w-full p-2 border border-[var(--detalhe-complementar)] rounded ${
                !isEditing ? "bg-gray-50" : ""
              }`}
              {...register("dtNascimento", {
                required: "Data de nascimento é obrigatória"
              })}
            />
            {errors.dtNascimento && (
              <small className="text-sm text-red-500">{errors.dtNascimento.message}</small>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {isEditing ? (
              <>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[var(--background-header)] text-[var(--texto-claro)] rounded hover:opacity-90"
                >
                  Salvar alterações
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    reset({ nome: user.nome, dtNascimento: normalizeDate(user.dtNascimento) });
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex-1 px-4 py-2 bg-[var(--background-header)] text-[var(--texto-claro)] rounded hover:opacity-90"
              >
                Editar dados
              </button>
            )}
          </div>
        </form>

        <div className="border-t border-gray-200 mt-6 pt-6">
          <h3 className="text-lg font-semibold text-red-600 mb-4">Zona de perigo</h3>
          
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 w-full sm:w-auto"
            >
              Excluir minha conta
            </button>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded p-4">
              <p className="text-red-800 font-semibold mb-3">
                Tem certeza que deseja excluir sua conta?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Sim, excluir conta
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-800 underline"
          >
            Sair da conta
          </button>
        </div>
      </div>
    </main>
  );
}
