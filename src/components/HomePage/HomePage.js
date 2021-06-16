import React, { useState } from 'react';
// import '../../App.css';
import Navbar from './Elements/Navbar.js';
import Cards from './Elements/Cards.js';
import firebase from 'firebase';

function MainPage() {

    const db = firebase.firestore()
    function timeoutPromise(interval) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve("done");
            }, interval);
        });
    };

    const [text, SetText]=useState([])
    const logCities = async () => {
        let citiesRef = db.collection('users');
        let allCities = await citiesRef.get();
        for(const doc of allCities.docs){
          SetText([...text,doc.data().email]);
        }
      }
      

    // timeTest();
    console.log('next')

    return (
        <>
            <Navbar />
            <>
                <Cards />
            </>
        </>
    );
}

export default MainPage;