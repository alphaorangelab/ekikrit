import { Card } from "antd";
import { StyledCardContainer } from "./style";
import NavbarMarquee from "../components/NavbarMarquee";
import Navbar from "../components/Nabvar";
import FooterComponent from "../components/FooterComponent";

const { Meta } = Card;

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
    // {
    //     key: 7,
    //     image: "",
    //     description: "Hello world 4",
    // },
];

const Gallery = () => {
    return (
        <>
            <NavbarMarquee />
            <Navbar />
            <StyledCardContainer>
                {list.map((single) => (
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        key={single?.key}
                        cover={<img alt="example" src={single?.imageUrl} />}
                    >
                        <Meta
                            title={single?.title}
                            description={single?.description}
                        />
                    </Card>
                ))}
            </StyledCardContainer>
            <FooterComponent />
        </>
    );
};

export default Gallery;
