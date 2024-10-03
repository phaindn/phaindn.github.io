import { IProject } from '@/app/@types/portfolio'
import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'

const PROJECTS: IProject[] = [
	{
		name: "Seal Commerce",
		description: "This is the landing page to introduce about missions, products and career opportunities of Gem Commerce (formally Seal Commerce Asia).",
		thumbnail: "/images/projects/sealcommerce.asia.png",
		technologies: ["Nuxt.js", "SASS", "Tailwind", "AOS"],
		previewUrl: "https://sealcommerce.asia",
	},
	{
		name: "GemPages",
		description: "An effortless & conversion-focused page builder for Shopify stores. GemPages helps you turn more visitors into paying customers.",
		thumbnail: "/images/projects/gempages.net.webp",
		technologies: ["Vue", "TypeScript", "SASS", "jQuery"],
		previewUrl: "https://app.gempages.net",
	},
	{
		name: "RungRinh & Extension",
		description: "Rủng Rỉnh is a realiable cashback service at Vietnam, founded in 2018 and managed by Cốc Cốc Company",
		thumbnail: "/images/projects/rungrinh.vn.png",
		technologies: ["React", "SASS", "Redux", "Saga", "MUI", "Jest"],
		previewUrl: "https://rungrinh.vn",
	},
	{
		name: "Cốc Cốc Search pages",
		description: "Rủng Rỉnh is a realiable cashback service at Vietnam, founded in 2018 and managed by Cốc Cốc Company",
		thumbnail: "/images/projects/search.coccoc.com.png",
		technologies: ["React", "Stylus", "Redux"],
		previewUrl: "https://search.coccoc.com/",
	},
	{
		name: "Download video & audio Extension",
		description: "Helps you download video, audio files instantly from any website.",
		thumbnail: "/images/projects/savior.png",
		technologies: ["Mustache", "TypeScript", "Stylus", "Mocha/Chai"],
	},
	{
		name: "Dictionary and Translation Extension",
		description: "Instantly look up words and translate text without ever leaving your current tab.",
		thumbnail: "/images/projects/en2vi.png",
		technologies: ["Svelte", "TypeScript", "SCSS"],
	},
	{
		name: "VulHunter",
		description: "",
		thumbnail: "/images/projects/vulhunter.png",
		technologies: ["React", "SASS", "Redux"],
	},
	{
		name: "Portfolio",
		description: "",
		thumbnail: "/images/projects/portfolio.png",
		technologies: ["Nextjs", "TypeScript"],
	},
	{
		name: "Chatbot simulate Ho Chi Minh president",
		description: "",
		thumbnail: "/images/projects/portfolio.png",
		technologies: ["Nuxtjs", "SCSS", "Golang", "PostgreSQL", "Python", "VnCoreNLP"],
	},
]

export default function Projects() {
	return (
		<section className="container mx-auto py-15 lg:py-40 flex flex-col items-center text-center">
			<h1 className="text-h1 text-heading">Projects</h1>
			<p className="text-subhead text-content mt-4 lg:mt-10">Things I’ve developed so far</p>
			{/* <ul className="flex flex-wrap items-center justify-between mt-10 gap-x-6 gap-y-8 lg:mt-15 lg:gap-x-12 lg:gap-y-16"> */}
			<ul className="grid grid-cols-3 mt-10 gap-x-4 gap-y-6 lg:mt-15 lg:gap-x-8 lg:gap-y-10">
				{ PROJECTS.map((project, index) => (
					<ProjectItem item={project} key={index} />
				))}
			</ul>
		</section>
	)
}
