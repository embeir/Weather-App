import React, { useState } from 'react';
import classes from './Onama.module.css'
import Navbar from './Navbar';


const api = {
    key: '6d5e9e1542e19bb9876a1c0c5e3cd06c',
    base: 'https://api.openweathermap.org/data/2.5/'
}



const Pocetna = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');

    const search = event => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(res => {
                    setQuery('')
                    setWeather(res);
                })
        }
    }


    const dateBuilder = (d) => {
        let mjeseci = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "August",
            "Septembar", "Oktobar", "Novembar", "Decembar"];
        let dani = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"]


        let dan = dani[d.getDay()];
        let date = d.getDate();
        let mjesec = mjeseci[d.getMonth()]
        let godina = d.getFullYear();

        return `${dan} ${date} ${mjesec} ${godina}`
    }



    return (
        <div>
            <Navbar className={classes.NavigationItems} />
            <p className={classes.Pocetna} >
                Dobrodošli na našu drugu web aplikaciju
            </p>
            <input
                type="text"
                placeholder="Kucaj..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search} />
            {(typeof weather.main != 'undefined') ? (
                <div>
                    <div className={classes.LokVrj}>
                        <div className={classes.Lokacija} >{weather.name}, {weather.sys.country}</div>
                        <div className={classes.Vrijeme} >{dateBuilder(new Date())}</div>
                    </div>
                    <div>
                        <div className={classes.Temperatura} >
                            {Math.round(weather.main.temp)}°C
                        </div>
                        <div className={classes.Weather} >{weather.weather[0].main}</div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default Pocetna;