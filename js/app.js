$(document).foundation();

$('#contactForm').on('valid.fndtn.abide', function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    $.ajax({
    url: "//formspree.io/kayla.hennig@gmail.com", 
    method: "POST",
    data: {"_subject": "Wedding Website Inquiry", name: name, email: email, message: message},
    dataType: "json",
    success: function(){
        $("#contactForm")[0].reset();
        $('#myModal').foundation('reveal', 'open');
    }
    });
});

$("#closeModal").on('click', function(){
    $("form").removeClass("error");
});


