import React from "react";
import Botones from "./Botones";

const studentName = "Evelyn";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() { 
  // el código de tu componente acá
  return(
    <div>
      <h1>Primer tarea React</h1>
      <h3>{studentName}</h3>
      <ul>
      {techSkills.map((element)=>(//a cada elem le asigno <li>. 
        <li>{element}</li>
      ))}
      </ul>
      <Botones/>
    </div>


  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
