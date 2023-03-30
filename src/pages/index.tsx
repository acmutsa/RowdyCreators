import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Navbar } from "../components/Navbar";
import { ProjectItem } from "../components/ProjectItem";
import { AnimatedLogo } from "../components/AnimatedLogo";

import { CgWebsite } from "react-icons/cg";
import { TbDrone } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { SiWebpack } from "react-icons/si";
import ImageFactory from "../components/ImageFactory";
import FooterItem from "../components/FooterItem";

const Home: NextPage = (props) => {
	return (
		<>
			<Head>
				<title>Rowdy Creators</title>
				<meta name="description" content="The official website for Rowdy Creators" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen overflow-y-auto bg-rc-darkblue">
				<Navbar theme="yellow" />
				<div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
					<div className="grid grid-cols-1 sm:grid-cols-2">
						<div className="flex items-end justify-center sm:items-center sm:justify-end">
							<AnimatedLogo />
						</div>
						<div className="flex flex-col items-center justify-start sm:items-start sm:justify-center">
							<h1 className="text-center text-6xl font-extrabold text-rc-white sm:text-left">
								Rowdy
								<br />
								Creators
							</h1>
							<h2 className="mt-[10px] text-center text-lg font-bold text-white sm:text-left">
								Develop. Create. Collaborate.
							</h2>
						</div>
					</div>
					<div className="flex h-full w-full items-center bg-rc-lightblue p-[5px]">
						<ImageFactory />
					</div>
				</div>
				<div id="projects" className="min-h-screen bg-rc-yellow px-[5px] pt-[100px] pb-[25px]">
					<h1 className="text-center text-7xl font-extrabold text-rc-darkblue sm:text-9xl lg:ml-[60px] lg:text-left">
						Projects
					</h1>
					<div className="mx-auto mt-[25px] grid w-full max-w-[900px] gap-2 md:grid-cols-2">
						<ProjectItem
							title={"RC Website"}
							description={"A brand new design for the Rowdy Creators website"}
						>
							<CgWebsite className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"Tello Drone"}
							description={"Complete challenges using drone technologies"}
						>
							<TbDrone className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"Tagme"}
							description={"A platform for crowdsource data collection and labeling"}
						>
							<TbDrone className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"Encryption Tools"}
							description={"Develop 100% free to use encryption tools"}
						>
							<FiLock className="text-9xl" />
						</ProjectItem>
						<ProjectItem title={"NLP"} description={"Develop a Natural Language Processing model"}>
							<SiWebpack className="text-9xl" />
						</ProjectItem>
					</div>
				</div>
				<FooterItem />
			</div>
		</>
	);
};

export default Home;

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};
