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
		{
			original: "/img/photos/five.jpg",
			thumbnail: "/img/photos/five.jpg",
		},
		{
			original: "/img/photos/six.jpg",
			thumbnail: "/img/photos/six.jpg",
		},
		{
			original: "/img/photos/seven.jpg",
			thumbnail: "/img/photos/seven.jpg",
		},
		{
			original: "/img/photos/eight.jpg",
			thumbnail: "/img/photos/eight.jpg",
		},
		{
			original: "/img/photos/nine.jpg",
			thumbnail: "/img/photos/nine.jpg",
		},
	];

	return <ImageGallery items={images} />;
};

export default ImageFactory;
