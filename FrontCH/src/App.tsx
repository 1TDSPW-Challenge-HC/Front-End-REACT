import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape"
import { lazy, Suspense } from "react";

const OutletsPage = lazy(() => import("react-router-dom").then(module => ({ default: module.Outlet })));

export default function App(){

  return(
    <div className="container">
      <Cabecalho/>
      <div className="flex-1 w-full">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>  
          <OutletsPage></OutletsPage>
        </Suspense>
      </div>
      <Rodape/>
    </div>
  )
}