import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Empty, Spin } from "antd";
import { StyledCardContainer } from "./style";
import NavbarMarquee from "../components/NavbarMarquee";
import Navbar from "../components/Nabvar";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/Nabvar/Navbar";
import { baseApiUrl } from "../config";

const { Meta } = Card;

const Gallery = () => {
    const [galleryList, setGalleryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        fetch(`${baseApiUrl}/gallery`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Process the newly created user data
                setGalleryList(data?.galleryList);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            {/* <NavbarMarquee /> */}
            <NavbarComponent />
            {loading ? (
                <Spin
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50%",
                    }}
                />
            ) : galleryList && galleryList?.length > 0 ? (
                <StyledCardContainer>
                    {galleryList.map((single) => (
                        <Card
                            hoverable
                            style={{
                                width: 300,
                                border: "2px solid #f0f0f0",
                            }}
                            key={single?._id}
                            cover={
                                <img
                                    alt="example"
                                    src={single?.imageList[0].imageUrl}
                                    height={240}
                                    style={{ objectFit: "contain" }}
                                />
                            }
                            onClick={() => navigate(`${single?._id}`)}
                        >
                            <Meta
                                title={
                                    <div className="truncate">
                                        {single?.title}
                                    </div>
                                }
                                description={
                                    <div className="truncate">
                                        {single?.description}
                                    </div>
                                }
                            />
                        </Card>
                    ))}
                </StyledCardContainer>
            ) : (
                <Empty
                    imageStyle={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
                    <div></div>
                </Empty>
            )}
            <FooterComponent />
        </>
    );
};

export default Gallery;
