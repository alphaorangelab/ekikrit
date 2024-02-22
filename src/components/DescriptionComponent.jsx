import { StyledDescription } from "../pages/style";
import Logo from "../assets/Ekikrit_sahakari.png";

const DescriptionComponent = () => {
    return (
        <StyledDescription>
            <h2>About Ekikrit Krishak</h2>
            <div className="container">
                <div className="description">
                    Welcome to Ekikrit Krishak, where financial empowerment
                    meets community strength. Founded on the principles of
                    trust, transparency, and collaboration, we are more than
                    just a credit and savings cooperative – we are your
                    dedicated partner in building a secure and prosperous
                    future. At Ekikrit Krishak, we understand that financial
                    well-being is a journey, and we are here to walk it with
                    you. With a deep commitment to our members, we strive to
                    provide accessible and sustainable financial solutions that
                    cater to the unique needs of our diverse community.
                </div>
                <div>
                    <img src={Logo} alt="logo" height={300} width={300} />
                </div>
            </div>
        </StyledDescription>
    );
};

export default DescriptionComponent;
