document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.getElementsByTagName("img");
    const li = document.getElementsByTagName("li");
    let split = img[0].src.split("/");
    console.log(img[0].src);
    console.log(split[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1]);
    console.log(split[split.length - 1].split("_"));

    const max_number = 4;
    // let random_number = Math.floor(Math.random() * max_number) + 1;
    // img[2].src = "img/cat_0" + random_number + ".png";

    for (let i = 1; i < img.length; i++) {
        img[i].src = "img/cat_0" + random() + ".png";
    }

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function (e) {
            this.classList.add("choice");
        });
    }



    function random() {
        return Math.floor(Math.random() * max_number) + 1;
    }

    window.setTimeout(function () {
        let img_black = document.getElementsByTagName("img");

        for (let i = 0; i < img_black.length; i++) {
            // console.log(img_black[i].src);
            let answer = img_black[i].src.split("/")[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1];
            // console.log(img_black[i].src.split("/")[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1]);
            if (answer == 3) {
                li[i].classList.add("answer");
            }
        }
        console.log(document.getElementsByClassName("choice answer").length);
        document.getElementsByTagName("p")[0].style.color = "#000000";
        document.getElementsByTagName("p")[0].innerHTML = "正解数：" + document.getElementsByClassName("choice answer").length;
        console.log(document.getElementsByTagName("p")[0].innerHTML);
        alert('時間切れです');
    }, 5000);
    // <li><img src="img/cat_01.png" alt="ねこ１"></li>

});
