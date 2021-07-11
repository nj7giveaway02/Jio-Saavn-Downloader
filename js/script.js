window.onload = async() => {
	const param = new URL(window.location).searchParams.get('song')
	if(param && (param.includes('jiosaavn.com/song/') || param.includes('saavn.com/song/'))) {
		document.title = "Processing - Bhadoo Music";
		document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
		var get_data = await (await fetch(`${API_CONFIG.url}/link?query=${param}`)).json()
		if(get_data.result === 'false') {
			renderHome()
		} else {
			var cdnimg = get_data.image.replace("https://", "https://i1.wp.com/")
			var media_url = get_data.other_qualities[2].url.replace("https://", "/downloadapi/bhadoo/cloud/proxy/music/downloads/")
			document.title = `${get_data.song} By ${get_data.singers} - Bhadoo Music`
			document.getElementById("input").innerHTML = `<br><div class='input-group input-group-lg'> <span class='input-group-text' id='addon-wrapping'>Song Name</span><input id='srcid' type='text' class='form-control' placeholder='Enter Song Name or JioSaavn Link' name='song' onfocus='this.value=""' value='${get_data.song} By ${get_data.singers}' autocomplete='off' required aria-describedby='addon-wrapping'><input type='submit' class='btn btn-light' value='Search'></div>`
			document.getElementById("download").innerHTML = `<table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>${get_data.song}</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>${get_data.primary_artists}</td> </tr> <tr> <th scope='row'>Album</th> <td><a href='/album/?id=${get_data.albumid}'>${get_data.album}</a></td> </tr> <tr> <th scope='row'>Language</th> <td>${get_data.language}</td> </tr> <tr> <th scope='row'>Label</th> <td>${get_data.label}</td> </tr> </tbody> </table>`
			document.getElementById("status").innerHTML = `<img src='${cdnimg}' width='250px' height='250px'><br><br>`;
			document.getElementById("aplayer").src = get_data.other_qualities[2].url;
			document.getElementById("links").innerHTML = `<a href='${media_url}' class='btn btn-info' style='background-color:#2979FF' target='_self' download='${get_data.song} From ${get_data.album}.mp3'>Download Song</a>`;
		}
	} else if(param) {
		document.title = "Processing - Bhadoo Music";
		document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
		var get_data = await (await fetch(`${API_CONFIG.url}/search?query=${param}`)).json()
		if(get_data.result === 'false') {
			renderHome()
		} else {
			let txt = ''
			txt += `<table class='table table-striped table-bordered'><br><div class="alert alert-danger" role="alert">Results for : ${param}</div><thead><tr><th scope='col'>Name</th><th scope='col'>Album</th></tr></thead><tbody>`
			get_data.forEach(song => {
				txt += `<tr><td><a href='/?song=${song.url}'>${song.title} By ${song.more_info.primary_artists}</a></td><td><a href='/album/?id=${song.more_info.album_id}'>${song.album}</a></td></tr>`
			});
			txt += "</tbody></table>"
			document.getElementById("input").innerHTML = `<br><div class='input-group input-group-lg'> <span class='input-group-text' id='inputGroup-sizing-default'>Song Name</span><input id='srcid' type='text' class='form-control' placeholder='Enter Song Name or JioSaavn Link' name='song' onfocus='this.value=""' value='' autocomplete='off' required aria-describedby='addon-wrapping'><input type='submit' class='btn btn-light' value='Search'></div>`
			document.getElementById("status").innerHTML = ''
			document.getElementById("download").innerHTML = txt;
		}
	} else {
		renderHome()
	}
}

function renderHome() {
	document.getElementById("input").innerHTML = "<br><div class='input-group input-group-lg'> <span class='input-group-text' id='addon-wrapping'>Song Name</span><input id='srcid' type='text' class='form-control' placeholder='Enter Song Name or JioSaavn Link' name='song' value='' autocomplete='off' required aria-describedby='addon-wrapping'><input type='submit' class='btn btn-light' value='Search'></div>";
	document.getElementById("status").innerHTML = "<p id='hourly'></p>";
	var hour = new Date().getHours();
	if(hour == "1" || hour == "6" || hour == "12" || hour == "18" || hour == "24") {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='images/banner.gif' width='250px' height='250px'>";
	} else if(hour == "2" || hour == "7" || hour == "13" || hour == "19") {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/wanga-kaaliyan/OzIYCARjQGA'><img src='images/banner.gif' width='250px' height='250px'>";
	} else if(hour == "3" || hour == "8" || hour == "14" || hour == "20") {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/koi-fariyaad-unplugged/FjpSXDVUdnE'><img src='images/banner.gif' width='250px' height='250px'>";
	} else if(hour == "4" || hour == "9" || hour == "15" || hour == "21") {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh/JV8HCDpVRHs'><img src='images/banner.gif' width='250px' height='250px'>";
	} else if(hour == "5" || hour == "10" || hour == "16" || hour == "22") {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/senorita/I1sPdgJoZFE'><img src='images/banner.gif' width='250px' height='250px'>";
	} else {
		document.getElementById("hourly").innerHTML = "<a href='/?song=https://www.jiosaavn.com/song/love-me-like-you-do-from-fifty-shades-of-grey/AiskdBdfR1w'><img src='images/banner.gif' width='250px' height='250px'>";
	}
}

function switchfunc() {
	var x = document.getElementById("footer");
	if(x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
document.getElementById("year").innerHTML = new Date().getFullYear();
