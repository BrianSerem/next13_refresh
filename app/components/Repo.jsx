import React from 'react'
import { FaStar, FaEye, FaCodeBranch } from 'react-icons/fa'

const fetchRepo = async (name) => {
    const res = await fetch(`https://api.github.com/repos/BrianSerem/${name}`)
    return res.json()
}

const Repo = async ({ name }) => {

    const noDescriptionMessage = 'this repo has no description, tell Brian to write something'

    const repo = await fetchRepo(name);

    return (
        <>
          <h2> { repo.name }</h2>
          <p> { repo.description ? repo.description : noDescriptionMessage} </p>
          <div className="card-stats">
            <div className="card-stat">
                <FaStar />
                <span> {repo.stargazers_count}</span>
            </div>
            <div className="card-stat">
                <FaEye />
                <span> {repo.watchers_count}</span>
            </div>
            <div className="card-stat">
                <FaCodeBranch />
                <span> {repo.forks_count}</span>
            </div>
          </div>
        </>
    )
}

export default Repo
