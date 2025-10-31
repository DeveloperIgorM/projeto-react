import React from 'react'

const JsxExamples = () => {

let user = {
    name: 'IG4O',
    lastName: 'MUSIC'
};

function getGreating(name) {
    return `Olá ${name}`;
}

const userIsLoggedIn = true;
const userRole = 'admin';


    const users = [
    
        {id: 1 , name: 'igor'},
        {id: 2, name: 'Gabrielli'},
        {id: 3, name: 'Guilherme'},

        ];

    return (

        // Tudo que está entre chaves {} executa código em JS
        <div>
        {/* Básico */}
            <h2>Conteúdo que o usuário vai ver</h2>
            <p>`O nome do usuário é {user.name} {user.lastName}`</p>
       
            <p>{getGreating("BINGOLA")}</p>
       
        {/* DIFERENÇAS DO HTML */}
        {/* Para declarar uma classe de css no arquivo jsx, precisa ser className */}
        <div className="Alguma coisa">Y DO </div>
        <br></br>
        <button onClick={() => alert("teste")}>Clique em mim!</button>
        <br></br>
        <input type="text"placeholder="Digite alguma coisa" />

        {/* Renderização Condicional */}

        {/* IF TERNÁRIO */}
        {userIsLoggedIn ? (<p>Caso: Está logado</p>) : (<p>Caso: Não está logado</p>)}

        {/* Expressão lógica usando AND && */}
        {userRole === 'admin' && <p>Você é um admin!</p>}
        
        
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default JsxExamples;