import Body from "./Pages/Body/Body";
import Header from "./Pages/Header/Header";
import './Resources/css/Main.css';
import Forms from "./Pages/Forms/Forms";

function App() {
  const margin={
    marginTop:'80px',
  };
  return (
    <div className="App">
      <Header />
      <div style={margin}>
        <Body />
        <Forms />
      </div>
    </div>
  );
}

export default App;
