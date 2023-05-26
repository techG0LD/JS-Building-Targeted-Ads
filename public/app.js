// get user's data
// get user's coordinates

async function getCoords(){
    userPos = await new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    return [userPos.coords.latitude, userPos.coords.longitude]
}

console.log(getCoords())





// get user's time
function userTime(){
    const now = new Date()
    return now.getHours()
}

function getMealTime(){
    const tod = userTime()

    // if(tod >= 20) {return 'late-night snack'}
    // else if(tod >= 16 ) {return 'dinner'}
    // else if(tod >= 11) {return 'lunch'}
    // else {return 'breakfast'}

     return tod >= 20 ? 'late-night snack' : tod >= 16 ? 'diner' : tod >= 11 ? 'lunch' : 'breakfast'
}

console.log(getMealTime())


// helper functions
// check time of day


// build ads
// build ad 1

function buildAd1(){
    const mealTime = getMealTime()
    let ad1 = document.querySelector('.ad1')
    let adContent = document.createElement('p')
    adContent.innerHTML= `We've got the best <span>${mealTime} in town!`
    ad1.append(adContent)
}




// build ad 2

function buildAd2(coordinates){
    const coords = coordinates
    const mapsLink = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z`
   let ad2 = document.querySelector('.ad2')
   let adContent = document.createElement('p')
   adContent.innerHTML = `It's time to try our coffee! <span><a href='${mapsLink}' target = "_blank">We're this close!</a></span>`

   ad2.append(adContent)

}






// event listeners
// on load, build ads

window.onload = async () => {
    buildAd1()
    let coords = await getCoords()
    buildAd2(coords)
}