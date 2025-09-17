import { useState } from 'react';

export default function Contato(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const [messageType,setType] = useState('Feedback')

    const setters = {
        email: setEmail,
        name: setName,
        message: setMessage,
    }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        const {name,value} = event.target

        const setter = setters[name];
        if (setter) setter(value)


    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
    }

    return(
        <main>
            <div>
                <h1>Nome:{name}
                    <div>Email:{email}</div></h1>
                <p>{message}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Nome</label>
                     <input type="text" value={name} onChange={handleChange} name ="name"></input>
                     </div>
                     <div>
                     <label>Email</label>
                     <input type="text" value={email} onChange={handleChange} name ="email"></input>
                     </div>
                     <div>
                     <label>Mensagem</label>
                     <input type="text" value={message} onChange={handleChange} name ="message"></input>
                     </div>
                    <button type="submit">SALVAR</button>
                </form>

            </div>

        </main>
    )
}