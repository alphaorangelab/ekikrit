import { useTranslation } from "react-i18next";
import React from "react";
import { ChairmanMessageStyle } from "./style.js";

// Make the ChairmanMessage component reusable by accepting props
const ChairmanMessage = ({
    title,
    chairmanName,
    message,
    chairmanImageSrc,
}) => {
    const { t } = useTranslation();

    return (
        <ChairmanMessageStyle>
            <div className="container">
                <section className="message-ceo-section">
                    <div className="row">
                        {/* Left Column: CEO Message */}
                        <div className="col-lg-6 col-md-6">
                            <h2>{t(`${title}`)}</h2>
                            <p>{t(message)}</p>
                            <p>-{chairmanName}</p>
                        </div>

                        {/* Right Column: Chairman Image */}
                        <div className="col-lg-6 col-md-6 text-center">
                            <img
                                src={chairmanImageSrc}
                                alt="Chairman"
                                className="chairman-img"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </ChairmanMessageStyle>
    );
};

export default ChairmanMessage;
