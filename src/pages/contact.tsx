import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import NeuralNetwork from "../components/NeuralNetwork";
import FooterItem from "../components/FooterItem";

import { BsDiscord } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaCopy, FaCheck } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiMail, HiPhone, HiLocationMarker, HiGlobe } from "react-icons/hi";

const Contact: NextPage = () => {
	const [copied, setCopied] = useState(false);
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

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<Head>
				<title>Contact | Rowdy Creators</title>
				<meta name="description" content="Get in touch with Rowdy Creators. Join our community of innovators and creators." />

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
								<span className="gradient-text animate-neon-glow">Get In</span>
								<span className="text-rc-white animate-slide-in-bottom" style={{animationDelay: '0.3s'}}> Touch</span>
							</h1>
							<p className="text-xl text-rc-text-secondary max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
								Ready to join our community? Have a question? Want to collaborate? We&apos;d love to hear from you.
							</p>
						</div>
					</div>
				</section>

				{/* Contact Methods */}
				<section className="py-20 px-4 lg:px-8 relative">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
							{/* Email */}
							<div 
								data-animate-id="contact-email"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('contact-email') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<HiMail className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-black text-rc-white mb-4">Email Us</h3>
								<p className="text-rc-text-secondary mb-6">Send us a message and we&apos;ll get back to you as soon as possible.</p>
								<Link href="mailto:team@rowdycreators.org" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-6 py-3 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow inline-flex items-center space-x-2">
									<IoIosMail className="w-4 h-4" />
									<span>Send Email</span>
								</Link>
							</div>

							{/* Discord */}
							<div 
								data-animate-id="contact-discord"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('contact-discord') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.2s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<BsDiscord className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-black text-rc-white mb-4">Join Our Discord</h3>
								<p className="text-rc-text-secondary mb-6">Connect with our community, ask questions, and stay updated on events.</p>
								<Link href="https://discord.gg/s9tpFJUPTy" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-6 py-3 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow inline-flex items-center space-x-2">
									<BsDiscord className="w-4 h-4" />
									<span>Join Server</span>
								</Link>
							</div>

							{/* Social Media */}
							<div 
								data-animate-id="contact-social"
								className={`tech-card p-8 rounded-2xl text-center transition-all duration-1000 ${isElementVisible('contact-social') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
								style={{transitionDelay: '0.4s'}}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-rc-sea-green to-rc-sea-green-light rounded-2xl mx-auto mb-6 flex items-center justify-center">
									<AiFillInstagram className="text-2xl text-rc-black" />
								</div>
								<h3 className="text-xl font-black text-rc-white mb-4">Follow Us</h3>
								<p className="text-rc-text-secondary mb-6">Stay connected with us on social media for updates and announcements.</p>
								<Link href="https://instagram.com/rowdycreators" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-6 py-3 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow inline-flex items-center space-x-2">
									<AiFillInstagram className="w-4 h-4" />
									<span>Follow on Instagram</span>
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

export default Contact;
