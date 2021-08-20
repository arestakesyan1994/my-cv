const a1 = document.querySelectorAll(".a1");

const clear = ()=>{
    for(let e of a1){
        e.classList.remove("a2")
    }
}

window.addEventListener("scroll", (e)=>{
    if(EXPERIENCE.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".EXPERIENCE").classList.add("a2")
    }else if(EDUCATION.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".EDUCATION").classList.add("a2")
    }else if(SKILLS.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".SKILLS").classList.add("a2")
    }else if(INTERESTS.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".INTERESTS").classList.add("a2")
    }else if(PERSONAL_PROJECTS.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".PERSONAL_PROJECTS").classList.add("a2")
    }else if(LANGUAGES.offsetTop-50>=window.scrollY){
        clear()
        document.querySelector(".LANGUAGES").classList.add("a2")
    }
})

document.querySelector(".EXPERIENCE").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: EXPERIENCE.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector(".EDUCATION").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: EDUCATION.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector(".SKILLS").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: SKILLS.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector(".INTERESTS").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: INTERESTS.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector(".PERSONAL_PROJECTS").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: PERSONAL_PROJECTS.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector(".LANGUAGES").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: LANGUAGES.offsetTop-50,
        behavior: 'smooth'
    })
    if(window.outerWidth<500){
        document.querySelector(".menu").style.display='none'
    }
})

document.querySelector("#href").addEventListener("click", ()=>{
    document.querySelector(".menu").classList.remove("menu_click")
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

document.querySelector(".submenu").addEventListener("click", ()=>{
    document.querySelector(".menu").style.display="block"
    document.querySelector(".menu").classList.add("menu_click")
})

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".menu").style.display="none"
    document.querySelector(".menu").classList.remove("menu_click")
})
