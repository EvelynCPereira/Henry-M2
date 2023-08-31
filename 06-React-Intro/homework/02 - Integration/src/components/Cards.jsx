import Card from './Card';

export default function Cards(props) {
   return <div>
   {props.characters.map((personaje)=>(
      <Card 
      image={personaje.image} 
      onClose={() => window.alert('Emulamos que se cierra la card')} 
      key={personaje.id}
      name = {personaje.name}
      status={personaje.status}
      species={personaje.species}
      gender={personaje.gender}
      origin={personaje.origin.name}
      />
   ))}

   </div>;
}
