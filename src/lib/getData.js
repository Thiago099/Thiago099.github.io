export { GetData, GetSignle }

async function GetData()
{
    const Projects = await fetch(window.location.origin+"/projects.json").then(x => x.json())
    return { Projects }
}
async function GetSignle(name)
{
    return (await fetch(window.location.origin+"/projects.json").then(x => x.json())).find(x=>x.Slug == name)
}