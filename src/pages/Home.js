import React, { useState } from 'react';
import '../styles/Home.css';
import MonitoringDashboard from './MonitoringDashboard';
import oceanImage from '../assets/pexels-cherry-jiang-2375680-4021165.jpg';
import { MdManageAccounts } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GiBigWave } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  
  return (
    <div className='home-container'>
        <section id='home-fisrt'>
            <div className='introduction-container'>
                <h1 className='introduction-title'>OceanTitan: <span className='title-emphasis'>Sustentabilidade Marinha</span></h1>
                <p className='introduction-text'>Bem-vindo ao OceanTitan, sua plataforma dedicada à preservação do meio ambiente marinho. 
                    Explore nossos recursos para proteger o meio ambiente marinho. Junte-se a nós em direção a um futuro sustentável.   
                </p>

                <a href='/dashboard'><button id='btn-dashboard'>Dashboard</button></a>
            </div>

            <img src={oceanImage} alt="Ocean"/>
        </section>

        <section id='home-second'>
            <h2>O que oferecemos</h2>
            <div className='home-benefits'>
                <div className='benefit'>
                    <div className='icon'><MdManageAccounts /></div>
                    <h3>Monitoramento</h3>
                    <p>Acompanhe a saúde dos ecossistemas marinhos em tempo real, permitindo respostas rápidas a ameaças e alterações ambientais.</p>
                    <button>Ver mais</button>
                </div>
                <div className='benefit'>
                    <div className='icon'><FaDatabase /></div>
                    <h3>Análise de Dados Avançada</h3>
                    <p>Utilize análises avançadas de dados para identificar padrões e tendências, ajudando a prever e mitigar problemas ambientais.</p>
                    <button>Ver mais</button>                
                </div>
                <div className='benefit'>
                    <div className='icon'><BiSolidReport /></div>
                    <h3>Relatórios Personalizados</h3>
                    <p>Gere relatórios detalhados e personalizados para diferentes stakeholders, facilitando a comunicação e a tomada de decisões.</p>
                    <button>Ver mais</button>
                </div>
                <div className='benefit'>
                    <div className='icon'><GiBigWave /></div>
                    <h3>Sustentabilidade e Preservação</h3>
                    <p>Promova práticas sustentáveis e ajude a preservar os ecossistemas marinhos para as futuras gerações.</p>
                    <button>Ver mais</button>
                </div>
            </div>
        </section>
        <footer>
            <div className='footer-logo'>
                <h1>© 2024 OceanTitan.</h1>
                <p>Junte-se a nós na missão de proteger nossos oceanos. Siga-nos nas redes sociais para atualizações e participe de nossas iniciativas 
                    para um futuro marinho mais sustentável.</p>
            </div>

            <div className='links-footer'>
                <h3>Links</h3>
                <a href='#home-first'>Home</a>
                <a href='#home-second'>Benefícios</a>
                <a href='#home-'></a>
            </div>

            <div className='footer-social-media'>
                <h3>Redes sociais</h3>
                <div>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaFacebook /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaLinkedin /></a>
                </div>
            </div>
        </footer>

    </div>
  );
};

export default Home;