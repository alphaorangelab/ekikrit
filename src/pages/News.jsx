import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/Nabvar";
import NavbarMarquee from "../components/NavbarMarquee";
import { StyledCardContainer } from "./style";
import { Card } from "antd";

export const list = [
    {
        key: 1,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 1",
    },
    {
        key: 2,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 2",
    },
    {
        key: 3,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 3",
    },
    {
        key: 4,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 4",
    },
    {
        key: 5,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 4",
    },
    {
        key: 6,
        imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title: "Hello world",
        description: "Hello world 4",
    },
];

const News = () => {
    return (
        <>
            <NavbarMarquee />
            <Navbar />
            <StyledCardContainer>
                {list.map((single) => (
                    <Card
                        title="Card title"
                        key={single?.key}
                        bordered={false}
                        style={{
                            width: 300,
                            minHeight: 300,

                            maxHeight: 400,
                        }}
                    >
                        <div>
                            <img
                                src={single?.imageUrl}
                                height={200}
                                width="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                ))}
            </StyledCardContainer>
            <FooterComponent />
        </>
    );
};

export default News;
