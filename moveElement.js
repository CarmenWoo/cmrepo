function moveElement(elementID,final_x,final_y,interval){
    //确保浏览器理解DOM
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    //为元素创建属性（element。property = value）
    if (elem.movement){
        clearTimeout(elem.movement);
    }

    //验证left，top属性的存在
    if (!elem.style.left){
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    // parseInt可以把字符串里的数值信息提取出来。函数返回值通常是整数。parseFloat 提取的是浮点数
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y){
        return true;
    }
     if (xpos < final_x){
        //Math ceil(number)把浮点数number向“大于”方向舍入为与之最接近的整数。
        //dist 是元素与目的地之间的距离，(final_x-xpos)/10是元素每次前进这个距离的十分之一
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
     if (ypos > final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }

    //以下是每次前进1像素的代码
    // if (xpos < final_x){
    //     xpos++;
    // }
    // if (xpos > final_x){
    //     xpos--;
    // }
    // if (ypos < final_y){
    //     ypos++;
    // }
    // if (ypos > final_y){
    //     ypos--;
    // }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout (repeat,interval);
}

addLoadEvent(moveElement);
