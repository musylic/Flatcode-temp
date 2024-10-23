import React from 'react';

import facebookFlatcodeImg from '../../public/images/icons/facebook.png';
import instagramFlatcodeImg from '../../public/images/icons/instagram.png'

const Footer = () => {
  return (
    <footer>
    <div class="footer-social">
        <a href="https://www.facebook.com/Flatcode-108626950825012">
          <img src={facebookFlatcodeImg.src} alt="Facebook-Flatcode" />
        </a>
        <a href="https://www.instagram.com/flatcode.nl/?hl=nl">
          <img src={instagramFlatcodeImg.src} alt="Instagram-Flatcode" />
        </a>
        {/* <a href="https://www.linkedin.com/company/42715161"><i class="fab fa-linkedin"></i></a> */}
    </div>

    <div class="footer-rules">
        <p>&copy; flatcode 2022-2024</p>
        <p>contact: sylvana@flatcode.nl</p>
        {/* <p>Alle rechten voorbehouden</p> */}
        {/* <a href="docs/AlgVoorw-FC.pdf"> Privacyverklaring</a>
        <a href="docs/AlgVoorw-FC.pdf">Algemene voorwaarden</a> */}
        <p> Made by Flatcode </p>
    </div>    
</footer>
  )
}

export default Footer
