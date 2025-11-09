import type { User, LoginData, CadastroData } from '../types/auth';

// URL da API hospedada no Render
const API_URL = 'https://java-jdbc-zry5.onrender.com';

export const api = {
  // POST /usuario - Cadastrar novo usuário
  async cadastrar(data: CadastroData) {
    try {
      const response = await fetch(`${API_URL}/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro no cadastro:', error);
      throw error;
    }
  },

  // POST /login - Autenticar usuário
  async login(data: LoginData) {
    try {
      // Busca todos os usuários e valida manualmente
      const response = await fetch(`${API_URL}/usuario`);
      const usuarios = await response.json();

      const usuarioEncontrado = usuarios.find(
        (u: any) => u.email === data.email && u.senha === data.senha
      );

      if (usuarioEncontrado) {
        return {
          token: '123',
          user: {
            idUsuario: usuarioEncontrado.idUsuario,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            dtNascimento: usuarioEncontrado.dtNascimento
          }
        };
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  },

  // PUT /usuario/{id} - Atualizar usuário por ID
  async atualizar(idUsuario: number, data: Partial<User>) {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        console.error('Resposta não ok ao atualizar:', response.status);
        return null;
      }

      // Busca o usuário atualizado
      const updatedUser = await this.buscarPorId(idUsuario);
      return updatedUser;

    } catch (error) {
      console.error('Erro ao atualizar:', error);
      return null;
    }
  },

  // DELETE /usuario/{id} - Deletar usuário por ID
  async deletar(idUsuario: number) {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.error('Resposta não ok ao deletar:', response.status);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Erro ao deletar:', error);
      return false;
    }
  },

  // GET /usuario/{id} - Buscar usuário por ID
  async buscarPorId(idUsuario: number) {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar usuário');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      throw error;
    }
  },

  // GET /usuario - Buscar usuário por email
  async buscarPorEmail(email: string) {
    try {
      const response = await fetch(`${API_URL}/usuario`);

      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }

      const usuarios = await response.json();
      const usuario = usuarios.find((u: any) => u.email === email);

      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      return usuario;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      throw error;
    }
  },

  // GET /usuario - Listar todos os usuários
  async listar() {
    try {
      const response = await fetch(`${API_URL}/usuario`);

      if (!response.ok) {
        throw new Error('Erro ao listar usuários');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao listar:', error);
      throw error;
    }
  }
};