function show_hide(contId, menuId){

    let div = document.getElementById(contId);
    let nav = document.getElementById(menuId);

    if ((div.style.transform === "translateX(-1000%)" || div.style.transform == "") && (nav.style.background === "none" || nav.style.background == "")){
        div.style.transform = "translateX(0%)";
        nav.classList.add("show");
        
    }
    else {
        div.style.transform = "translateX(-1000%)";
        nav.classList.remove("show");
    }

}

