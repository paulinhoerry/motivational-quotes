var getQuote = () => {
    return quotes[parseInt(Math.random() * quotes.length)];
}

const mark = `
	<article>
		<h1>${getQuote().quote}</h1>
		<small>${getQuote().author}</small>
	</article>
`;

const article = document.getElementsByClassName('quote')[0];
article.innerHTML = mark;


const date = new Date(Date.now());
const time = date.toLocaleTimeString().slice(0, 5);
const day = date.toLocaleDateString().slice(0, 5);
const dateTag = document.getElementsByClassName('date')[0];

const timeMark = `
	<div>${time}</div>
	<div>${day}</div>
`;

dateTag.innerHTML = timeMark;