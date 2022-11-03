import "./App.css";
import EduExp from "./components/edu&exp";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <EduExp />
        <Portfolio />
        <Footer />
      </header>
    </div>
  );
}

export default App;
