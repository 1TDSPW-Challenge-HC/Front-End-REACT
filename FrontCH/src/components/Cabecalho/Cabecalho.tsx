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
            <h1 className="text-2xl font-bold">Enfermeira Digital</h1>
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <a onClick={() => navigate(item.path)} className="nav-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}