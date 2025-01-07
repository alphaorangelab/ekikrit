import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CarouselComponent from "../components/CarouselComponent";
import ChairmanMessage from "../components/ChairmanMessage"
import DescriptionComponent from "../components/DescriptionComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/Nabvar/Navbar";
import NavbarMarquee from "../components/NavbarMarquee";
import ProfileCard from "../components/ProfileCard";
import EMICalculator from "../components/EmiCalculator";
import { profileCardData } from "../components/helper";
import { StyledContainer } from "./style";
import backgroundImage from '../assets/profile-bg.png';

export default function HomePage() {
    const { t } = useTranslation();

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // AOS with duration and once option
    }, []);

    return (
        <>
            <NavbarComponent />
            <StyledContainer>
                {/* Carousel Component - No Animation */}
                <div className="carousel-container">
                    <CarouselComponent />
                </div>

                <ChairmanMessage />

                {/* Company Description - Fade in from the left */}
                <div className="company-description" data-aos="fade-left" data-aos-delay="200">
                    <DescriptionComponent />
                </div>

                {/* Institutional Profile - Fade in from the right */}
                <div className="institutional-profile" style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                    position: 'relative'
                }}>
                    {/* Overlay */}
                    <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.03)', // Black overlay with 50% opacity
                            zIndex: 0, // Ensure overlay is above the background image
                        }}
                    />
                    <div className="inner-wrapper" 
                        style={{
                            margin: "0 auto",
                            width: "70%",
                            boxSizing: "border-box",
                            position: "relative",
                            zIndex: 1
                        }}
                        data-aos="fade-right" // Fade right for institutional profile
                        data-aos-delay="400" // Delay for staggered animation
                    >
                        <h2>{t("Institutional Profile")}</h2>
                        <div className="profile-card-container" data-aos="fade-up" data-aos-delay="600">
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
