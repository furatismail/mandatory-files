function getData(url) {
  let xhr = new XMLHttpRequest();
  // budes volat metodu GET a dane url, ktere dostanes
  xhr.open("GET", url);
  // to co vratis, mi vratis v JSON
  xhr.responseType = "json";

  // pokud ti server vrati data tak je vykonzoluj
  xhr.onload = function () {
    console.log(xhr.response);
  };

  // pokud by server spadnul tak vykonzoluj error
  xhr.onerror = function () {
    console.log('Nastal error');
  }

  // zavolej 
  xhr.send();
}


getData("https://jsonplaceholder.typicode.com/posts");
