window.onload = async() => {
	const param = new URL(window.location).searchParams.get('id')
	if(param) {
		document.title = "Processing - nj7Music";
		document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
		var get_data = await (await fetch(`${API_CONFIG.url}/album?id=${param}`)).json()
		if(get_data.result === 'false') {
			window.location = '../../'
		} else {
			let txt = '';
			txt += `<div class="alert alert-danger" role="alert">${get_data.title} (${get_data.year})</div><table class='table table-striped table-bordered'><thead><tr><th scope='col'>Song Name</th><th scope='col'>Singers</th></tr></thead><tbody>`
			get_data.songs.forEach(song => {
				txt += `<tr><td><a href='/?song=${song.perma_url}'>${song.song}</a></td><td>${song.primary_artists}</td></tr>`;
			});
			txt += "</tbody></table>"
			document.title = `${get_data.title} - Bhadoo Music`
			document.getElementById("input").innerHTML = "<br><div class='input-group input-group-lg'> <span class='input-group-text' id='inputGroup-sizing-default'>Song Name</span><input id='srcid' type='text' class='form-control' placeholder='Enter Song Name or JioSaavn Link' name='song' value='' autocomplete='off' required aria-describedby='addon-wrapping'><input type='submit' class='btn btn-light' value='Search'></div><br>";
			document.getElementById("download").innerHTML = txt;
			document.getElementById("status").innerHTML = `<img src='${get_data.image.replace("https://", "https://i1.wp.com/")}' width='250px' height='250px'>`;
		}
	} else {
		window.location = '../../'
	}
}
document.getElementById("year").innerHTML = new Date().getFullYear();
