import React from 'react'

const TECHNOLOGIES = [
	{
		alt: 'HTML5',
		src: '/images/tech-stack/html5.png'
	},
	{
		alt: 'CSS3',
		src: '/images/tech-stack/css3.png'
	},
	{
		alt: 'Javascript',
		src: '/images/tech-stack/js.png'
	},
	{
		alt: 'TypeScript',
		src: '/images/tech-stack/ts.png'
	},
	{
		alt: 'Vue',
		src: '/images/tech-stack/vue.png'
	},
	{
		alt: 'React',
		src: '/images/tech-stack/react.png'
	},
	{
		alt: 'Redux',
		src: '/images/tech-stack/redux.png'
	},
	{
		alt: 'Tailwind',
		src: '/images/tech-stack/tailwind.png'
	},
	{
		alt: 'Bootstrap',
		src: '/images/tech-stack/bootstrap.png'
	},
	{
		alt: 'SCSS/SASS',
		src: '/images/tech-stack/sass.png'
	},

]

export default function TechStacks() {
	return (
		<section className="container mx-auto py-15 lg:pt-44 lg:pb-40 flex flex-col items-center text-center">
			<h1 className="text-h1 text-heading">My Tech Stack</h1>
			<p className="text-subhead text-content mt-4 lg:mt-10">Technologies that I’ve been working with recently</p>
			<ul className="flex flex-wrap items-center justify-between mt-10 gap-x-10 gap-y-8 lg:mt-15 lg:gap-x-20 lg:gap-y-16">
				{ TECHNOLOGIES.map((tech, index) => (
					<li className="flex w-[120px]" key={index}>
						<img alt={tech.alt} src={tech.src} className="w-full" />
					</li>
				))}
			</ul>
		</section>
	)
}
