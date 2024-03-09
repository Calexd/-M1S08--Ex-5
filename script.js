let color = document.getElementById("colorInput");
let allClass = document.querySelectorAll('.elements')

console.log(allClass)

color.addEventListener('input', () => {
    let colorSelect = color.value;
    let aplicarButton = document.getElementById("button-color");
        aplicarButton.addEventListener('click', () => {
            allClass.forEach(elemento1 => {
                elemento1.style.backgroundColor = colorSelect;
            })
        })
});


