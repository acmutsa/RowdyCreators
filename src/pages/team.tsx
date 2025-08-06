import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { Navbar } from "../components/Navbar";
import NeuralNetwork from "../components/NeuralNetwork";
import FooterItem from "../components/FooterItem";

import { HiMail, HiGlobe, HiAcademicCap, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const Team: NextPage = () => {
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

	const teamMembers = [
		{
			id: 1,
			name: "Yash Verma",
			role: "Director",
			bio: "I'm passionate about helping students go beyond just learning, to actually building things that matter. Through Rowdy Creators, I'm working to create a space where people take initiative, collaborate, and walk away with projects they're proud to put on their resume. I care about keeping things real, being useful, and pushing everyone around me to do better.",
			avatar: "YV",
			email: "yash@yash-verma.com",
			github: "https://github.com/yash-yv-verma",
			linkedin: "https://www.linkedin.com/in/-yv/",
			interests: ["AI", "Cloud Computing", "Quantum Computing", "Developer Advocacy"],
			year: "Senior"
		},
		{
			id: 2,
			name: "Carlos Lopez",
			role: "Vice President",
			bio: "I like turning my ideas to reality using code :D",
			avatar: "CL",
			email: "carlos.lopez3@my.utsa.edu",
			github: "https://github.com/carloslopezjr",
			linkedin: "https://www.linkedin.com/in/carloslopezjr19/",
			interests: ["AI", "Hardware", "Building projects"],
			year: "Senior"
		},
		{
			id: 3,
			name: "Matthew Thomas Beck",
			role: "Chief Technical Officer",
			bio: "I am a senior CS major who enjoys building my own solutions and getting the job done",
			avatar: "MTB",
			email: "matthewthomasbeck@gmail.com",
			github: "https://github.com/matthewthomasbeck",
			linkedin: "https://www.linkedin.com/in/matthewthomasbeck",
			interests: ["Robotics", "Machine Learning", "Linux System Administration"],
			year: "Senior"
		},
		{
			id: 4,
			name: "Jacob Nyberg",
			role: "Project Design Officer",
			bio: "Cybersecurity student and tutor from Sweden. Deep roots in low-level software and system administration.",
			avatar: "JN",
			email: "jacob.nyberg@rowdycreators.org",
			github: "https://github.com/xarvex",
			linkedin: "https://linkedin.com/in/xarvex",
			interests: ["Cybersecurity", "System Administration", "Low-level Programming"],
			year: "Senior"
		},
		{
			id: 5,
			name: "Jose A. Jimenez",
			role: "Retention Officer",
			bio: "I am a CS major who likes to play games and to do outdoor activities.",
			avatar: "JAJ",
			email: "jose.jimenez9@my.utsa.edu",
			github: "https://github.com/JJimenez414",
			linkedin: "https://www.linkedin.com/in/jose-angel-jimenez-537421290/",
			interests: ["Computer Science", "Machine Learning", "Running", "Learning"],
			year: "Senior"
		},
		{
			id: 6,
			name: "Sarada Varshini Sivasailam",
			role: "Media Officer",
			bio: "I'm a freshman Computer Science major with a passion for cybersecurity, digital privacy, and creative tech.",
			avatar: "SS",
			email: "workwithsarada@gmail.com",
			github: "https://github.com/sarada-sivasailam",
			linkedin: "https://www.linkedin.com/in/sarada-sivasailam",
			interests: ["Computer Science", "Cybersecurity", "Content Creation"],
			year: "Freshman"
		},
		{
			id: 7,
			name: "Diego Rodriguez",
			role: "Public Relations Officer",
			bio: "I am a junior majoring in Computer Science with a concentration in Data Science. I am highly interested in AI/ML and potential looking into doing research.",
			avatar: "DR",
			email: "diegordzx4521@gmail.com",
			github: "https://github.com/Diegox4521",
			linkedin: "https://linkedin.com/in/diego-rodriguezx4521",
			interests: ["AI/ML", "Data Science"],
			year: "Junior"
		},
	];

	return (
		<>
			<Head>
				<title>Our Team | Rowdy Creators</title>
				<meta name="description" content="Meet the passionate team behind Rowdy Creators - dedicated to innovation, collaboration, and building the future." />

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
								<span className="gradient-text animate-neon-glow">Meet Our</span>
								<span className="text-rc-white animate-slide-in-bottom" style={{animationDelay: '0.3s'}}> Team</span>
							</h1>
							<p className="text-xl text-rc-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
								Get to know the passionate individuals who drive innovation and creativity at Rowdy Creators.
							</p>
						</div>
					</div>
				</section>

				{/* Team Members Grid */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<div 
									key={member.id} 
									data-animate-id={`member-${member.id}`}
									className={`tech-card p-8 rounded-2xl transition-all duration-1000 ${isElementVisible(`member-${member.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
									style={{transitionDelay: `${index * 0.1}s`}}
								>
									<div className="text-center mb-6">
										<div className="w-20 h-20 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-full mx-auto mb-4 flex items-center justify-center">
											<span className="text-2xl font-black text-rc-black">{member.avatar}</span>
										</div>
										<h3 className="text-xl font-black text-rc-white mb-2">{member.name}</h3>
										<p className="text-rc-sea-green font-semibold mb-1">{member.role}</p>
										<p className="text-sm text-rc-text-secondary">{member.year}</p>
									</div>
									
									<p className="text-rc-text-secondary mb-6 text-center">{member.bio}</p>
									
									<div className="mb-6">
										<h4 className="text-sm font-semibold text-rc-white mb-3">Interests</h4>
										<div className="flex flex-wrap gap-2 justify-center">
											{member.interests.map((interest, interestIndex) => (
												<span key={interestIndex} className="px-3 py-1 bg-rc-sea-green/20 text-rc-sea-green rounded-full text-sm">
													{interest}
												</span>
											))}
										</div>
									</div>
									
									<div className="flex justify-center space-x-3">
										<Link href={`mailto:${member.email}`} className="p-2 bg-rc-sea-green/20 text-rc-sea-green rounded-lg hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300">
											<HiMail className="w-5 h-5" />
										</Link>
										{member.github && (
											<Link href={member.github} className="p-2 bg-rc-sea-green/20 text-rc-sea-green rounded-lg hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300">
												<FaGithub className="w-5 h-5" />
											</Link>
										)}
										{member.linkedin && (
											<Link href={member.linkedin} className="p-2 bg-rc-sea-green/20 text-rc-sea-green rounded-lg hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300">
												<FaLinkedin className="w-5 h-5" />
											</Link>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Leadership Opportunities Section */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-4xl mx-auto text-center">
						<div 
							data-animate-id="leadership-opportunities"
							className={`tech-card p-12 rounded-3xl transition-all duration-1000 ${isElementVisible('leadership-opportunities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						>
							<h2 className="text-4xl md:text-6xl font-black mb-6">
								<span className="gradient-text animate-neon-glow">Leadership</span>
								<span className="text-rc-white"> Opportunities</span>
							</h2>
							<p className="text-xl text-rc-text-secondary mb-8">
								Interested in taking on a leadership role? We&apos;re always looking for passionate individuals to help guide our organization.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/projects" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-8 py-4 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow">
									View Projects
								</Link>
								<Link href="/contact" className="px-8 py-4 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105">
									Get In Touch
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

export default Team; 