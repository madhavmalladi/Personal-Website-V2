export default function Experience(){
    return (
        <div>
            <h1 className="Name">Experience</h1>
            <div className="experienceSection">
                <h2 className="experienceType"> Software-Related Experience</h2>
                <div className="experienceContent">
                    <div className="experienceBox">
                        <div className="experienceImage">
                            <img src="/Personal-Website-V2/FRC.png" alt="FIRST Robotics" />
                        </div>
                        <div className="experienceDetails">
                            <h3 className="experienceTitle">Lead Software Engineer and Team Technician</h3>
                            <p className="experienceRole">FIRST Robotics Team #9125</p>
                            <p className="experienceDuration">September 2022 - April 2024</p>
                            <div className="educationInfo">
                                <div className="coursework">
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Led a team of 7 software engineers</li>
                                        <li>Coded my team's robot using Java object-oriented programming, utilizing numerous libraries including REV Robotics and Limelight cameras. Utilized machine learning algorithms for object detection and camera vision.</li>
                                        <li>In charge of making quick modifications to our code based on the team gameplan</li>
                                        <li>Managed the development of my team's code over a 3-month span</li>
                                        <li>Team Qualified for 2023 World Championships
                                            <ul>
                                                <li>Winners of "Rookie Highest Seed" award</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="activities">
                                    <h4>Skills</h4>
                                    <ul>
                                        <li>Java</li>
                                        <li>Computer Vision</li>
                                        <li>Machine Learning (OpenCV)</li>
                                        <li>Git</li>
                                        <li>Team Leadership</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experienceBox">
                        <div className="experienceImage">
                            <img src="/Personal-Website-V2/Polygence.png" alt="Polygence Research" />
                        </div>
                        <div className="experienceDetails">
                            <h3 className="experienceTitle">Student Researcher</h3>
                            <p className="experienceRole">Polygence</p>
                            <p className="experienceDuration">July 2023 - July 2024</p>
                            <div className="educationInfo">
                                <div className="coursework">
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Completed a machine-learning and statistical analysis research project, researching relevant activation functions</li>
                                        <li>Coded a machine-learning model to predict whether or not a player made the All-NBA team in a given season</li>
                                        <li>98.94% test accuracy</li>
                                    </ul>
                                </div>
                                <div className="activities">
                                    <h4>Skills</h4>
                                    <ul>
                                        <li>Python</li>
                                        <li>Machine Learning (TensorFlow, Scikit-Learn)</li>
                                        <li>Data Science/Analysis</li>
                                        <li>Pandas/NumPy/Matplotlib</li>
                                        <li>Research Methods</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}