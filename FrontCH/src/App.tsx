import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape/Rodape"

export default function App(){

  return(
    <div className="container">
        <Cabecalho></Cabecalho>

        <OutletsPage></OutletsPage>

        <Rodape></Rodape>
    </div>

  )
}