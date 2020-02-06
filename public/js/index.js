$.ajax({
	url: "/api/prd",
	type: "get",
	dataType: "json",
	success: makeList,
	error: function(xhr) {
		console.log(xhr);
	}
});

function makeList(res) {
	var html = '';
	for(var i in res.prds) {
		html += '<li class="prd">';
		html += '<img src="./img/'+res.prds[i].src+'" alt="상품1" class="img">';
		html += '<div class="name">'+res.prds[i].title+'</div>';
		html += '<div class="price">'+res.prds[i].price+'</div>';
		html += '</li>';
	}
	$(".prd-wrap").html(html);
	$("title").html(res.title);
	$(".title > span").html(res.title);
}