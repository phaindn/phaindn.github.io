import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <link
						rel="preload"
						as="image/svg+xml"
						href="/images/svg/categories-sprite.svg"
					/> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
