// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

import ErrorState from '@/components/errorState'

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			error: null,
		}
	}

	componentDidCatch(error) {
		this.setState({
			error,
		})
		console.log('__DEBUG__', error)
	}

	render() {
		const { children } = this.props
		const { error } = this.state

		if (error) {
			return <ErrorState />
		}

		return children
	}
}
