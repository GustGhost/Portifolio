import { MainContainer } from './Styled';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <MainContainer>
      <p>Desenvolvido por © Luis Gustavo | {year}</p>
    </MainContainer>
  );
};
