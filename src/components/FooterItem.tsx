import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaInstagram, FaHeart } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const FooterItem: FunctionComponent = () => {
	const [currentYear, setCurrentYear] = useState('');

	useEffect(() => {
		setCurrentYear(new Date().getFullYear().toString());
	}, []);

	return (
		<footer className="bg-rc-darker border-t border-rc-gray relative z-10 w-full min-h-[200px] shadow-2xl">
			{/* Footer Background Overlay */}
			<div className="absolute inset-0 bg-rc-darker opacity-95"></div>
			<div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="flex items-center space-x-3 mb-6">
							<div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
								<Image 
									src="/img/logo.png" 
									alt="Rowdy Creators Logo" 
									width={40} 
									height={40}
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold text-rc-white">Rowdy Creators</h3>
								<p className="text-rc-text-secondary text-sm">Innovate. Build. Create.</p>
							</div>
						</div>
						<p className="text-rc-text-secondary mb-6 max-w-md">
							Where innovation meets technology. We build the future, one line of code at a time. 
							Join our community of developers, creators, and innovators.
						</p>
						<div className="flex space-x-4 mb-6">
							<a 
								href="https://github.com/rowdycreators" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-rc-gray rounded-lg flex items-center justify-center text-rc-text-secondary hover:text-rc-sea-green hover:bg-rc-light-gray transition-all duration-300"
							>
								<FaGithub className="w-5 h-5" />
							</a>
							<a 
								href="https://twitter.com/rowdycreators" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-rc-gray rounded-lg flex items-center justify-center text-rc-text-secondary hover:text-rc-sea-green hover:bg-rc-light-gray transition-all duration-300"
							>
								<FaTwitter className="w-5 h-5" />
							</a>
							<a 
								href="https://www.instagram.com/rowdycreators/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="w-10 h-10 bg-rc-gray rounded-lg flex items-center justify-center text-rc-text-secondary hover:text-rc-sea-green hover:bg-rc-light-gray transition-all duration-300"
							>
								<FaInstagram className="w-5 h-5" />
							</a>
						</div>
							<a 
								href="https://discord.gg/3mWaepQgQj" 
								target="_blank" 
								rel="noopener noreferrer"
							className="bg-gradient-to-r from-rc-sea-green to-rc-sea-green-light px-6 py-3 rounded-xl font-semibold inline-block text-rc-black hover:scale-105 transition-all duration-300 hover:animate-pulse-glow"
							>
							Want to join the org? Click here
							</a>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold text-rc-white mb-4">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<Link href="/about" className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/projects" className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300">
									Our Projects
								</Link>
							</li>
							<li>
								<Link href="/team" className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300">
									Our Team
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300">
									Contact
								</Link>
							</li>
							<li>
								<a 
									href="https://acmutsa.org/" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300"
								>
									ACM UTSA
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold text-rc-white mb-4">Get Involved</h4>
						<ul className="space-y-3">
							<li>
								<a 
									href="https://github.com/rowdycreators" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300 flex items-center"
								>
									<FaGithub className="mr-2" />
									GitHub
								</a>
							</li>
							<li>
								<a 
									href="mailto:contact@rowdycreators.org" 
									className="text-rc-text-secondary hover:text-rc-sea-green transition-colors duration-300"
								>
									contact@rowdycreators.org
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-rc-gray bg-rc-black relative z-10">
				<div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 relative z-10">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="flex items-center space-x-2 text-rc-text-secondary text-sm">
							<HiCode className="text-rc-sea-green" />
							<span>Made with</span>
							<FaHeart className="text-red-500 animate-pulse" />
							<span>by Rowdy Creators</span>
						</div>
						<div className="text-rc-text-secondary text-sm text-center md:text-right">
							© {currentYear || '2024'} Rowdy Creators & Association of Computing Machinery at UTSA. All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterItem;
