'use client'

import { useRouter } from 'next/navigation'

const Button = () => {
	const router = useRouter()

	const handleClick = async () => {
		router.refresh()
	}

	return (
		<button onClick={handleClick}>
			<div className='flex h-16 w-16 items-center justify-center rounded-full bg-neonGreen hover:animate-bounce hover:shadow-2xl hover:shadow-neonGreen'>
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					aria-hidden={true}
					focusable={false}>
					<path
						d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
						fill='#202733'
					/>
				</svg>
				<span className='sr-only'>Generate Advice</span>
			</div>
		</button>
	)
}
export default Button
