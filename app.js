console.log(`Say Cheese...`)

const thumbnailsContainer = document.querySelector(`.thumbnails`)
const bigDisplay = document.getElementById(`bigDisplay`)

const images = [
    {src: 'assets/1.jpg', 
    alt: `image1`},

    {src: 'assets/2.jpg', 
    alt: `image2`},

    {src: 'assets/3.jpg', 
    alt: `image 3`},

    {src: 'assets/4.jpg', 
    alt: `image 4`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnamingcat.com%2Fwp-content%2Fuploads%2F2024%2F04%2F80s-Cat-Names.jpg&f=1&nofb=1&ipt=a6bd13f73e8a2ecf2bbefdbbcc4551ed35bb58c8cfec24a0eaea038edef25c06',
    alt: `image 5`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2989122.jpg&f=1&nofb=1&ipt=ed7cee31dc7cf822a237ecfd6f0b2f332da42eaa7519d8fb12796ce2891cea93',
    alt: `image 6`},

]



function createThumbnails() {
    images.forEach(function(image) {

        const imageElement = document.createElement('img')

        imageElement.src = image.src
        imageElement.alt = image.alt

        thumbnailsContainer.append(imageElement)
})
}

createThumbnails()
