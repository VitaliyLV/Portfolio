import Chapter from "./Chapter.jsx";
import MyInformation from "./assets/MyInformation.json";

function App() {
  return (
    <div>
      <header>
        <h1>Vitalii Zubeniuk</h1>
        <h2>Pesonal portfolio site</h2>
      </header>
      <main>
        <ul>
          {MyInformation.Data.map((i) => (
            <Chapter key={i.Name} info={i} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
