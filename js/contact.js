// Contact page 
const btnSubmit = document.getElementById("btnSubmit")
const thkText = document.querySelector(".thankyouText")

btnSubmit.addEventListener("click", function () {

    setTimeout(function () {
        btnSubmit.style.display = "none"
        thkText.style.display = "block"

        setTimeout(function () {
            thkText.style.display = "none"
            btnSubmit.style.display = "block"

        }, 1800);

    }, 1300);
})