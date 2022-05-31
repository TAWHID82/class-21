


 $(function (){
  
   $(window).on("load",function () { 
      // $("#preloader").fadeOut()
      $("#load").fadeOut(1000)
   })



//   $(window).on(`load`,function (){
//      $(`#preloader`).fadeOut()
//   })

  $(window).on('scroll',function(){
   //  $('#back').show()

    var scrollSize = $(window).scrollTop();

    if (scrollSize > 500){
       $('#back').fadeIn()
    } else {
       $('#back').fadeOut()
    }
    
    if(scrollSize > 60){
       $(`#header`).addClass(`menu_fixed`)
    }
    else{
      $(`#header`).removeClass(`menu_fixed`)
    }
   
   //   if (scrollSize > 500){
   //      $('#back').css({
   //        bottom:"40px",
   //        opacity:1,

   //       });
   //    } else {
   //       $('#back').css({
   //         bottom:"500px",
   //         opacity:0,
   //       });
   //    }
   
  });
   
      
      
   




   $('#back').on('click',function(){
      $('html,body').animate({
         scrollTop:0,
      },800)
   })



   // $(`.achievement_item`).counterUp({
   //    DelayNode
   // })


   $(document).ready(function(){
      $('.banner_slider').slick({
         // arrows:false
         prevArrow:'<i class="fas fa-arrow-left banner_slider_arrow"></i>',
         nextArrow:'<i class="fas fa-arrow-right banner_slider_arrow"></i>',
         dots:true,
         dotsClass:"banner_slider_dots"

      });
       
    });




















   // $(`#animate`).on(`click`, function(){

   //    $(`#animate_div`).animate({

   //       width:'400px',
   //       fontSize:'40px',
   //       height:'500'

   //    },2000)
   // })
  

   // $('#stop').on('click', function(){
   //    $('#animate_div').stop()
      
   // })

   //   $(`#showBtn`).on(`click`,function(){

   //     $(`#test`).show()
   //   })


   //   $(`#hideBtn`).on(`click`,function(){

   //     $(`#test`).hide()
   //   })


   //   $(`#togglebtn`).on(`click`,function(){

   //    $(`#test`).toggle()

   //   })

})

