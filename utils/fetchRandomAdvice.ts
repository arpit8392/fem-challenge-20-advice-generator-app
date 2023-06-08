const fetchRandomAdvice = async () => {
	try {
		const res = await fetch('https://api.adviceslip.com/advice', {
			next: {
				revalidate: 5,
			},
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
