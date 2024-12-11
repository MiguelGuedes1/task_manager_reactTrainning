import {useState} from "react"

const AddTasks = ({onAddTaskSubmit}) => {

  const [title,setTitle] = useState('')
  
  const [description,setDescription] = useState('')


  
  
  
  
  
  return (



    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mb-3 mt-3 flex flex-col">

        <input className="p-2 rounded-md "
          type="text"
          placeholder="Digite o titulo da tarefa" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
 
          
          />

        <input  className="p-2 rounded-md"
          type="text"
          placeholder="Digite a descrição da tarefa" 
          value={description}
          onChange={(event) => setDescription(event.target.value)}
            
          />

          <button 
            onClick={() => 
              !title.trim() || !description.trim()             // este trim impede que seja enviado se o utilizador so enviar espaços ... o metodo trim retira todos os espaços e só analisa a string digitada em si
                ? alert("Preencha ambos campos correctamente") 
                : (onAddTaskSubmit(title, description), setTitle(''), setDescription(''))
            }
            className="bg-slate-700 p-3 rounded md text-white"
          >
            Adicionar tarefa
          </button>

      </div>
  )
}

export default AddTasks
