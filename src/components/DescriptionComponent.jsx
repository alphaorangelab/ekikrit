import Logo from "../assets/Ekikrit_sahakari.png";
import { StyledDescription } from "./style";

const DescriptionComponent = () => {
    return (
        <StyledDescription>
            <h2>About Ekikrit Krishak</h2>
            <div className="container">
                <div className="description">
                    Ekikrit Saving & Credit Co-Operative Ltd. (ESCCOOP) welcomes
                    you. Our cooperative is located in Ratnanagar, Chitwan,
                    Nepal, and our main objective is to provide convenient,
                    secure, and sustainable banking and non-banking services. We
                    aim to contribute to the community's development through
                    microfinance and other services by facilitating the
                    collective development of our members. Our organization
                    adheres to the principles and values of the international
                    cooperative movement and follows the Cooperative Act of the
                    Government of Nepal in a non-partisan manner. Unified
                    Farmers Savings and Credit Cooperative Limited is registered
                    under Cooperative Act with registration number 978/068/069.
                    Our organization operates solely from its main office in
                    Ratnanagar, Chitwan, managed with dedication and efficiency.
                    We have a total of 487 members from various demographics.
                    The organization is run by 11 staff members, including 7 men
                    and 4 women, who are committed to serving the members with
                    excellence and professionalism. Under the leadership of our
                    esteemed CEO, Mr. Vishnu Prasad Aryal, our organization is
                    guided by an experienced, dedicated, and visionary
                    management board, executive committee, sub-committees, audit
                    committee, and competent staff. We have plans to introduce
                    internet banking services for continuous improvement and
                    modernization. For your convenience and ease, our office
                    hours are from 10:00 am to 5:00 pm from Saturday to Friday,
                    and from 10:00 am to 3:00 pm on Fridays. If you have any
                    questions or need assistance, please contact us at
                    +97745356310 or email us at
                    ekikritkrishakekikritkrishak@gmail.com. Thank you for
                    considering Unified Farmers Savings and Credit Cooperative
                    Limited as your financial partner. We are committed to
                    serving you and supporting your financial well-being and
                    community development.
                </div>
                <div className="logo-container">
                    <img src={Logo} alt="logo" height={250} width={250} />
                </div>
            </div>
        </StyledDescription>
    );
};

export default DescriptionComponent;
