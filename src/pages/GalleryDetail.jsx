import { useParams } from "react-router-dom";
import { StyledCardContainer, StyledGalleryContainer } from "./style";
import NavbarMarquee from "../components/NavbarMarquee";
import Navbar from "../components/Nabvar";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import { Card, Empty, Spin } from "antd";
import NavbarComponent from "../components/Nabvar/Navbar";
import { baseApiUrl } from "../config";
const GalleryDetail = () => {
    const [gallery, setGallery] = useState();
    const { galleryId } = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`${baseApiUrl}/gallery/${galleryId}`, {
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
                console.log(data);
                // Process the newly created user data
                setGallery(data?.gallery);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    console.log(gallery);
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
            ) : gallery?.imageList?.length > 0 ? (
                <StyledGalleryContainer>
                    {gallery?.imageList.map((single) => (
                        <div className="gallery-container" key={single?._id}>
                            <img
                                src={single?.imageUrl}
                                alt="image"
                                // style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </StyledGalleryContainer>
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

export default GalleryDetail;
