export default function NotFoundPage() {
	return (
		<div className="px-4 flex justify-center w-full mb-14 lg:mb-[132px] lg:ml-[30px]">
			<div className="flex flex-col items-center mt-[50px] lg:mt-[72px]">
				<img src="/images/404.png" alt="error page" />
				<span className="block mt-8 text-2xl font-medium text-center leading-150">
					Đường dẫn bạn yêu cầu không tồn tại.
				</span>
				<a
					href="/"
					className="mt-[34px] font-semibold text-primary-60 text-sm leading-4"
				>
					<img src="images/svg/arrowBack.svg" alt="" className="inline mr-2" />
					Quay lại trang chủ
				</a>
			</div>
		</div>
	)
}
