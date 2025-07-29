import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Navbar } from "../components/Navbar";
import NeuralNetwork from "../components/NeuralNetwork";

import { HiArrowDown, HiCode, HiChip, HiLightningBolt } from "react-icons/hi";

import ImageFactory from "../components/ImageFactory";
import FooterItem from "../components/FooterItem";

const Home: NextPage = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		setIsClient(true);
	}, []);

	return (
		<>
			<Head>
				<title>Rowdy Creators - Innovate. Build. Create.</title>
				<meta name="description" content="Rowdy Creators - Where innovation meets technology. Join our community of developers, creators, and innovators." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className="min-h-screen bg-rc-black text-rc-text overflow-x-hidden relative">
				{/* Global Background Effects */}
				<div className="fixed inset-0 pointer-events-none">
					{/* Gradient Background */}
					<div className="absolute inset-0 bg-gradient-to-br from-rc-black via-rc-dark to-rc-darker"></div>
					
					{/* Neural Network Background */}
					{isClient && <NeuralNetwork />}
					
					{/* Matrix Rain Effect */}
					{isClient && (
						<div className="absolute inset-0 opacity-5">
							{Array.from({ length: 40 }).map((_, i) => (
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
				<section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden pt-32">
					{/* Hero-specific Background Effects */}
					{isClient && (
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute top-20 left-10 w-72 h-72 bg-rc-sea-green rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
						<div className="absolute top-40 right-10 w-96 h-96 bg-rc-sea-green-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
						<div className="absolute bottom-20 left-1/2 w-80 h-80 bg-rc-sea-green-dark rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
					</div>
					)}
					
					<div className="relative z-10 text-center max-w-6xl mx-auto">
						<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							{/* Logo and Title */}
							<div className="mb-8">
								<h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 animate-bounce-in">
									<span className="gradient-text animate-neon-glow">Rowdy</span>
									<br />
									<span className="text-rc-white animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>Creators</span>
								</h1>
								<p className="text-xl md:text-2xl text-rc-text-secondary mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
									Where innovation meets technology. We build the future, one line of code at a time.
								</p>
							</div>
							
							{/* Tech Stack Preview */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
								<div className="tech-card p-6 rounded-xl text-center animate-scale-in" style={{animationDelay: '0.9s'}}>
									<div className="tech-card-content">
										<HiCode className="text-4xl text-rc-sea-green mx-auto mb-3 animate-rotate" style={{animationDuration: '8s'}} />
									<h3 className="text-lg font-semibold mb-2">Development</h3>
									<p className="text-rc-text-secondary text-sm">Full-stack development, mobile apps, and web solutions</p>
									</div>
								</div>
								<div className="tech-card p-6 rounded-xl text-center animate-scale-in" style={{animationDelay: '1.2s'}}>
									<div className="tech-card-content">
										<HiChip className="text-4xl text-rc-sea-green mx-auto mb-3 animate-pulse-glow" />
									<h3 className="text-lg font-semibold mb-2">Innovation</h3>
									<p className="text-rc-text-secondary text-sm">Cutting-edge technologies and creative problem solving</p>
									</div>
								</div>
								<div className="tech-card p-6 rounded-xl text-center animate-scale-in" style={{animationDelay: '1.5s'}}>
									<div className="tech-card-content">
										<HiLightningBolt className="text-4xl text-rc-sea-green mx-auto mb-3 animate-float" />
									<h3 className="text-lg font-semibold mb-2">Collaboration</h3>
									<p className="text-rc-text-secondary text-sm">Team-based projects and knowledge sharing</p>
									</div>
								</div>
							</div>
							
							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mb-16" style={{animationDelay: '1.8s'}}>
								<Link href="https://discord.gg/s9tpFJUPTy" className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-8 py-4 rounded-xl font-semibold text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow">
									Join Our Community
								</Link>
								<Link href="/projects" className="px-8 py-4 rounded-xl font-semibold border-2 border-rc-sea-green text-rc-sea-green hover:bg-rc-sea-green hover:text-rc-black transition-all duration-300 hover:scale-105">
									View Projects
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

export default Home;

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};
