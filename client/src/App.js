import Body from "./Pages/Body/Body";
import Header from "./Pages/Header/Header";
import './Resources/css/Main.css'

function App() {
  const margin={
    marginTop:'80px',
  };
  return (
    <div className="App">
      <Header />
      <div style={margin}>
        <Body />
      </div>
    </div>
  );
}

export default App;
