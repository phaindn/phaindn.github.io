import ErrorState from '@/components/errorState'
import Link from 'next/link'

export default function InternalServer() {
	return (
		<ErrorState>
			<Link
				href="/"
				className="mt-[22px] lg:mt-[34px] font-semibold text-primary-60 text-sm leading-4"
			>
				<img src="images/svg/arrowBack.svg" alt="" className="inline mr-2" />
				Quay lại trang chủ
			</Link>
		</ErrorState>
	)
}
