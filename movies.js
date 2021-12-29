$("form").on("submit", function(e){
    e.preventDefault();
    let listing = `${$("input").get(0).value} Rating: ${$("input").get(1).value}     `;
    //add the movie and listing
    $("ul").append($("<li>")
        .text(listing)
        .append($("<button>").text("remove")));
    //remove list if press the remove button
    $("ul button").on("click", function(e){
        $(e.target).parent().remove();
    });
});