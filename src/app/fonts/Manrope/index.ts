import localFont from 'next/font/local'

// Experimental @next/font
export const manropeFont = localFont({
	variable: '--font-manrope',
	src: [
        {
			path: './Manrope-ExtraLight.ttf',
			weight: '200',
			style: 'normal',
		},
        {
			path: './Manrope-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './Manrope-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './Manrope-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './Manrope-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
        {
			path: './Manrope-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
        {
			path: './Manrope-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
	],
})
