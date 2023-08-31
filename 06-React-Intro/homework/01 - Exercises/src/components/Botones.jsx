import React from "react";

export default function Botones() {
    return (
        <div>
            <button onClick={() => alert('Aprobado')}>Módulo 1</button>
            <button onClick={() => alert('En curso')}>Módulo 2</button>
        </div>
    )
}