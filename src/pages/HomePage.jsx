import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CarouselComponent from "../components/CarouselComponent";
import ChairmanMessage from "../components/ChairmanMessage";
import DescriptionComponent from "../components/DescriptionComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/Nabvar/Navbar";
import NavbarMarquee from "../components/NavbarMarquee";
import ProfileCard from "../components/ProfileCard";
import EMICalculator from "../components/EmiCalculator";
import { profileCardData } from "../components/helper";
import { StyledContainer } from "./style";
import backgroundImage from "../assets/profile-bg.png";
import chairmanImage from "../assets/chairman.png"; // Path to the chairman image

export default function HomePage() {
    const { t } = useTranslation();

    // Initialize AOS with responsive handling
    useEffect(() => {
        if (window.innerWidth > 768) {
            AOS.init({ duration: 1000, once: true });
        } else {
            AOS.init({ disable: true }); // Disable AOS on small screens
        }
    }, []);

    return (
        <>
            <NavbarComponent />
            <StyledContainer>
                {/* Carousel Component - No Animation */}
                <div className="carousel-container">
                    <CarouselComponent />
                    <ChairmanMessage
                        title="Message from the Chairman"
                        chairmanName="John Doe"
                        message="Welcome to Ekikrit Krishak Savings and Credit Cooperative Limited. Our cooperative is dedicated to offering secure, accessible, and sustainable banking services to the local community. We strive to enhance the economic well-being of our members by fostering collective growth through microfinance initiatives. As Chairman, I encourage all of us to work together for the future of our community."
                        chairmanImageSrc={chairmanImage}
                    />
                </div>

                <div className="carousel-container">
                    <ChairmanMessage
                        title="Message from the Vice Chairman"
                        chairmanName="John Doe"
                        message="Welcome to Ekikrit Krishak Savings and Credit Cooperative Limited. Our cooperative is dedicated to offering secure, accessible, and sustainable banking services to the local community. We strive to enhance the economic well-being of our members by fostering collective growth through microfinance initiatives. As Chairman, I encourage all of us to work together for the future of our community."
                        chairmanImageSrc={chairmanImage}
                    />
                </div>

                {/* Company Description - Fade in from the left */}
                <div
                    className="company-description"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <DescriptionComponent />
                </div>

                {/* Institutional Profile - Fade in from the right */}
                <div
                    className="institutional-profile"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "auto",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.03)",
                            zIndex: 0,
                        }}
                    />
                    <div
                        className="inner-wrapper"
                        style={{
                            margin: "0 auto",
                            width: "70%",
                            boxSizing: "border-box",
                            position: "relative",
                            zIndex: 1,
                            marginBottom: "20px",
                        }}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <h2>{t("Institutional Profile")}</h2>
                        <div
                            className="profile-card-container"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            {profileCardData.map((single) => (
                                <ProfileCard key={single?.key} data={single} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* EMI Calculator - Fade in from the bottom */}
                <div className="emi" data-aos="fade-up" data-aos-delay="800">
                    <EMICalculator />
                </div>
            </StyledContainer>

            <NavbarMarquee />
            <FooterComponent />
        </>
    );
}
