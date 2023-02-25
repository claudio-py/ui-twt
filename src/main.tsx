import React, { Profiler } from "react"
import ReactDOM from "react-dom/client"
import "./global.css";



import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


//foreach / map
//foreach não tem retorno, mas o map tem.

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)