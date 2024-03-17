document.addEventListener("DOMContentLoaded", function() {
    var tabLinks = document.querySelectorAll('#pills-tab a');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');

            var monthPrices = document.querySelectorAll('.price.month');
            var yearPrices = document.querySelectorAll('.price.year');

            if(target === '#Month') {
                monthPrices.forEach(function(price) {
                    price.classList.remove('visually-hidden');
                });
                yearPrices.forEach(function(price) {
                    price.classList.add('visually-hidden');
                });
            } else if (target === '#Year') {
                yearPrices.forEach(function(price) {
                    price.classList.remove('visually-hidden');
                });
                monthPrices.forEach(function(price) {
                    price.classList.add('visually-hidden');
                });
            }
        });
    });
});
