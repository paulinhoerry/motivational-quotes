var getQuote = () => { 
	return quotes[parseInt(Math.random() * quotes.length)];
}

const mark = `
	<article>
		<h1>${getQuote().quote}</h1>
		<small>${getQuote().author}</small>
	</article>
`;


const article = document.getElementsByClassName('article')[0];
article.innerHTML = mark;