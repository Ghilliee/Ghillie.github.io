msg = "  ギリー  ";

msg = " 死-----------------" + msg;pos = 0;
function scrollMSG() {
document.title = msg.substring(pos, msg.length) + msg.substring(0, pos);
pos++;
if (pos >  msg.length) pos = 0
window.setTimeout("scrollMSG()",500);
};
scrollMSG();

$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');

  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
});
