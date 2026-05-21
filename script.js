function viewMore() {

    let text = document.getElementById("moreInfo");
    let button = document.getElementById("btn");

    if (text.classList.contains("show")) {

        text.classList.remove("show");
        button.innerHTML = "View More";
    }

    else {

        text.classList.add("show");
        button.innerHTML = "View Less";
    }
}


function showAlert() {

    alert("Thank You For Visiting My Portfolio!");
}