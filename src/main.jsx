import "./style.css"
import { GetData } from "./lib/getData"
import "@fortawesome/fontawesome-free/css/all.min.css"
var main = 
<div>
</div>

main.$parent(document.body)

function print({Name, Page, Source, Image, Description}) {
    main.$child(
    <div class="content">
        <div class="title">{Name}</div>
        <img src={Image}/>
        <div>
            {Description}
        </div>
        <div class="col">
            <a href={Page}> <i class="fa-solid fa-link"></i> Link</a> 
            <a href={Source}><i class="fa-solid fa-file-lines"></i> Source</a>
        </div>

    </div>
    )
    return { print }
}

GetData()
.then(({Projects})=>{
    for(const project of Projects)
    {
        print(project)
    }
})
