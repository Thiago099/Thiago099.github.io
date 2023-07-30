import './layout.css'
import "./style.css"

import "@fortawesome/fontawesome-free/css/all.min.css"


import Project from "./pages/project.jsx"

var container = 
<div class="container">
    <div class="header"><i class="fa-solid fa-diagram-project"></i>&nbsp;Thiago Kaique</div>
    <div class="main"><Project/></div>
</div>

container.$parent(document.body)
