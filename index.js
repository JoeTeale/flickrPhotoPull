let selectedColours = ['red', 'blue'];
selectedColours[2] = false
console.log(selectedColours);


function greet(name, lastName) {
  return ('hello ' + name + ' ' + lastName);
}

console.log(greet('Joe', "Teale"));
let apiKey='api_key=e4dd1d06d77be6c00f9ff5b3db546260';
let tag = 'tags=cats';
let format = 'format=json&nojsoncallback=1';
let begginingHTTP = 'https://api.flickr.com/services/rest/?'
let url = `${begginingHTTP}method=flickr.photos.search&${apiKey}&${tag}&${format}`;

let xmlhttp = new XMLHttpRequest(), response;

xmlhttp.onreadystatechange = function() {

    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      response = JSON.parse(xmlhttp.responseText);
      apiResponseHandler(response);
      }
}
function apiResponseHandler(response){

imageRender(response);
}
function imageRender(response) {
  response.photos.photo.forEach(element => {
    let image = document.getElementById("myImg");
    let imageUrl = `http://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`;
    let imgStyle = document.createElement('img');
      imgStyle.src = imageUrl; 
      imgStyle.width=200;
      imgStyle.height=100;
        console.log(imgStyle);
        document.body.appendChild(imgStyle);
    console.log(image);
});

}

xmlhttp.open('GET', url, true);
xmlhttp.send();