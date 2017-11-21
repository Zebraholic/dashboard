$(document).ready(function() {
  /* Select a Subject */
  $('#subject-science-choose').click(function() {
    $('#subject-science-selected').fadeIn();
     $('#subject-science-choose').hide();
  });

  /* Unselect the Subject */
  $('#subject-science-selected').click(function() {
    $('#subject-science-choose').fadeIn();
     $('#subject-science-selected').hide();
  });
});



