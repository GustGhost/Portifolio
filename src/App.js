import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { AboutMe } from './Page/AboutMe/AboutMe';
import { Contact } from './Page/Contact/Contact';
import { Projects } from './Page/Projects/Projects';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
