// Get quotes form API
let apiQuotes = [];

// Show new quote

function newQuote() {
	// pick a random quote from api quotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}

async function getQuotes() {
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch error here
	}
}

// On load
getQuotes();
