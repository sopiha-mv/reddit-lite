export const timeConverter = UNIX_timestamp => {
	let a = new Date(UNIX_timestamp * 1000);
	let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	let year = a.getFullYear();
	let month = months[a.getMonth()];
	let date = a.getDate();
	let hour = ('0' + a.getHours()).slice(-2);
	let min = ('0' + a.getMinutes()).slice(-2);
	let sec = ('0' + a.getSeconds()).slice(-2);
	let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	return time;
};