import './assets/timeline.css'
export { useTimeline }
function useTimeline(container)
{
    var main = 
    <div  class="timeline">
    </div>

    main.$parent(container)

    function addProject({Name, Page = null, Source = null, Docs = null, Image, Description}) {
        main.$child(
        <div class="box">
            <div class="title">{Name}</div>
            <img class="cover" src={Image}/>
            <div class="description">
                {Description}
            </div>
            <div class="col">
                <a class="button" href={Docs}><i class="fa-solid fa-file-lines"></i> Docs</a>
                {Page != null? <a class="button"  href={Page}><i class="fa-solid fa-link"></i> Link</a>:""}
                <a class="button" href={Source}><i class="fa-solid fa-folder"></i> Source</a>
            </div>
    
        </div>
        )
    }
    function addTitle({Title})
    {
        main.$child(
            <div class="heading">
                {Title}
            </div>
        )
    }
    return { addProject, addTitle }
}
