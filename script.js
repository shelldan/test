var API_KEY = 'AIzaSyCPVbJouFqqk56R4EteKzKMhY703BMSE_M'
var cuisine = 'Ratatouille Pasta'

//maxResults = 1, returning 1 result(video)
var url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+ cuisine + '&key=' + API_KEY

// fetch(url)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data)
//     console.log(data.items[0].id.videoId) //return youtubeVideoId





//search stackoverflow: Embedding a youtube video on page using javascript 


var videoId = 'Vbmr2Qr_1Ok'
var obj ={
    "video":{
        "videoId":'Vbmr2Qr_1Ok',
        "value":"<iframe title='YouTube video player' type=\'text/html\' width='640' height='390' src='http://www.youtube.com/embed/' " + this.videoId + "frameborder='0' allowFullScreen></iframe>"
    }
}
document.write(obj.video.value)