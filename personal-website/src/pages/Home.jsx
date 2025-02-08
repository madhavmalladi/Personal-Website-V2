import { useState } from 'react'

export default function Home(){
    return (
        <div>
            <p className = "Hello">Madhav Malladi</p>
            <img src="Madhav.jpeg" alt="vite.svg" className = "pfp"/>
            <p className="bio0">Hello!</p>
            <p className="bio1">I am a Computer Science and Data Science student at Rutgers University-New Brunswick</p>
            <p className="bio2">Looking to gain experience in back-end development, ML/AI, and data science/engineering</p>

            <p className = "skillsHeader">Top Skills</p>
            <img src="Java.png" alt="Java" className="Java"/>
            <img src="Python.png" alt="Python" className="Python"/>
            <img src="Flask.png" alt="Flask" className="Flask"/>
            <img src="PostgreSQL.png" alt="PostgreSQL" className="PostgreSQL"/>
            <img src="Pandas.png" alt="Pandas" className="Pandas"/>
            <img src="React.png" alt="React" className="React"/>
            <img src="TensorFlow.png" alt="TensorFlow" className="Tensorflow"/>
        </div>
    )
}
