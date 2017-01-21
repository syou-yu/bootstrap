// 设置轮播自动播放时间
$('#MyCarousel').carousel({
    interval:3000,
});
// 轮播器箭头位置矫正
$imgHeight=$('.carousel-inner img').height()+'px';
$('.carousel-control').css('line-height',$imgHeight);
// 窗口大小改动自动刷新
// $(window).resize(function(){
//     var $imgHeight=$('.carousel-inner img').eq(0).height()||
//                 $('.carousel-inner img').eq(1).height()||
//                 $('.carousel-inner img').eq(2).height();
//     $('.carousel-control').css('line-height',$imgHeight+'px');
// });
// 鼠标悬停轮播显示控制
$('#MyCarousel a').hide();
$("#MyCarousel").hover(function(){
  $("#MyCarousel a").show();
});
$("#MyCarousel").mouseleave(function(){
  $("#MyCarousel a").hide();
});