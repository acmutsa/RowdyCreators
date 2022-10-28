import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/Navbar";

import { BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";

const contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact | Rowdy Creators</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen overflow-y-auto bg-rc-lightblue pt-[175px]">
				<Navbar theme="lightblue" />
				<h1 className="mb-[25px] text-center text-7xl font-extrabold text-rc-darkblue sm:text-9xl lg:ml-[60px] lg:text-left">
					Get In Touch
				</h1>
				<div className="mx-auto grid min-h-[300px] w-full max-w-[900px] grid-cols-3 gap-2">
					<a href="https://twitter.com/RowdyCreators" target={"_blank"}>
						<div className="flex h-full items-center justify-center rounded-xl border-2 border-rc-darkblue text-9xl text-rc-darkblue transition ease-in-out hover:bg-rc-darkblue hover:text-rc-lightblue">
							<BsTwitter />
						</div>
					</a>
					<a href="https://www.instagram.com/rowdycreators/" target={"_blank"}>
						<div className="flex h-full items-center justify-center rounded-xl border-2 border-rc-darkblue text-9xl text-rc-darkblue transition ease-in-out hover:bg-rc-darkblue hover:text-rc-lightblue">
							<BsInstagram />
						</div>
					</a>
					<a href="https://discord.gg/3mWaepQgQj" target={"_blank"}>
						<div className="flex h-full items-center justify-center rounded-xl border-2 border-rc-darkblue text-9xl text-rc-darkblue transition ease-in-out hover:bg-rc-darkblue hover:text-rc-lightblue">
							<BsDiscord />
						</div>
					</a>
				</div>
			</div>
		</>
	);
};

export default contact;