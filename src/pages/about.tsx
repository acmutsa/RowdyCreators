import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { Navbar } from "../components/Navbar";
import FooterItem from "../components/FooterItem";

import { HiCode, HiChip, HiLightningBolt, HiUsers, HiAcademicCap, HiGlobe } from "react-icons/hi";
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

const About: NextPage = () => {
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

	return (
		<>
			<Head>
				<title>About Us | Rowdy Creators</title>
				<meta name="description" content="Learn about Rowdy Creators - a student organization at UTSA focused on innovation, technology, and collaboration." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className="min-h-screen bg-rc-black text-rc-text">
				{/* Background Effects */}
				<div className="fixed inset-0 matrix-bg opacity-50"></div>
				<div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-rc-black via-rc-dark to-rc-darker"></div>
				
				<Navbar theme="dark" />
				
				{/* Hero Section */}
				<section className="relative pt-40 pb-0 px-4 lg:px-8 overflow-hidden">
					{/* Enhanced Background Effects */}
					{isClient && (
						<div className="absolute inset-0 overflow-hidden">
							{/* Floating Particles */}
							{Array.from({ length: 10 }).map((_, i) => (
								<div
									key={i}
									className="absolute w-1 h-1 bg-rc-sea-green rounded-full opacity-20 animate-float"
									style={{
										left: `${Math.random() * 100}%`,
										top: `${Math.random() * 100}%`,
										animationDelay: `${Math.random() * 3}s`,
										animationDuration: `${3 + Math.random() * 4}s`
									}}
								/>
							))}
						</div>
					)}
					
					<div className="max-w-6xl mx-auto text-center relative z-10">
						<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h1 className="text-5xl md:text-7xl font-black mb-6 animate-bounce-in">
								<span className="gradient-text animate-neon-glow">About</span>
								<span className="text-rc-white animate-slide-in-bottom" style={{animationDelay: '0.3s'}}> Us</span>
							</h1>
							<p className="text-xl text-rc-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
								We are a community of innovators, creators, and problem-solvers at the University of Texas at San Antonio.
							</p>
						</div>
					</div>
				</section>

				{/* Mission Section */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div 
								data-animate-id="mission-content"
								className={`transition-all duration-1000 ${isElementVisible('mission-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
							>
								<h2 className="text-4xl md:text-5xl font-black mb-6">
									<span className="gradient-text animate-neon-glow">Our</span>
									<span className="text-rc-white"> Mission</span>
								</h2>
								<p className="text-lg text-rc-text-secondary mb-6">
									Rowdy Creators exists to foster innovation, collaboration, and technical excellence among students at UTSA. We believe in the power of technology to solve real-world problems and create meaningful change.
								</p>
								<p className="text-lg text-rc-text-secondary mb-8">
									Our community brings together students from diverse backgrounds and skill levels to work on cutting-edge projects, develop practical skills, and build lasting connections in the tech industry.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<Link href="/projects" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-8 py-4 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow">
										View Our Projects
									</Link>
									<Link href="/team" className="px-8 py-4 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105">
										Meet Our Team
									</Link>
								</div>
							</div>
							<div 
								data-animate-id="mission-cards"
								className={`transition-all duration-1000 ${isElementVisible('mission-cards') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
							>
								<div className="tech-card p-8 rounded-2xl">
									<div className="grid grid-cols-2 gap-6">
										<div className="text-center">
											<HiCode className="text-4xl text-rc-sea-green mx-auto mb-3 animate-rotate" style={{animationDuration: '8s'}} />
											<h3 className="text-lg font-semibold mb-2">Development</h3>
											<p className="text-rc-text-secondary text-sm">Full-stack development, mobile apps, and web solutions</p>
										</div>
										<div className="text-center">
											<HiChip className="text-4xl text-rc-sea-green mx-auto mb-3 animate-rotate" style={{animationDuration: '8s'}} />
											<h3 className="text-lg font-semibold mb-2">AI & ML</h3>
											<p className="text-rc-text-secondary text-sm">Machine learning, data science, and artificial intelligence</p>
										</div>
										<div className="text-center">
											<HiLightningBolt className="text-4xl text-rc-sea-green mx-auto mb-3 animate-rotate" style={{animationDuration: '8s'}} />
											<h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
											<p className="text-rc-text-secondary text-sm">Ethical hacking, CTF competitions, and security research</p>
										</div>
										<div className="text-center">
											<HiUsers className="text-4xl text-rc-sea-green mx-auto mb-3 animate-rotate" style={{animationDuration: '8s'}} />
											<h3 className="text-lg font-semibold mb-2">Collaboration</h3>
											<p className="text-rc-text-secondary text-sm">Team projects, mentorship, and community building</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* What We Do Section */}
				<section className="py-20 px-4 lg:px-8 relative bg-rc-darker">
					<div className="max-w-7xl mx-auto">
						<div 
							data-animate-id="what-we-do-header"
							className={`text-center mb-16 transition-all duration-1000 ${isElementVisible('what-we-do-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
						>
							<h2 className="text-4xl md:text-5xl font-black mb-6">
								<span className="gradient-text">What We</span>
								<span className="text-rc-white"> Do</span>
							</h2>
							<p className="text-xl text-rc-text-secondary max-w-3xl mx-auto">
								From hackathons to research projects, we provide opportunities for students to grow and innovate
							</p>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div 
								data-animate-id="activity-1"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.1s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiCode className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Project Development</h3>
								<p className="text-rc-text-secondary">
									Work on real-world projects that solve actual problems. From web applications to mobile apps, we build solutions that matter.
								</p>
							</div>
							
							<div 
								data-animate-id="activity-2"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.2s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiAcademicCap className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Learning & Workshops</h3>
								<p className="text-rc-text-secondary">
									Regular workshops, tutorials, and learning sessions to help members develop new skills and stay current with technology trends.
								</p>
							</div>
							
							<div 
								data-animate-id="activity-3"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.3s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiGlobe className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Networking</h3>
								<p className="text-rc-text-secondary">
									Connect with industry professionals, alumni, and fellow students. Build your network and discover career opportunities.
								</p>
							</div>
							
							<div 
								data-animate-id="activity-4"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.4s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiLightningBolt className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Hackathons</h3>
								<p className="text-rc-text-secondary">
									Participate in and organize hackathons where creativity meets technology. Build amazing projects in 24-48 hours.
								</p>
							</div>
							
							<div 
								data-animate-id="activity-5"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.5s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiChip className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Research</h3>
								<p className="text-rc-text-secondary">
									Engage in cutting-edge research projects, from AI/ML to cybersecurity, and contribute to academic advancement.
								</p>
							</div>
							
							<div 
								data-animate-id="activity-6"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('activity-6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.6s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiUsers className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-bold text-rc-white mb-4">Mentorship</h3>
								<p className="text-rc-text-secondary">
									Get mentored by experienced members and alumni, or become a mentor yourself to help others grow.
								</p>
							</div>
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
								<span className="gradient-text">Get</span>
								<span className="text-rc-white"> Involved</span>
							</h2>
							<p className="text-xl text-rc-text-secondary mb-8">
								Ready to make a difference? Explore our projects, meet our team, or get in touch to learn more.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link 
									href="/projects" 
									className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-8 py-4 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow"
								>
									View Projects
								</Link>
								<Link 
									href="/contact" 
									className="px-8 py-4 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105"
								>
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

export default About; 