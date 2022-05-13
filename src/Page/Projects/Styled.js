import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 5vh;
  text-align: center;
  color: #9f30b0;
  font-family: 'eurostile', sans-serif;
  text-shadow: 1px 1px 1px black;
`;

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  text-shadow: none;
  margin: 0 30vw;
`;

export const ProjectDiv = styled.div`
  border: 2px #9f30b0 solid;
  margin: 5vh 0;
  box-shadow: 3px 3px 15px black;
  border-radius: 3px;

  :hover {
    background-color: #9f30b0;
    color: white;
    box-shadow: 3px 3px 15px #9f30b0;
    transition: 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  @media only screen and (max-width: 600px) {
    height: 35vh;
    width: 70vw;
    margin-left: -15vw;
  }
`;
