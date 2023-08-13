import "./assets/project-page.scoped.css"
import { GetSignle } from "../lib/getData"

export default Project
async function Project({name})
{
    const project = await GetSignle(name)
    const description = ref()
    const result =
    <div scope="project-page">
        <div grid-area="img">{(project.Image.endsWith(".mp4")?<video src={project.Image} controls/>:<img src={project.Image} />)}</div>
        <div grid-area="description" ref={description}></div>
        <div grid-area="links" class="link-container">
            <a class="button" href={project.Docs}><i class="fa-solid fa-file-lines"></i> Docs</a>
            <a if={project.Page} class="button" href={project.Page}><i class="fa-solid fa-link"></i> Link</a>
            <a class="button" href={project.Source}><i class="fa-solid fa-folder"></i> Source</a>
        </div>
        
    </div>
    description.innerHTML = await fetch(window.location.origin+"/project-description/"+name+".html").then(x=>x.text())

    return result
}