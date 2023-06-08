const fetchAdviceByID = async (id: string) => {
	try {
		console.log(`Fetching advice for ${id}`)
		const res = await fetch(`https://api.adviceslip.com/advice/${id}`)
		if (!res.ok) {
			throw new Error('Failed to fetch the advice, Please try again later...')
		}
		const advice = await res.json()
		return advice.slip
	} catch (error) {
		console.log(error)
	}
}

export default fetchAdviceByID
