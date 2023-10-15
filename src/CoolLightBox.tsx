import React from "react";
import Lightbox, {ImagesListType} from "react-spring-lightbox";
import Content from "./Content";
import ImageListItem from "@mui/material/ImageListItem";

export default function CoolLightBox() {
    const [isShown, setIsShown] = React.useState(false);

    const handleClick = () => {
        setIsShown(isShown => !isShown);
    };

    return (
        <div>
            <ImageListItem >
                <img
                    src="https://picsum.photos/id/1018/1000/600"
                    className="hover"
                    onClick={handleClick}
                />
            </ImageListItem>
            {/* 👇️ show component on click */}
            {isShown ? <CoolLightbox /> : null}
        </div>
    );
}

const images: ImagesListType = [
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
        loading: 'lazy',
        alt: 'Windows 10 Dark Mode Setting',
    },
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
        loading: 'lazy',
        alt: 'macOS Mojave Dark Mode Setting',
    },
    {
        src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
        loading: 'lazy',
        alt: 'Android 9.0 Dark Mode Setting',
    },
];

function CoolLightbox() {
    const [currentImageIndex, setCurrentIndex] = React.useState(0);
    let [isOpen, setOpen] = React.useState(true);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1);

    const handleClose = () => {
        setOpen(isOpen = !isOpen);
    }

    return (
        <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            // renderPrevButton={() => (<CustomLeftArrowButton />)}
            // renderNextButton={() => (<CustomRightArrowButton />)}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
            style={{ background: "black"}}

            /* Handle closing */
            onClose={handleClose}

            /* Use single or double click to zoom */
            // singleClickToZoom

            /* react-spring config for open/close animation */
            pageTransitionConfig={{
              from: { transform: "scale(0.75)", opacity: 0 },
              enter: { transform: "scale(1)", opacity: 1 },
              leave: { transform: "scale(0.75)", opacity: 0 },
              config: { mass: 1, tension: 320, friction: 32 }
            }}
        />
    );
}

