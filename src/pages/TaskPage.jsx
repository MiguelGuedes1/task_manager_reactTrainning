import { useSearchParams } from "react-router"
import "./taskPage.css"; // Importa o arquivo de estilos
import { useNavigate } from "react-router"

const TaskPage = () => {


  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const description = searchParams.get("description")
  const navigate = useNavigate()   // criar constante para poderes navegar entre paginas com o react router


  return (

    <div className="paginas_tarefas">

      <div className="container_tarefas">
          <div className="descriçao_tarefas">
            <h2 className="titulo_tarefa"> Detalhes da tarefa : {title}</h2>
            <h2 className="detalhes_tarefa"> Descrição da tarefa : {description}</h2>

            <button onClick={() => {navigate("/")} } className="voltar">Voltar Pagina anterior</button>
          </div>
      </div>
    </div>
  )
}

export default TaskPage
