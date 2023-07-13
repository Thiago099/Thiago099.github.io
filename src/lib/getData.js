export { GetData }

async function GetData()
{
    const Projects = await fetch("projects.json").then(x => x.json())
    return { Projects }
}