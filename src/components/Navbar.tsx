import { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiHome, HiInformationCircle, HiFolderOpen, HiUsers, HiMail, HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/router";

interface navProps {
	theme: "dark" | "light";
}

export const Navbar: FunctionComponent<navProps> = ({ theme }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const isActive = (path: string) => router.pathname === path;

	return (
		<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
			scrolled 
				? 'backdrop-blur-2xl bg-rc-black/95 border-b border-rc-sea-green/40 shadow-2xl shadow-rc-sea-green/20' 
				: 'bg-transparent'
		}`}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 group">
						<div className="relative">
							<div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
								<Image 
									src="/img/logo.png" 
									alt="Rowdy Creators Logo" 
									width={64} 
									height={64}
									className="transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
						</div>
						<div className="hidden sm:block">
							<h1 className="text-xl font-black text-rc-white group-hover:text-rc-sea-green transition-colors duration-300">
								Rowdy Creators
							</h1>
							<p className="text-xs text-rc-text-secondary group-hover:text-rc-sea-green/80 transition-colors duration-300">Design. Develop. Deploy.</p>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-1">
						<Link 
							href="/" 
							className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium relative group ${
								isActive('/') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
						>
							<HiHome className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-sm font-medium transition-all duration-500 group-hover:text-rc-sea-green">Home</span>
						</Link>
						<Link 
							href="/about" 
							className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium relative group ${
								isActive('/about') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
						>
							<HiInformationCircle className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-sm font-medium transition-all duration-500 group-hover:text-rc-sea-green">About</span>
						</Link>
						<Link 
							href="/projects" 
							className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium relative group ${
								isActive('/projects') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
						>
							<HiFolderOpen className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-sm font-medium transition-all duration-500 group-hover:text-rc-sea-green">Projects</span>
						</Link>
						<Link 
							href="/team" 
							className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium relative group ${
								isActive('/team') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
						>
							<HiUsers className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-sm font-medium transition-all duration-500 group-hover:text-rc-sea-green">Team</span>
						</Link>
						<Link 
							href="/contact" 
							className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium relative group ${
								isActive('/contact') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
						>
							<HiMail className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-sm font-medium transition-all duration-500 group-hover:text-rc-sea-green">Contact</span>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden relative p-2 rounded-lg text-rc-sea-green hover:bg-rc-sea-green/20 transition-all duration-500 group"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<div className="relative">
						{menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
							<div className="absolute inset-0 bg-rc-sea-green/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
						</div>
					</button>
				</div>

				{/* Mobile Navigation */}
				<div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-700 ease-in-out overflow-hidden ${
					menuOpen 
						? 'max-h-96 opacity-100 visible' 
						: 'max-h-0 opacity-0 invisible'
				}`}>
					<div className={`py-4 space-y-2 border-t border-rc-sea-green/40 shadow-2xl transition-all duration-700 ease-in-out px-6 lg:px-8 ${
						menuOpen 
							? 'bg-rc-black/90' 
							: 'bg-rc-black/0'
					}`}>
						<Link 
							href="/" 
							className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium ${
								isActive('/') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
							onClick={() => setMenuOpen(false)}
						>
							<HiHome className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-base font-medium transition-all duration-500 group-hover:text-rc-sea-green">Home</span>
						</Link>
						<Link 
							href="/about" 
							className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium ${
								isActive('/about') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
							onClick={() => setMenuOpen(false)}
						>
							<HiInformationCircle className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-base font-medium transition-all duration-500 group-hover:text-rc-sea-green">About</span>
						</Link>
						<Link 
							href="/projects" 
							className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium ${
								isActive('/projects') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
							onClick={() => setMenuOpen(false)}
						>
							<HiFolderOpen className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-base font-medium transition-all duration-500 group-hover:text-rc-sea-green">Projects</span>
						</Link>
						<Link 
							href="/team" 
							className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium ${
								isActive('/team') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
							onClick={() => setMenuOpen(false)}
						>
							<HiUsers className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-base font-medium transition-all duration-500 group-hover:text-rc-sea-green">Team</span>
						</Link>
						<Link 
							href="/contact" 
							className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-rc-text-secondary hover:text-rc-white transition-all duration-500 font-medium ${
								isActive('/contact') ? 'text-rc-sea-green bg-rc-sea-green/20 backdrop-blur-sm shadow-lg shadow-rc-sea-green/30 border border-rc-sea-green/40' : ''
							}`}
							onClick={() => setMenuOpen(false)}
						>
							<HiMail className="w-5 h-5 transition-all duration-500 group-hover:scale-110 group-hover:text-rc-sea-green" />
							<span className="text-base font-medium transition-all duration-500 group-hover:text-rc-sea-green">Contact</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
