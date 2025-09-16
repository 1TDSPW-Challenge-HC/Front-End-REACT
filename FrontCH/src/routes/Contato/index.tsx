import { useState } from 'react';

export default function Contato(){
    const [nome,setNome] = useState()
    const [email,setEmail] = useState()
    const [mensagem,setMensagem] = useState()

    const [tipo,setTipo] = useState('Feedback')

    function handleSubmit(evento){
        evento.preventDefault()
    }

    return(
        <main>
            <div>

            </div>
        </main>
    )
}