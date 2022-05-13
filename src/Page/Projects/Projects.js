import { MainContainer, ProjectDiv, ProjectsDiv } from './Styled';

export const Projects = () => {
  return (
    <MainContainer>
      <h1 id='projects'>Projetos</h1>
      <ProjectsDiv>
        <ProjectDiv
          onClick={() => {
            window.open('http://case-luis.surge.sh');
          }}
        >
          <h2>Movie Database</h2>
          <p>
            Esse projeto foi feito visando replicar a interface de um site com
            informações sobre filmes recém ,ou que ainda serão, lançados no
            cinema, usando a API de filmes gratuita themoviedb em sua versão 3.
            Foi um projeto desafiador que me ensinou muitas coisas e me ajudou a
            entender melhor APIs mais complexas e seus endpoints.
          </p>
        </ProjectDiv>
        <ProjectDiv
          onClick={() => {
            window.open('https://luis-carver-labeddit.surge.sh');
          }}
        >
          <h2>Reddit</h2>
          <p>
            Esse projeto foi um pouco mais simples, onde o objetivo era utilizar
            a API fornecida pela Labenu, e criar uma cópia do site Reddit. Foi
            um porjeto que me ensinou como lidar com login e proteção de telas e
            me ensinou muito sobre como dados sensíveis devem ser tratados.
          </p>
        </ProjectDiv>
        <ProjectDiv
          onClick={() => {
            window.open('https://pokedex-carver-5.surge.sh');
          }}
        >
          <h2>Pokédex</h2>
          <p>
            Esse projeto foi feito em grupo, onde o objetivo foi em criar uma
            pokédex simples, onde era possível adicionar um pokémon à um time,
            ver detalhes do pokémon. Apesar de ter sido um projeto que muita
            coisa pode ser feita é um projeto que gosto de ter feito e
            atualmente estou trabalhando em uma versão melhorada e voltada para
            mobile.
          </p>
        </ProjectDiv>
      </ProjectsDiv>
    </MainContainer>
  );
};
