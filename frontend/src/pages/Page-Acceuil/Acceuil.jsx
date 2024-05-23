import React, { useEffect } from 'react';
import '../../App.css';
// import DONAT from '/DONAT.png'
// import homevideo1 from '/homevideo1.mp4'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'; // Importer le hook useNavigate

function Accueil() {
  const navigate = useNavigate(); // Initialiser le hook useNavigate

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fas', 'fa-bars');
    menuToggle.appendChild(menuIcon);

    const nav = document.querySelector('nav');
    nav.appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
    });

    return () => {
      menuToggle.removeEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
      });
    };
  }, []);

  const handleBanqueDeSangClick = () => {
    navigate('/login'); // Naviguer vers la route /login
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
          {/* <img src={DONAT} className="logo" alt="DONATE" /> */}

          </div>
          <div className="nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/pourquoi-donner">Pourquoi donner</Link>
            <Link to="/trouver-un-lieu">Trouver un lieu</Link>
           
          </div>
          <ButtonGroup variant='outline' spacing='6'>
            <Button
              colorScheme='blue'
              fontSize={'lg'}
              width={'150px'}
              onClick={handleBanqueDeSangClick}
            >
              banque de sang
            </Button>
          </ButtonGroup>

        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          {/* <video autoPlay muted loop id="hero-video">
            <source src={homevideo1} type="video/mp4" />
          </video> */}
          <div className="hero-content">
            <h1>Donnez du sang, sauvez des vies</h1>
            <p>Rejoignez les millions de donneurs de sang et faites une différence aujourd'hui.</p>
            <Link to="/trouver-un-lieu" className="btn">Trouver un lieu de don</Link>
          </div>
        </section>

        <section className="campaign">
          <div className="campaign-content">
            <h2>DONATEURS NÉCESSAIRES MAINTENANT</h2>
            <p>Obtenez une cadeau électronique de 5000 FCFA en prime de votre choix lorsque vous venez donner du sang d'ici le 19 mai.*</p>
            <Link to="/trouver-un-lieu" className="campaign-btn">Trouver un lieu de don</Link>
            <p className="campaign-details">**Des conditions s'appliquent. Visitez le politique de cadeau carte bleu pour plus de détails..</p>
          </div>
        </section>

        <section className="content">
          <h2 className="section-title">Pourquoi donner</h2>
          <div className="section-content">
            <div className="feature">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Sauver des vies</h3>
              <p>Chaque don de sang peut sauver jusqu'à trois vies. Votre don compte.</p>
            </div>
            <div className="feature">
              <i className="fas fa-user-friends"></i>
              <h3>Aider votre communauté</h3>
              <p>En donnant du sang, vous aidez les patients de votre région.</p>
            </div>
            <div className="feature">
              <i className="fas fa-heartbeat"></i>
              <h3>Rester en bonne santé</h3>
              <p>Le don de sang est sûr et peut même vous aider à rester en bonne santé.</p>
            </div>
          </div>
        </section>

        <section className="content">
          <h2 className="section-title">Types de dons</h2>
          <div className="section-content">
            <div className="feature">
              <i className="fas fa-tint"></i>
              <h3>Don de sang total</h3>
              <p>Le don de sang total est le type de don le plus courant.</p>
            </div>
            <div className="feature">
              <i className="fas fa-droplet"></i>
              <h3>Don de plasma</h3>
              <p>Le plasma est utilisé pour traiter des troubles sanguins et des brûlures graves.</p>
            </div>
            <div className="feature">
              <i className="fas fa-pills"></i>
              <h3>Don de plaquettes</h3>
              <p>Les plaquettes sont essentielles pour les patients atteints de cancer ou de troubles sanguins.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>À propos</h4>
            <ul>
              <li><Link to="/notre-mission">Notre mission</Link></li>
              <li><Link to="/nous-contacter">Nous contacter</Link></li>
              <li><Link to="/carrieres">Carrières</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ressources</h4>
            <ul>
              <li><Link to="/eligibilite-au-don">Éligibilité au don</Link></li>
              <li><Link to="/processus-de-don">Processus de don</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Autres liens</h4>
            <ul>
              <li><Link to="/benevoles">Bénévoles</Link></li>
              <li><Link to="/partenaires">Partenaires</Link></li>
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/evenements">Événements</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; youssouf ibrahim</p>
        </div>
      </footer>
    </div>
  );
}

export default Accueil;
