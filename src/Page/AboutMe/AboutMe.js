import {
  Highlight,
  MainContainer,
  Photo,
  Presentation,
  PresentationText,
  SecondaryContainer,
  TerciaryContainer,
  Text,
  TextDiv,
  Title,
} from './Styled';
import MinhaImagem from '../../Components/Images/MinhaImagem.jpeg';

export const AboutMe = () => {
  return (
    <MainContainer>
      <div>
        <Photo src={MinhaImagem} alt='foto' id='about' />
      </div>
      <div>
        <Presentation>Olá, sou o Luis. Prazer em conhecê-lo.</Presentation>
        <PresentationText>
          Sou um desenvolvedor web fullstack, com formação pelo bootcamp Labenu,
          onde, além da teoria, tive projetos práticos individuais e em grupo
          diariamente, utilizando tecnologias como Javascript, Html, CSS e
          React.
          <br />
          Atuei como chefe de cozinha, e estou em transição de carreira por ser
          apaixonado por tecnologia e ver ótimas oportunidades na área de
          trabalho que mais cresce no mundo.
        </PresentationText>
        <SecondaryContainer>
          <TerciaryContainer>
            <Title>Frontend</Title>
            <TextDiv>
              <Text>
                Gosto de começar o projeto do zero e ir fazendo tudo conforme o
                design proposto, e gosto de dar vida à ideias de design por meio
                da programação.
              </Text>
              <h3>Linguagens que conheço</h3>
              <Highlight>Html</Highlight>
              <Highlight>CSS</Highlight>
              <Highlight>Javascript</Highlight>
              <h3>Tecnologias que utilizo</h3>
              <Highlight>React</Highlight>
              <Highlight>Git</Highlight>
              <Highlight>GitHub</Highlight>
              <Highlight>Styled Components</Highlight>
              <Highlight>React-Router</Highlight>
              <Highlight>Axios</Highlight>
              <Highlight>Hooks</Highlight>
            </TextDiv>
          </TerciaryContainer>
          <TerciaryContainer>
            <Title>Backend</Title>
            <TextDiv>
              <Text>
                Gosto de começar o projeto do zero e fazer o banco de dados da
                melhor forma possível, facilitando assim o trabalho do frontend
                e de quem for utilizar o meu banco de dados.
              </Text>
              <h3>Linguagens que conheço</h3>
              <Highlight>TypeScript</Highlight>
              <Highlight>MySQL</Highlight>
              <Highlight>NodeJS</Highlight>
              <h3>Tecnologias que utilizo</h3>
              <Highlight>AWS</Highlight>
              <Highlight>Firebase</Highlight>
              <Highlight>Jest</Highlight>
              <Highlight>Cors</Highlight>
              <Highlight>JWT(Json Web Token)</Highlight>
              <Highlight>BcryptJS</Highlight>
              <Highlight>UUID</Highlight>
            </TextDiv>
          </TerciaryContainer>
          <div>
            <Title>Projetos</Title>
            <TextDiv>
              <Text>
                Gosto de trabalhar em projetos que me desafiem como
                desenvolvedor e que me tragam conhecimentos novos. Para saber
                mais sobre meus projetos clique no link do meu GitHub no final
                da página ou clique em um dos meus projetos para conhecer.
              </Text>
              <h3>Quantidade de projetos realizados</h3>
              <h4>Frontend</h4>
              <Highlight>25</Highlight>
              <h4>Backend</h4>
              <Highlight>20</Highlight>
              <h3>Horas dedicadas a projetos e estudos</h3>
              <Highlight>+1100</Highlight>
            </TextDiv>
          </div>
        </SecondaryContainer>
      </div>
    </MainContainer>
  );
};
