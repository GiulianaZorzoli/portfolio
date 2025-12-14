import React, { useState, lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Name from './Name'

const AboutMe = lazy(() => import('./AboutMe'))
const Experience = lazy(() => import('./Experience'))
const Projects = lazy(() => import('./Projects'))
const Skills = lazy(() => import('./Skills'))
const Formations = lazy(() => import('./Formations'))
const ContactMe = lazy(() => import('./ContactMe'))
const Footer = lazy(() => import('./Footer'))

const LoadingSpinner = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        color: 'var(--accent-color)'
    }}>
        <div style={{
            fontSize: '2rem',
            animation: 'spin 1s linear infinite'
        }}>⏳</div>
    </div>
)

export const App = () => {
    const [lang, setLang] = useState(true);

    const onChangeLang = () => {
        setLang(!lang);
    }

    return (
        <>
            <Navbar lang={lang} changeLang={onChangeLang} />
            <Name lang={lang} />
            <Suspense fallback={<LoadingSpinner />}>
                <AboutMe lang={lang} />
                <Experience lang={lang} />
                <Projects lang={lang} />
                <Skills lang={lang} />
                <Formations lang={lang} />
                <ContactMe lang={lang} />
                <Footer lang={lang} />
            </Suspense>
        </>
    )
}

export default App;
