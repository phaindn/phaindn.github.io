import App from 'next/app'
import type { AppContext, AppProps } from 'next/app'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar'

import '@/app/styles/reset.css'
import '@/app/styles/global.css'

import Head from 'next/head'

import SchemaCommon from '@/components/SchemaCommon'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ErrorBoundary>
			<style jsx global>{`
				* {
					padding: 0;
					margin: 0;
				}

				*,
				*:before,
				*:after {
					box-sizing: border-box;
				}

				html,
				body {
					height: 100%;
					font: 16px/1.5 "Segoe UI", sans-serif;
				}
			`}</style>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<SchemaCommon />
			<ProgressBar
				height="4px"
				color="rgb(0 0 0/var(--tw-text-opacity))"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<Component {...pageProps} />
		</ErrorBoundary>
	)
}

MyApp.getInitialProps = async (context: AppContext) => {

	const initialProps = await App.getInitialProps(context)

	return {
		pageProps: {
			...initialProps.pageProps,
		},
	}
}
