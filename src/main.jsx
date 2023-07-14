import './layout.css'
import "./style.css"

import "@fortawesome/fontawesome-free/css/all.min.css"


import { Router } from "magic-dom/components/router.jsx"

const router = Router({
    "/": () => import("./pages/project.jsx"),
    "about": () => import("./pages/about.jsx"),
    // "route2": () => import("path/to/page2.jsx")
    // "person/{id}": () => import("path/to/page3.jsx")
    "404": () => import("./pages/404.jsx"),
    "loading": <div class="message">Loading...</div>
})// main route if there is no / route

function go(path)
{
    router.navigate(path)
}

var container = 
<div class="container">
    <div class="header"><i class="fa-solid fa-diagram-project"></i>&nbsp;Thiago Kaique | {Captalize(router.getPath())}</div>
    <div class="main">{router.container}</div>
    <div class="menu">
        {/* <button class="menu-item" on:click={()=>go("projects")}>Projects</button>
        <button class="menu-item" on:click={()=>go("about")}>About</button> */}
    </div>
</div>

container.$parent(document.body)

function Captalize(str)
{
    return str.replace(/\b\w/g, l => l.toUpperCase())
}