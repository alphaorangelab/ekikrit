import { useParams } from "react-router-dom";
import { StyledCardContainer, StyledGalleryContainer } from "./style";
import NavbarMarquee from "../components/NavbarMarquee";
import Navbar from "../components/Nabvar";
import FooterComponent from "../components/FooterComponent";
import { useEffect, useState } from "react";
import { Card, Spin } from "antd";
import NavbarComponent from "../components/Nabvar/Navbar";

const GalleryDetail = () => {
    const [gallery, setGallery] = useState();
    const { galleryId } = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/gallery/${galleryId}`, {
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
            ) : (
                <StyledGalleryContainer>
                    {gallery &&
                        gallery?.imageList.map((single) => (
                            <div
                                style={{
                                    border: "1px solid #dddddd",
                                    padding: "15px",
                                    borderRadius: "4px",
                                    transition: "border .2s ease-in-out",
                                    minHeight: "350px",
                                    minWidth: "400px",
                                }}
                                key={single?._id}
                            >
                                <img
                                    src={single?.imageUrl}
                                    height={350}
                                    width={400}
                                    alt="image"
                                    // style={{ objectFit: "contain" }}
                                />
                            </div>
                        ))}
                </StyledGalleryContainer>
            )}
            <FooterComponent />
        </>
    );
};

export default GalleryDetail;
