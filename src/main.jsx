import './layout.css'
import "./style.css"

import "@fortawesome/fontawesome-free/css/all.min.css"

import {Router} from "magic-dom/components/router"

const router = Router({
    "/":() => import("./pages/all.jsx"),
    "project/{name}":() => import("./pages/project-page.jsx")
})

const menu = [
    {
        path: "project/voxel-modeler-2",
        name: "voxel modeler 2"
    },
    {
        path: "project/magic-dom",
        name: "magic dom"
    },
    {
        path: "",
        name: "all"
    }
]

router.navigate(menu[0].path)

function menuLink({name, path})
{
    const result = <div class="menu-link" on:click={()=>{router.navigate(path);container.$update()}}>{name}</div>
    result.$class({"menu-link-active":router.getRoute().path == path})
    return result
}
function extraTitle()
{
    const route = router.getRoute()
    if(route.path != "")
    {
        const name = menu.find(x=>x.path == route.path).name
        return " | " + name
    }
    return ""
}
let container = 
<div class="container">
    <div class="header"><i class="fa-solid fa-diagram-project" style="color:#006199"></i>&nbsp;Thiago Kaique{extraTitle()}</div>
    <div class="main">{router.container}</div>
    <div grid-area="menu">{menu.map(menuLink)}</div>
</div>
container.$parent(document.body)
