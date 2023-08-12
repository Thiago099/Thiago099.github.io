import "./assets/project-page.scoped.css"
import { GetSignle } from "../lib/getData"

export default Project
async function Project({name})
{
    const project = await GetSignle(name)
    return (
    <div scope="project-page">
        <div grid-area="img"><img src={project.Image} /></div>
        <div grid-area="description">{JSON.stringify(project)}</div>
        <div grid-area="links">a</div>
        
    </div>)
}