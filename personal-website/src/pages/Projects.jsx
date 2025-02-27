export default function Projects() {
    return (
        <div>
            <h1 className="Name">Projects</h1>
            <div className="projectsSection">
                <h2 className="projectsType">Recent Projects</h2>
                <div className="projectsContent">

                    <div className="projectBox">
                        <div className="projectImage">
                            <img src="/Personal-Website-V2/Stock.png" alt="Crypto Prediction" />
                        </div>
                        <div className="projectDetails">
                            <h3 className="projectTitle">Full-Stack Stock Prediction Application</h3>
                            <p className="projectDuration">February 2025 - Present</p>
                            <div className="projectInfo">
                                <div className="description">
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Creating a web application that predicts future stock prices for a user-selected company</li>
                                        <li>Flask for the backend, TensorFlow for machine learning, React.js for the frontend</li>
                                        <li>Plan to host using AWS</li>
                                    </ul>
                                </div>
                                <div className="skills">
                                    <h4>Skills/Tools</h4>
                                    <ul>
                                        <li>Python</li>
                                        <li>Flask</li>
                                        <li>Pandas</li>
                                        <li>Machine Learning (TensorFlow)</li>
                                        <li>React.js</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="projectLinks">
                                <a href="https://github.com/madhavmalladi/Stock-Predictor" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectImage">
                            <img src="/Personal-Website-V2/Music.png" alt="Music Wordle" />
                        </div>
                        <div className="projectDetails">
                            <h3 className="projectTitle">Music Wordle</h3>
                            <p className="projectDuration">November 2024 - December 2024</p>
                            <div className="projectInfo">
                                <div className="description">
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Developed a Wordle-style guessing game in which the user attempts to guess a randomized Spotify top-artist</li>
                                    </ul>
                                </div>
                                <div className="skills">
                                    <h4>Skills/Tools</h4>
                                    <ul>
                                        <li>React.js</li>
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="projectLinks">
                                <a href="https://github.com/madhavmalladi/Music-Wordle-Game" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://madhavmalladi.github.io/Music-Wordle-Game/" target="_blank" rel="noopener noreferrer">Game</a>
                            </div>
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectImage">
                            <img src="/Personal-Website-V2/NBA.png" alt="All-NBA Teams Prediction" />
                        </div>
                        <div className="projectDetails">
                            <h3 className="projectTitle">ReLU Activation Function to Predict All-NBA Teams</h3>
                            <p className="projectDuration">July 2024</p>
                            <div className="projectInfo">
                                <div className="description">
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Coded a ReLU activation function to predict whether or not a player made the All-NBA team in a given season</li>
                                        <li>Utilized an NBA API to gather data from every player in that season</li>
                                        <li>Achieved 98.94% Test Accuracy</li>
                                    </ul>
                                </div>
                                <div className="skills">
                                    <h4>Skills/Tools</h4>
                                    <ul>
                                        <li>Python (NumPy, Pandas, Matplotlib)</li>
                                        <li>Machine Learning (TensorFlow, Sklearn)</li>
                                        <li>Jupyter Notebook</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="projectLinks">
                                <a href="https://github.com/madhavmalladi/All-NBA-Team-Prediction-Model" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://medium.com/@madhav.malladi25/relu-function-predicts-all-nba-teams-with-98-94-accuracy-ba296c133c1f" target="_blank" rel="noopener noreferrer">Medium Article</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}