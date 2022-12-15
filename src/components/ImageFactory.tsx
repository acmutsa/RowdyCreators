import type { FunctionComponent } from "react";
import ImageGallery from "react-image-gallery";

const ImageFactory: FunctionComponent = () => {
	const images = [
		{
			original: "/img/photos/one.jpg",
			thumbnail: "/img/photos/one.jpg",
		},
		{
			original: "/img/photos/two.jpg",
			thumbnail: "/img/photos/two.jpg",
		},
		{
			original: "/img/photos/three.jpg",
			thumbnail: "/img/photos/three.jpg",
		},
		{
			original: "/img/photos/four.jpg",
			thumbnail: "/img/photos/four.jpg",
		},
	];

	return <ImageGallery items={images} />;
};

export default ImageFactory;
