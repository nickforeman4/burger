console.log("Javascript File")

$("#readyBurger").on("click", ".updateBurger", function() {
    var id = $(this).attr("id")
    console.log("id")
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$("#eatenBurger").on("click", ".deleteBurger", function() {
    var id = $(this).attr("id")
    console.log("id", id)
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$("#addBurger").on("click", function() {
    var burger_name = $("#inputBurger").val()
    $.ajax("/api/burgers/", {
        method: "POST",
        data: {name: burger_name}
    }).then(function(data) {
        console.log(data)
        location.reload()
    })
});

$.ajax("/api/burgers", {
    method: "GET"
}).then(function(data) {
    console.log(data)
});