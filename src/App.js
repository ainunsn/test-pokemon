import logo from "./logo.svg";
import "./App.css";
import BottomNavigation from "./components/navigation/BottomNavigation";
import RoutesConfig from "./router";
import TopNavigation from "components/navigation/TopNavigation";
import LoadingPage from "components/loading/LoadingPage";

function App() {
  return (
    <div>
      <TopNavigation />

      <RoutesConfig />
      <BottomNavigation />
      {/* <LoadingPage /> */}
    </div>
  );
}

export default App;

function Test() {
  return <p>Hahahh</p>;
}
