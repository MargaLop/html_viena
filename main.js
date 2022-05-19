window.onload = function ()
{
    var agregarTarea = function (tarea)
    {
        var newLi = document.createElement("li");

        newLi.className = "child";
        switch (contador++ % 2)
        {
            //cambio de colores de la lista
            case 0:
                newLi.classList.add("impar");
                break;
            
            case 1:
                newLi.classList.add("par");
                break;
            
            default:
               break;
            
        }
       
    
        var newContent = document.createTextNode(tarea);
        newLi.appendChild(newContent);
        currentUl.append(newLi);
    }

    var btn = document.getElementById("add-task");
    var areaTexto = document.getElementById("nueva-tarea");
    var currentUl = document.getElementById("lista-interactiva");
    var contador = 0;
    var listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || [];

    listaTareas.forEach(tarea =>
    {
        agregarTarea(tarea);
    });

    btn.onclick = function()
    {
        agregarTarea(areaTexto.value);
        listaTareas.push(areaTexto.value);
        areaTexto.value = "";
        localStorage.setItem('listaTareas',  JSON.stringify(listaTareas));
    }

    /*btn.clear = function()
    {
        localStorage.clear()
    }*/
}