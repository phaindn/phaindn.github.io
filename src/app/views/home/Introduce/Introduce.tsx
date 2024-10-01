import React from 'react'
import styles from "./Introduce.module.css";

export default function Introduce() {
	return (
		<section className="container mx-auto py-15 lg:py-40">
			<div className="flex items-center justify-between gap-4 lg:gap-10">
				<h1 className="text-hero text-heading">
					Greeting 👋<br />
					My name is<br />
					<span className="text-gradient">Phai Nguyen</span><br />
					A Web Developer
				</h1>
				<figure className={styles.figure}>
					<img src="/images/avatar.jpg" alt="Avatar" />
				</figure>
			</div>
		</section>
	)
}
