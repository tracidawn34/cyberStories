const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'


function fetchData1(response){
    let api1 = `https://hacker-news.firebaseio.com/v0/item/${response}.json?print=pretty`
    return fetch(api1)
}


fetch(URL)
.then((rawResponse)=>{
    return rawResponse.json()
})
