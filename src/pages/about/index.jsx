import SocialMediaBox from "@/components/redes";
import React from "react"
import { useEffect } from "react";
import ContactForm from "@/components/form";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/traducciones";

export default function Home() {
  const { t } = useTranslation();
  
  useEffect(() => {
    const txtElements = document.querySelectorAll('.txt');
    txtElements.forEach((txtElement) => {
      const chars = txtElement.innerText.trim().split('');
      txtElement.innerHTML = chars.map((char) => `<span>${char}</span>`).join('');
    });
  }, []);
  
  return (
    <main className="bg-custom-background ">
      <section id="about" className="p-8">
      <LanguageSwitcher></LanguageSwitcher>
        <div className=" text-center" style={{ marginTop: '20px' }}>

            <img
              src="./imagenes/IMG_fer.jpg"
              alt="Tu Nombre"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="txt anim-text-flow text-5xl">Fernando Teodoro Trillo</h1>
            <br></br>
            <h2 className="text-lg txt anim-text-flow text-2xl">Full Stack Web Developer</h2>
        </div>

        <h3 className="text-left colorLetras mt-20 ml-8">{t('aboutMe')}:</h3>
        <p className="text-left mt-5 ml-12 text-base">{t('parteUno')}<br></br>
        {t('parteDos')} <br></br>
        {t('parteTres')}<br></br>
        {t('parteCuatro')}</p>
        <article className="">
        <h3 className="text-left colorLetras mt-20 ml-8">{t('studiesAndCertifications')}:</h3>
        <ul className="list-disc mt-5 pl-8 text-left text-base ml-0">
          <li className="mb-4 ml-9">{t('studiesTextBootcamp')}</li>
          <li className="mb-4 ml-9">{t('efSet')}</li>
          <li className="mb-4 ml-9">{t('coderH')}</li>
          <li className="mb-4 ml-9">{t('terciaria')}</li>
          <li className="mb-4 ml-9">{t('complementaria')}</li>
          <li className="mb-4 ml-9">{t('secundaria')}</li>
          <li className="mb-4 ml-9">{t('primaria')}</li>
        </ul>
      </article>
      <SocialMediaBox className=""></SocialMediaBox>
      <article>
        <h3 className="text-left colorLetras mt-20 ml-8">{t('technologies')}:</h3>
      <ul className="ml-0 ulTec list-disc pl-8 text-left text-base">
        <li className="mb-2 ml-9">JavaScript</li>
        <li className="mb-2 ml-9">React.js</li>
        <li className="mb-2 ml-9">Redux.js</li>
        <li className="mb-2 ml-9">Next.js</li>
        <li className="mb-2 ml-9">Node.js</li>
        <li className="mb-2 ml-9">Express</li>
        <li className="mb-2 ml-9">Nest.js</li>
        <li className="mb-2 ml-9">Prisma (ORM)</li>
        <li className="mb-2 ml-9">Sequelize (ORM)</li>
        <li className="mb-2 ml-9">TypeORM</li>
        <li className="mb-2 ml-9">PostgreSQL</li>
        <li className="mb-2 ml-9">Tailwind</li>
        <li className="mb-2 ml-9">CSS3</li>
        <li className="mb-2 ml-9">HTML5</li>
        <li className="mb-2 ml-9">Sass</li>
        <li className="mb-2 ml-9">BootStrap</li>
        <li className="mb-2 ml-9">GitHub</li>
        <li className="mb-2 ml-9">API RESTful</li>
        <li className="mb-2 ml-9">Postman</li>
      </ul>
      </article>

      <article>
      <h3 className="text-left colorLetras mt-20 ml-8">{t('experiences')}:</h3>
      <h4 className="text-left ml-8 text-lg  mt-5 colorLetrasSub"><strong>{t('projectsFinished')}:</strong></h4>

      <ul className=" list-disc mt-5 pl-8 text-left text-base ml-0">

        <li className="text-base mb-6 ml-6">{t('tastyMeals')} 

        <div className="mt-4 relative" style={{ height: '300px' }}>
          <iframe
            className="w-full h-full absolute top-0 left-0 "
            src="https://www.youtube.com/embed/5l8s_nM7Am0?si=hCUxuH4riX0fLGwu"
            title="YouTube Video Tasty Meals"
            frameBorder="0"
            allow="web-share"
            allowFullScreen
          ></iframe>
        </div>
        </li>
        
      </ul>
      <h4 className="text-left text-lg mt-20 ml-8 colorLetrasSub">{t('projectsInProgress')}:</h4>

      <ul className=" list-disc mt-5 pl-8 text-left text-base ml-0"> 

        <li className="text-base mb-6 ml-5">{t('aguaPotable')}</li>
        <li className="text-base mb-3 ml-5">{t('truco')}</li>
      </ul>
      </article>
      <article>
        <h3 className="text-left colorLetras mt-20 ml-8">{t('languages')}:</h3>
        <ul className="list-disc pl-8 mt-10 text-left text-base">
          <li className="text-base mb-3 ml-9">{t('spanish')}</li>
          <li className="text-base mb-3 ml-9">{t('english')}</li>
          <li className="text-base mb-3 ml-9">{t('portuguese')}</li>
        </ul>
      </article>
      </section>

      
      <article>
    <h2 className="text-left colorLetras mt-20 ml-14">{t('contactInformation')}</h2>
    <ul className=" pl-8 mt-10 text-left text-base">
      <li className="text-base mb-3 ml-12">
        <strong>{t('telefono')}: </strong> +54 9 3434-713739
      </li>
      <li className="text-base mb-3 ml-12">
        <strong>{t('E-mail')}: </strong><span className="break-all">fernandotrillobaron25@hotmail.com</span>
      </li>
      <li className="text-base mb-3 ml-12">
        <strong>{t('location')}: </strong> Argentina, Entre Rios.
      </li>
    </ul>
  </article>
  
      <footer className="mt-20">
        <h2 className="colorLetras">{t('contact')}</h2>
        <ContactForm></ContactForm>
        <p className="text-center mt-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#888', fontSize: '14px' }}>{t('designed')}</p>
      </footer>
    </main>
  )
}
