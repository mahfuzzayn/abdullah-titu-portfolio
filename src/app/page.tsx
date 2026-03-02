import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Education from './_components/Education';
import Skills from './_components/Skills';
import Projects from './_components/ProjectsMain';
import Experience from './_components/Experience';
import ContactMe from './_components/ContactMe';

export default function Home() {
    return (
        <div className="initial-page">
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <ContactMe />
        </div>
    );
}
