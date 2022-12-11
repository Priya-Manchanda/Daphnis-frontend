import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Combined from "./components/Combined";
import Card_next from "./components/Card_next";
import Make_one from "./components/Make_one";
function App() {
  return (
    <div>
      <Header />
      <Combined/>
      {/* <Card_next/>
      <Card /> */}
      <Make_one/>
    </div>
  );
}

export default App;
