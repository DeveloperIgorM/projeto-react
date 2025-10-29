// Component Pai
import './App.css'

// Importar o component filho, nome da funçao FROM e caminho 
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/classComponent'
import PropsExample from './components/PropsExample'


function App() {

  return (
    <>
      <h1>Hello World React</h1>
      {/* Utilizando component importado no JSX */}
      <FunctionalComponent/>
      <ClassComponent/>
      <PropsExample nome="IG4O" idade={24}/>
     
    </>
  )
}

export default App
