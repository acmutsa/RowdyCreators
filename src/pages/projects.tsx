import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { Navbar } from "../components/Navbar";
import NeuralNetwork from "../components/NeuralNetwork";
import FooterItem from "../components/FooterItem";

import { GiCyberEye } from "react-icons/gi";
import { RiSpam2Fill, RiPlantFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { HiExternalLink, HiCode, HiUsers, HiCalendar } from "react-icons/hi";
import { FaGithub, FaDiscord, FaRobot, FaSearchDollar, FaMapMarkedAlt, FaFlag, FaGraduationCap, FaCompactDisc, FaBrain, FaTree, FaStethoscope } from "react-icons/fa";

const Projects: NextPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		setIsVisible(true);
		setIsClient(true);

		// Create intersection observer for scroll-triggered animations
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('data-animate-id');
						if (id) {
							setVisibleElements(prev => new Set(prev).add(id));
						}
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		// Observe all elements with data-animate-id
		const elements = document.querySelectorAll('[data-animate-id]');
		elements.forEach(el => observerRef.current?.observe(el));

		return () => {
			observerRef.current?.disconnect();
		};
	}, []);

	const isElementVisible = (id: string) => visibleElements.has(id);

	const projects = [
		{
			id: 1,
			title: "Fly Brains",
			description: "A drone controlled by your brain!",
			longDescription: "Three sentences that summarizes your project.",
			icon: FaBrain,
			technologies: ["Give", "Four", "Tags Like", "This!"],
			status: "Completed in November 2026",
			teamSize: "9 members",
			github: "https://github.com/RowdyCreators/Fly-Brains-A-Drone-Controlled-by-the-Human-Mind",
			website: null,
			image: "<IGNORE I GOT THIS>"
		},
		{
			id: 2,
			title: "Treeworks",
			description: "Treeworks helps UTSA students explore courses through an interactive skill tree that connects their interests to skills, career paths, and research opportunities.",
			longDescription: "Treeworks is an interactive academic and career exploration platform designed to help UTSA students make informed decisions about their education. Through a gamified skill tree, students can visualize course prerequisites, discover connections between subjects, and explore how different academic paths align with their interests and career goals. Developed by an 11-member team within ACM UTSA's Rowdy Creators program, the project aims to make academic planning more intuitive, engaging, and personalized.",
			icon: FaTree,
			technologies: ["React", "FastAPI", "SQLAlchemy", "Beautiful Soup"],
			status: "In Progress",
			teamSize: "11 members",
			github: "https://github.com/RowdyCreators/Treeworks",
			website: null,
			image: "<IGNORE I GOT THIS>"
		},
		{
			id: 3,
			title: "Unipath",
			description: "UniPath helps international students find affordable US universities and navigate undergraduate applications.",
			longDescription: "UniPath is an independent tool that helps international students explore US universities based on their intended major, budget, and preferences. It explains university costs and scholarship eligibility, provides application checklists, and links students to official visa resources. Students can save universities, track their progress, and connect with others through university-specific discussion forums",
			icon: FaGraduationCap,
			technologies: ["Web", "Flask", "Postgres", "Typescript"],
			status: "In progress for December 2026",
			teamSize: "7",
			github: "https://github.com/RowdyCreators/unipath",
			website: null,
			image: null,
		},
		{
			id: 4,
  			title: "Clinical Crew – Self-Growing Medical RAG",
			description: "An AI medical assistant that continuously learns from research papers to explain symptoms with reliable sources.",
			longDescription: "Built a self-growing RAG pipeline that automatically processes, organizes, and chunks medical research papers into a searchable knowledge base. Patients can describe their symptoms and receive clear, detailed explanations backed by real quotes from medical research. Future plans include a custom voice assistant and interactive 3D human anatomy models.",
			icon: FaStethoscope,
			technologies: ["Python", "RAG", "LLMs", "Vector Databases"],
			status: "In Progress – Expected December 2026",
			teamSize: "4 members",
			github: "https://github.com/RowdyCreators/Clinical-Crew",
			website: null,
			image: "/img/projects/ctf.jpg"
		},
		{
			id: 5,
			title: "Virtual Record Store",
			description: "Virtual Store where users can browse and discover new music in the form of records",
			longDescription: "Virtual Store where crates of music in the form of records can be browsed upon, discovered and collected. Virtual Record Store has many desired genres as well as local artists helping users grow their tastes. It serves as a fun nostalgic feeling to explore music digitally",
			icon: FaCompactDisc,
			technologies: ["Python", "Spotify API", "FastAPI", "Web"],
			status: "In progress for December 2026",
			teamSize: "7 members",
			github: "https://github.com/RowdyCreators/virtual-record-store",
			website: null,
			image: "/img/projects/ctf.jpg"
		},
		{
			id: 6,
			title: "Muchin - Vending Machine Robot",
			description: "A robot vending machine that drives up to you!",
			longDescription: "Muchin is a robot vending machine that has a website for online orders. It's large appeal is that it's able to drive up towards students who are casually walking by on campus!.",
			icon: FaRobot,
			technologies: ["Robotics", "AI Pathfinding", "Website Design", "Engineering"],
			status: "Completed in Spring 2026",
			teamSize: "12 members",
			github: "https://github.com/RowdyCreators/Muchin-Vending-Machine-Robot",
			website: null,
			image: "/img/projects/ctf.jpg"
		},
		{
			id: 7,
			title: "Jev Scam Detector",
			description: "A browser-to-browser calling service that interprets a live transcription and detects scams!",
			longDescription: ".",
			icon: FaSearchDollar,
			technologies: ["AI", "Scam Detection", "Website Design"],
			status: "Project for RowdyHacks XII! (2026)",
			teamSize: "4 members",
			github: "https://github.com/RowdyCreators/Jev-Scam-Detector",
			website: "https://jev-scam-detector.onrender.com/",
			image: "/img/projects/JSMLOGO.png"
		},
		{
			id: 8,
			title: "UTSA Mini-Map",
			description: "A map of the UTSA campus that mimics real world map applications, even gives direction to your classes!",
			longDescription: ".",
			icon: FaMapMarkedAlt,
			technologies: ["Maps", "Tracking", "Website", "AI Pathfinding"],
			status: "Completed in 2025",
			teamSize: "5 members",
			github: "https://github.com/RowdyCreators/UTSA-MiniMap",
			website: null,
			image: "/img/projects/ctf.jpg"
		},
		{
			id: 9,
			title: "Rowdy CTF",
			description: "An adaptable initiative promoting student-driven cyber security challenges for skill development and networking",
			longDescription: "Rowdy CTF is our flagship cybersecurity program that brings together students interested in ethical hacking, cryptography, and digital forensics. We host regular Capture The Flag competitions, workshops, and training sessions to help students develop practical cybersecurity skills.",
			icon: FaFlag,
			technologies: ["Cybersecurity", "CTF", "Networking", "Cryptography"],
			status: "Completed",
			teamSize: "15-20 members",
			github: "https://github.com/krillingws/Rowdyhacks2022-CTF",
			website: null,
			image: "/img/projects/ctf.jpg"
		},
		{
			id: 10,
			title: "PhishNet",
			description: "A streamlit application that uses machine learning to detect spam emails",
			longDescription: "PhishNet is an intelligent email filtering system that uses machine learning algorithms to identify and block phishing attempts and spam emails. The project combines natural language processing with traditional cybersecurity techniques to provide real-time protection.",
			icon: RiSpam2Fill,
			technologies: ["Machine Learning", "Python", "Streamlit", "NLP"],
			status: "Completed",
			teamSize: "8-12 members",
			github: null,
			website: null,
			image: "/img/projects/phishnet.jpg"
		}
	];

	return (
		<>
			<Head>
				<title>Our Projects | Rowdy Creators</title>
				<meta name="description" content="Explore the innovative projects created by Rowdy Creators - from cybersecurity tools to sustainable applications." />

			</Head>
			
			<div className="min-h-screen bg-rc-black text-rc-text overflow-x-hidden relative">
				{/* Global Background Effects */}
				<div className="fixed inset-0 pointer-events-none">
					{/* Gradient Background */}
					<div className="absolute inset-0 bg-gradient-to-br from-rc-black via-rc-dark to-rc-darker"></div>
					
					{/* Subtle Neural Network Background */}
					{isClient && <NeuralNetwork subtle={true} />}
					
					{/* Matrix Rain Effect */}
					{isClient && (
						<div className="absolute inset-0 opacity-5">
							{Array.from({ length: 30 }).map((_, i) => (
								<div
									key={i}
									className="absolute text-rc-sea-green text-xs animate-matrix-rain"
									style={{
										left: `${Math.random() * 100}%`,
										animationDelay: `${Math.random() * 5}s`,
										animationDuration: `${5 + Math.random() * 10}s`
									}}
								>
									{Math.random() > 0.5 ? '1' : '0'}
								</div>
							))}
						</div>
					)}
				</div>
				
				<Navbar theme="dark" />
				
				{/* Hero Section */}
				<section className="relative pt-40 pb-0 px-4 lg:px-8">
					<div className="max-w-6xl mx-auto text-center">
						<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h1 className="text-5xl md:text-7xl font-black mb-6 animate-bounce-in">
								<span className="gradient-text animate-neon-glow">Our</span>
								<span className="text-rc-white animate-slide-in-bottom" style={{animationDelay: '0.3s'}}> Projects</span>
							</h1>
							<p className="text-xl text-rc-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
								Explore the innovative projects created by our talented team of developers, designers, and creators.
							</p>
						</div>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{projects.map((project, index) => (
								<div 
									key={project.id} 
									data-animate-id={`project-${project.id}`}
									className={`tech-card p-8 rounded-2xl transition-all duration-1000 ${isElementVisible(`project-${project.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
									style={{transitionDelay: `${index * 0.1}s`}}
								>
									<div className="flex items-start space-x-4 mb-6">
										<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl flex items-center justify-center flex-shrink-0">
											<project.icon className="text-2xl text-rc-black" />
										</div>
										<div className="flex-1">
											<h3 className="text-2xl font-black mb-2 text-rc-white">{project.title}</h3>
											<p className="text-rc-text-secondary mb-4">{project.description}</p>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((tech, techIndex) => (
													<span key={techIndex} className="px-3 py-1 bg-rc-sea-green/20 text-rc-sea-green rounded-full text-sm font-medium">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
									
									<div className="space-y-4">
										<div className="flex items-center space-x-4 text-sm text-rc-text-secondary">
											<div className="flex items-center space-x-2">
												<HiCode className="w-4 h-4" />
												<span>Status: {project.status}</span>
											</div>
											<div className="flex items-center space-x-2">
												<HiUsers className="w-4 h-4" />
												<span>{project.teamSize}</span>
											</div>
										</div>
										
										<div className="flex flex-col sm:flex-row gap-3">
											{project.github && (
												<Link href={project.github} className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-6 py-3 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow flex items-center justify-center space-x-2">
													<FaGithub className="w-4 h-4" />
													<span>View on GitHub</span>
												</Link>
											)}
											{project.website && (
												<Link href={project.website} className="px-6 py-3 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
													<HiExternalLink className="w-4 h-4" />
													<span>Visit Website</span>
												</Link>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Get Involved Section */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-4xl mx-auto text-center">
						<div 
							data-animate-id="get-involved"
							className={`tech-card p-12 rounded-3xl transition-all duration-1000 ${isElementVisible('get-involved') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						>
							<h2 className="text-4xl md:text-6xl font-black mb-6">
								<span className="gradient-text animate-neon-glow">Get</span>
								<span className="text-rc-white"> Involved</span>
							</h2>
							<p className="text-xl text-rc-text-secondary mb-8">
								Want to contribute to our projects or start something new? Join our team and make a difference.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/team" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-8 py-4 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow">
									Meet Our Team
								</Link>
								<Link href="/contact" className="px-8 py-4 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</section>

				<FooterItem />
			</div>
		</>
	);
};

export default Projects; 