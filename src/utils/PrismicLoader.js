import {usePrismicDocumentByUID} from '@prismicio/react';
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

    const linksState = useSelector((state)=>state.Links.value)
    const menuDataState = useSelector((state)=>state.MenuData.value)
    const mySkillsState = useSelector((state)=>state.mySkills.value)
    const cvState = useSelector((state)=>state.CV.value)
    const introductionState = useSelector((state)=>state.Introduction.value)
    const projectsState = useSelector((state)=>state.Projects.value)
    const soonState = useSelector((state)=>state.Soon.value)
    console.log(linksState)
}

export default PrismicLoader