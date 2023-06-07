import {React, useEffect} from 'react';
import './ContactPage.scss';
import FAQ from './FAQ.js';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


export default function ContactPage() {

  window.scrollTo(0, 0)

  useEffect(() => {
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);

  return (
    <div className="contacts">

      <div className="contacts__block contacts__block_white contacts__block_icons">
        <h1>Як з нами зв'язатись?</h1>
        <div className="contacts__icons">
          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle">
              <ContactPhoneIcon sx={{fontSize: '80px', color: 'white'}}/>
            </span>
            <h4>Зв'яжіться з менеджером</h4>
            <h5>
              <span>+390 876 654 844</span> <br/>
              <span>+380 345 024 357</span>то
            </h5>
          </div>

          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle">
              <EmailIcon sx={{fontSize: '80px', color: 'white'}}/>
            </span>
            <h4>Зв'яжіться з менеджером</h4>
            <h5>
              eurocitydevelopment@gmail.com <br/>
              eurocity@gmail.com
            </h5>
          </div>

          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle">
              <LocationOnIcon sx={{fontSize: '80px', color: 'white'}}/>
            </span>
            <h4>Завітайте до компанії</h4>
            <h5>
              вул. Богдана Хмельницького 45 <br/>
              переглянути на карті
            </h5>
          </div>

        </div>
      </div>
      
      <div className="contacts__block contacts__block_green contacts__block_map">
        <h1>Де ми знаходимось?</h1>
        <div className="contacts__place">
          <iframe
          title="MainLoactionMap"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d812.0465482157423!2d23.51093140101536!3d49.03748644393336!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1685904734041!5m2!1sru!2sua"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contacts__place_info">
            <span>вул. Богдана Хмельницького 45</span>

            <span>Графік роботи:</span>
            <span>пн-пт: 10:00-21:00</span>
            <span>сб-нд: 12:00-17:00</span>
          </div>
        </div>
      </div>

      <div className="contacts__block contacts__block_hwite contacts__block_FAQ">
        <FAQ/>
      </div>

    </div>
  );
}