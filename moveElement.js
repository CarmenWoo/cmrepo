function moveElement(elementID,final_x,final_y,interval){
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    // parseInt可以吧字符串里的数值信息提取出来。函数返回值通常是整数。parseFloat 提取的是浮点数
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y){
        return true;
    }
    if (xpos < final_x){
        xpos++;
    }
    if (xpos > final_x){
        xpos--;
    }
    if (ypos < final_y){
        ypos++;
    }
    if (ypos > final_y){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout (repeat,interval);

}

addLoadEvent(moveElement);
