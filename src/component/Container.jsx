import React, { useState } from 'react';
import dividerMobile from '../img/pattern-divider-mobile.svg';
import dividerDesktop from '../img/pattern-divider-desktop.svg';

import styles from './container.module.css';
import Button from './Button';
import axios from 'axios';


export default function Container() {

  const [advice, setAdvice] = useState()
  const [adviceId, setAdviceId] = useState()

  const newAdvice = async () => {
    try   {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const newId = response.data.slip.id
      const newAdvice = response.data.slip.advice
      setAdviceId(newId)
      setAdvice(newAdvice)
    }
    catch (err) {
    console.error('Erro ao buscar frases:', err);
    }
  };

  return (
    <section className={styles.section}>
      <p>Advice #<span>{adviceId}</span></p>
      { advice ? (
        <h1>{advice}</h1>
      ) : (
        <h1 onClick={newAdvice}>Click the button and read some advice</h1>
      )}
       {window.innerWidth < 750 ? (
        <img src={dividerMobile} alt="divider" />
      ) : (
        <img src={dividerDesktop} alt="divider" />
      )}
      <Button onClick={newAdvice}/>
    </section>
  )

}
