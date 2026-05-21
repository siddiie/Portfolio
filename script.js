function viewMore() {

    let text = document.getElementById("moreInfo");
    let button = document.getElementById("btn");

    if (text.style.display === "none") {

        text.style.display = "block";
        button.innerHTML = "View Less";
    }

    else {

        text.style.display = "none";
        button.innerHTML = "View More";
    }
}


function showAlert() {

    alert("Thank You For Visiting My Portfolio!");
}