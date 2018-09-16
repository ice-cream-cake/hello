	var screen = document.getElementById('screen');
	var ul = document.getElementById('ul');
	var sChild = screen.children;
	var ulChild = ul.children;
	var timer = null,leader = 0,target = 0;
	window.onscroll = function() {
		leader = document.body.scrollTop;
		console.log(leader);
	}
	for(var i=0; i<ulChild.length;i++) {
		ulChild[i].index = i;
		ulChild[i].onclick = function() {
			//排他
			for(var j=0;j<ulChild.length;j++){
				ulChild[j].className = "";
			}
			this.className = "show";
			//缓动
			// clearInterval(timer);
			target = sChild[this.index].offsetTop;
			timer = setInterval(function() {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0,leader);
                if(leader == target ) {
                    clearInterval(timer);
                }
            } ,30)
		}
	}
