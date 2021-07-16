import React from 'react';
import classes from './Onama.module.css'
import Navbar from './Navbar';
const Kontakt = () => {
    return (
        <div>
            <Navbar className={classes.NavigationItems} />
            <p className={classes.Kontakt} >
               061 031 188
            </p>
        </div>
    )
}

export default Kontakt;