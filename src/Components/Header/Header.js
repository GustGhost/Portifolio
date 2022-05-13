import { A, MainContainer, P } from './Styled';

export const Header = () => {
  return (
    <MainContainer>
      <A href='#about'>Sobre mim</A>
      <P>|</P>
      <A href='#projects'>Projetos</A>
      <P>|</P>
      <A href='#contact'>Contato</A>
    </MainContainer>
  );
};
