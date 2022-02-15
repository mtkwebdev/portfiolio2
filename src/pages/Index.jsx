import React from 'react'
import HomePage from "../components/PageComponents/Index/HomePage";
import ResultsPage from "../components/PageComponents/Index/ResultsPage";
import MenuResults from "../components/PageComponents/Index/ResultsPage/MenuResults";

function Index() {
  return (
      <>
        <HomePage/>
        <ResultsPage>
            <MenuResults/>
        </ResultsPage>
      </>
  )
}

export default Index