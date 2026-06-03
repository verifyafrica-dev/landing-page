import { Link, useNavigate } from "react-router-dom";

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
						<div className="flex items-center mb-4 sm:mb-6">
							<img
								src="https://storage.readdy-site.link/project_files/e867a79c-6ad4-431f-b9b4-472c3bcdc336/8195c097-6839-48ae-86dc-51bd07febc5a_ChatGPT_Image_Feb_9__2026__10_18_46_AM-removebg-preview.png?v=7367ed1f2953d9fa10cf29e8cd5c7ddc"
								alt="VerifyAfrica"
								title="VerifyAfrica – AI-Powered Compliance &amp; Identity Infrastructure for Africa"
								className="h-24 sm:h-28 lg:h-36 w-auto object-contain"
							/>
						</div>
						<p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
							AI-powered compliance and identity infrastructure for Africa.
						</p>
						<div className="flex space-x-3 sm:space-x-4">
							<a
								href="https://www.linkedin.com/company/verifyafrica"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors cursor-pointer"
								aria-label="LinkedIn"
							>
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://x.com/V3rifyAfrica"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors cursor-pointer"
								aria-label="Twitter"
							>
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="https://www.instagram.com/verifyafrica1/"
								target="_blank"
								rel="noopener noreferrer nofollow"
								className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors cursor-pointer"
								aria-label="Instagram"
							>
								<svg
									viewBox="0 0 24 24"
									className="w-4 h-4 sm:w-5 sm:h-5"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
								</svg>
							</a>
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
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to="/features"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Features
								</Link>
							</li>
							<li>
								<a
									href="/#pricing"
									onClick={(e) => handleAnchorClick(e, "/#pricing")}
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Pricing
								</a>
							</li>
							<li>
								<Link
									to="/docs"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
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
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									to="/privacy-policy"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									to="/data-disposal-policy"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
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
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/case-studies"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
								>
									Case Studies
								</Link>
							</li>
							<li>
								<Link
									to="/support"
									className="text-xs sm:text-sm hover:text-teal-400 transition-colors cursor-pointer"
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
