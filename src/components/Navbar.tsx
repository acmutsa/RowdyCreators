import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFolderFill, BsInfoCircleFill, BsPersonCircle } from "react-icons/bs";

interface navProps {
	theme: "yellow" | "lightblue";
}

export const Navbar: FunctionComponent<navProps> = ({ theme }) => {
	if (theme == "yellow") {
		return (
			<div className="shaddow-b-xl fixed top-0 grid h-[75px] w-full grid-cols-3 bg-rc-yellow p-[5px] ">
				<div className="col-span-2 flex items-center md:col-span-1">
					<Link href="/">
						<div className="flex cursor-pointer items-center">
							<Image src={"/img/logo.png"} width={65} height={65} />
							<h1 className="text-2xl font-extrabold text-rc-white ">Rowdy Creators</h1>
						</div>
					</Link>
				</div>
				<div className="col-span-1 flex justify-end md:col-span-2">
					<div className="flex items-center justify-end md:hidden">
						<button
							className="menu"
							onClick={(e) => {
								(e.currentTarget as Element).classList.toggle("opened");
								(e.currentTarget as Element).setAttribute(
									"aria-expanded",
									(e.currentTarget as Element).classList.contains("opened").toString()
								);
							}}
							aria-label="Main Menu"
						>
							<svg width="50" height="50" viewBox="0 0 100 100">
								<path
									className="line line1"
									d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
								/>
								<path className="line line2" d="M 20,50 H 80" />
								<path
									className="line line3"
									d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden items-center justify-around md:flex">
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
						<Link href="/contact/">
							<a className="mx-[7px] flex items-center text-lg font-bold text-rc-darkblue">
								<BsPersonCircle className="mr-[2px]" />
								Contact
							</a>
						</Link>
						<Link href="#">
							<a className="mx-[7px] flex items-center text-lg font-bold text-rc-darkblue">
								<BsPersonCircle className="mr-[2px]" />
								Join Us
							</a>
						</Link>
					</div>
				</div>
			</div>
		);
	} else if (theme == "lightblue") {
		return (
			<div className="shaddow-b-xl fixed top-0 grid h-[75px] w-full grid-cols-2 bg-rc-lightblue p-[5px]">
				<div className="flex items-center">
					<Link href="/">
						<div className="flex cursor-pointer items-center">
							<Image src={"/img/logo.png"} width={65} height={65} />
							<h1 className="text-2xl font-extrabold text-white ">Rowdy Creators</h1>
						</div>
					</Link>
				</div>

				<div className="hidden items-center justify-end sm:flex">
					<Link href="#">
						<a className="mx-[7px] flex items-center text-lg font-bold text-rc-white">
							<BsInfoCircleFill className="mr-[2px]" />
							About
						</a>
					</Link>
					<Link href="#">
						<a className="mx-[7px] flex items-center text-lg font-bold text-rc-white">
							<BsFolderFill className="mr-[2px]" />
							Projects
						</a>
					</Link>
					<Link href="/contact/">
						<a className="mx-[7px] flex items-center text-lg font-bold text-rc-white">
							<BsPersonCircle className="mr-[2px]" />
							Contact
						</a>
					</Link>
					<Link href="#">
						<a className="mx-[7px] flex items-center text-lg font-bold text-rc-white">
							<BsPersonCircle className="mr-[2px]" />
							Join Us
						</a>
					</Link>
				</div>
			</div>
		);
	} else {
		return <h1>Error</h1>;
	}
};
