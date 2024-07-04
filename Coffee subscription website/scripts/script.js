$(document).ready(function() { // Toggles the collapses when clicked on
    $(".plan-element-collapse").hide();
    $(".plan-element-header").on('click', function() {
        $(this).closest(".col-12").find(".plan-element-collapse").slideToggle()
    });
});
$(document).ready(function() { // Adds active class to selected options
    $('.plan-element-collapse .option').on('click', function() {
        $(this).closest(".plan-element-collapse").find(".option").removeClass("active");
        $(this).addClass("active");
    });
});
$(document).ready(function() { // Adds to data object and saves it to sessionStorage 
    let data = {};
    $('.option').on('click', function() {
        let category = $(this).data('cat');
        data[category] = $(this).data('option');
        sessionStorage.setItem('coffeeRoasters', JSON.stringify(data));
        updateSummary();
    })
})
$(document).ready(function() { // Shows checkout popup when "create my plan" is clicked
    $("#summarize-plan").on('click', function() {
        $("#order-summary-popup").css('display', 'flex');
    });
    
});
$(document).ready(function() { // Closes checkout popup when not clicked on
    $("#order-summary-popup").on("click", function(e) {
        if (e.target.classList.contains("checkout-overlay")) {
            $("#order-summary-popup").hide();
        }
    });
});
$(document).ready(function() { // Sets active state to navigation in plan creation
    $(".plan-nav-link").on("click", function() {
        $(this).closest("ul").find(".plan-nav-link").removeClass("active");
        $(this).addClass("active");
    });
})
function updateSummary() { // Updates order summary
    const data = JSON.parse(sessionStorage.getItem('coffeeRoasters'));
    Array.from($(".sum-item")).forEach(item => {
        if (Object.keys(data).includes(item.dataset.orderVal)) {
            $(`.sum-item[data-order-val="${item.dataset.orderVal}"]`).text(data[item.dataset.orderVal]);
        }
    });
}