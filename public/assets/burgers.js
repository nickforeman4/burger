console.log("Javascript File")

$("#readyBurger").on("click", ".updateBurger", function() {
    var id = $(this).attr("id")
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$("#eatenBurger").on("click", ".deleteBurger", function() {
    var id = $(this).attr("id")
    $.ajax({
        method: "DELETE",
        url: "/api/burgers/" + id,
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$("#addBurger").on("click", function() {
    var burger_name = $("#inputBurger").val()
    $.ajax({
        method: "POST",
        url: "/api/burgers/",
        data: {name: burger_name}
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$.ajax({
    method: "GET",
    url: "/api/burgers/",
    }).then(function(data) {
    console.log(data)
    location.reload()
})