import AdviceCard from '@/components/AdviceCard'
import fetchRandomAdvice from '@/utils/fetchRandomAdvice'

export default async function Home() {
	const { id, advice } = await fetchRandomAdvice()

	return (
		<main>
			<AdviceCard id={id} advice={advice} />
		</main>
	)
}
