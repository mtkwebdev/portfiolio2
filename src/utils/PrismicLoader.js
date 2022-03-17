import {usePrismicDocumentByUID} from '@prismicio/react';
import { Children } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {    
    setLinks,
    setMenuData,
    setmySkills,
    setCV,
    setIntroduction,
    setProjects,
    setSoon} from './PrismicSlice'

function PrismicLoader(){
    const dispatch = useDispatch()
    const [Links] = usePrismicDocumentByUID('links', 'mylinks');
    const [MenuData] = usePrismicDocumentByUID('resultspage','results_page')
    const [mySkills] = usePrismicDocumentByUID('skills', 'skills')
    const [CV] = usePrismicDocumentByUID('cv','cv');
    const [Introduction] = usePrismicDocumentByUID('introduction','introduction_group')
    const [Projects] = usePrismicDocumentByUID('projects','projects')
    const [Soon] = usePrismicDocumentByUID('notfound', 'soon')
    
    dispatch(setLinks(Links))
    dispatch(setMenuData(MenuData))
    dispatch(setmySkills(mySkills))
    dispatch(setCV(CV))
    dispatch(setIntroduction(Introduction))
    dispatch(setProjects(Projects))
    dispatch(setSoon(Soon))

    const linksState = useSelector((state)=>state.PrismicSlice.Links)
    const menuDataState = useSelector((state)=>state.PrismicSlice.MenuData)
    const mySkillsState = useSelector((state)=>state.PrismicSlice.mySkills)
    const cvState = useSelector((state)=>state.PrismicSlice.CV)
    const introductionState = useSelector((state)=>state.PrismicSlice.Introduction)
    const projectsState = useSelector((state)=>state.PrismicSlice.Projects)
    const soonState = useSelector((state)=>state.PrismicSlice.Soon)

    return (
        // <>{console.log(linksState)}</>
        <></>
    )
}

export default PrismicLoader