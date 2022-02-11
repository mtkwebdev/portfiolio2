
// import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage"; 
import MenuResults from "./components/PageComponents/ResultsPage/MenuResults";

function App() {

  return (
    <>
    <HomePage/>
    <ResultsPage>
      <MenuResults/>
    </ResultsPage>
    </>
  )
}

export default App;
