import { useState, useEffect } from "react";
import  '../styles/repositories.scss';

import RepositoryItem from './RepositoryItem';
type Props = {
  name: string,
  description: string,
  html_url: string
}
function RepositoryList(){
  const [repositories, setRepositories] = useState([])

 

  useEffect(() =>{
    fetch("https://api.github.com/orgs/rocketseat/repos")
     .then(response => response.json())
     .then(data => setRepositories(data))
  },[]);

  return (
    <div className="container">
      
      <section className='repository-list'>
        <h1>Lista de Repositórios</h1>
        <ul>
          {
            repositories.map(repository =>( <RepositoryItem key={repository.name} repository={repository}  />))
          }
        </ul>
      </section>
    </div>
      
  );
}

export default RepositoryList;