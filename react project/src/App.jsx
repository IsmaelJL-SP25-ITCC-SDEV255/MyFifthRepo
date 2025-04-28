import "./App.css";
import chef from "./chef.jpg";

function Header( {name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
      </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];
function Main({dishes, openStatus, onStatus}) {
  return(
  <>
  
  <div>
  <button onClick={() => onStatus(true)}>
    I want to be open
  </button>
  <h2> Welcome to this beautiful resturant!</h2>
  </div>
  <main> 
  <img src="https://github.com/eveporcello.png"
   height={200} 
  alt="A photo of a smiling chef owner" />
  <ul>
     {dishes.map((dish, i) => ( 
      <li key={dish.id} style={{ listStyle: "none" }}>{dish.title} </li> ))}

    </ul>
    </main>
    </>
  );
}


     

    const dish0bjects = items.map((dish, i) => ({
      id: i,
      title: dish
    }));

    console.log(dish0bjects);
  

function App() {
  const [status, toggle] = userReducer((status) => !status, true);

  useEffect(() => {
    console.log(
      `The resturant is ${status ? "open" : "closed"}`
    )
  }, [status]);

  return (
    <div>

     <Header name="Alex" year={new Date().getFullYear} />
     <main dishes={dish0bjects}/>
     </div>

  );  
}

export default App;