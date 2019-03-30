let apiKey='api_key=e4dd1d06d77be6c00f9ff5b3db546260';
let tag = 'tags=dogs';
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
    let divTag = document.createElement('div');
    let flickrImage = document.createElement('img');
    let divTagGrid = document.createElement('div');
    let divImageHeader = document.createElement('div');
    let imageTitle = document.createElement('h1');
    let imageTitleText = document.createTextNode("Big Heading");
      divTagGrid.className = 'Grid';
      divTag.className = 'image';
      flickrImage.src = imageUrl; 
      divImageHeader.className = 'header'
        /*console.log(flickrImage);*/
        document.body.appendChild(divTagGrid);
        divTagGrid.appendChild(divTag).appendChild(flickrImage);
        divTagGrid.appendChild(divImageHeader).appendChild(imageTitle).appendChild(imageTitleText);
   
        /*console.log(image);*/
});

}

xmlhttp.open('GET', url, true);

xmlhttp.send();