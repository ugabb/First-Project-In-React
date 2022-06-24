
import './App.css';
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import data from './data';

function App() {
  const cards = data.map(itens =>{
    return(
      <Main 
        key={itens.id}
        itens={itens}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
