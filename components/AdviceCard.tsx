import Advice from './Advice'
import Button from './Button'
import Divider from './Divider'

const AdviceCard = ({ id, advice }: Advice) => {
	return (
		<section className='relative flex flex-col items-center justify-center gap-y-6 rounded-xl bg-darkGrayishBlue px-6 pb-16 pt-10 text-center shadow-md shadow-darkGrayishBlue md:max-w-xl md:gap-y-10 md:rounded-2xl md:pb-20 md:pt-12'>
			<Advice id={id} advice={advice} />
			<Divider />
			<div className='absolute -bottom-8'>
				<Button />
			</div>
		</section>
	)
}
export default AdviceCard
