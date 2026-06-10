import { useState } from "react";
import { countriesServed, regions } from "../../../mocks/caseStudies";
import { ShieldCheckIcon, XIcon } from "@phosphor-icons/react";

interface CountryModalProps {
	country: (typeof countriesServed)[0] | null;
	onClose: () => void;
}

function CountryModal({ country, onClose }: CountryModalProps) {
	if (!country) return null;

	return (
		<div
			className="fixed inset-0 bg-gray-900/60 flex items-center justify-center z-50 p-4"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
				>
					<XIcon className="text-2xl" />
				</button>

				<div className="flex items-center gap-4 mb-6">
					<img
						src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
						alt={`${country.name} flag`}
						className="w-20 h-14 object-cover rounded-lg shadow-md"
					/>
					<div>
						<h3 className="text-2xl font-bold text-secondary">
							{country.name}
						</h3>
						<p className="text-sm text-gray-500">{country.region}</p>
					</div>
				</div>

				<div>
					<h4 className="text-lg font-semibold text-secondary mb-4">
						Supported ID Types
					</h4>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{country.idTypes.map((idType, index) => (
							<div
								key={index}
								className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg border border-teal-100"
							>
								<div className="w-8 h-8 flex items-center justify-center bg-teal-500 rounded-full">
									<ShieldCheckIcon className="text-white text-sm" />
								</div>
								<span className="text-sm font-medium text-gray-700">
									{idType}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function CountriesCoverage() {
	const [selectedRegion, setSelectedRegion] = useState("All Regions");
	const [selectedCountry, setSelectedCountry] = useState<
		(typeof countriesServed)[0] | null
	>(null);

	const filteredCountries =
		selectedRegion === "All Regions"
			? countriesServed
			: countriesServed.filter((country) => country.region === selectedRegion);

	const regionStats = regions.slice(1).map((region) => ({
		name: region,
		count: countriesServed.filter((c) => c.region === region).length,
	}));

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
						Countries We Serve
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Comprehensive identity verification coverage across all 54 African
						countries
					</p>
				</div>

				{/* Region Stats */}
				<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
					{regionStats.map((stat) => (
						<div
							key={stat.name}
							className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 text-center border border-teal-100"
						>
							<div className="text-2xl font-bold text-teal-600 mb-1">
								{stat.count}
							</div>
							<div className="text-xs text-gray-600">{stat.name}</div>
						</div>
					))}
				</div>

				{/* Region Filter */}
				<div className="flex flex-wrap gap-2 justify-center mb-8">
					{regions.map((region) => (
						<button
							key={region}
							onClick={() => setSelectedRegion(region)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
								selectedRegion === region
									? "bg-teal-500 text-white shadow-lg"
									: "bg-gray-100 text-gray-600 hover:bg-gray-200"
							}`}
						>
							{region}
						</button>
					))}
				</div>

				{/* Countries Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{filteredCountries.map((country) => (
						<button
							key={country.code}
							onClick={() => setSelectedCountry(country)}
							className="group bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-teal-500 hover:shadow-lg transition-all cursor-pointer"
						>
							<div className="flex flex-col items-center gap-3">
								<img
									src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`}
									alt={`${country.name} flag`}
									className="w-16 h-11 object-cover rounded-md shadow-sm"
								/>
								<div className="text-center">
									<div className="text-sm font-semibold text-secondary group-hover:text-teal-600 transition-colors">
										{country.name}
									</div>
									<div className="text-xs text-gray-500 mt-1">
										{country.idTypes.length} ID types
									</div>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			<CountryModal
				country={selectedCountry}
				onClose={() => setSelectedCountry(null)}
			/>
		</section>
	);
}
