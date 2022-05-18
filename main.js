window.onload = function()
{
    var contador = 0;
    var btn = document.getElementById("add-task");
    var areaTexto = document.getElementById("nueva-tarea")
    var currentUl = document.getElementById("lista-interactiva")
    btn.onclick = function()
    {

        var nuevoTexto = areaTexto.value;
        var newLi  = document.createElement("li");
        newLi.className="child";
        var newContent = document.createTextNode(nuevoTexto);
        newLi.appendChild(newContent)
        currentUl.append(newLi)

        if(contador % 2 === 0)
        {
            newLi.className="impar";
        }
        else
        {
            newLi.className="par";
        }
        contador++;
    }

}
