window.onload = function()
{
    //var contador = 0;
    var btn = document.getElementById("add-task");
    var areaTexto = document.getElementById("nueva-tarea")
    var currentUl = document.getElementById("lista-interactiva")
    btn.onclick = function()
    {
        //contador++;
        //console.log(contador);
        var nuevoTexto = areaTexto.value;
        //console.log(nuevoTexto);

        var newLi  = document.createElement("li");
        newLi.className="child";
        var newContent = document.createTextNode(nuevoTexto);
        newLi.appendChild(newContent)
        currentUl.append(newLi)
    }
}
