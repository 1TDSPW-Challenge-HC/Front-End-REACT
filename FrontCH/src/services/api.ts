// FrontCH/src/services/api.ts
import type { User, LoginData, CadastroData } from '../types/auth';

const API_URL = 'http://localhost:8080/api';

export const api = {
  async login(data: LoginData) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async cadastrar(data: CadastroData) {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async atualizar(id: number, data: Partial<User>) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async deletar(id: number) {
    const token = localStorage.getItem('token');
    await fetch(`${API_URL}/usuarios/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }
};