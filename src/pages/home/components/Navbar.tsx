import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { smoothScrollTo } from "../../../hooks/useScrollAnimation";
import { HoverUnderline } from "@/components/ui/hover-underline";
import { Button } from "@/components/ui/button";
import { LOGO_TEXT_COLOR, Logo } from "@/components/icons/brand/logo";
import { cn } from "@/lib/utils";
import { ListIcon, XIcon } from "@phosphor-icons/react";

interface NavbarProps {
	onRequestDemo: () => void;
	/** `transparent` — white text over hero until scroll; `solid` — dark text and white bg from the start */
	variant?: "transparent" | "solid";
}

const navItems = [
	{ href: "/features", label: "Features", isLink: true },
	{ href: "https://docs.verifyafrica.io", label: "API Docs" },
	{ href: "#pricing", label: "Pricing" },
	{ href: "/about", label: "About", isLink: true },
];

export default function HomeNavbar({
	onRequestDemo,
	variant = "transparent",
}: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const isHomePage = location.pathname === "/";

	useEffect(() => {
		setTimeout(() => setIsVisible(true), 100);
		const handleScroll = () => setIsScrolled(window.scrollY > 120);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location]);

	useEffect(() => {
		if (location.hash) {
			let attempts = 0;
			const maxAttempts = 20;
			const tryScroll = () => {
				const element = document.querySelector(location.hash);
				if (element) {
					smoothScrollTo(location.hash, {
						duration: 1200,
						easing: "easeInOutQuart",
						offset: -80,
					});
				} else if (attempts < maxAttempts) {
					attempts++;
					setTimeout(tryScroll, 200);
				}
			};
			setTimeout(tryScroll, 150);
		}
	}, [location]);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMobileMenuOpen]);

	const showSolidBg = isScrolled || isMobileMenuOpen;
	const showNavShadow = isScrolled;
	const useSolidText = variant === "solid" || showSolidBg;
	const isTransparentNav = variant === "transparent" && !showSolidBg;

	const handleHashClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		setIsMobileMenuOpen(false);
		if (isHomePage) {
			smoothScrollTo(href, {
				duration: 1200,
				easing: "easeInOutQuart",
				offset: -80,
			});
		} else {
			navigate("/" + href);
		}
	};

	const handleMobileItemClick = (
		href: string,
		isLink?: boolean,
		isExternal?: boolean,
	) => {
		setIsMobileMenuOpen(false);
		if (isExternal) {
			window.open(href, "_blank", "noopener,noreferrer");
		} else if (isLink) {
			navigate(href);
		} else if (isHomePage) {
			setTimeout(() => {
				smoothScrollTo(href, {
					duration: 1200,
					easing: "easeInOutQuart",
					offset: -80,
				});
			}, 320);
		} else {
			navigate("/" + href);
		}
	};

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
					showSolidBg
						? `bg-white backdrop-blur-md ${showNavShadow ? "shadow-lg shadow-black/5" : "shadow-none"}`
						: "bg-transparent shadow-none"
				} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
					<div className="relative flex items-center justify-between h-16 sm:h-20  overflow-hidden lg:overflow-visible">
						{/* Logo */}
						<Link
							to="/"
							className="flex items-center group shrink-0"
						>
							<Logo
								textColor={isTransparentNav ? "#FFFFFF" : LOGO_TEXT_COLOR}
								className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
								aria-label="VerifyAfrica – KYC, AML & Identity Verification Platform for Africa"
								role="img"
							/>
						</Link>

						{/* Desktop Nav Links — centered absolutely so they sit in the true middle */}
						<div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 pointer-events-none lg:pointer-events-auto">
							{navItems.map((item, index) =>
								item.href.startsWith("http") ? (
									<a
										key={item.href}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group cursor-pointer font-medium ${
											useSolidText ? "text-gray-700" : "text-white/90"
										}`}
										style={{
											opacity: isVisible ? 1 : 0,
											transform: isVisible
												? "translateY(0)"
												: "translateY(-10px)",
											transition: `all 0.4s ease-out ${200 + index * 50}ms`,
										}}
									>
										{item.label}
										<HoverUnderline />
									</a>
								) : "isAnchor" in item && item.isAnchor ? (
									<a
										key={item.href}
										href={item.href}
										className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group font-medium ${
											useSolidText ? "text-gray-700" : "text-white/90"
										}`}
										style={{
											opacity: isVisible ? 1 : 0,
											transform: isVisible
												? "translateY(0)"
												: "translateY(-10px)",
											transition: `all 0.4s ease-out ${200 + index * 50}ms`,
										}}
									>
										{item.label}
										<HoverUnderline />
									</a>
								) : item.isLink ? (
									<Link
										key={item.href}
										to={item.href}
										className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group font-medium ${
											useSolidText ? "text-gray-700" : "text-white/90"
										}`}
										style={{
											opacity: isVisible ? 1 : 0,
											transform: isVisible
												? "translateY(0)"
												: "translateY(-10px)",
											transition: `all 0.4s ease-out ${200 + index * 50}ms`,
										}}
									>
										{item.label}
										<HoverUnderline />
									</Link>
								) : (
									<a
										key={item.href}
										href={item.href}
										onClick={(e) => handleHashClick(e, item.href)}
										className={`relative text-sm font-medium transition-all duration-300 hover:text-teal-500 group cursor-pointer ${
											useSolidText ? "text-gray-700" : "text-white/90"
										}`}
										style={{
											opacity: isVisible ? 1 : 0,
											transform: isVisible
												? "translateY(0)"
												: "translateY(-10px)",
											transition: `all 0.4s ease-out ${200 + index * 50}ms`,
										}}
									>
										{item.label}
										<HoverUnderline />
									</a>
								),
							)}
						</div>

						{/* Desktop CTA */}
						<div
							className="hidden lg:flex items-center space-x-4"
							style={{
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "translateY(0)" : "translateY(-10px)",
								transition: "all 0.4s ease-out 500ms",
							}}
						>
							<Button
								variant="outline"
								asChild
								className={cn(
									"h-auto px-5 py-2.5 whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer",
									isTransparentNav
										? " bg-transparent text-white hover:border-white/60 hover:bg-white/10 hover:text-white"
										: "t",
								)}
							>
								<a
									href="https://dashboard.verifyafrica.io/login"
									target="_blank"
									rel="noopener noreferrer"
								>
									Explore Dashboard
								</a>
							</Button>
							<Button
								onClick={onRequestDemo}
								className="h-auto px-5 py-2.5 bg-teal-500 text-white font-medium hover:bg-teal-600 cursor-pointer"
							>
								Request Demo
							</Button>
						</div>

						{/* Mobile right-side controls */}
						<div className="flex lg:hidden items-center gap-2">
							<Button
								onClick={onRequestDemo}
								size="sm"
								className="h-auto px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-500 text-white hover:bg-teal-600 text-xs sm:text-sm cursor-pointer"
							>
								Demo
							</Button>
							<Button
								variant="outline"
								size="icon"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								aria-label="Toggle menu"
								className={`size-9 sm:size-10 cursor-pointer ${
									isTransparentNav
										? "text-white bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm hover:text-white"
										: "text-gray-800 bg-gray-100 hover:bg-gray-200 border-transparent"
								}`}
							>
								{isMobileMenuOpen ? (
									<XIcon
										className="text-xl sm:text-2xl"
										aria-hidden
									/>
								) : (
									<ListIcon
										className="text-xl sm:text-2xl"
										aria-hidden
									/>
								)}
							</Button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile overlay */}
			<div
				className={`fixed inset-0 bg-gray-900/50 z-40 lg:hidden transition-opacity duration-300 ${
					isMobileMenuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsMobileMenuOpen(false)}
			/>

			{/* Mobile drawer */}
			<div
				className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden overflow-y-auto transition-transform duration-300 ease-out ${
					isMobileMenuOpen
						? "translate-y-0 visible"
						: "-translate-y-full invisible pointer-events-none"
				}`}
			>
				<div className="px-6 py-8 space-y-2">
					{navItems.map((item) =>
						item.href.startsWith("http") ? (
							<a
								key={item.href}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setIsMobileMenuOpen(false)}
								className="block px-4 py-4 text-lg font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all cursor-pointer"
							>
								{item.label}
							</a>
						) : "isAnchor" in item && item.isAnchor ? (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block px-4 py-4 text-lg font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all cursor-pointer"
							>
								{item.label}
							</a>
						) : item.isLink ? (
							<Link
								key={item.href}
								to={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block px-4 py-4 text-lg font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all cursor-pointer"
							>
								{item.label}
							</Link>
						) : (
							<button
								key={item.href}
								onClick={() => handleMobileItemClick(item.href, false, false)}
								className="w-full text-left px-4 py-4 text-lg font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition-all cursor-pointer"
							>
								{item.label}
							</button>
						),
					)}

					<div className="pt-6 mt-4 border-t border-gray-200 space-y-4">
						<Button
							variant="outline"
							asChild
							className="w-full h-auto py-3 px-6 text-base font-medium text-gray-700 border-gray-300 hover:border-teal-400 hover:text-teal-600 cursor-pointer"
						>
							<a
								href="https://dashboard.verifyafrica.io/login"
								target="_blank"
								rel="noopener noreferrer"
							>
								Login
							</a>
						</Button>
						<Button
							className="w-full h-auto py-3 px-6 bg-teal-500 text-white text-base font-medium hover:bg-teal-600 cursor-pointer"
							onClick={() => {
								setIsMobileMenuOpen(false);
								onRequestDemo();
							}}
						>
							Request Demo
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
