export default function SearchBar(props) {
   return (
      <div>
         {<SearchBar><input type='search' />
         <button onClick={props}>Agregar</button> </SearchBar>}
      </div>
   );
}
