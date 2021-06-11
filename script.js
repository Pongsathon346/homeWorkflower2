var searhButton = document.getElementById('searhButton')
var inputText1 = document.getElementById('inputText1')
var inputText2 = document.getElementById('inputText2')
var inputText3 = document.getElementById('inputText3')
var output = document.getElementById('output')

function addText(){
    let text1 = inputText1.value
    let text2 = inputText2.value
    let text3 = inputText3.value
    if(text1 !=""){
        console.log(text1)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text1
    output.appendChild(newButton)
    }
    if(text2 !=""){
        console.log(text2)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text2
    output.appendChild(newButton)
    }
    if(text3 !=""){
        console.log(text3)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text3
    output.appendChild(newButton)
    }
    if(text1 !="" || text2!="" || text3!=""){
        BElement.innerHTML = `<header class="p-3 bg-dark text-white py-3 mb-3 border-bottom ">
        <div class="container-fluid d-grid gap-3 align-items-center navbar-dark" style="grid-template-columns: 1fr 2fr;">
            <h2>
                Flower Shop
            </h2>
    
            <div class="d-flex align-items-center">
                <form class="w-100 me-3">
                    <input type="search" class="form-control" placeholder="flower name..." aria-label="Search" id="inputText1">
                </form>
                <form class="w-100 me-3">
                    <input type="search" class="form-control" placeholder="Description..." aria-label="Search" id="inputText2">
                </form>
                <form class="w-100 me-3">
                    <input type="search" class="form-control" placeholder="price..." aria-label="Search" id="inputText3">
                </form>
                <button type="button" class="btn btn-outline-light me-2" id="searhButton">Search</button>
            </div>
        </div>
    </header>
    <div >
    <h1>Not found data</h1>
    </div>
    `
    
    }
}
searhButton.addEventListener('click',addText)
var BElement = document.getElementById('body')