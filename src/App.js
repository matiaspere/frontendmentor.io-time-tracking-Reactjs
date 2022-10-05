import DataCard from "./Components/DataCard";
import "./styles/App.css";
import { data } from "./utilities/data";

function App() {
  return (
    <div className="App">
      <div className="ProfileContainer">

      </div>
      <div className="CardsGrid">
        {data.map((i) => (
          <DataCard title={i.title} timeframes={i.timeframes} />
        ))}
      </div>
    </div>
  );
}

export default App;
