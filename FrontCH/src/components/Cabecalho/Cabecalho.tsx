// FrontCH/src/components/Cabecalho/Cabecalho.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../types/auth';

export default function Cabecalho() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/integrantes', label: 'INTEGRANTES' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contato', label: 'CONTATO' },
    { path: '/sobre', label: 'SAIBA MAIS' }
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <header className="w-full bg-[var(--background-header)] text-[var(--texto-claro)] flex justify-center">
      <div className="w-full flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold pl-0 cursor-pointer" onClick={() => navigate('/')}>
          Enfermeira Digital
        </h1>
        
        <nav className="flex items-center justify-end flex-1 gap-6">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <button 
                  onClick={() => navigate(item.path)} 
                  className="text-[var(--texto-claro)] font-bold hover:text-[var(--texto-escuro)] cursor-pointer px-2 py-1 transition-colors whitespace-nowrap text-sm sm:text-base bg-transparent border-none"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="relative">
            {user ? (
              <div>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center font-semibold text-sm">
                    {user.nome.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.nome.split(' ')[0]}
                  </span>
                </button>

                {showMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user.nome}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    <button
                      onClick={() => {
                        navigate('/perfil');
                        setShowMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Meu perfil
                    </button>

                    <div className="border-t border-gray-200 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors font-medium"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}