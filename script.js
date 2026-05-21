function viewMore() {

    let text = document.getElementById("moreInfo");
    let button = document.getElementById("btn");

    if (text.style.display === "block") {

        text.style.display = "none";
        button.innerHTML = "View More";
    }

    else {

        text.style.display = "block";
        button.innerHTML = "View Less";
    }
}


function showAlert() {

    alert("Thank You For Visiting My Portfolio!");
}