import CarouselComponent from "../components/CarouselComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/Nabvar/Navbar";
import NavbarMarquee from "../components/NavbarMarquee";
import ProfileCard from "../components/ProfileCard";
import { profileCardData } from "../components/helper";
import { StyledContainer } from "./style";

export default function HomePage() {
    return (
        <>
            <NavbarComponent />
            <StyledContainer>
                <div className="carousel-container">
                    <CarouselComponent />
                </div>
                <div className="company-description">
                    <DescriptionComponent />
                </div>
                <div className="institutional-profile">
                    <h2>Institutional Profile</h2>
                    <div className="profile-card-container">
                        {profileCardData.map((single) => (
                            <ProfileCard key={single?.key} data={single} />
                        ))}
                    </div>
                </div>
            </StyledContainer>
            <NavbarMarquee />
            <FooterComponent />
        </>
    );
}
