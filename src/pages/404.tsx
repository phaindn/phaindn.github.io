import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="px-4 flex items-center justify-center w-full h-[100vh]">
			<div className="flex flex-col items-center">
				<Image src="/images/404.gif" width="320" height="240" alt="error page" />
				<h2 className="block mt-2">
					Requested URL not exist.
				</h2>
				<Link
					href="/"
					className="mt-3 font-semibold text-primary-60 text-sm leading-4"
				>
					<img src="images/svg/arrowBack.svg" alt="" className="inline mr-2" />
					Back to homepage
				</Link>
			</div>
		</div>
	)
}
