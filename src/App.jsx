import { useState,useEffect } from "react"
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"
import { use } from "react"

const App = function() {

  const [tasks,setTasks]=useState(JSON.parse(localStorage.getItem("tasks")) || [] )

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))  // converter o tasks que é um objecto javascript em uma string para poder armazenar os dados no localstorages
  },[tasks])


  // Usar uma api para inserir dados nas tarefas ( simular uma situacao real em que podes receber dados de um banco de dados)

  


  useEffect(() => {

    const fetchTasks =  async () => {
        // chamar a API
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",      // trazer 10 tarefas da api
          {
            method:"GET"   // por pre definiçao o metodo é o GET quando fazes um fetch a uma api esta parte do codigo é subjectiva
          }
        )  

        // PEGAR OS DADOS QUE ELA RETORNA

        const data = await response.json()
        console.log(data)


        // ARMAZENAR/COLOCAR ESSES DADOS NO STATE

        setTasks(data)
    }

          // se quiseres usar os dados da api descomentas esta linha --- fetchTasks()
 

  },[])  // quando colocas um array vazio signiica que este use effect só vai ser executado quando a pagina abrir ou seja só uma vez


  /*

      CODIGO ANTES DE DEFINIR O LOCAL STORAGE ( GUARDAR OS DADOS NO NAVEGADOR )

    const [tasks,setTasks]=useState([{

    id:1,
    title:"Estudar Programação",
    description:"estudar programaçao para ter um bom futuro",
    isCompleted:false,
  },

  {
    id:2,
    title:"Estudar ingles",
    description:"Estudar ingles para ficar bom",
    isCompleted:false,
  },

  {
  id:3,
  title:"Estudar React para o trabalho",
  description:"estudar react para desenvolver boa logica",
  isCompleted:false,
  },


  ])

  */ 





  // Função para apos o clique a tarefa aparecer completa

    const onTaskClick = (taskId) => {
      const newTasks = tasks.map(task =>{
        // Necessario actualizar a tarefa
        if (task.id === taskId){
          return {...task, isCompleted : !task.isCompleted}

        }
          // NAO PRECISO ACTUALIZAR A TAREFA
          return task
        })
        setTasks(newTasks)
  }


    // Função para REMOVER UMA TAREFA


  const onDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !==taskId )
    setTasks(newTasks)
  }


  // Função para acrescentar uma tarefa

  const onAddTaskSubmit = (title,description) => {
      const newTask = {
        id:tasks.length + 1,
        title,
        description,
        isCompleted:false
      }

      setTasks([...tasks,newTask])
  }



  return(

      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
         <div className="w-[500px] ">
         <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
          <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>       {/* Enviar uma funçao por props para o componente addTasks */}
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}  />      {/* Enviar o array tasks + 2 funçoes por props para o componente Tasks */}
         </div>

   
          
      </div>

  )

}

export default App