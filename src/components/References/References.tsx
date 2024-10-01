import React from 'react'
import classNames from 'classnames'
import Github from '@/app/icons/Github';
import LinkedIn from '@/app/icons/LinkedIn';

interface Props {
	className?: string;
}
export default function References({ className }: Props) {
	return (
		<nav className={classNames("flex items-center gap-4 justify-between text-nav", className)}>
				<a target="_blank" href="https://github.com/phaindn" className="flex text-lg">
					<Github />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/felixx-nguyen-35183b184/" className="flex text-lg">
					<LinkedIn />
				</a>
				{/* <a target="_blank" href="/technologies" className="flex text-lg">Tech Stack</a> */}
			</nav>
	)
}
