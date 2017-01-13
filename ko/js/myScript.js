/**
 * Created by Yumju
 */

$(function(){
    $('body').scrollspy({ target: '.navbar' });
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('body').on('click', '.homeScroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(".goWork").mouseover(function(){
        $(".goWork .caption").css({
            opacity:1,
            filter: alpha(opacity=100)//ie9
        });
    });

    $(".goWork").mouseleave(function(){
        $(".goWork .caption").css({
            opacity:0,
            filter: alpha(opacity=0)
        });
    });
});

//mailJs
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
            event.preventDefault();

            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name;

            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././php/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {

                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>메일이 전송 되었습니다! 감사합니다! </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("메일 전송이 실패하였습니다. 다시 한번 시도해주세요.");
                    $('#success > .alert-danger').append('</div>');

                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

});
