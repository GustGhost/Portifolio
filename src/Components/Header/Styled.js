import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #62b6cb; */
`;

export const A = styled.a`
  text-decoration: none;
  margin: 1vh 3vw 1vh 3vw;
  padding: 2vh 1vw 1vh 1vw;
  text-align: center;
  font-size: 3vh;

  :link {
    color: black;
  }

  :visited {
    color: black;
  }

  :hover {
    transition: 0.5s;
    color: #9f30b0;
  }
`;

export const P = styled.p`
  font-size: 3vh;
  font-weight: bolder;
  margin-top: 1vh;
  padding-top: 2vh;
`;
