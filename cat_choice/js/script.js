document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.getElementsByTagName("img");
    const li = document.getElementsByTagName("li");
    const span = document.getElementsByTagName("span");
    let split = img[0].src.split("/");
    let choice = Math.floor(Math.random() * 2);

    if (choice) {
        span[0].innerHTML = "しろねこを選ぼう";
    }
    // console.log(img[0].src);
    // console.log(split[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1]);
    // console.log(split[split.length - 1].split("_"));

    const max_number = 6;
    // let random_number = Math.floor(Math.random() * max_number) + 1;
    // img[2].src = "img/cat_0" + random_number + ".png";

    for (let i = 1; i < img.length; i++) {
        img[i].src = "img/cat_0" + random() + ".png";
        // img[i].src = "img/img/cat_0" + random() + ".jpg";
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
            img_black[i].style.display = "none";
            li[i].classList.add("border");
            li[i].style.pointerEvents = "auto";
            // console.log(li[i]);
        }
        console.log("5000");
    }, 5000);


    window.setTimeout(function () {
        let img_black = document.getElementsByTagName("img");

        for (let i = 0; i < img_black.length; i++) {
            // console.log(img_black[i].src);
            let answer = img_black[i].src.split("/")[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1];
            // console.log(img_black[i].src.split("/")[split.length - 1].split("_")[this.length + 1].split(".")[0].split("0")[1]);
            // console.log(img_black[i].src);
            // if (answer == 1 || answer == 3 ) {
            if (choice) {
                if (answer == 5) {
                    li[i].classList.add("answer");
                }
                else {
                    li[i].classList.add("events_none");
                }
            } else {
                if (answer == 3 || answer == 6) {
                    li[i].classList.add("answer");
                }
                else {
                    li[i].classList.add("events_none");
                }
            }

            if (li[i].className.match("choice answer")) {
                li[i].classList.remove("choice");
                li[i].classList.remove("answer");
                li[i].classList.add("correct_answer");
            }
            li[i].style.pointerEvents = "none";
            li[i].classList.remove("border");
            img_black[i].style.display = "block";
        }
        // console.log(document.getElementsByClassName("choice answer").length);
        // console.log(document.getElementsByClassName("choice").length)
        document.getElementsByTagName("p")[0].style.color = "#000000";
        document.getElementsByTagName("p")[0].style.fontWeight = "900";
        // document.getElementsByTagName("p")[0].innerHTML = "正解数：" + document.getElementsByClassName("choice answer").length;
        document.getElementsByTagName("p")[0].innerHTML = "正解数：" + document.getElementsByClassName("correct_answer").length;
        // console.log(document.getElementsByTagName("p")[0].innerHTML);
        // alert('時間切れです');
        console.log("10000");
    }, 10000);
    // <li><img src="img/cat_01.png" alt="ねこ１"></li>

});
