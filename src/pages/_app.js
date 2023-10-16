import '@/styles/globals.css';
import { useEffect, createContext } from 'react';
import '@/styles/animation.scss'; 
import i18n from '@/components/traducciones/i18n';


export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}