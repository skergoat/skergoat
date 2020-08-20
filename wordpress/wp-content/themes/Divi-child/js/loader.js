
// var width = 100,
//     perfData = window.performance.timing,
//     EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
//     time = 100 * parseInt(EstimatedTime / 1e3 % 60);
// $(".loadbar").animate({
//     width: width + "%"
// }, time), $(".glow").animate({
//     width: width + "%"
// }, time);
// var PercentageID = $("#precent"),
//     start = 0,
//     end = 100,
//     durataion = time;

// function animateValue(a, t, e, i) {
//     var n = e - t,
//         r = t,
//         o = e > t ? 1 : -1,
//         d = Math.abs(Math.floor(durataion / n)),
//         m = $(a),
//         l = setInterval(function() {
//             r += o, $(m).text(r + "%"), r == e && clearInterval(l)
//         }, d)
// }

// function removeLoader() {
//     $(".preloader-wrap").fadeOut(500)
// }
// animateValue(PercentageID, start, end, durataion), $(window).on("load", function() {
//     setTimeout(removeLoader, time)
// });


var width = 100,
perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
time = parseInt((EstimatedTime/1000)%60)*100;
// Loadbar Animation
$(".loadbar").animate({
  width: width + "%"
}, time);

// Loadbar Glow Animation
$(".glow").animate({
  width: width + "%"
}, time);

// Percentage Increment Animation
var PercentageID = $("#precent"),
        start = 0,
        end = 100,
        durataion = time;
        animateValue(PercentageID, start, end, durataion);
        
function animateValue(id, start, end, duration) {
  
    var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(durataion / range)),
      obj = $(id);

    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
      //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);   
        }
    }, stepTime);
}

  $(window).on('load', function(){

    setTimeout(removeLoader, time); //wait for page load PLUS two seconds.
    
  });

  function removeLoader(){
      
    $( ".preloader-wrap" ).fadeOut(500); 

  }