const padToTwoDigits = (num) => num.toString().padStart(2, '0');

export const pipeDuration = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;

	return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
};
