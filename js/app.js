//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// // Smooth scroll 
// var scroll = new SmoothScroll('#navbar-navlist a', {
//     speed: 300,
//     offset: 60
// });

// Navbar Active Class

var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});





// Contact Form
function validateForm(event) {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var comments = document.forms["contactForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
        fadeIn();
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
        fadeIn();
        return false;
    }

    const contactForm = event.target;
    const formData = new FormData(contactForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => {
        console.log("Form successfully submitted");
        document.getElementById("simple-msg").innerHTML = "Thank you for your message.";
        document.forms["contactForm"]["name"].value = "";
        document.forms["contactForm"]["email"].value = "";
        document.forms["contactForm"]["subject"].value = "";
        document.forms["contactForm"]["comments"].value = "";
    })
    .catch(error => {
        console.error(error);
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Something went wrong*</div>";
    });

    return false;
}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}





// typed

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};

function typewrite() {
    if (toRotate === 'undefined') {
        changeText()
    }
    else
        var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
    document.body.appendChild(css);
};






//
/********************* Swicher js ************************/
//

function toggleSwitcher() {
    var i = document.getElementById("style-switcher");
    if (i.style.left === "-189px") {
      i.style.left = "-0px";
    } else {
      i.style.left = "-189px";
    }
  }
  
  function setColor(theme) {
    document.getElementById("color-opt").href = "./css/colors/" + theme + ".css";
    toggleSwitcher(false);
  }













































  