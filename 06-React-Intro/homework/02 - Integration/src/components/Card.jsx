export default function Card(props, onClose) {
   const {name, status, species, gender, image} = props
   return (
      <div>
         { <Card><button onClick={onClose}>X</button>
         <h2> {name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{name.origin}</h2>
         <img src={image} alt='' /></Card>}
      </div>
   );
}

// **name**: nombre.
// -  **status**: status.
// -  **species**: especie.
// -  **gender**: género.
// -  **origin**: origen (ten en cuenta que el nombre del origen viene dentro de otra 
//propiedad llamada **`name`**).
// -  **image**: imagen.

// Además, cuando el usuario haga click en la **X** de "cerrar", 
//debe ejecutarse una función que también viene como props llamada **onClose**.