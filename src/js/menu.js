
let half = false;


function menu_edit(){
    let element = document.getElementById("container-edit");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

    // document.getElementById("container-canvas").classList.toggle("myChart-half");
    const chart = document.getElementById("myChart");
    let heightStyle = chart.style.height;
    let heightInt = parseInt(heightStyle);
    // let width = height.val;
    if (!half) {
        heightInt /= 2;
        chart.style.height = heightInt.toString() + "px";
        // chart.height = heightInt;
        half = true;
    } else {
        heightInt *= 2;
        chart.style.height = heightInt.toString() + "px";
        // chart.height = heightInt;
        half = false;
    }
}
document.getElementById("menu-edit").addEventListener('click',menu_edit);

const menuList = document.querySelectorAll("nav.menu ul.menu_ul li");

for (let i = 0; i < menuList.length; i++) {
menuList[i].addEventListener("click", function() {
    menuList[i].classList.toggle("list-click");
    });
}