var searhButton = document.getElementById('searhButton')
var inputText1 = document.getElementById('inputText1')
var inputText2 = document.getElementById('inputText2')
var inputText3 = document.getElementById('inputText3')
var output = document.getElementById('output')

searhButton.addEventListener("click", function addText(){
    let text1 = inputText1.value
    let text2 = inputText2.value
    let text3 = inputText3.value
    if(text1 !="" || text2!="" || text3!=""){
    nameF = document.getElementById("text1")
    describe = document.getElementById("text2")
    url = document.getElementById("text3")
    let newButton = document.createElement("show")
    newButton.classList.add("m-2")
    newButton.classList.add("p-1")
    newButton.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${text3}" alt="logo" width="100%" height="255"> 
                        <div class="card-body">
                            <p class="card-text">
                                <p class="card-text">${text1}</p> 
                        <div>
                            <p class="card-text">
                                ${text2}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">purchase</button>
                                </div>
                                <small class="text-muted">720ฺ.baht</small>
                            </div>
                        </div>
                    
    </div>`
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
    </div>`
    }
    
    const nameFlower = ["กุหลาบ","ดอกคาร์เนชั่นแดง","ดอกกล้วยไม้","ดอกบัว","ดอกกระบองเพชร","ดอกทานตะวัน","ดอกทิวลิป","ดอกบานไม่รู้โรย","ดดอกลิลลี่"]
    const picFlower = 
    [
        `<img src="/pic/กุหลาบ.jpg" alt="กุหลาบ" width="50%" height="50%">`,
        `<img src="/pic/ดอกคาร์เนชั่นแดง.jpg" alt="ดอกคาร์เนชั่นแดง" width="50%" height="50%">`,
        `<img src="/pic/ดอกกล้วยไม้.jpg" alt="ดอกกล้วยไม้"  width="50%" height="50%">`,
        `<img src="/pic/ดอกบัว.jpg" alt="ดอกบัว" width="50%" height="50%">`,
        `<img src="/pic/ดอกกระบองเพชร.jpg" alt="ดอกกระบองเพชร" width="50%" height="50%">`,
        `<img src="/pic/ดอกทานตะวัน.jpg" alt="ดอกทานตะวัน" width="50%" height="50%">`,
        `<<img src="/pic/ดอกทิวลิป.jpg" alt="ดอกทิวลิป" width="50%" height="50%">`,
        `<img src="/pic/ดอกบานไม่รู้โรย.jpg" alt="ดอกบานไม่รู้โรย" width="50%" height="50%">`,
        `<img src="pic/ดอกลิลลี่.jpg" alt="ดอกลิลลี่" width="50%" height="50%">`
    ]
    for(let i=0; i<nameFlower.length;i++ ){
        if(text1==nameFlower[i]){
            BElement.innerHTML =`
            <header class="p-3 bg-dark text-white py-3 mb-3 border-bottom ">
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
    
    <main class="col-md-12 ms-sm-auto col-lg-12 px-md-12"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand">
        <div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">found data</h1>
        </div>
      <div class="table-responsive" id="students">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody id="students_table"> 
            <tr>
              <td scope="col">1</th>
              <td scope="col">`+picFlower[i]+`</th>
              <td scope="col">`+nameFlower[i]+`</th>
              <td scope="col"></th>
            </tr>
          </tbody>
        </table>
      </div>
    </main>`
        }
    }
    
});
searhButton.addEventListener('click',addText)
var BElement = document.getElementById('body')