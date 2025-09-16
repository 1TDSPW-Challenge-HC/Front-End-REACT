import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Integrantes from './routes/Integrantes/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import Home from './routes/Home/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';


const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/", element: <Home/>},
      {path: "/Sobre", element: <Sobre/>},
      {path: "/Integrantes", element: <Integrantes/>},
      {path: "/Faq", element: <Faq/>},
      {path: "/Contato", element: <Contato/>},
  ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
