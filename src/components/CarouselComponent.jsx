import { Carousel } from "antd";
import picture1 from "../assets/picture_1.jpg";
import picture2 from "../assets/picture_2.jpg";
import picture3 from "../assets/picture_3.jpg";
import picture4 from "../assets/picture_4.jpg";

const CarouselComponent = () => (
    <Carousel autoplay style={{ height: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#364d79" }}>
            <img
                src={picture1}
                alt="pic"
                style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", display: "block" }}
            />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#364d79" }}>
            <img
                src={picture2}
                alt="pic"
                style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", display: "block" }}
            />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#364d79" }}>
            <img
                src={picture3}
                alt="pic"
                style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", display: "block" }}
            />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#364d79" }}>
            <img
                src={picture4}
                alt="pic"
                style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "cover", display: "block" }}
            />
        </div>

        {/* Mobile Responsive */}
        <style>
            {`
                @media (max-width: 768px) {
                    .ant-carousel .slick-slide {
                        height: auto;
                    }
                    .ant-carousel .slick-list {
                        height: 300px;
                    }
                    .ant-carousel .slick-slide img {
                        height: auto;
                        max-height: 300px;
                        object-fit: cover;
                    }
                }
            `}
        </style>
    </Carousel>
);

export default CarouselComponent;
