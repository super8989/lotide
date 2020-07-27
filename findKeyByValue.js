// return the first key which contains the given value
const findKeyByValue = (tvShows, showTitle) => {
	for (let genre in tvShows) {
		if (tvShows[genre] === showTitle) {
			console.log(genre);
			return genre;
		}
	}
};

module.exports = findKeyByValue;
