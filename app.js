console.log(`Say Cheese...`)

// selecting thumbnail container from element in HTML
const thumbnailsContainer = document.getElementById(`thumbnails`)

const bigDisplay = document.getElementById(`bigDisplay`)

// const noResultMsg = document.getElementById('noResults')


// add arrays - collection of objects - this case imgages
const images = [
    {src: "assets/colourfulcat.png",
    alt: `colourful cat rainbow`
    },

    {src: `https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/psychedelic-kitty-cat-peggy-collins.jpg`,
    alt: `patterned cat` 
    },
    
    {src: `https://i.pinimg.com/736x/8e/ce/d6/8eced6828f56f07a22364e93bf63e918.jpg`,
    alt: `patterned cat` 
    },
    

    {src: `assets/1.jpg`, 
    alt: `arcade` },

    {src: 'assets/2.jpg', 
    alt: `inky`},

    {src: 'assets/3.jpg', 
    alt: `inky1`},

    {src: 'assets/4.jpg', 
    alt: `light`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnamingcat.com%2Fwp-content%2Fuploads%2F2024%2F04%2F80s-Cat-Names.jpg&f=1&nofb=1&ipt=a6bd13f73e8a2ecf2bbefdbbcc4551ed35bb58c8cfec24a0eaea038edef25c06',
    alt: `retro kitty`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2989122.jpg&f=1&nofb=1&ipt=ed7cee31dc7cf822a237ecfd6f0b2f332da42eaa7519d8fb12796ce2891cea93',
    alt: `kitty swirl`},

    {src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercosmos.com%2Fw%2Ffull%2Fd%2F6%2Fc%2F2103736-3840x2160-desktop-4k-hypnotic-wallpaper.jpg&f=1&nofb=1&ipt=4a3de5912870f300e6e93c648cd4e79a0175aadd24d9d8c0ab3467deef2a4263',
    alt: `hypnotic swirl`},

] //sources/data



function createThumbnails(listImages) {

    thumbnailsContainer.innerHTML = ''
    
        listImages.forEach(function(image) {  
        //for, forEach Loops, needs 'callback function' as its "argument"
        //image is the perameter, they are the images

        const imageElement = document.createElement('img')
        // creating the imageElement with the 'img' tag

        // setting img tag up to link the content of objects 
        imageElement.src = image.src
        imageElement.alt = image.alt
        imageElement.className = "thumbnails";
        imageElement.tabIndex = 0;

        imageElement.addEventListener('click', function () {
            createBigImage(image)
        })
        //create tag - set its content - then APPEND to DOM
        thumbnailsContainer.append(imageElement)
})
}

createThumbnails(images)


function createBigImage(imageData) {

    bigDisplay.innerHTML = '' 
    // clears the container 

    const bigImage = document.createElement('img')

    bigImage.src = imageData.src;
    bigImage.alt = imageData.alt;
    bigImage.className = "big-image";
    bigDisplay.append(bigImage);

}

createBigImage(images[0])



// search input and thumbnail sort
const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase()

    const matchingImages = images.filter(function (image) {
        return image.alt.toLowerCase().includes(searchTerm)
    })

    createThumbnails(matchingImages)

    if (matchingImages.length === 0) {
        noResultMsg.style.display = `block`
    } else {
        noResultMsg.style.display = ('none')
    }
    
})







// one array method: filter
// one event: input
// one redraw: createThumbnails()



// // WAHOO I CHANGED THE POSITION 
// function showImage() {
//     bigImage.src = images[0].src;
//     bigImage.style.objectPosition = images[i].position;

// }




