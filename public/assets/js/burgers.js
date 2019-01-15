$(function() {
    $(".form").on("submit", function(event) {
        // why is my event.preventDefault() not working?
        event.preventDefault();
        console.log($("#burgerName").val());
        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created new Burger");
            
            location.reload();
        });

    });

    $(document).on("click", ".devoured", function (event) {
        event.preventDefault();
        console.log("devoured");
    });

});