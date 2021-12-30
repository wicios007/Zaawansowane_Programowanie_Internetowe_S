import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Zad1 from "./components/zad1";
import Zad2 from "./components/zad2";
import Zad3 from "./components/zad3";
import Zad4 from "./components/zad4";
import Zad5 from "./components/zad5";
import Zad6 from "./components/zad6";
import Zad9i10 from "./components/zad9i10";
import Zad11 from "./components/zad11";
import Zad14 from "./components/zad14";
import Zad16 from "./components/zad16";
import Zad17 from "./components/zad17";

function App() {
  return (
    <>
      <Card className="m-2">
        <h3>Task 1</h3>
        <Zad1 />
        <h3>Task2</h3>
        <Card>
          <Zad2 />
        </Card>
        <Card className="m-1">
          <h3>Task 3</h3>
          <Zad3 />
        </Card>
        <Card>
          <h3>Task 4</h3>
          <Zad4 />
        </Card>
        <h3>Task 5</h3>
        <Zad5 />
        <h3>Task 6</h3>
        <Zad6 />
        <h3>Task 9 _ 10</h3>
        <Zad9i10 />
        <h3>Task 11</h3>
        <Zad11 />
        <h3>Task 14 - 15</h3>
        <Zad14 />
        <h3>Task 16</h3>
        <Zad16 />
        <h3>Task 17</h3>
        <Zad17 />
      </Card>
    </>
  );
}

export default App;
