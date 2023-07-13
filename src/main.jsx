import "./style.css"
import { GetData } from "./lib/getData"
import "@fortawesome/fontawesome-free/css/all.min.css"
var main = 
<div  class="content">
</div>

main.$parent(document.body)

function print({Name, Page = null, Source = null, Docs = null, Image, Description}) {
    main.$child(
    <div class="box">
        <div class="title">{Name}</div>
        <img src={Image}/>
        <div class="description">
            {Description}
        </div>
        <div class="col">
            <a href={Docs}><i class="fa-solid fa-file-lines"></i> Docs</a>
            {Page != null? <a href={Page}><i class="fa-solid fa-link"></i> Link</a>:""}
            <a href={Source}><i class="fa-solid fa-folder"></i> Source</a>
        </div>

    </div>
    )
    return { print }
}

function title({Title})
{
    main.$child(
        <div class="heading">
            {Title}
        </div>
    )
}

GetData()
.then(({Projects})=>{
    for(const project of Projects)
    {
        if(project.Title)
        {
            title(project)
            continue
        }
        print(project)
    }
})
