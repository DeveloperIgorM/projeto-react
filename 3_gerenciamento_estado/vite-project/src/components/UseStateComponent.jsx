import {useState} from 'react'

// useState = hooks
// hook = funcionalidade especial para algum fim especifico como (Gerenciar Estado)

// Sempre que vamos alterar o valor de algo => useState
// Se é somente leitura => variavel normal, state


const UseStateComponent = () => {

    // sintaxe
    // Variável de consulta, e uma de alteração, início o hook
    const [count, setCount] = useState(0);

    // prev -> pega o estado/valor anterior do elemento dando assim uma garantia
    const incrementar = () => {
        setCount((prevCount) => prevCount + 1); //Maneira ideial       
        // setCount(count + 1);
        console.log(count);
    }

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1,
    }));
    };


    const [user, setUser] = useState({
        name: 'Igor',
        age: 24,
        hobbies: 'Produção musical',
    });


  return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes!</p>
        <button onClick={incrementar}>Incrementar</button>
   
   
        <p>
            Nome: {user.name} e idade: {user.age}
        </p>
        <button onClick={updateUserAge}>Incremetar idade</button>
   
    </div>

  ) 
}

export default UseStateComponent