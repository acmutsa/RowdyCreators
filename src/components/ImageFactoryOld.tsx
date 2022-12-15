import type { FunctionComponent } from "react";
import Image from "next/image";
import { BsGearWideConnected, BsGrid3X3GapFill } from "react-icons/bs";
import { TfiPanel } from "react-icons/tfi";
import { AiFillControl } from "react-icons/ai";
import { RiRemoteControl2Line } from "react-icons/ri";

const ImageFactory: FunctionComponent = () => {
	return (
		<div className="grid h-full w-full grid-cols-4 overflow-hidden">
			{/* <Image
				alt={"Group Photo of Rowdy Creators Members and Officers"}
				src="/img/photos/one.jpg"
				width={300}
				height={300}
				className={"z-[0] mx-auto rotate-[-15deg] ease-in-out hover:scale-110"}
			/>
			<Image
				alt={"Group Photo of Rowdy Creators Members and Officers"}
				src="/img/photos/two.jpg"
				width={150}
				height={150}
				className={"mx-auto mt-[150px] rotate-[10deg] ease-in-out hover:scale-110"}
			/> */}

			<div className="flex items-center justify-end">
				<div className="grid h-[175px] w-full max-w-[175px] grid-cols-3 rounded bg-rc-yellow text-rc-black">
					<div className="col-span-2 row-span-2 !overflow-hidden">
						<BsGearWideConnected className="do-gear-spin-top text-7xl" />
					</div>
					<div className="row-span-3 flex flex-col items-end justify-center px-[5px]">
						<BsGrid3X3GapFill className="rotate-180 animate-pulse text-5xl" />
						<BsGrid3X3GapFill className="rotate-180 animate-pulse text-5xl" />
						<BsGrid3X3GapFill className="rotate-180 animate-pulse text-5xl" />
					</div>
					<div className="col-span-2 flex items-end pb-[5px] pl-[5px]">
						<TfiPanel className="text-5xl" />
						<TfiPanel className="rotate-180 text-5xl" />
					</div>
				</div>
			</div>
			<div className="col-span-2 flex items-center">
				<div>
					<div className="gallery-container">
						<img className="gallery-image" src="/img/photos/one.jpg" alt="Image 1" />
						<img className="gallery-image" src="/img/photos/one.jpg" alt="Image 2" />
						<img className="gallery-image" src="/img/photos/one.jpg" alt="Image 3" />
						<img className="gallery-image" src="/img/photos/one.jpg" alt="Image 4" />
						<img className="gallery-image" src="/img/photos/one.jpg" alt="Image 5" />
					</div>
				</div>
			</div>
			<div className="flex items-center justify-start">
				<div
					className="flex h-[175px] w-full max-w-[175px] items-end bg-rc-lightblue text-rc-darkblue"
					style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
				>
					<BsGearWideConnected className="do-gear-spin-consume text-7xl" />
				</div>
			</div>
		</div>
	);
};

export default ImageFactory;
