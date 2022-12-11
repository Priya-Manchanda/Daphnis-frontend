import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Combined from "./components/Combined";
import Card_next from "./components/Card_next";
function App() {
  return (
    <div>
      <Header />
      <Combined/>
      <Card_next/>
      <Card />
    </div>
  );
}

export default App;
