import React from 'react'
import classNames from 'classnames'
import Link from 'next/link';

interface Props {
	className?: string;
}
export default function Navigation({ className }: Props) {
    return (
        <nav className={classNames("flex items-center gap-12 justify-between", className)}>
            <Link href="/" className="">Home</Link>
            <Link href="/about" className="">About</Link>
            <Link href="/technologies" className="">Tech Stack</Link>
            <Link href="/projects" className="">Projects</Link>
            <Link href="/contact" className="">Contact</Link>
        </nav>
    )
}