let days = document.querySelectorAll("span")
let graphs = document.querySelectorAll(".dataGraph")
let output = document.querySelectorAll("h4")

const date = new Date()
console.log(date.getDay())
let today = document.getElementById(date.getDay())
today.classList.add("today")

let dataArray = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

days.forEach(function(days, index){
    days.innerHTML=dataArray[index]["amount"]
})

graphs.forEach(function(graph, index){
    graph.style.height=dataArray[index]["amount"]*2+"px"    

    graph.addEventListener("mouseover", function(e){
        output[index].style.visibility="visible"
    })
    graph.addEventListener("mouseout", function(e){
        output[index].style.visibility="hidden"
    })
})
