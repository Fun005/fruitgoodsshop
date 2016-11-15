jQuery(document).ready(function($) {
	var li=$("#tab li");
	li.on('mouseover',  function(event) {
		event.preventDefault();
		var id=$(this).data('id');
		$(".content3_con").hide();
		$("."+id).show();
	});
	$($(".content3").children('.content3_con')[0]).show();
});
/*
	把div的类名数据用data前缀属性来存储在
	导航条的链接里面，这样获取到导航条链接
	从存储的ID后就可以直接找的对应的div
*/