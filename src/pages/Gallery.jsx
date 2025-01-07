import { useEffect, useState } from "react";
import { Card, Empty, Spin } from "antd";
import { StyledCardContainer } from "./style";
import NavbarComponent from "../components/Nabvar/Navbar";
import FooterComponent from "../components/FooterComponent";
import { baseApiUrl } from "../config";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"; // Import Thumbnails plugin
import "yet-another-react-lightbox/plugins/thumbnails.css"; // Import Thumbnails styles

const { Meta } = Card;

const Gallery = () => {
    const [galleryList, setGalleryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false); // Lightbox state
    const [selectedImage, setSelectedImage] = useState(0); // To track the selected image index
    const [slides, setSlides] = useState([]); // To store the images for the lightbox

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
                console.log("Fetched Gallery Data:", data); // Debugging line
                setGalleryList(data?.galleryList);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    // Function to open lightbox with the selected image list and starting index
    const openLightbox = (imageList, index) => {
        const slidesArray = imageList.map((img) => ({
            src: img.imageUrl, // Get image URL
        }));
        setSlides(slidesArray); // Set the list of images for the lightbox
        setSelectedImage(index); // Set the index of the clicked image
        setOpen(true); // Open the lightbox
    };

    return (
        <>
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
            ) : galleryList && galleryList.length > 0 ? (
                <StyledCardContainer>
                    {galleryList.map((single, galleryIndex) => (
                        <Card
                            hoverable
                            style={{
                                width: 300,
                                border: "2px solid #f0f0f0",
                            }}
                            key={single._id}
                            cover={
                                <img
                                    alt="example"
                                    src={single.imageList[0]?.imageUrl} // Display the first image
                                    height={240}
                                    style={{ objectFit: "contain" }}
                                    onClick={() => openLightbox(single.imageList, 0)} // Pass full imageList and index
                                />
                            }
                        >
                            <Meta
                                title={<div className="truncate">{single.title}</div>}
                                description={<div className="truncate">{single.description}</div>}
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
                        height: "55vh",
                    }}
                >
                    <div>No galleries available</div>
                </Empty>
            )}
            {/* Lightbox with Thumbnails */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides} // Use the slides array
                index={selectedImage} // Starting index of the selected image
                plugins={[Thumbnails]} // Use the Thumbnails plugin
                thumbnails={{
                    width: 100, // Thumbnail width
                    height: 60,  // Thumbnail height
                    borderRadius: 5, // Rounded corners for thumbnails
                }}
            />
            <FooterComponent />
        </>
    );
};

export default Gallery;
