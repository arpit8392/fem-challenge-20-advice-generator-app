const Advice = ({ id, advice }: Advice) => {
	return (
		<div className='flex flex-col gap-y-6'>
			<p className='text-xs font-extrabold uppercase tracking-[4px] text-neonGreen md:text-sm md:tracking-[5px]'>
				{`Advice #${id}`}
			</p>
			<h1 className='text-2xl font-extrabold tracking-wide md:text-3xl md:leading-snug md:tracking-wider'>
				{`“${advice}”`}
			</h1>
		</div>
	)
}
export default Advice
