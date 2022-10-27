import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFolderFill, BsInfoCircleFill, BsPersonCircle } from "react-icons/bs";

export const Navbar: FunctionComponent = () => {
	return (
		<div className="shaddow-b-xl absolute top-0 grid h-[75px] w-full grid-cols-2 bg-rc-yellow p-[5px]">
			<div className="flex items-center">
				<Image src={"/img/logo.png"} width={65} height={65} />
				<h1 className="text-2xl font-extrabold text-white ">Rowdy Creators</h1>
			</div>
			<div className="flex items-center justify-end">
				<Link href="#">
					<a className="mx-[7px] flex items-center text-lg font-bold text-rc-darkblue">
						<BsInfoCircleFill className="mr-[2px]" />
						About
					</a>
				</Link>
				<Link href="#">
					<a className="mx-[7px] flex items-center text-lg font-bold text-rc-darkblue">
						<BsFolderFill className="mr-[2px]" />
						Projects
					</a>
				</Link>
				<Link href="#">
					<a className="mx-[7px] flex items-center text-lg font-bold text-rc-darkblue">
						<BsPersonCircle className="mr-[2px]" />
						Contact
					</a>
				</Link>
			</div>
		</div>
	);
};
