import { useState } from 'react'

export default function Home(){
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Personal-Website-V2/MadhavMalladi_Resume.pdf';
        link.download = 'MadhavMalladi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
            <p className="Name">Madhav Malladi</p>
            <img src="/Personal-Website-V2/Madhav.jpeg" alt="Profile" className="pfp"/>
            <p className="bio0">Hello!</p>
            <p className="bio1">I am a Computer Science and Data Science student at Rutgers University-New Brunswick</p>
            <p className="bio2">Looking to gain experience in back-end development, ML/AI, and data science/engineering</p>

            <p className="skillsHeader">Top Skills</p>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/Java.png" alt="Java" className="Java"/>
                <p className="skillLabel">Java</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/Python.png" alt="Python" className="Python"/>
                <p className="skillLabel">Python</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/Pandas.png" alt="Pandas" className="Pandas"/>
                <p className="skillLabel">Pandas</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/SpringBoot.png" alt="Spring Boot" className="SpringBoot"/>
                <p className="skillLabel">Spring Boot</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/PostgreSQL.png" alt="PostgreSQL" className="PostgreSQL"/>
                <p className="skillLabel">PostgreSQL</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/React.png" alt="React" className="React"/>
                <p className="skillLabel">React</p>
            </div>
            <div className="skillContainer">
                <img src="/Personal-Website-V2/TensorFlow.png" alt="TensorFlow" className="Tensorflow"/>
                <p className="skillLabel">TensorFlow</p>
            </div>
            <div className="resumeButton">
                <button onClick={handleResumeDownload}>Download Resume</button>
            </div>
        </div>
    )
}
