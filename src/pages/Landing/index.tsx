import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import teachIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api';

function Landing() {
    const [totalConnectnions, SetTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
          const {total} = response.data  

          SetTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="plataforma de estudo"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={teachIcon} alt="Dar aula"/>
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnectnions} conexões já realizadas <img src={purpleHeartIcon} alt="Coracao roxo"/>
                </span>
            </div>
        </div>
    )
    
}

export default Landing;