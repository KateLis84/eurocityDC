import * as React from 'react';
import './Footer.scss'
import { HashLink as Link } from 'react-router-hash-link';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Footer() {

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
    <div className="footer">
      <div className="footer__element footer__element_contacts">
        <div className="footer__title">Контакти</div>
        <div className="footer__text" onClick={handleClick}>+390 876 654 844</div>
        <div className="footer__text" onClick={handleClick}>eurocitydevelopment@gmail.com</div>
      </div>
      <div className="footer__element footer__element_cities">
        <div className="footer__title">Комплекси</div>
        <div className="footer__cities">
          <div className="footer__text">Стожари</div>
          <div className="footer__text">Виyковий</div>
          <div className="footer__text">Green Village</div>
        </div>
      </div>
      <div className="footer__element footer__element_phone">
        <div className="footer__title">Зв'язок</div>
        <Link style={{ all: "unset" }} to="contacts">
          <div className="footer__text">Зателефонуйте нам</div>
        </Link>
        <a style={{ all: "unset" }} href= "mailto:eurocitydevelopment@gmail.com"><div className="footer__text">Задайте нам питання</div></a>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Текст скопійовано!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Footer;