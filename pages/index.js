import Head from 'next/head'
import Image from 'next/image';
import image2 from '../public/images/home/flatcode_Sylvan1.jpg';
import image3 from '../public/images/home/flatcode_Sylvana.jpg';




export default function Home() {
  return (
    <>
      <Head>
        <title>Flatcode - Unleash your website</title>
        <meta name="description" content="Flatcode helpt webdesigners, webbureaus en ondernemers bij het bouwen van websites. Van webdesign tot website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <div className='header-text'>
            <p>Frontend developer</p>
            <h1>Unleash your website</h1>
            <h2>Voor webdesigners, webbureaus en ondernemers</h2>
          
          </div>
          
          <div className='header-img'>
            <img src={image3.src} alt='Flatcode' />
          </div>
      </header>
      <main>
        <h2 className='main-h2' >Waar kan ik jou bij helpen?</h2>
        <section className='container-products'>
          <div className='product'>
              <h2>Website</h2>
              <p>Op zoek naar iemand die jouw website bouwt? Het technische gedoe is niet aan jouw besteed?</p>
              <p>En ben je in het bezit van een logo en huisstijl?</p>
              <p>Voor een website op maat met of zonder webdesign</p>
              <p>Neem contact op via sylvana@flatcode.nl</p>
          </div>

          <div className='product'>
            <h2>Webdesigners / bureaus</h2>
            <p>Geen tijd om jouw webdesign om te zetten naar een website?</p>
            <p>Ik help jou graag</p>
            <p>Neem contact op via sylvana@flatcode.nl</p>
          </div>

          <div className='product'>
            <h2>Wordpress onderhoud</h2>
            <p>Jouw website netjes up-to-date en bij problemen mij aan de haren trekken?</p>
            <p>Ik onderhoud en los de ellende op</p>
            <p>Neem contact op via sylvana@flatcode.nl</p>
          </div>

        </section>

        
        <section className='container-about'>
          <div className='about-text'>
            <h2 className='h2-big'>Hi!</h2>
            <p>De reden waarom ik gestart ben met Flatcode is om jou te helpen met een zo goed mogelijke website.</p>
            <p>Ik ben Sylvana, Front-end developer en een gelukkige eigenaar van een Flatcoated Retriever. Nu heb je gelijk een idee waardoor mijn bedrijfsnaam is geinspireerd ;).</p>
            <p>Als Frontender bouw ik websites die simpel en daarmee krachtig zijn. Zodat jouw website niet alleen mooi is maar ook werkt.</p>
            <p>Ik houd ervan om te blijven leren daarom blijf ik mijzelf ontwikkelen in verschillende technieken, houd ik de nieuwste trends en techniek in de gaten en pas deze toe bij het bouwen van websites.</p> 
          </div>
        
          <div className='about-img'>
            <img src={image2.src} alt="Flatcode - about - Sylvana Lalleman" />
          </div>
        
        </section>


      </main>
    </>
  )
}
