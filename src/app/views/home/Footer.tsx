import React from 'react'
import Logo from '@/components/Logo/Logo'
import References from '@/components/References/References'
import Navigation from '@/components/Navigation/Navigation'

export default function Footer() {
	return (
		<footer className="container mx-auto text-heading">
            <div className="flex items-center">
                <Logo monochrome />
                <div className="info flex gap-7 ml-auto">
                    <a href="tel:+84383224343">+84 383 224 343</a>
                    <a href="mailto:phaindn@gmail.com">phaindn@gmail.com</a>
                </div>
                <References className="ml-12 " />
            </div>
            <hr className="my-10"/>

            <div className="flex items-center justify-between">
                <Navigation className="text-[18px]" />
                <p className="m-0">
                    Made by <span className="text-gradient">Felixx</span> with <span className="text-fuchsia-400">Love</span> & <span className="text-amber-600">Redbull</span>
                </p>
            </div>
		</footer>
	)
}
