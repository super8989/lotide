const pigLatin = (string) => {
	let result = string.slice(1) + string[0] + 'ay';

	return result;
};

console.log(pigLatin('latin'));
