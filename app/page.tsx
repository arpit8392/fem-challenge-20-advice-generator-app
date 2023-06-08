import AdviceCard from '@/components/AdviceCard'
import fetchRandomAdvice from '@/utils/fetchRandomAdvice'
import useSWR from 'swr'

const adviceFetcher = () =>
	fetch('https://api.adviceslip.com/advice').then((res) => res.json())

export default async function Home() {
	const { data, error, isLoading } = useSWR('/api/advices', adviceFetcher, {
		refreshInterval: 3000,
	})

	console.log(data)

	if (error)
		return (
			<div className='text-5xl font-bold tracking-widest text-red-400'>
				Error fetching data, Please try again later...
			</div>
		)
	if (isLoading)
		return (
			<div className='text-5xl font-bold tracking-widest'>
				Fetching the advice...
			</div>
		)

	return (
		<main>
			<AdviceCard id={data.id} advice={data.advice} />
		</main>
	)
}
