import type { FunctionComponent } from "react";
import Image from "next/image";

export const Navbar: FunctionComponent = () => {
	return (
		<div className="shaddow-b-xl flex h-[75px] items-center bg-rc-yellow p-[5px]">
			<Image src={"/img/logo.png"} width={65} height={65} />
			<h1 className="text-2xl font-extrabold text-white ">Rowdy Creators</h1>
		</div>
	);
};
