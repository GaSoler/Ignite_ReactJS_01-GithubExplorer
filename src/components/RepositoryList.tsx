import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {/* 1° forma */}
                {repositories.map(repository => {
                   return <RepositoryItem key={repository.name} repository={repository} />
                })}
                {/* 2° forma 
                    {repositories.map(repository => {
                        <RepositoryItem repository={repository} />
                    })}
                */}
                {/* 3° forma 
                    {repositories.map(repository => <RepositoryItem repository={repository} />)}
                */}
            </ul>
        </section>
    );
}