source=document.getElementById("srcid");var getUrlParameter=function(t){var e,a,r=window.location.search.substring(1).split("&");for(a=0;a<r.length;a++)if((e=r[a].split("="))[0]===t)return void 0===e[1]||decodeURIComponent(e[1])},surl=getUrlParameter("url");if(null==surl){document.getElementById("status").innerHTML="<h5></h5><p id='hourly'></p>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' value='' autocomplete='off' required><input type='submit' value='Search'>";var hour=(new Date).getHours();document.getElementById("hourly").innerHTML="1"==hour||"6"==hour||"12"==hour||"18"==hour||"24"==hour?"<a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>":"2"==hour||"7"==hour||"13"==hour||"19"==hour?"<a href='/?url=https://www.jiosaavn.com/song/wanga-kaaliyan/OzIYCARjQGA'><img src='https://c.saavncdn.com/775/Wanga-Kaaliyan-Hindi-2020-20200525000142-500x500.jpg' width='250px' height='250px'>":"3"==hour||"8"==hour||"14"==hour||"20"==hour?"<a href='/?url=https://www.jiosaavn.com/song/koi-fariyaad-unplugged/FjpSXDVUdnE'><img src='https://c.saavncdn.com/485/Koi-Fariyaad-Unplugged-Hindi-2020-20200607084001-500x500.jpg' width='250px' height='250px'>":"4"==hour||"9"==hour||"15"==hour||"21"==hour?"<a href='/?url=https://www.jiosaavn.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh/JV8HCDpVRHs'><img src='https://c.saavncdn.com/258/Tu-Hi-Yaar-Mera-From-Pati-Patni-Aur-Woh--Hindi-2019-20191202231535-500x500.jpg' width='250px' height='250px'>":"5"==hour||"10"==hour||"16"==hour||"22"==hour?"<a href='/?url=https://www.jiosaavn.com/song/senorita/I1sPdgJoZFE'><img src='https://c.saavncdn.com/artists/Camila_Cabello_20171208142451_500x500.jpg' width='250px' height='250px'>":"<a href='/?url=https://www.jiosaavn.com/song/love-me-like-you-do-from-fifty-shades-of-grey/AiskdBdfR1w'><img src='https://c.saavncdn.com/566/Love-Me-Like-You-Do-From-Fifty-Shades-Of-Grey-English-2015-500x500.jpg' width='250px' height='250px'>"}else if(surl.startsWith("http://www.jiosaavn.com/song/")||surl.startsWith("https://www.jiosaavn.com/song/")||surl.startsWith("http://jiosaavn.com/song/")||surl.startsWith("https://jiosaavn.com/song/")||surl.startsWith("http://saavn.com/song/")||surl.startsWith("https://saavn.com/song/")||surl.startsWith("http://www.saavn.com/song/")||surl.startsWith("https://www.saavn.com/song/")){(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText),e=t.media_url,a=e.substring(e.indexOf("jio.com")+7).replace("/","https://");if(null==e)if(document.getElementById("status").innerHTML="<h5>Please Enter Song Link</h5>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' value='' autocomplete='off' required><input type='submit' value='Search'>",null!=surl)document.title="Failed - nj7music.tk",document.getElementById("download").innerHTML="Unable to Download from this Link",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' value='' autocomplete='off' required><input type='submit' value='Search'>";else{document.getElementById("status").innerHTML="<h5></h5><p id='hourly'></p>",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' value='' autocomplete='off' required><input type='submit' value='Search'>";var r=(new Date).getHours();document.getElementById("hourly").innerHTML="1"==r||"6"==r||"12"==r||"18"==r||"24"==r?"<a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>":"2"==r||"7"==r||"13"==r||"19"==r?"<a href='/?url=https://www.jiosaavn.com/song/wanga-kaaliyan/OzIYCARjQGA'><img src='https://c.saavncdn.com/775/Wanga-Kaaliyan-Hindi-2020-20200525000142-500x500.jpg' width='250px' height='250px'>":"3"==r||"8"==r||"14"==r||"20"==r?"<a href='/?url=https://www.jiosaavn.com/song/koi-fariyaad-unplugged/FjpSXDVUdnE'><img src='https://c.saavncdn.com/485/Koi-Fariyaad-Unplugged-Hindi-2020-20200607084001-500x500.jpg' width='250px' height='250px'>":"4"==r||"9"==r||"15"==r||"21"==r?"<a href='/?url=https://www.jiosaavn.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh/JV8HCDpVRHs'><img src='https://c.saavncdn.com/258/Tu-Hi-Yaar-Mera-From-Pati-Patni-Aur-Woh--Hindi-2019-20191202231535-500x500.jpg' width='250px' height='250px'>":"5"==r||"10"==r||"16"==r||"22"==r?"<a href='/?url=https://www.jiosaavn.com/song/senorita/I1sPdgJoZFE'><img src='https://c.saavncdn.com/artists/Camila_Cabello_20171208142451_500x500.jpg' width='250px' height='250px'>":"<a href='/?url=https://www.jiosaavn.com/song/love-me-like-you-do-from-fifty-shades-of-grey/AiskdBdfR1w'><img src='https://c.saavncdn.com/566/Love-Me-Like-You-Do-From-Fifty-Shades-Of-Grey-English-2015-500x500.jpg' width='250px' height='250px'>"}else if(!0===e.endsWith(".mp3")||!0===e.endsWith(".mp4")){var n=a,s=a.replace("https://","/cdn.nj7music.tk/");document.title=t.song+" By "+t.singers+" - nj7music.tk",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' onfocus='this.value=\"\"' value='"+t.song+" By "+t.singers+"' autocomplete='off' required><input type='submit' value='Search'>",document.getElementById("download").innerHTML="<table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>"+t.song+"</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>"+t.singers+"</td> </tr> <tr> <th scope='row'>Album</th> <td><a href='/album/?url="+t.album_url+"'>"+t.album+"</a></td> </tr> <tr> <th scope='row'>Language</th> <td>"+t.language+"</td> </tr> <tr> <th scope='row'>Label</th> <td>"+t.label+"</td> </tr> </tbody> </table>",document.getElementById("status").innerHTML="<img src='"+t.image+"' width='250px' height='250px'><br><br><center><audio controls style='width: 100%; max-width:600px;' loop> <source src='"+n+"' type='audio/mp3'> <source src='"+s+"' type='audio/mp4'> Your browser does not support the audio element. </audio></center>";var i=new XMLHttpRequest;i.open("GET",s,!0),i.send(),i.onreadystatechange=function(){if(this.readyState==this.HEADERS_RECEIVED){var e=i.getAllResponseHeaders().trim().split(/[\r\n]+/),a={};e.forEach(function(e){var r=e.split(": "),n=r.shift(),i=r.join(": ");a[n]=i,"403"!=a.status&&(document.getElementById("links").innerHTML="<a href='"+s+"' class='button7' style='background-color:#2979FF' target='_self' download='"+t.song+" By "+t.singers+" From "+t.album+".mp3'>Download Song</a>")})}}}}else 4==this.readyState&&200!==this.status?(document.title="Server Offline - nj7music.tk",document.getElementById("status").innerHTML="<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>"):(document.title="Processing - nj7music.tk",document.getElementById("status").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>")},xmlhttp.open("GET","/api/?query="+surl,!0),xmlhttp.send()}else if(surl.startsWith("http://www.jiosaavn.com/album/")||surl.startsWith("https://www.jiosaavn.com/album/")||surl.startsWith("http://jiosaavn.com/album/")||surl.startsWith("https://jiosaavn.com/album/")||surl.startsWith("http://saavn.com/album/")||surl.startsWith("https://saavn.com/album/")||surl.startsWith("http://www.saavn.com/album/")||surl.startsWith("https://www.saavn.com/album/"))location.href="/album/?url="+surl;else{var obj,xmlhttp,myObj,x,txt="",fsurl=surl.replace(/\+/g," ");obj={table:"customers",limit:20},dbParam=JSON.stringify(obj),(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){for(x in myObj=JSON.parse(this.responseText),txt+="<table class='table table-striped table-bordered'><caption style='caption-side:top;word-break:break-all;'>Results for : "+fsurl+"</caption><thead><tr><th scope='col'>Name</th><th scope='col'>Album</th></tr></thead><tbody>",myObj)txt+="<tr><td><a href='/?url="+myObj[x].perma_url+"'>"+myObj[x].song+" By "+myObj[x].singers+"</a></td><td><a href='/?url="+myObj[x].album_url+"'>"+myObj[x].album+"</td></tr>";txt+="</tbody></table>",document.title="Albums - nj7music.tk",document.getElementById("input").innerHTML="<input type='text' id='srcid' name='url' placeholder='Enter Song Name' onfocus='this.value=\"\"' value='"+fsurl+"' autocomplete='off' required><input type='submit' value='Search'>",document.getElementById("download").innerHTML=txt,document.getElementById("status").innerHTML=""}else 4==this.readyState&&200!==this.status?(document.title="Server Offline - nj7music.tk",document.getElementById("status").innerHTML="<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>"):(document.title="Processing - nj7music.tk",document.getElementById("status").innerHTML="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>")},xmlhttp.open("GET","/api/?query="+surl,!0),xmlhttp.send()}function switchfunc(){var t=document.getElementById("footer");"block"===t.style.display?t.style.display="none":t.style.display="block"}
