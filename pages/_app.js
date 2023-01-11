import '../styles/globals.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

 function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
    
    )}

    export default App;