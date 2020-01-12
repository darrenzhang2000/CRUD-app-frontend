import React, {Component} from 'react';
import './App.css';
import SingleCampus from './views/SingleCampus';

const dummyName = "Hogwarts";
const dummyImage = "https://images.ctfassets./usf1vwtuqyxm/7EsDSrJhr0pNwUNK8lrUwY/f8d7e5101de6dda8f46c0f94673087a9/HP-Hogwarts-39PHOTOBU17074_PHUP_HP.jpg";
const dummyAddress = "123 Hogwarts Street";
const dummyDescription="Hogwarts School of Witchcraft and Wizardry, commonly shortened to Hogwarts (/ˈhɒɡwɔːrts/), is a fictional British school of magic for students aged eleven to eighteen, and is the primary setting for the first six books in J. K. Rowling's Harry Potter series.";

function App() {
  return (
    <div>
      <SingleCampus name={dummyName} image={dummyImage} address={dummyAddress} description={dummyDescription} />
    </div>
  );
}

export default App;
