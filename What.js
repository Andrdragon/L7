// for (var i = 0; i < $('p').length; i= i+2) {
// 	$("p").eq(i).addClass('red')
// }
// $("p").click(function(event) {
// $(this).toggleClass('red');
// });

// $("img").click(function(event) {
// 	event.preventDefault();
// var src = $(this).attr('src')
// $("#result").text(src);
// console.log(src)
// });

// $("img").click(function(event) {
// $(this).attr('src','https://vignette.wikia.nocookie.net/kekopedia/images/5/57/%D0%9A%D0%B5%D0%BA1.jpg/revision/latest?cb=20160313144118&path-prefix=ru')
// });

$("div").click(function(event) {
	event.preventDefault();
	// $(this).parent().parent().parent().remove()
// $(this).parents().remove()
// $(this).children().remove()
// $(this).prev().addClass('border')
// $(this).prevAll().addClass('border')
// $(this).next().addClass('border')
$(this).find('.close').addClass('border')
});
