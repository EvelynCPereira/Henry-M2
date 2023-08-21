import Card from './Card';

export default function Cards(props) {
   return <div>
   {props.map((characters)=>(
      <Card characters = {characters} key={this.id}/>
      //    <li key={number.toString()}>
   ))}

   </div>;
}
