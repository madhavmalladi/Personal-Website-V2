export default function Education(){
    return (
        <div>
            <h1 className="Name">Education</h1>
            <div className="educationSection">
                <h2 className="educationType">Current</h2>
                <div className="educationContent">
                    <div className="educationBox">
                        <div className="schoolImage">
                            <img src="/Personal-Website-V2/Rutgers.png" alt="Rutgers University" />
                        </div>
                        <div className="educationDetails">
                            <h3 className="schoolName">Rutgers University-New Brunswick</h3>
                            <p className="degreeType">Bachelor of Science (B.S.) in Computer Science and Data Science</p>
                            <p className="expectedGraduation">Expected Graduation: May 2027 (Freshman with Sophomore standing)</p>
                            <div className="educationInfo">
                                <div className="coursework">
                                    <h4>Relevant Coursework</h4>
                                    <ul>
                                        <li>Principles of Computer Science (Grade: A)</li>
                                        <li>Data Structures (Grade: A)</li>
                                        <li>Computer Architecture (in-progress)</li>
                                        <li>Discrete Structures (in-progress)</li>
                                    </ul>
                                </div>
                                <div className="activities">
                                    <h4>Activities</h4>
                                    <ul>
                                        <li>Rutgers USACS</li>
                                        <li>Data Science Club</li>
                                        <li>HackRU Participant</li>
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