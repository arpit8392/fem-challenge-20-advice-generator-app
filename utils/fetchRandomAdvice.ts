const fetchRandomAdvice = async () => {
	try {
		console.log('Fetching new advice...')
		const res = await fetch('https://api.adviceslip.com/advice', {
			cache: 'no-store',
		})
		if (!res.ok) {
			throw new Error('Failed to fetch the advice, Please try again later...')
		}
		const advice = await res.json()
		return advice.slip
	} catch (error) {
		console.log(error)
	}
}

export default fetchRandomAdvice
