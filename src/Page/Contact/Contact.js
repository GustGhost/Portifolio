import {
  Img,
  Linkedin,
  Mail,
  MainContainer,
  SecondaryContainer,
} from './Styled';
import FacebookLogo from '../../Components/Images/facebook-logo.png';
import GithubLogo from '../../Components/Images/github-logo.jpg';
import LinkedinLogo from '../../Components/Images/linkedin-logo.png';
import InstagramLogo from '../../Components/Images/instagram-logo.png';
import MailLogo from '../../Components/Images/mail-logo.png';

export const Contact = () => {
  return (
    <MainContainer>
      <h1 id='contact'>Contato</h1>
      <SecondaryContainer>
        <Img
          src={GithubLogo}
          alt='github'
          onClick={() => {
            window.open('https://github.com/GustGhost');
          }}
        />

        <Linkedin
          src={LinkedinLogo}
          alt='linkedin'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/luis-gustavo-rodrigues-de-paula-727468162/'
            );
          }}
        />

        <Img
          src={FacebookLogo}
          alt='facebook'
          onClick={() => {
            window.open('https://www.facebook.com/luisgustavordp1');
          }}
        />
        <Img
          src={InstagramLogo}
          alt='instagram'
          onClick={() => {
            window.open('https://www.instagram.com/luis.gustavorp/');
          }}
        />
        <Mail
          src={MailLogo}
          alt='email'
          onClick={() => {
            window.open('mailto:luisgustavordp1@gmail.com');
          }}
          title='luisgustavordp1@gmail.com'
        />
      </SecondaryContainer>
    </MainContainer>
  );
};
