//Erica's Task - creating .fetch to spoonacular API

//Spoonacular API documentation: https://spoonacular.com/food-api/docs
//Spoonacular Authentication: https://spoonacular.com/food-api/docs#Authentication
var page1Div = document.querySelector('.page-1')
var page2Div = document.querySelector('.page-2')
var page3Div = document.querySelector('.page-3')
var page4Div = document.querySelector('.page-4')



var cuisineBtn = document.getElementById('cuisine')
var mainDiv = document.querySelector('main')

var frenchStyle = document.getElementById('french')
var spoonApiKey = 'bff7143ee08c4a6aa8d53b4a91fc839f'

var id
var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information'



function page2handler (event){

    page1Div.style.display = 'none'

    var page2Div = document.createElement('div')
    page2Div.setAttribute('class','page-2')

    var french = document.createElement('button')
    var american = document.createElement('button')
    var german = document.createElement('button')
    var italian = document.createElement('button')

    mainDiv.appendChild(page2Div)
    page2Div.appendChild(french)
    page2Div.appendChild(american)
    page2Div.appendChild(german)
    page2Div.appendChild(italian)

    french.innerHTML = 'French'
    american.innerHTML = 'American'
    german.textContent = 'German'
    italian.textContent = 'Italian'

    console.log(event.target.textContent)

    return page3handler;

}


function page3handler(event){

    page2Div.style.display = 'none';

    var page3Div = document.createElement('div')
    page3Div.setAttribute('class','page-3')

    var cuisineImg = document.createElement('img')
    var cuisineHeader = document.createElement('h2')

    mainDiv.appendChild(page3Div)
    page3Div.appendChild(cuisineImg)
    page3Div.appendChild(cuisineHeader)

    console.log(event.target.textContent)

    cuisineHeader.textContent = 'Bake Ratatouille'

}



// function page4handler(){
    
//     var page4Div = document.createElement('div')
//     page4Div.setAttribute('class','page-4')


// }

cuisineBtn.addEventListener('click',page2handler)





// function getRecipeName(event){
//     event.preventDefault()
//     console.log(event.target.textContent) // could comment it out later, just for testing 

//     //TODO: probably need to update the button info under Style 
//     var cuisine = event.target.textContent//list of cuisines: https://spoonacular.com/food-api/docs#Cuisines (e.g. American, Chinese, French,German,Indian)
//     var cuisineUrl = 'https://api.spoonacular.com/recipes/complexSearch?' +'&cuisine=' + cuisine + '&apiKey=' + spoonApiKey


//     fetch(cuisineUrl)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(data){
//             console.log(data) //need to return data.id or data.title  
//         })
// }


// function getRecipeInfo(){
//     //event.preventDefault()
//     //console.log(event.target.textContent)

//     //var id = getRecipeName() //how to connect to the getReceiptName function? 
//     var id = '633754'
//     var receiptInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information?' + '&apiKey=' + spoonApiKey //how to make the url working? 

//     fetch(receiptInfoUrl)
//         .then(function(response){
//             return response.json()
//         })
//         .then(function(data){
//             console.log(data)
//         })

// }

// getRecipeInfo()




// frenchStyle.addEventListener('click',getRecipeName)




