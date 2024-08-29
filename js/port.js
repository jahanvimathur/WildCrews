//FOR QUESTION 
var acc = document.getElementsByClassName
        ("accordion");
        var i;

        for(i = 0; i < acc.length; i++){
            acc[i].addEventListener("click", function
            () {
                this.classList.toggle("active");
                this.parentElement.classList.toggle
                ("active");

                var pannel = this.nextElementSibling;

                if (pannel.style.display === "block"){
                 pannel.style.display = "none";
                } else{
                    pannel.style.display = "block";
                }
            });
        }

// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});


