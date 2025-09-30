import { useNavigate } from 'react-router-dom';

export default function Cabecalho(){
    const navigate = useNavigate();

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/integrantes', label: 'INTEGRANTES' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contato', label: 'CONTATO' },
        { path: '/sobre', label: 'SAIBA MAIS' }
    ];

    return(
        <header>
            <div className="header-content">
                <h1>Enfermeira Digital</h1>
                <nav>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <button 
                                    onClick={() => navigate(item.path)} 
                                    className="nav-link bg-transparent border-none"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}