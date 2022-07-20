const btn = document.getElementById("navBtn");
const a = document.getElementById("imgLight");
const b = document.getElementById("imgDark");
btn.addEventListener('click', function () {
    document.getElementById("navList").classList.toggle('off');
    button()
});

function button(){
    const a = document.getElementById("imgLight");
    const b = document.getElementById("imgDark");
    console.log(a.classList)
    if (a.classList.value === "off active") {
        a.classList.remove("active");
        b.classList.add("active")
    } else{
        a.classList.add("active");
        b.classList.remove("active")
    }
}