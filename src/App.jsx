import Main from "./Main";
import MyImg from "./assets/MyImg.jpg";

function App() {
  return (
    <div>
      <header className="--bs-info --bs-info-rgb">
        <div className="d-flex justify-content-center">
          <img className="img-thumbnail" src={MyImg} alt="Me" />
          <div>
            <h1>Vitalii Zubeniuk</h1>
            <h2>Software engineer</h2>
            <h3>Personal portfolio</h3>
          </div>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
