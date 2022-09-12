//Erica's Task - creating .fetch to spoonacular API

//Spoonacular API documentation: https://spoonacular.com/food-api/docs
//Spoonacular Authentication: https://spoonacular.com/food-api/docs#Authentication
var page2Div = document.createElement('div')
var page3Div = document.createElement('div')
var page4Div = document.createElement('div')

var page1Div = document.querySelector('.page-1')

var cuisineBtn = document.getElementById('cuisine')
var mainDiv = document.querySelector('main')

var frenchStyle = document.getElementById('french')
var spoonApiKey = '0a580c74f6de4c57b52b33cce0d2d1e6'

var id = [] //might need to use array to remove duplicate id
var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information'



function page2handler (event){

    page1Div.style.display = 'none'

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

    console.log(event.target.textContent) //cuisine

    $("button").click(page3handler) //stackoverflow: how to get ID of button user just clicked? 
    //$("button").click(getRecipeName)
}


function page3handler(event){

    page2Div.style.display = 'none';

    page3Div.setAttribute('class','page-3')


    console.log(event.target.textContent) // French 

    //cuisineHeader.textContent = 'Bake Ratatouille' //for testing, will delete later 

    var cuisine = event.target.textContent
    
    var cuisineUrl = 'https://api.spoonacular.com/recipes/complexSearch?' +'&cuisine=' + cuisine + '&apiKey=' + spoonApiKey
    
    console.log(cuisineUrl)

    function getRecipeName(){
        fetch(cuisineUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(recipeName){
            console.log(recipeName)
            

            for (var i=0; i<10; i++){ //limited to 10 per page, butwhy can't use i<recipeName.length? 
                var cuisineHeader = document.createElement('h2')
                var cuisineImg = document.createElement('img')
                var cuisineRecipe = document.createElement('p') // not sure if we want to add here

                cuisineHeader.textContent = recipeName.results[i].title
                cuisineImg.src=recipeName.results[i].image
                cuisineHeader.setAttribute('id',recipeName.results[i].id)

                
                mainDiv.appendChild(page3Div)
                page3Div.appendChild(cuisineHeader)
                page3Div.appendChild(cuisineImg)
                page3Div.appendChild(cuisineRecipe)

                
               $('h2').click(function(){
                console.log($(this).attr('id')) //return the id 
                var id = ($(this).attr('id'))
                console.log(id)
                localStorage.setItem('id',id) 

                var recipeInfoUrl = 'https://api.spoonacular.com/recipes/' + id +'/information?' + '&apiKey=' + spoonApiKey
                
                fetch(recipeInfoUrl)
                .then(function(response){
                    return response.json()
                })
                .then(function(recipeInfo){
                    console.log(recipeInfo.summary)
                    cuisineRecipe.innerHTML=recipeInfo.summary


                })
               })
            }
        })
    }
    getRecipeName()
}





cuisineBtn.addEventListener('click',page2handler)





