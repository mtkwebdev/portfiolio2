import {PrismicRichText, useFirstPrismicDocument, usePrismicDocumentByUID} from '@prismicio/react'


function App() {
  // const  [document] = useFirstPrismicDocument()
  const  [projectsSection] = usePrismicDocumentByUID('projects','projects')
  return (
    <div className="App">
    {projectsSection && (   
      <div>
      <h1>
        {projectsSection.data.projects_title[0].text}
      </h1>
      <div>
        {projectsSection.data.repeatable_project[0].project_title[0].text}
      </div>
        {projectsSection.data.repeatable_project[0].project_description[0].text}
      </div>
    )}
    {console.log(
      projectsSection  
    )}
    </div>
  );
}

export default App;
