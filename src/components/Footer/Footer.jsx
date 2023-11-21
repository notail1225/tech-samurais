import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-infos"
              defaultMessage="Page created by Gregory"
            />
          </p>
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
        <div className="redes-sociales">
          <a
            href="https://join.skype.com/invite/veNNMueJlE80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-skype"></i>
          </a>
          <a
            href="https://github.com/kstar0102/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:gregoryharris430@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
