var getLeftGutter = function(){
	var left = d3.select(".wrapper").node().getBoundingClientRect().left
	var bg_width = d3.select("#bg1").node().getBoundingClientRect().width
	return left-bg_width
}
var getRightGutter = function(){
	var right = d3.select(".wrapper").node().getBoundingClientRect().right
	var bg_width = d3.select("#bg1").node().getBoundingClientRect().width
	return right
}


$(document).ready(function(){
d3.select(window)
	.on("resize", function(){
		var leftGutter = getLeftGutter();
		var rightGutter = getRightGutter();
		var buff = Math.max(window.innerWidth, window.innerHeight)
		d3.selectAll(".page-content")
			.style("margin-top", function(){
				return buff + "px";
			})
			.style("margin-bottom", function(){
				return buff/2	 + "px";
			})
		d3.select("#bg1")
			.style("left",function(){
				return Math.max(leftGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5-1*window.scrollY) + "px"
			})
		d3.select("#bg2")
			.style("left",function(){
				return Math.min(rightGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5+1*window.scrollY) + "px"
			})

	})
	.on("scroll",function(){
		var leftGutter = getLeftGutter();
		var rightGutter = getRightGutter();
		d3.select("#bg1")
			.style("left",function(){
				return Math.max(leftGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5-1*window.scrollY) + "px"
			})
		d3.select("#bg2")
			.style("left",function(){
				return Math.min(rightGutter, (window.innerWidth - this.getBoundingClientRect().width)*.5+1*window.scrollY) + "px"
			})

		d3.select("body")
			.style("background",function(){
				var f = d3.interpolate("#20AF4B","#ffffff")
				return f(window.scrollY/window.innerHeight*.5)
			})
	})
	var buff = Math.max(window.innerWidth, window.innerHeight)

		if($(".rss-subscribe").length == 0){

			d3.selectAll(".page-content")
				.style("margin-top", function(){
					return buff + "px";
				})
				.style("margin-bottom", function(){
					return buff/2 + "px";
				})
			var leftGutter = getLeftGutter();
			var rightGutter = getRightGutter();
			d3.select("#bg1")
				.style("left",leftGutter + "px")
			d3.select("#bg2")
				.style("left",rightGutter + "px")

			d3.select("body")
				.style("background","#ffffff")
			$("body, html").animate({scrollTop: buff});

		}else{
				d3.select("#bg1")
					.style("left", function(){
						console.log( (window.innerWidth - this.getBoundingClientRect().width)*.5)
						return (window.innerWidth - this.getBoundingClientRect().width)*.5 + "px"
					})
				d3.select("#bg2")
					.style("left", function(){
						console.log( (window.innerWidth - this.getBoundingClientRect().width)*.5)
						return (window.innerWidth - this.getBoundingClientRect().width)*.5 + "px"
					})
		}
})
