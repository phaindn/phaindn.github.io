import App from 'next/app'
import type { AppContext, AppProps } from 'next/app'
import { svnPoppins } from '@/fonts'
import { TanstackProvider } from '@/providers/tanstack-query-provider'
import { useHydrateSideBar } from '@/stately/useSideBar'
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Hydrate } from '@tanstack/react-query'

import '@/styles/reset.scss'
import '@/styles/lib.scss'
import '@/styles/global.scss'

import Head from 'next/head'
import Router from 'next/router'
import Maintenance from '@/views/maintenance'

import { SchemaCommon } from '@/components/schemaJson'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function MyApp({ Component, pageProps }: AppProps) {
	const sideBar = Boolean(pageProps?.params?.sidebar)
	// Click House

	// Define Sidebar
	useHydrateSideBar(sideBar)


	return (
		<ErrorBoundary>
			<style jsx global>{`
				html {
					font-family: ${svnPoppins.style.fontFamily};
				}

				html,
				body {
					height: 100%;
				}
			`}</style>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<TanstackProvider categories={pageProps.categories}>
				<Hydrate state={pageProps?.dehydratedState}>
						<SchemaCommon />
						<ProgressBar
							height="4px"
							color="rgb(79 186 105/var(--tw-text-opacity))"
							options={{ showSpinner: false }}
							shallowRouting
						/>
						<Component {...pageProps} />
				</Hydrate>
			</TanstackProvider>
		</ErrorBoundary>
	)
}

MyApp.getInitialProps = async (context: AppContext) => {
	let req = context.ctx.req

	let userAgent = req?.headers['user-agent'] || ''
	const initialProps = await App.getInitialProps(context)
	const categories = await getCategories()

	return {
		pageProps: {
			...initialProps.pageProps,
			isCoccoc,
			categories,
			noAds: true,
		},
	}
}
