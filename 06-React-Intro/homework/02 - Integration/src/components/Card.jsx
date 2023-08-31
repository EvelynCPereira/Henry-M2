export default function Card(props) {
   const {name, status, species, gender, origin, image, onClose} = props
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2> {name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='imagen' />
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