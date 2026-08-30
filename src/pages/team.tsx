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
			name: "Samantha Machado",
			role: "Director",
			bio: "I'm passionate about helping peers go beyond just learning, to actually building things that matter. Through Rowdy Creators, I'm working to create a space where people take initiative, collaborate, and walk away with projects they're proud to put on their resume. I care about keeping things real, being useful, and pushing everyone around me to do better.",
			avatar: "/img/team/samantha.png",
			email: "rowdycreatorsdirector@acmutsa.org",
			github: "https://github.com/SamMac55",
			linkedin: "https://www.linkedin.com/in/samantha-machado-b7b5a7329/",
			interests: ["AI", "Compilers", "Databases", "Research"],
			year: "Senior"
		},
		{
			id: 2,
			name: "Prince Patel",
			role: "Vice President",
			bio: "I am a Computer Science student (Math minor) at UTSA, also serving as a Soccer Chair for SHPE. I previously worked with five telescopes mapping a supernova remnant during a research internship. I also enjoys watching a soccer and am a die-Hard Real Madrid supporter",
			avatar: "/img/team/prince.png",
			email: "prince.patel@rowdycreators.org",
			github: "https://github.com/IMPr1nce",
			linkedin: "https://www.linkedin.com/in/ppatel9114/",
			interests: ["AI/ML", "Fullstack Development"],
			year: "Senior"
		},
		{
			id: 3,
			name: "Samuel Saylor",
			role: "Chief Projects Officer",
			bio: "I am a computer science & sofware engineering dual major and have been programming since I was eight. I've done many projects in my time and have programmed many things, including the update that put this years class onto this webpage!",
			avatar: "/img/team/me.png",
			email: "samuelsaylor2025@gmail.com",
			github: "https://github.com/SamuelSaylor",
			linkedin: "https://www.linkedin.com/in/samuel-saylor-319402382/",
			interests: ["Robotics", "Machine Learning", "Systems", "Game Development"],
			year: "Sophomore"
		},
		{
			id: 4,
			name: "Neil Parker",
			role: "PR Officer",
			bio: "Hello, I'm Neil. This is my second year at UTSA, and I'm currently pursuing a degree in computer science. In my free time, I enjoy playing video games, exercising, reading books, and exploring new hobbies.",
			avatar: "/img/team/neil.png",
			email: "N/A",
			github: "https://github.com/Rnparker007",
			linkedin: "https://www.linkedin.com/in/reginald-parker-404ab7381/",
			interests: ["Backend Development"],
			year: "Sophomore"
		},
		{
			id: 5,
			name: "Muhammad Baibars Zain Ul Abideen",
			role: "Project Advisor",
			bio: "I have expertise in AI and Full Stack Development, which brings experience across AI research, software engineering, data pipelines, and AI safety.",
			avatar: "/img/team/beib.png",
			email: "N/A",
			github: "https://github.com/MuhammadBaibarsZainUlAbideen",
			linkedin: "https://www.linkedin.com/in/mbaibarszainulabideen/",
			interests: ["AI", "Fullstack Development"],
			year: "Sophomore"
		},
		{
			id: 6,
			name: "Nicholas Powell",
			role: "Project Advisor",
			bio: "I'm from Austin, Texas, is in my second year studying Computer Science. I enjoy traveling, thrifting, and hanging out with friends.",
			avatar: "/img/team/nic.png",
			email: "N/A",
			github: "https://github.com/nicolaspowell",
			linkedin: "https://www.linkedin.com/in/nicolas-powell-a83645381/",
			interests: ["Game Development", "Web Development"],
			year: "Sophomore"
		},
		{
			id: 7,
			name: "Fredy Mata",
			role: "Project Advisor",
			bio: "I am a Project Advisors specializing in AI/Machine Learning, Reinforcement Learning, Continuous & Lifelong Learning, and Full-Stack Development!",
			avatar: "/img/team/fredy.png",
			email: "N/A",
			github: "https://github.com/fmata17",
			linkedin: "https://www.linkedin.com/in/fredy-mata/",
			interests: ["AI", "Reinforcement Learning", "Fullstack Development"],
			year: "Junior"
		},
		{
			id: 8,
			name: "Simon Teague",
			role: "Project Advisor",
			bio: "I am currently learning Spanish, loves watching movies, and recently traveled to China! I also enjoy running and working out. I recently watched The Odyssey and I highly recommend it. I am one of our Project Advisors specializing in Web Development, Developer Tooling, AI & Automation with agents (pi), and Infrastructure & Deployment!",
			email: "N/A",
			avatar: "/img/team/simon.png",
			github: "https://github.com/simonteague6",
			linkedin: "https://www.linkedin.com/in/simon-teague-596184381",
			interests: ["Web Development","Developer Tooling", "AI", "Infrastructure"],
			year: "Sophomore"
		},
		{
			id: 9,
			name: "Nathan Davies",
			role: "Project Advisor",
			bio: "I am a Project Advisors who specializes in  Game Development, Language Design,and Web Development!",
			avatar: "/img/team/nat.png",
			email: "N/A",
			github: "https://github.com/",
			linkedin: "www.linkedin.com/in/nathan-davies-21687b30b",
			interests: ["Game Development", "Language Design", "Website Development"],
			year: "Senior"
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
										<div className="w-20 h-20 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
											<img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
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