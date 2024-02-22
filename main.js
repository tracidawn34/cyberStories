const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

const body = document.querySelector('body');
 
const newDiv = document.createElement('div')
newDiv.className = 'newDiv'

const newDiv2 = document.createElement('div')
newDiv2.className = 'newDiv2'

newDiv.appendChild(newDiv2)
body.appendChild(newDiv)

//const URL2 = ''

//const titles = document.querySelector('#titles')

//function fetchData1(response){
   // let api1 = `https://hacker-news.firebaseio.com/v0/item/${response}.json?print=pretty`
  // return fetch(api1)
//}


fetch(URL)
.then((rawResponse)=>{
    return rawResponse.json()
}) .then((arr)=>{
arr.length = 100
let arr1 = []
for(let id of arr){
    arr1.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
} 
console.log(arr1)


return Promise.all(arr1)
})

.then((results) => Promise.all(results.map(res => res.json())))
.then((storyIds)=>{
    //console.log(storyIDs)
for (let story of storyIds){
       //let stories = document.createElement('li')
       addNewProm(story)
        
   }

  

})


function addNewProm(storyProm){
    newDiv2.innerHTML = `<a href="${storyProm.url}">${storyProm.title}</a> </br> \n ${storyProm.score} points </br>  By ${storyProm.by} </br>  ${storyProm.descendants} comments`
body.appendChild(newDiv2)
}
