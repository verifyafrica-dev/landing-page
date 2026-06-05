import { Link, useNavigate } from "react-router-dom";
import { Logo } from "@/components/icons/brand/logo";
import { Button } from "@/components/ui/button";
import {
	InstagramLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
	type Icon,
} from "@phosphor-icons/react";

const socialLinks: {
	href: string;
	label: string;
	icon: Icon;
}[] = [
	{
		href: "https://www.linkedin.com/company/verifyafrica",
		label: "LinkedIn",
		icon: LinkedinLogoIcon,
	},
	{
		href: "https://x.com/V3rifyAfrica",
		label: "X (Twitter)",
		icon: XLogoIcon,
	},
	{
		href: "https://www.instagram.com/verifyafrica_official",
		label: "Instagram",
		icon: InstagramLogoIcon,
	},
];

export default function Footer() {
	const navigate = useNavigate();

	const handleAnchorClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string,
	) => {
		e.preventDefault();
		const [route, hash] = path.split("#");

		if (
			window.location.pathname === route ||
			(route === "/" && window.location.pathname === "/")
		) {
			// Same page - just scroll to element
			if (hash) {
				const element = document.getElementById(hash);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}
		} else {
			// Different page - navigate first, then scroll
			navigate(route || "/");
			if (hash) {
				setTimeout(() => {
					const element = document.getElementById(hash);
					if (element) {
						element.scrollIntoView({ behavior: "smooth", block: "start" });
					}
				}, 100);
			}
		}
	};

	return (
		<footer className="bg-secondary text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
					<div className="col-span-2 md:col-span-2 lg:col-span-1">
						<Link
							to="/"
							className="flex items-center mb-4 sm:mb-6 group"
						>
							<Logo
								textColor="#FFFFFF"
								className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
								aria-label="VerifyAfrica – AI-Powered Compliance & Identity Infrastructure for Africa"
								role="img"
							/>
						</Link>
						<p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
							AI-powered compliance and identity infrastructure for Africa.
						</p>
						<div className="flex gap-3 sm:gap-4">
							{socialLinks.map((social) => {
								const SocialIcon = social.icon;
								return (
									<Button
										key={social.href}
										variant="secondary"
										size="icon"
										asChild
										className="size-9 sm:size-10 bg-gray-800 text-gray-300 hover:bg-gray-800/30 hover:text-white shrink-0"
									>
										<a
											href={social.href}
											target="_blank"
											rel="noopener noreferrer nofollow"
											aria-label={social.label}
										>
											<SocialIcon
												className="size-4 sm:size-5"
												weight="fill"
												aria-hidden
											/>
										</a>
									</Button>
								);
							})}
						</div>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Company
						</h3>
						<ul className="space-y-2 sm:space-y-3">
							<li>
								<Link
									to="/about"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/features"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Features
								</Link>
							</li>
							<li>
								<a
									href="/#pricing"
									onClick={(e) => handleAnchorClick(e, "/#pricing")}
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Pricing
								</a>
							</li>
							<li>
								<Link
									to="/docs"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									API Docs
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Legal
						</h3>
						<ul className="space-y-2 sm:space-y-3">
							<li>
								<Link
									to="/cookie-policy"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									to="/privacy-policy"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									to="/data-disposal-policy"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Data Disposal Policy
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
							Resources
						</h3>
						<ul className="space-y-2 sm:space-y-3">
							<li>
								<Link
									to="/blog"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/case-studies"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Case Studies
								</Link>
							</li>
							<li>
								<Link
									to="/support"
									className="text-xs sm:text-sm hover:font-semibold duration-200 ease-in-out cursor-pointer"
								>
									Support
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
					<p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
						© 2026 VerifyAfrica. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
