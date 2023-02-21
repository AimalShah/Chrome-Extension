let myUrls = []
const input = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
console.log(tabBtn)



let urlsFromLocalStorage = JSON.parse(localStorage.getItem("myUrls")) 
if(urlsFromLocalStorage){
  myUrls = urlsFromLocalStorage;
  render(myUrls)
}




tabBtn.addEventListener('click', () => {
  chrome.tabs.query({active : true , currentWindow : true}, (tabs) =>{
    myUrls.push(tabs[0].url)
    localStorage.setItem("myUrls" , JSON.stringify(myUrls))
    render(myUrls)
  })
  })

function render(Urls) {
  let listItems = ""
  for (let i = 0; i < Urls.length; i++) {
    console.log(myUrls[i])
    listItems += `<li>
                        <a target='_blank' href="${myUrls[i]}">
                        ${Urls[i]}
                        </a>
                 </li>`
  }
  ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("click" , () =>{
  alert('If you want to delete all your data press "OK"')
  localStorage.clear()
  myUrls = []
  render(myUrls)

})

inputBtn.addEventListener("click", () => {
  myUrls.push(input.value)
  console.log(myUrls)
  render(myUrls)
  input.value = ""
  localStorage.setItem("myUrls", JSON.stringify(myUrls))
})