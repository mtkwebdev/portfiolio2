import React from 'react'
import HomePage from "../components/PageComponents/HomePage/HomePage";
import ResultsPage from "../components/PageComponents/ResultsPage/ResultsPage";
import MenuResults from "../components/PageComponents/ResultsPage/MenuResults";

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