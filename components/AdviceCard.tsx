import Button from './Button'

type Props = {
	id: string
	advice: string
}
const AdviceCard = ({ id, advice }: Props) => {
	return (
		<section className='relative flex max-w-sm flex-col items-center justify-center gap-y-6 rounded-xl bg-darkGrayishBlue px-6 pb-16 pt-10 text-center md:max-w-xl md:rounded-2xl md:pb-20 md:pt-12'>
			<p className='text-xs font-extrabold uppercase tracking-[4px] text-neonGreen md:text-sm md:tracking-[5px]'>
				{`Advice #${id}`}
			</p>
			<h1 className='text-2xl font-extrabold tracking-wide md:text-3xl md:leading-snug md:tracking-wider'>
				{`“ ${advice} ”`}
			</h1>
			<div>
				<svg
					className='block md:hidden'
					width='295'
					height='16'
					xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fill-rule='evenodd'>
						<path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
						<g transform='translate(138)' fill='#CEE3E9'>
							<rect width='6' height='16' rx='3' />
							<rect x='14' width='6' height='16' rx='3' />
						</g>
					</g>
				</svg>
				<svg
					className='hidden md:block'
					width='444'
					height='16'
					xmlns='http://www.w3.org/2000/svg'>
					<g fill='none' fill-rule='evenodd'>
						<path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
						<g transform='translate(212)' fill='#CEE3E9'>
							<rect width='6' height='16' rx='3' />
							<rect x='14' width='6' height='16' rx='3' />
						</g>
					</g>
				</svg>
			</div>
			<div className='absolute -bottom-8'>
				<Button />
			</div>
		</section>
	)
}
export default AdviceCard
