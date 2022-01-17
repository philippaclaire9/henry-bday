import React from 'react';
import henrychild from '../images/henrychild.jpg';
import Login from './Login';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  //   const getClues = async () => {
  //     const cluesCol = collection(db, 'users');

  //     const clueSnapshot = await getDocs(cluesCol);
  //     const cluesList = clueSnapshot.docs.map((doc) => doc.data());
  //     console.log(cluesCol);
  //   };
  //   getClues();
  return (
    <div>
      <h2>Happy Birthday Henry!</h2>
      <img src={henrychild} alt="Young Henry" className="Img__Home" />
      <Login />
    </div>
  );
};

export default Home;
