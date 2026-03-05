import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Education from './_components/Education';
import Achievements from './_components/Achievements';
import Skills from './_components/Skills';
import Projects from './_components/ProjectsMain';
import Experience from './_components/Experience';
import ContactMe from './_components/ContactMe';
import MissionAndVision from './_components/Mission&Vision';

export default function Home() {
    return (
        <div className="initial-page">
            <Banner />
            <AboutMe />
            <Skills />
            <Achievements />
            <Projects />
            <MissionAndVision />
            <ContactMe />
        </div>
    );
}
