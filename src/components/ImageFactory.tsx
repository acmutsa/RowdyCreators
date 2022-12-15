import type { FunctionComponent } from "react";
import ImageGallery from "react-image-gallery";

const ImageFactory: FunctionComponent = () => {
	const images = [
		{
			original: "/img/photos/one.jpg?width=1920&height=1080",
			thumbnail: "/img/photos/one.jpg?width=1920&height=1080",
		},
		{
			original: "/img/photos/two.jpg?width=1920&height=1080",
			thumbnail: "/img/photos/two.jpg?width=1920&height=1080",
		},
		{
			original: "/img/photos/three.jpg?width=1920&height=1080",
			thumbnail: "/img/photos/three.jpg?width=1920&height=1080",
		},
		{
			original: "/img/photos/four.jpg?width=1920&height=1080",
			thumbnail: "/img/photos/four.jpg?width=1920&height=1080",
		},
	];

	return <ImageGallery items={images} />;
};

export default ImageFactory;
