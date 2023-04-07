import Header from "./components/header/header";
import main from "./components/mainPage/mainPage";
import "./App.scss";

function App({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}

export default App;
