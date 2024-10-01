import React from 'react'
import Logo from '@/components/Logo/Logo'
import References from '@/components/References/References'
import Navigation from '@/components/Navigation/Navigation'

export default function Header() {
	return (
		<header className="container mx-auto flex items-center text-content">
			<Logo />
			<Navigation className="ml-auto text-lg font-medium" />
			<References className="ml-10" />
		</header>
	)
}
