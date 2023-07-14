import "./style.css"
import { GetData } from "./lib/getData"
import "@fortawesome/fontawesome-free/css/all.min.css"

import { useTimeline } from "./components/timeline"

var main = 
<div  class="content">
</div>

main.$parent(document.body)

const { addProject, addTitle } = useTimeline(main)


GetData()
.then(({Projects})=>{
    for(const project of Projects)
    {
        if(project.Title)
        {
            addTitle(project)
            continue
        }
        addProject(project)
    }
})
