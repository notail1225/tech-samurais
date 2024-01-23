import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="What we do?" />
    </h2>
    <div className="row service_section">
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Crafted with precision and powered by the latest technologies, our websites not only capture attention but also deliver seamless user experiences. From sleek corporate pages to robust e-commerce platforms, we tailor solutions that reflect your brand's essence."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-mobile-alt"></i>
        <h3>
          <FormattedMessage
            id="developments"
            defaultMessage="Mobile App Development"
          />
        </h3>
        <p>
          <FormattedMessage
            id="development-infos"
            defaultMessage="In a world that's always on the move, we understand the importance of mobile solutions. Our team designs and develops dynamic mobile applications for both iOS and Android, that engage users, enhance functionality, and seamlessly integrate with various platforms."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage
            id="design"
            defaultMessage="DESIGN"
          />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="Creating amazing designs that engage users and reflect your brand’s essence. Transforming ideas into visually stunning and user-friendly designs. Let’s bring your online presence to life!"
          />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
