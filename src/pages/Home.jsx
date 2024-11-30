import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (

<div className='container-blue'>
    <h1 className='h1-home'>Comment trouver mon artisan ?</h1>
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

    )}

export default Home;