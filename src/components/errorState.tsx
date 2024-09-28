'use client'

type ErrorStateProps = {
	children?: React.ReactNode
}

export default function ErrorState({ children }: ErrorStateProps) {
	return (
		<div className="px-4 flex justify-center w-full lg:ml-[30px]">
			<div className="flex flex-col items-center mb-14 mt-[72px] lg:mb-[132px] lg:mt-24">
				<img src="/images/svg/error.svg" alt="error page" />
				<span className="block mt-6 text-2xl font-medium text-center lg:mt-8 leading-150">
					Đã có lỗi xảy ra, chúng tôi đang khắc phục sự cố này.
				</span>
				{children}
			</div>
		</div>
	)
}
