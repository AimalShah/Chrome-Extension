let myUrls = []
const input = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");


inputBtn.addEventListener('click', () => {
    
        myUrls.push(input.value);
        console.log(myUrls);
        renderUrls();          
        input.value = "";

});
function renderUrls(){

    let listItems = "";
    for(let i = 0; i < myUrls.length; i++){
        console.log(myUrls[i]);
        listItems +=   `<li>
                        <a target='_blank' href="${myUrls[i]}">
                        ${myUrls[i]}
                        </a>
                        </li>`;
    }
    ulEl.innerHTML = listItems;
}