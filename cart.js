document.querySelector('form').addEventListener('submit',addData)
function addData(){
    var adminData = []
    event.preventDefault()
    var obj = {
        imgUrl:document.querySelector('#image').value,
        name:document.querySelector("#name1").value,
        price : document.querySelector('#price').value,
        strikedOffPrice : document.querySelector('#sPrice').value,
    }
    adminData.push(obj)
    console.log(adminData)
        runData(adminData)
}
function runData(adminData){

adminData.map(function (ele){
var box = document.createElement("div")
box.setAttribute("id","container")

var image1 = document.createElement("img")
image1.src=ele.imgUrl
image1.setAttribute("id","main_jpg")

var productName = document.createElement('p')
productName.innerText= ele.name
productName.setAttribute('id','name')

var box2 = document.createElement('div')
box2.setAttribute("id","sep_box")

var price = document.createElement('p')
price.innerText=ele.price

var slashedP=document.createElement("p")
slashedP.innerText = ele.strikedOffPrice

box2.append(price,slashedP)

box.append(image1,productName,box2)

document.querySelector("#main_container").append(box)
})
}