import Image from 'next/image'

const Divider = () => {
	return (
		<div>
			<Image
				src={'/images/pattern-divider-mobile.svg'}
				alt='Section Divider Illustration for Mobile'
				height={16}
				width={295}
				className='block md:hidden '
			/>
			<Image
				src={'/images/pattern-divider-desktop.svg'}
				alt='Section Divider Illustration for Desktop'
				height={16}
				width={444}
				className='hidden md:block '
			/>
		</div>
	)
}
export default Divider
