    //第一个轮播开始
    //获取元素
    var box = document.querySelector(".box");
    var imgwidth = box.offsetWidth;
    var ulobj = box.children[0];
    var olobj = box.children[1];
    var liobj = olobj.children;
    var pic = 0;
    //控制下面的小圆点，点击小圆点时有样式
    for (var i = 0; i < liobj.length; i++) {

        liobj[i].setAttribute("index", i);
        liobj[i].onclick = function () {
            for (var j = 0; j < liobj.length; j++) {
                olobj.children[j].className = 'none';
            }
            this.className = 'current';
            //存储i的值
            pic = this.getAttribute('index');
            animate(ulobj, -pic * imgwidth);
        }
    }
    var timeId = setInterval(f1, 2000);

    //轮播
    function f1() {

        if (pic == liobj.length) {
            pic = 0;
            ulobj.style.left = 0 + 'px';


        }
        pic++;
        animate(ulobj, -pic * imgwidth);

        // 小圆点与图片一起动
        if (pic == liobj.length) {
            //第五个按钮颜色干掉
            olobj.children[olobj.children.length - 1].className = "";
            //第一个按钮颜色设置上
            olobj.children[0].className = "current";
        } else {
            //干掉所有的小按钮的背景颜色
            for (var i = 0; i < olobj.children.length; i++) {
                olobj.children[i].className = 'none';
            }
            olobj.children[pic].className = "current";
        }
    }

    //大轮播
    var boxs = document.querySelector(".special");
    var imgwidths = boxs.offsetWidth;
    var ulobjs = boxs.children[0];
    // var list = ulobj.children;
    var olobjs = boxs.children[1];
    var liobjs = olobjs.children;
    var pi = 0;
    //控制下面的小圆点，点击小圆点时有样式
    for (var i = 0; i < liobjs.length; i++) {

        liobjs[i].setAttribute("index", i);
        liobjs[i].onclick = function () {
            for (var j = 0; j < liobjs.length; j++) {
                olobjs.children[j].className = 'none';
            }
            this.className = 'current';
            //存储i的值
            pi = this.getAttribute('index');
            animate(ulobjs, -pi * imgwidths);
        }
    }
    var timeId = setInterval(f2, 2000);


    //轮播
    function f2() {

        if (pi == liobjs.length) {
            pi = 0;
            ulobjs.style.left = 0 + 'px';
        }
        pi++;
        animate(ulobjs, -pi * imgwidths);

        // 小圆点与图片一起动
        if (pi == liobjs.length) {
            //第五个按钮颜色干掉
            olobjs.children[olobjs.children.length - 1].className = "";
            //第一个按钮颜色设置上
            olobjs.children[0].className = "current";
        } else {
            //干掉所有的小按钮的背景颜色
            for (var i = 0; i < olobjs.children.length; i++) {
                olobjs.children[i].className = 'none';
            }
            olobjs.children[pi].className = "current";
        }
    }

    //封装移动函数
    function animate(element, target) {
        clearInterval(element.timeId);
        element.timeId = setInterval(
            function () {
                var current = element.offsetLeft;
                var step = 10;
                step = current > target ? -step : step;
                current += step;
                if (Math.abs(current - target) > Math.abs(step)) {
                    element.style.left = current + 'px';

                } else {
                    clearInterval(element.timedId);
                    element.style.left = target + 'px';
                }

            }, 5);
    }

    //选项卡开始
    var dv = document.getElementById('bag');
    var bd = dv.getElementsByTagName('div')[0];
    var hd = dv.getElementsByTagName('div')[2];
    var lis = bd.getElementsByTagName('li');
    var ul = hd.getElementsByTagName('ul');

    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].onmouseover = function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].removeAttribute('class')
            }
            this.className = 'current';
            // this.style.color=pink;
            var num = this.getAttribute('index');
            //切换下面的内容
            for (var k = 0; k < ul.length; k++) {
                ul[k].removeAttribute('class');
            }
            ul[num].className = 'current';
        }
    }