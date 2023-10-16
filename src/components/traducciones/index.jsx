import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
 

  const { i18n } = useTranslation();
  const [, forceUpdate] = useState();
  
  const changeLanguage = (language) => {
    console.log('Cambiando a', language);
    i18n.changeLanguage(language).then(() => forceUpdate(Date.now()));
    // const txtElements = document.querySelectorAll('.txt');
    //   txtElements.forEach((txtElement) => {
    //     txtElement.classList.remove('anim-text-flow');
    //     void txtElement.offsetWidth; // Truco para reiniciar la animación (reflow)
    //     txtElement.classList.add('anim-text-flow');
    //   });
  };

  return (
    <div className='banderitas'>
      <button onClick={() => changeLanguage('es')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="40" height="30">
          <image href="https://flagicons.lipis.dev/flags/4x3/ar.svg" width="100%" height="100%" />
          
        </svg>
        
      </button>
      <button className='mr-5' onClick={() => changeLanguage('en')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="40" height="30">
        <image href="https://flagicons.lipis.dev/flags/4x3/us.svg" width="100%" height="100%" />
        </svg>
        
      </button>
    </div>
  );
}

export default LanguageSwitcher;