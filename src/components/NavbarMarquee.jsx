import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { StyledNavbarMarquee } from "./style";

const NavbarMarquee = () => {
    return (
        <StyledNavbarMarquee>
            <div className="marquee-container">
                <div className="marquee-content">
                    भविष्य सुनिश्चित पार्नको लागि बचत गर्ने बानी बसालौँ।। भविष्य
                    सुनिश्चित पार्नको लागि बचत गर्ने बानी बसालौँ।। 
                </div>
            </div>
            {/* <div className="contacts">
                <span className="content">
                    <FiPhoneCall />
                    041-45687
                </span>
                <span className="content">
                    <FiMail />
                    EkikritKrishaksacop@gmail.com
                </span>
            </div> */}
        </StyledNavbarMarquee>
    );
};

export default NavbarMarquee;
