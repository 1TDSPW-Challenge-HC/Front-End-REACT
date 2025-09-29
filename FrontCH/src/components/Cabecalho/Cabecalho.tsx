import { useNavigate } from 'react-router-dom';

export default function Cabecalho(){
    const navigate = useNavigate();

    return(
        <header>
            <h1>Enfermeira Digital</h1>
            <nav>
                <ul>
                    <li><a onClick={() => navigate('/')} className="nav-link">HOME</a></li>
                    <li><a onClick={() => navigate('/integrantes')} className="nav-link">INTEGRANTES</a></li>
                    <li><a onClick={() => navigate('/faq')} className="nav-link">FAQ</a></li>
                    <li><a onClick={() => navigate('/contato')} className="nav-link">CONTATO</a></li>
                </ul>
            </nav>
        </header>
    )
}