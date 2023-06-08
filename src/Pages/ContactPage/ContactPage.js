import * as React from 'react';
import './ContactPage.scss';
import '../../Constants/GeneralStyles/scrollAnimations.scss';
import FAQ from './FAQ.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// ICONS
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ScrollAnimation from 'react-animate-on-scroll';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactPage() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    let text = event.currentTarget.innerText;
    navigator.clipboard.writeText(text);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="contacts">
      <div className="contacts__block contacts__block_white contacts__block_icons">
        <h1 className='LeftRightNotScroll'>Як з нами зв'язатись?</h1>
        <div className="contacts__icons">
          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle scaleNotScroll scaleNotScroll_delay1">
              <ContactPhoneIcon sx={{ fontSize: "80px", color: "white" }} />
            </span>
            
            <h4>Зв'яжіться з менеджером</h4>
            <h5>
              <span onClick={handleClick}>+390 876 654 844</span> <br />
              <span onClick={handleClick}>+380 345 024 357</span>
            </h5>
          </div>

          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle scaleNotScroll scaleNotScroll_delay2">
              <EmailIcon sx={{ fontSize: "80px", color: "white" }} />
            </span>
            <h4>Зв'яжіться з менеджером</h4>
            <h5>
              <span onClick={handleClick}>eurocitydevelopment@gmail.com</span> <br />
              <span onClick={handleClick}>eurocity@gmail.com</span>
            </h5>
          </div>

          <div className="contacts__icons_icon">
            <span className="contacts__icons_circle scaleNotScroll scaleNotScroll_delay3">
              <LocationOnIcon sx={{ fontSize: "80px", color: "white" }} />
            </span>
            <h4>Завітайте до компанії</h4>
            <h5>
              вул. Богдана Хмельницького 45 <br />
              <a href="#contactsPlace" style={{all: 'unset'}}><span>переглянути на карті</span></a>
            </h5>
          </div>
        </div>
      </div>

      <div className="contacts__block contacts__block_green contacts__block_map" id="contactsPlace">
      <h1>Де ми знаходимось?</h1>
          <div className="contacts__place">
          <ScrollAnimation animateIn="LeftRight" delay={100} animateOnce={true}>
            <iframe
              title="MainLoactionMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.685891785086!2d24.025508376466505!3d49.848359271483446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0cf67889b9%3A0xb36d4c57ac65208!2z0YPQuy4g0JHQvtCz0LTQsNC90LAg0KXQvNC10LvRjNC90LjRhtC60L7Qs9C-LCA0NSwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1686182269977!5m2!1sru!2sua"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </ScrollAnimation>

          <div className="contacts__place_info">
            <ScrollAnimation animateIn="TopBottom" animateOnce={true} delay={100}><span>вул. Богдана Хмельницького 45</span></ScrollAnimation>

            <ScrollAnimation animateIn="TopBottom" animateOnce={true} delay={200}><span>Графік роботи:</span></ScrollAnimation>
            <ScrollAnimation animateIn="TopBottom" animateOnce={true} delay={300}><span style={{marginBottom: '5px'}}>пн-пт: 10:00-21:00</span></ScrollAnimation>
            <ScrollAnimation animateIn="TopBottom" animateOnce={true} delay={400}><span>сб-нд: 12:00-17:00</span></ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="contacts__block contacts__block_hwite contacts__block_FAQ">
        <FAQ />
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Текст скопійовано!
        </Alert>
      </Snackbar>
    </div>
  );
}