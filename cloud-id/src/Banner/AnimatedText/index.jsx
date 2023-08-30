import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Text1 = ' ont perdu'
const Text2 = 'veulent sécuriser'
const Text3 = 'ne se souviennent pas du numéro de'

const AnimatedText = () => {
    const textRef = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: [Text1, Text2, Text3], // Tableau de textes à afficher
        typeSpeed: 100, // Vitesse de frappe des caractères (en millisecondes)
        smartBackspace: true, // Effacer seulement le texte qui a été tapé
        loop: true // Répéter l'animation en boucle
      };
  
      const typed = new Typed(textRef.current, options);
  
      return () => {
        typed.destroy(); // Nettoyage de Typed.js lors du démontage du composant
      };
    }, []);
  
    return <span ref={textRef} />;
  };

  export default AnimatedText