import Link from 'next/link'
import React from 'react'
import styles from './Logo.module.css'
import classNames from 'classnames'

interface Props {
	monochrome?: boolean;
}
export default function Logo({ monochrome = false }: Props) {
	return (
		<Link href="/" className={classNames("leading-tight flex flex-col", styles.logo, { [styles.monochrome]: monochrome })}>
			<span className="text-xl font-extrabold">{`{{/}}`}</span>
			<span className="text-lg font-bold">felixx</span>
		</Link>
	)
}
