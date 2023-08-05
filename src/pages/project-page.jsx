import { GetSignle } from "../lib/getData"

export default Project
async function Project({name})
{
    const project = await GetSignle(name)
    console.log(project)
    return <div>{JSON.stringify(project)}</div>
}