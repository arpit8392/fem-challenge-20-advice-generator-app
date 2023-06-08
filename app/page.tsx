import AdviceCard from '@/components/AdviceCard'
import fetchRandomAdvice from '@/utils/fetchRandomAdvice'

export default async function Home() {
	const adviceData = await fetchRandomAdvice()
	const { id, advice } = adviceData

	return (
		<main>
			<AdviceCard id={id} advice={advice} />
		</main>
	)
}
