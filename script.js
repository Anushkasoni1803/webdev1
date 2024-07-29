

$('#stories').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#fcarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
}) 


// $(document).ready(function() {
//     $('#talentSeekerBtn, #jobSeekerBtn').click(function() {
//       let buttonId = $(this).attr('id');
        
//       if (buttonId === 'talentSeekerBtn') {
//         $('#talentSeekerContent').show();
//         $('#jobSeekerContent').hide();
//       } else {
//         $('#talentSeekerContent').hide();
//         $('#jobSeekerContent').show();
//       }
//     });
//   });
  
$(document).ready(function() {
    
    $('#jobSeekerContent').hide();
  
    $('#talentSeekerBtn, #jobSeekerBtn').click(function() {
      let buttonId = $(this).attr('id');
  
      if (buttonId === 'talentSeekerBtn') {
        $('#talentSeekerContent').show();
        $('#jobSeekerContent').hide();
        $('#talentSeekerBtn').addClass('bg-success');
        $('#jobSeekerBtn').removeClass('bg-success');
        

      } else {
        $('#talentSeekerContent').hide();
        $('#jobSeekerContent').show();
        $('#jobSeekerBtn').addClass('bg-success');
        $('#talentSeekerBtn').removeClass('bg-success');
      }
    });
  });

//form validation manually
// $(document).ready(function() {
//     $('#myForm').submit(function(event) {
//       event.preventDefault();
  
//       let isValid = true;
  
//       // Check for empty fields
//       $('input[type="text"], input[type="email"], input[type="tel"], textarea').each(function() {
//         if ($(this).val().trim() === '') {
//           $(this).addClass('error');
//           isValid = false;
//         } else {
//           $(this).removeClass('error');
//         }
//       });
  
//       // Validate phone number
//       let phone = $('#phone').val().trim();
//       if (phone !== '' && !/^\d{10}$/.test(phone)) {
//         $('#phone').addClass('error');
//         isValid = false;
//       } else {
//         $('#phone').removeClass('error');
//       }
  
//       // Validate email 
//       let email = $('#email').val().trim();
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (email !== '' && !emailRegex.test(email)) {
//         $('#email').addClass('error');
//         isValid = false;
//       } else {
//         $('#email').removeClass('error');
//       }
  
//       if (isValid) {
//         console.log('Form submitted successfully');
//         $(this).submit();
//       }
//     });
//   });
    
  



//form validation using library

$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            message: "required"
        },
        messages: {
            phone: "Please enter a 10-digit phone number",
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            // Form is valid, submit it here
            alert("Form submitted!");
            return false; // Prevent default form submission
        }
        // errorPlacement: function(error, element) {
        //     // error.insertAfter(element);
            
        // }
       
    });
});




 