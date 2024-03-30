console.log("Let's get this party started!");
const deleteButton = document.querySelector('#delete-button')
const searchButton = document.querySelector('#search-button')


searchButton.addEventListener('click', async function(e){
    e.preventDefault();
    const searchTerm = document.querySelector('.search-input').value;
    const res = await axios.get("http://api.giphy.com/v1/gifs/search" , {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
        } )
        addGiphy(res.data)
})


function addGiphy(res){
    const gifDiv = document.querySelector(".giphy-imgs")
    const randomGif = Math.floor(Math.random() * res.data.length)
    const gifimg = document.createElement('img')
    gifimg.setAttribute("src", res.data[randomGif].images.original.url)
    gifDiv.append(gifimg)
}

deleteButton.addEventListener('click', function(e){
   gifDiv.children.remove() 
} )