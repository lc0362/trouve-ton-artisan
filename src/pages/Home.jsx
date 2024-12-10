import React from 'react';
import './Home.css';
import { VscDash } from "react-icons/vsc";
import artisansData from "../components/data/datas.json";
import departementsData from "../components/data/departements.json";
import Rating from '../components/Rating';

function Home() {
    // Récupérer les artisans en valeur top dans propriété true
    const topArtisans = artisansData.filter((artisan) => artisan.top);

    return (
        <>
            <div className='container-blue'>
                <div className='contain-blue'>
               
                    <h1 className='h1-home text-center'>Comment trouver mon artisan ?</h1>
                    <div className='list'>
                        <p>
                            <b className='list-number'>1</b> Choisir la catégorie d'artisanat dans le menu.
                        </p>
                        <p>
                            <b className='list-number'>2</b> Choisir un artisan.
                        </p>
                        <p>
                            <b className='list-number'>3</b> Le contacter via le formulaire de contact.
                        </p>
                        <p>
                            <b className='list-number'>4</b> Une réponse sera apportée sous 48h.
                        </p>
                    </div>
                
                </div>
                <div className="arrondi">
                    <img src="/bulle-haut.png" alt="Bulle d'information" />
                </div>
            </div>
           
            <div className='artisans-mois'>
                <div className="main-container">
                    <div className='dash-title'>
                    <div className='dash'>
                    <VscDash />
                </div>

                <h1 className='h1-home h1-secondary'>Artisans du mois</h1>
                </div>

                {/* Affichage des artisans */}
                <div className="artisans-grid">
                    {topArtisans.map((artisan) => {
                        // Chercher le département pour chaque artisan
                        const departement = departementsData[artisan.location];

                        return (
                            <div key={artisan.id} className="artisan-card">
                                <h2>{artisan.name}</h2>
                                <p className="rate"><strong>{artisan.note} </strong><Rating note={artisan.note} /></p>
                                <p><strong>{artisan.specialty}</strong>. {artisan.about}</p>
                                <p>
                                <strong>{artisan.location}</strong>
                                    {departement && ` (${departement})`} {/* Si le département n'est pas précisé, vide */}
                                </p>
                                <i className="bi bi-arrow-right-short arrow"></i>
                            </div>
                        );
                    })}
                </div>


    <div className='button-home'>
        <button> Tous les artisans </button>    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
