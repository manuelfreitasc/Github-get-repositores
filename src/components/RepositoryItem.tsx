import React from 'react';

// import { Container } from './styles';

function RepositoryItem(props: any){
  return (
            <li>
               
                <div>
                    <strong>{props.repository.name ?? 'Default'}</strong>
                    <p>{props.repository.description}</p>
                </div>
               
                <a href={props.repository.html_url}>Acessar repositório</a>
            </li>
    );
}

export default RepositoryItem;