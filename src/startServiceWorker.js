export default function startServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js', {scope: '/'})
		.then(function(reg) {
			console.log('Registration successful!', reg);
		})
		.catch(function(err) {
			console.log('Registration failed because of ' + err);
		});
	}
}