console.log(`Say Cheese...`)

// selecting thumbnail container from element in HTML
const thumbnailsContainer = document.querySelector(`.thumbnails`)
const bigDisplay = document.getElementById(`bigDisplay`)


// add arrays - collection of objects - this case imgages
const images = [
    {src: 'assets/1.jpg', 
    alt: `arcade`},

    {src: 'assets/2.jpg', 
    alt: `inky`},

    {src: 'assets/3.jpg', 
    alt: `inky1`},

    {src: 'assets/4.jpg', 
    alt: `light`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnamingcat.com%2Fwp-content%2Fuploads%2F2024%2F04%2F80s-Cat-Names.jpg&f=1&nofb=1&ipt=a6bd13f73e8a2ecf2bbefdbbcc4551ed35bb58c8cfec24a0eaea038edef25c06',
    alt: `pyskitty`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2989122.jpg&f=1&nofb=1&ipt=ed7cee31dc7cf822a237ecfd6f0b2f332da42eaa7519d8fb12796ce2891cea93',
    alt: `psykitty1`},

] //sources/data



function createThumbnails() {
    
        images.forEach(function(image) {  
        //for, forEach Loops, needs 'callback function' as its "argument"
        //image is the perameter, they are the images

        const imageElement = document.createElement('img')
        // creating the imageElement with the 'img' tag

        console.log(image)

        // setting img tag up to link the content of objects 
        imageElement.src = image.src
        imageElement.alt = image.alt

        imageElement.addEventListener('click', function () {
            createBigImage(image)
        })

        //create tag - set its content - then APPEND to DOM
        thumbnailsContainer.append(imageElement)
})
}


createThumbnails() //call the funtion / envoke it ot it will not display


function createBigImage(imageData) {

    bigDisplay.innerHTML = ''

    const bigImage = document.createElement('img')

    bigImage.src = imageData.src
    bigImage.alt = imageData.alt


    bigDisplay.append(bigImage)

}

createBigImage(images[0])

// images = your photo archive
// thumbnails = buttons made from that archive
// click = “show this object’s data”
// big image = a single reusable display