var marcaCarro = document.querySelector("#carros");
var modeloCarro = document.querySelector("#modelos-carro");

marcaCarro.addEventListener("change", function(){
    modeloCarro.textContent = ''
    if(marcaCarro.value === "Porsche"){
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
    else if(marcaCarro.value === "Ferrari"){
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
    else if(marcaCarro.value === "Nissan"){
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

var button = document.querySelector("#button");
button.addEventListener("click", function(){
    var textarea = document.querySelector("#coments");
    var divContent = document.querySelector("#comentarios");
    var paragrafo = document.createElement("p")
    var newDiv = document.createElement("div")
    var deleteButton = document.createElement("button")
    var changeButton = document.createElement("button")

    // pegando os values
    var textareaValue = textarea.value;
    var modeloCarroValue = modeloCarro.value;
    var marcaCarroValue = marcaCarro.value;
    
    // conteudo
    paragrafo.innerHTML = marcaCarroValue + "<br>" + modeloCarroValue + "<br>" + textareaValue
    paragrafo.style.backgroundColor = "white";
    paragrafo.style.padding = "15px";
    paragrafo.style.width = "21em";
    paragrafo.style.height = "80px";
    paragrafo.style.borderRadius = "5px";
    paragrafo.style.marginTop = "30px";
    paragrafo.style.marginLeft = "140px"
    paragrafo.className = "p1"

    newDiv.style.display = "flex"

    deleteButton.style.height = "80px"
    deleteButton.style.marginTop = "30px"
    deleteButton.style.marginLeft = "20px"
    deleteButton.style.width = "50px"
    deleteButton.style.borderRadius = "15px"
    deleteButton.textContent = "delete"

    changeButton.style.height = "80px"
    changeButton.style.marginTop = "30px"
    changeButton.style.marginLeft = "20px"
    changeButton.style.width = "50px"
    changeButton.style.borderRadius = "15px"
    changeButton.textContent = "edit"

    newDiv.appendChild(paragrafo)
    newDiv.appendChild(deleteButton)
    newDiv.appendChild(changeButton)
    divContent.appendChild(newDiv);

    // removendo paragrafo
    deleteButton.addEventListener("click", function(){
        paragrafo.parentNode.remove(true)
    })

    // editando mensagem
    changeButton.addEventListener("click", function(){
        marcaCarro.value = "start"
        modeloCarro.textContent = ''
        textarea.value = ''

        var newMarcaCarro = marcaCarro.value
        var newModeloCarro = modeloCarro.value
        var newTextarea = textarea.value

        button.addEventListener("click", () => {
            newDiv.querySelector(".p1").innerHTML = newMarcaCarro + "<br>" + newModeloCarro + "<br>" + newTextarea

            newDiv.firstChild.remove(true)
            deleteButton.remove(true)
            changeButton.remove(true)
        })
    })
})