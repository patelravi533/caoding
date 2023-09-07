var data = [
    {
        imgUrl:"https://cdn.pixabay.com/photo/2015/08/10/20/17/handbag-883122_1280.jpg",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://4.bp.blogspot.com/-WVKlyHbuiiE/U0qIm-pgmWI/AAAAAAAADNI/MtR2N32gmWo/s1600/1388855550_584506638_4-we-r-a-trader-r-wholeseler-stock-lot-garments-Home-Lifestyle.jpg",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://d1rkccsb0jf1bk.cloudfront.net/products/99957577/main/large/at8060-50e-1358353486-9695.jpg",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://m.media-amazon.com/images/I/61odR70rgML._UY500_.jpg",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
]

var main = document.createElement('div')
main.setAttribute('id',"main_container")

data.map(function (ele){
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
main.append(box)
document.querySelector("body").append(main)

})
