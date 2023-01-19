let slider = document.getElementsByClassName(`slider`)[0];
let images = [`<img src="slide1.jpeg">`, `<img src="slide2.jpeg">`, `<img src="slide3.jpeg">`]
let i = 0;
slider.innerHTML = images[i % images.length];
i++;
setInterval(() => {
    slider.innerHTML = images[i % images.length];
    i++;
}, 3000);

function OrderForm(){
    var str = "Hello+A1+Cake+Shop%0D%0AI+would+like+to+order+a+cake.+Here+are+the+details%3A+%0D%0A";
    str = str + "Name%3A+" + document.getElementById("formName").value;
    str = str + "%0D%0AContact+Number%3A+" + document.getElementById("formNo").value;
    str = str + "%0D%0AFlavour%3A+" + document.getElementById("formFl").value;
    str = str + "%0D%0AOccasion%3A+" + document.getElementById("formCategory").value;
    str = str + "%0D%0AMessage+on+the+cake%3A+" + document.getElementById("formMsg").value;
    var url = "https://wa.me/917043266781?text=" + str;
    // window.location.href = url;
    // window.reload();
    window.open(url,"_blank");
}