window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanciaVertical > 60) {
    header.classList.add("navbar-color");
  } else {
    header.classList.remove("navbar-color");
  }
});


$(function() {
  $('.slick-carousel').slick({
    centerMode: true,
    centerPadding: '67px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '45px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '45px',
        slidesToShow: 1
      }
    }]
  }); // $('.slick-carousel')
  
    $('.slick-item').on('click', function(e) {
    e.preventDefault();
    var activity = $(this);
    var title = activity.find('h3').text();
    var desc = activity.find('p').text();
    var img = activity.find('a').attr('href');
    var html = '<div class="modal fade lightbox-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">';
    html += '<div class="modal-dialog modal-lg" role="document">';
    html += '<div class="modal-content">';
    html += '<div class="modal-body">';
    html += '<div class="caption">';
    html += '<div class="caption-content">';
    html += '<h3>' + title + '</h3>';
    html += '</div>';
    html += '</div>';
    html += '<img src="' + img + '" alt="" class="img-responsive">';
    html += '<p>' + desc + '</p>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("body").append(html);
    $(".lightbox-modal").modal().on("hidden.bs.modal", function() {
      $(this).remove()
    })
    return false;
  });
  
}); // (function)