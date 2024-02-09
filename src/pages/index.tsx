import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Navbar } from "../components/Navbar";
import { ProjectItem } from "../components/ProjectItem";
import {OfficerItem} from "../components/OfficerItem";
import { AnimatedLogo } from "../components/AnimatedLogo";

import { CgWebsite } from "react-icons/cg";
import { TbDrone } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { SiWebpack } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import { RiSpam2Fill } from "react-icons/ri";
import { RiPlantFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";

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
							title={"Rowdy CTF"}
							description={"An adaptable initiative promoting student-driven cyber security challenges for skill development and networking"}
						>
							<GiCyberEye className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"PhishNet"}
							description={"A streamlit application that uses machine learning to detect spam emails"}
						>
							<RiSpam2Fill className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"Blam!"}
							description={"A top down Rogue-like pixel art video game"}
						>
							<IoLogoGameControllerB className="text-9xl" />
						</ProjectItem>
						<ProjectItem
							title={"The Plant Project"}
							description={"A plant index website separated by region and plant type to make growing native plants easier to restore biodiversity"}
						>
							<RiPlantFill className="text-9xl" />
						</ProjectItem>

					</div>
				</div>

				<div id="officers" className="min-h-screen bg-rc-yellow px-[5px] pt-[100px] pb-[25px]">
					<h1 className="text-center text-7xl font-extrabold text-rc-darkblue sm:text-9xl lg:ml-[60px] lg:text-left">
						Officers
					</h1>
					<div className="mx-auto mt-[25px] grid w-full max-w-[900px] gap-2 md:grid-cols-2">
						<OfficerItem
							name={"Laura Barnes"}
							description={"Rowdy Creators Director"}
							bio={"\n"}
							actualBio={"Bio: Something Something"}>
						</OfficerItem>
						<OfficerItem
							name={"Teagan Smith"}
							description={"Rowdy Creators Vice-President"}
							bio={"\n"}
							actualBio={"Bio: I'm majoring in Computer Science with a concentration in Cloud and Cyber-security. I'm aiming for a career in DevOps, and then a migration into Cloud Security."}>
						</OfficerItem>
						<OfficerItem
							name={"Yash Verma"}
							description={"Rowdy Creators Technical Officer"}
							bio={"\n"}
							actualBio={"Bio: I'm a sophomore majoring in Computer Science & Mathematics of Data and Computing. Highly interested in Quantum Computing."}>
						</OfficerItem>
						<OfficerItem
							name={"Durga Rajarajan"}
							description={"Rowdy Creators Social Media Officer"}
							bio={"\n"}
							actualBio={"Bio: I am a junior majoring in Computer Science. I'm eager to learn more about CS and pursue a career in CS research."}>
						</OfficerItem>
						<OfficerItem
							name={"Delina"}
							description={"Rowdy Creators Financial Officer"}
							bio={"\n"}
							actualBio={"Bio: Somdthing Something"}>
						</OfficerItem>

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
