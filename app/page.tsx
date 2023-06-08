import AdviceCard from '@/components/AdviceCard'
import fetchRandomAdvice from '@/utils/fetchRandomAdvice'

// TODO: useSWR for data fetching

export default async function Home() {
	const { id, advice } = await fetchRandomAdvice()

	return (
		<main>
			<AdviceCard id={id} advice={advice} />
		</main>
	)
}
