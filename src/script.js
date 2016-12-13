var getQuote = function () { 
	return quotes[parseInt(Math.random() * quotes.length)];
}

const mark = `
	<article>
		<p>${getQuote().quote}</p>
		<small>${getQuote().author}</small>
	</article>
`;

document.body.innerHTML = mark;

