import localFont from 'next/font/local'

// Experimental @next/font
export const manropeFont = localFont({
	variable: '--font-manrope',
	src: [
        {
			path: './Maprope-ExtraLight.ttf',
			weight: '200',
			style: 'normal',
		},
        {
			path: './Maprope-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './Maprope-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './Maprope-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './Maprope-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
        {
			path: './Maprope-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
        {
			path: './Maprope-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
	],
})
