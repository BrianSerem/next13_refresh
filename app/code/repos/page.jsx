import Link from 'next/link';
import React from 'react'
import { FaEye, FaStar, FaCodeBranch } from 'react-icons/fa'

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/BrianSerem/repos', {
        next : {
            revalidate: 60
        }
    })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return await response.json();

}

const CodePage = async () => {

    const repos = await fetchRepos()
    return (
        <div className='repos-container'>
            <h1> These are your repos</h1>
            <ul className='repo-list'>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3> {repo.name}</h3>
                            <p> {repo.description ? repo.description : 'this repository has no description. Please ask Brian to write something'}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default CodePage
