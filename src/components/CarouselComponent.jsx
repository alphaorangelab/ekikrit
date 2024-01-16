import { Carousel } from "antd";
import picture1 from "../assets/picture_1.jpg";
import picture2 from "../assets/picture_2.jpg";
import picture3 from "../assets/picture_3.jpg";
import picture4 from "../assets/picture_4.jpg";

const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
const CarouselComponent = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>
                <img
                    src={picture1}
                    height="100%"
                    width="100%"
                    alt="pic"
                    style={{ objectFit: "cover" }}
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                {" "}
                <img
                    src={picture2}
                    height="100%"
                    width="100%"
                    alt="pic"
                    style={{ objectFit: "cover" }}
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                {" "}
                <img
                    src={picture3}
                    height="100%"
                    width="100%"
                    alt="pic"
                    style={{ objectFit: "cover" }}
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                {" "}
                <img
                    src={picture4}
                    height="100%"
                    width="100%"
                    alt="pic"
                    style={{ objectFit: "cover" }}
                />
            </h3>
        </div>
    </Carousel>
);
export default CarouselComponent;
