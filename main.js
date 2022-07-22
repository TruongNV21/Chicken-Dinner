const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.sidebar__button--toggle'),
    searchBtn = body.querySelector('.sidebar__menu__input .icon'),
    modeSwitch = body.querySelector('.bottom-content__mode span.switch'),
    textMode = body.querySelector('.bottom-content__mode span.text-mode'),
    modeIcons = body.querySelector('.mode__icons');

console.log(textMode)

modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        textMode.innerText = "Light Mode"
    }
    else{
        textMode.innerText = "Dark Mode"
    }
});
modeIcons.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        textMode.innerText = "Light Mode"
    }
    else{
        textMode.innerText = "Dark Mode"
    }
});

toggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("close")
});


searchBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("close")
    // console.log("Hello")
})
