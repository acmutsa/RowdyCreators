import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const FooterItem: FunctionComponent = () => {
	return (
		<>
			<div className="grid min-h-[400px] grid-cols-2 bg-rc-black py-[10px]">
				<div className="h-full border-r-2 border-r-white pr-[20px]">
					<div className="flex h-full items-center justify-end">
						<div className="flex cursor-pointer items-center">
							<Image alt={"RH Logo"} src={"/img/logo.png"} width={65} height={65} />
							<div>
								<h1 className="text-2xl font-extrabold text-white">Rowdy Creators</h1>
								<h2 className="text-xs font-bold text-white">Develop. Create. Collaborate.</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center pl-[20px]">
					<Link href="/contact" className="font-bold text-white hover:underline">
						Contact Us
					</Link>
					<a
						href="https://acmutsa.org/"
						target={"_blank"}
						className="font-bold text-white hover:underline"
					>
						ACM UTSA
					</a>
					<a
						href="https://twitter.com/rowdycreators"
						target={"_blank"}
						className="font-bold text-white hover:underline"
					>
						Twitter
					</a>
					<a
						href="https://www.instagram.com/rowdycreators/"
						target={"_blank"}
						className="font-bold text-white hover:underline"
					>
						Instagram
					</a>
					<a
						href="https://discord.gg/3mWaepQgQj"
						target={"_blank"}
						className="font-bold text-white hover:underline"
					>
						Discord
					</a>
				</div>
			</div>
			<div className=" bg-rc-black">
				<p
					className={"footer mx-auto w-full py-1 text-center text-[12px] text-white opacity-[60%]"}
				>
					Made with &lt;/&gt; & ♥ @ Rowdy Creators
					<br />© Rowdy Creators & Association of Computing Machinery at UTSA{" "}
					{new Date().getFullYear()}. All Rights Reserved.
				</p>
			</div>
		</>
	);
};

export default FooterItem;
