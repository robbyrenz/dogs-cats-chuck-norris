document.addEventListener("DOMContentLoaded", start())

function start() {
    console.log("Hello World!")
    document.getElementById("dog").addEventListener("click", dogImage)
    document.getElementById("cat").addEventListener("click", catImage)
}

function dogImage() {
    console.log("You clicked on the dog button!")
    // fetch an image of a dog
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(res => plugImage(res.message, "dog"))
    getFacts()
}

function catImage() {
    console.log("You clicked on the cat button!")
    // fetch an image of a cat
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(res => plugImage(res[0].url, "cat"))
    getFacts()
}

function getFacts() {
    // get random Chuck Norris facts!
    enterText("loading...")
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(res => enterText(res.value))
}

function enterText(text) {
    document.getElementById("fact").innerHTML = text
}

function plugImage(url, type) {
    img = document.querySelector("img")
    img.src = url
    if (type === "dog") {
        img.alt = "dog"
        img.title = "dog"
    } else {
        img.alt = "cat"
        img.title = "cat"
    }
}
