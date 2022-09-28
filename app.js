window.addEventListener("DOMContentLoaded", ()=>{
    const image = document.querySelector("img");
    const button = document.querySelector("button");
    
    const fetchCountry = () => {
        const request = fetch(" https://restcountries.com/v3.1/all")
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            image.src = jsonData.url;
        })
    }


})




})