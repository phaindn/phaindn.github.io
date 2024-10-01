import React from 'react'
import Head from 'next/head'

export default function SchemaCommon() {
	const schemaOrganization = {
		'@context': 'https://schema.org',
		'@type': 'Personal',
		name: 'Trochoi24',
		url: 'https://phaindn.github.io',
	}

	return (
		<Head>
			<script
				type="application/ld+json"
				id="schema-organization"
				key="schema-organization"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(schemaOrganization),
				}}
			/>
		</Head>
	)
}
