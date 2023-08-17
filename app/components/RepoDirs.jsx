import Link from 'next/link'

async function fetchRepoContents  (name) {

    const res = await fetch(`https://api.github.com/repos/BrianSerem/${name}/contents`)
    return await res.json()
}
const RepoDirs = async ({ name }) => {

    const content = await fetchRepoContents(name);
    const dirs = content.filter((content) => content.type === 'dir');

    return (
        <>
            <h3> Directories </h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`} > {dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs
