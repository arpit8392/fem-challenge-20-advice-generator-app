const Advice = ({ id, advice }: Advice) => {
	return (
		<div className='flex flex-col gap-y-6'>
			<h1 className='text-xs font-extrabold uppercase tracking-[4px] text-neonGreen md:text-sm md:tracking-[5px]'>
				{`Advice #${id}`}
			</h1>
			<blockquote className='text-2xl font-extrabold tracking-wide md:text-3xl md:leading-snug md:tracking-wider'>
				{`“${advice}”`}
			</blockquote>
		</div>
	)
}
export default Advice
