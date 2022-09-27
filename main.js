function getData(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log('Nastal error');
            console.log(error);
        })
}

getData("https://jsonplaceholder.typicode.com/posts");
