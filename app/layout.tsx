import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
	title: 'Advice Generator App',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS, Advice Slip JSON API and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${manrope.className} grid min-h-screen justify-items-center bg-darkBlue px-4 py-28 text-lightCyan md:place-content-center`}>
				{children}
			</body>
		</html>
	)
}
