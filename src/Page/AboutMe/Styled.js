import styled from 'styled-components';

export const MainContainer = styled.div``;

export const Photo = styled.img`
  height: 25vh;
  border-radius: 50%;
  margin-left: 45%;
  margin-top: 5%;

  @media only screen and (max-width: 600px) {
    margin-left: 25%;
  }
`;

export const Presentation = styled.h1`
  font-family: 'eurostile', sans-serif;
  background-color: #9f30b0;
  text-align: center;
  color: white;
  padding-top: 3vh;
  margin-left: -0.7vw;
  margin-right: -0.5vw;
  text-shadow: 1px 1px 3px black;
`;

export const PresentationText = styled.p`
  font-family: 'europa', sans-serif;
  background-color: #9f30b0;
  text-align: center;
  color: white;
  margin-top: -3vh;
  margin-left: -0.7vw;
  margin-right: -0.5vw;
  padding: 10vh 23vw 20vh;
  font-size: 3vh;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  box-shadow: 3px 3px 20px black;
  margin: -10vh 10vw 0 10vw;
  border-radius: 2%;
  max-width: 78vw;

  @media only screen and (max-width: 600px) {
    margin: -10vh 10vw 0 1vw;
    padding-right: 15vw;
    width: 100vw;
  }
`;

export const TerciaryContainer = styled.div`
  border-right: 1px solid grey;
  padding: 0 1vw;
`;

export const Title = styled.h2`
  font-family: 'eurostile', sans-serif;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 3px black;
`;

export const TextDiv = styled.div`
  font-family: 'europa', sans-serif;
  text-align: center;
  margin-right: 10px;
`;

export const Text = styled.p`
  width: 23.5vw;
`;

export const Highlight = styled.p`
  color: #9f30b0;
  font-weight: 700;
`;
