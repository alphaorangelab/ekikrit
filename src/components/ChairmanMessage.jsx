import { useTranslation } from "react-i18next";
import React from 'react';
import { ChairmanMessageStyle } from './style.js';

// Import the chairman image (ensure the image is available in the assets folder)
import chairmanImage from '../assets/chairman.png'; // Adjust the path to your image

const ChairmanMessage = () => {
  const { t } = useTranslation();
  return (
    <ChairmanMessageStyle>
      
        <div className="container">
        <section className="message-ceo-section">
          <div className="row">
            {/* Left Column: CEO Message */}
            <div className="col-lg-6 col-md-6">
            <h2>{t("Message from the Chairman")}</h2>
            <p>{t(
                "Welcome to Ekikrit Krishak Savings and Credit Cooperative Limited. Our cooperative is dedicated to offering secure, accessible, and sustainable banking services to the local community. We strive to enhance the economic well-being of our members by fostering collective growth through microfinance initiatives. As Chairman, I encourage all of us to work together for the future of our community."
              )}</p>
              <p>-{t("John Doe")}</p>
            </div>

            {/* Right Column: Chairman Image */}
            <div className="col-lg-6 col-md-6 text-center">
              <img src={chairmanImage} alt="Chairman" className="chairman-img" />
            </div>
          </div>
          </section>
        </div>

    </ChairmanMessageStyle>
  );
};

export default ChairmanMessage;
