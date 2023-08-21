let img = $("img");
img.hide();

$("#boton").on("click", function(){
    img.show();
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/amigos",
        success: data =>{
            let info;
            $("#lista").empty(info);

            data.forEach(element => {
                info = document.createElement("li");
                info.innerText = element.name + "id" + element.id;
                $("#lista").append(info)
            });
            img.hide([3000]);
        }
    })
});


$("#search").click (() => {
    let input = $("#input").val();
    $.ajax({
        type: "GET",
        url: `http://localhost:5000/amigos/${input}`,
        success: data => {
            $("#amigo").text(data.name);
        }
    })
});

$("#delete").click(()=>{
    let deleteInput = $("#inputDelete").val();
    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${deleteInput}`,
        success: data =>{
            $("#success").text("Se ha eliminado al amigo de la lista")
        }
    })
})