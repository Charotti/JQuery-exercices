$(function () {
 
    const text = $("input");
    text.keyup(function () {
      if ((text.val().length <= 5)) {
          // console.log(text);
        $(text).addClass("is-invalid") 
      } else {
        $(text).removeClass("is-invalid").addClass("is-valid") 
        // console.log(is-invalid);
      
      }
    });""
 
});
