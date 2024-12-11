import {ChevronRightIcon} from "lucide-react"
import {TrashIcon} from "lucide-react"
import { useNavigate } from "react-router"

const Tasks = ({tasks,onTaskClick,onDeleteTaskClick}) => {       // ao colocares assim : const Tasks = ({tasks,onTaskClick,onDeleteTaskClick}) => {    estas a fazer os destructing das props para no codigo abaixo nao ser necessario colocares sempre props. ( nome da prop)
const navigate = useNavigate()   // criar constante para poderes navegar entre paginas com o react router

const clicar_para_ver_detalhes_tarefa = (task) => {
  navigate(`/task?title=${task.title}&description=${task.description}`)
}




  return (
    <div>

        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) =>                                                // com o metodo map , MAPEASTE cada objecto que passaste por props para este componente
               <li key={task.id } className="flex gap-2" > 
                  <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 text-white p-2 text-left rounded-md w-full ${task.isCompleted && 'line-through' }`}
                    >{task.title}   
                  </button>

                  <button onClick={() => {clicar_para_ver_detalhes_tarefa(task)} } className="bg-slate-400 p-2 rounded-md text-white"> <ChevronRightIcon/> </button>

                  <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white"> <TrashIcon/> </button>
              </li>    
            )}
        </ul>

    </div>
  )
}

export default Tasks
