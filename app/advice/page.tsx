import AdviceCard from '@/components/AdviceCard'
import fetchAdviceByID from '@/utils/fetchAdviceById'

type Props = {
	searchParams: {
		id: string
	}
}
const AdvicePage = async ({ searchParams: { id } }: Props) => {
	const { id: adviceID, advice } = await fetchAdviceByID(id)
	return (
		<main>
			<AdviceCard id={adviceID} advice={advice} />
		</main>
	)
}

export default AdvicePage
