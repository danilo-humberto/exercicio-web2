var marcaCarro = document.querySelector("#carros");
var modeloCarro = document.querySelector("#modelos-carro");

marcaCarro.addEventListener("change", function(){
    modeloCarro.textContent = ''
    if(marcaCarro.value === "porsche"){
        modeloCarro.textContent = ''
        var optionPorsche1 = document.createElement("option");
        optionPorsche1.textContent = 'Porsche 911';
        modeloCarro.appendChild(optionPorsche1);

        var optionPorsche2 = document.createElement("option");
        optionPorsche2.textContent = 'Porsche Cayenne';
        modeloCarro.appendChild(optionPorsche2);

        var optionPorsche3 = document.createElement("option");
        optionPorsche3.textContent = 'Porsche Panamera';
        modeloCarro.appendChild(optionPorsche3);
    }
    else if(marcaCarro.value === "ferrari"){
        modeloCarro.textContent = '';
        var optionFerrari1 = document.createElement("option");
        optionFerrari1.textContent = "Ferrari Portofino";
        modeloCarro.appendChild(optionFerrari1);

        var optionFerrari2 = document.createElement("option");
        optionFerrari2.textContent = 'Ferrari F8';
        modeloCarro.appendChild(optionFerrari2);

        var optionFerrari3 = document.createElement("option");
        optionFerrari3.textContent = "Ferrari 296 GTB"
        modeloCarro.appendChild(optionFerrari3)
    }
    else if(marcaCarro.value === "nissan"){
        modeloCarro.textContent = ''
        var optionNissan1 = document.createElement("option");
        optionNissan1.textContent = "Nissan Skyline R34";
        modeloCarro.appendChild(optionNissan1);

        var optionNissan2 = document.createElement("option");
        optionNissan2.textContent = 'Nissan GT-R R35';
        modeloCarro.appendChild(optionNissan2);

        var optionNissan3 = document.createElement("option");
        optionNissan3.textContent = 'Nissan 370Z';
        modeloCarro.appendChild(optionNissan3);
    }
});

var divContent = document.querySelector("#comentarios");
var textarea = document.querySelector("#coments")

var button = document.querySelector("#button");

button.addEventListener("click", function(){
    var paragrafo = document.querySelector("#tasks");
    paragrafo.textContent = textarea
    paragrafo.classList.remove("hide")
    divContent.appendChild(paragrafo)
    console.log(textarea)
})