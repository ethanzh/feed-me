function addRestaurant() {
    let newName = $('#input_restaurant').val()
    $(`#restaurant_list`)
        .append(`<a href="#!" class="collection-item">` + newName + `</a>`)
}

function hasConflict(newRestaurant) {
    $("#restaurant_list").each(function(){
        console.log(`hi`)
    });
}
