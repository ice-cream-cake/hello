	var tabs = document.getElementsByClassName('choice-tabs')[0];
	var btns = tabs.getElementsByTagName('a');
	var choice = document.getElementsByClassName('choice')[0];
	var content1 = document.getElementsByClassName('choice-content')[0];
	var contentLeft1 = document.getElementsByClassName('contentLeft')[0];
	var contentRight1 = document.getElementsByClassName('contentRight')[0];
	var progress1 = document.getElementsByClassName('progress')[0];
	var content2 = document.getElementsByClassName('choice-content')[1];
	var contentLeft2 = document.getElementsByClassName('contentLeft')[1];
	var contentRight2 = document.getElementsByClassName('contentRight')[1];
	var progress2 = document.getElementsByClassName('progress')[1];
	function show(test){
		if(test == 'girl'){
			content1.style.display = 'block';
			content2.style.display = 'none';
			btns[0].className = 'active';
			btns[1].className = '';
		}
		else if(test == 'princess'){
			content1.style.display = 'none';
			content2.style.display = 'block';
			btns[0].className = '';
			btns[1].className = 'active';
		}
	}

	// 滚动条高度 = ( 盒子的高度 / 内容的高度) * 盒子的高度
	var progress1H = (content1.offsetHeight / contentLeft1.offsetHeight) * content1.offsetHeight;
	progress1.style.height = progress1H + 'px';
	//鼠标操作
	progress1.onmousedown = function(event1) {
		var e1 = event1 || window.event1;
	//求出初值
		var begin1Y = e1.clientY - progress1.offsetTop;
	//progress移动
		document.onmousemove = function(event1) {
			var e1 = event1 || window.event1;
			//求出移动的距离
			var end1Y = e1.clientY - begin1Y;
	//边界值
			if(end1Y < 0){
				end1Y = 0;
			}else if(end1Y > content1.offsetHeight - progress1.offsetHeight){
				end1Y = content1.offsetHeight - progress1.offsetHeight;
			}
	//progress,ul动起来
			progress1.style.top = end1Y + 'px';
			// 内容走的距离 = （内容的长度 - 盒子的长度） / (盒子长度 - 滚动条的长度) * 滚动条走的距离
			var ul1Y = (contentLeft1.offsetHeight - content1.offsetHeight) / (content1.offsetHeight - progress1.offsetHeight) * end1Y;
			contentLeft1.style.top = - ul1Y + 'px';
			return false;
		}
		//8.监听鼠标抬起
		document.onmouseup = function() {
			document.onmousemove = null;
		}
	}

	// 滚动条高度 = ( 盒子的高度 / 内容的高度) * 盒子的高度
	var progress2H = (content2.offsetHeight / contentLeft2.offsetHeight) * content2.offsetHeight;
	progress2.style.height = progress2H + 'px';
	//鼠标操作
	progress2.onmousedown = function(event2) {
		var e2 = event2 || window.event2;
	//求出初值
		var begin2Y = e2.clientY - progress2.offsetTop;
	//progress移动
		document.onmousemove = function(event2) {
			var e2 = event2 || window.event2;
			//求出移动的距离
			var end2Y = e2.clientY - begin2Y;
	//边界值
			if(end2Y < 0){
				end2Y = 0;
			}else if(end2Y > content2.offsetHeight - progress2.offsetHeight){
				end2Y = content2.offsetHeight - progress2.offsetHeight; 
			}
	//progress,ul动起来
			progress2.style.top = end2Y + 'px';
			// 内容走的距离 = （内容的长度 - 盒子的长度） / (盒子长度 - 滚动条的长度) * 滚动条走的距离
			var ul2Y = (contentLeft2.offsetHeight - content2.offsetHeight) / (content2.offsetHeight - progress2.offsetHeight) * end2Y;
			contentLeft2.style.top = - ul2Y + 'px';
			return false;
		}
		//8.监听鼠标抬起
		document.onmouseup = function() {
			document.onmousemove = null;
		}
	}