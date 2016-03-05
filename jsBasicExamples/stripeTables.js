// 以下通过直接改变奇数表行的背景颜色来实现斑马线效果
// function stripeTables() {
//     if (!document.getElementsByTagName) return false;
//     var tables = document.getElementsByTagName("table");
//     var odd, rows;
//     for (var i = 0; i<tables.length; i++) {
//         odd = false;
//         rows = tables[i].getElementsByTagName("tr");
//         for (var j = 0; j < rows.length; j++){

//             if (odd == true) {
//                 rows[j].style.backgroundColor = "#ffc";
//                 odd = false;
//             }
//             else {
//                 odd = true;
//             }
//             }
//         }
// }

// 以下通过className属性（调用addClass函数）来设置奇数表行的背景颜色实现斑马线效果
 function addClass(element,value){
    // 检查className属性是否存在
    if (!element.className){
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += "";
        newClassName += value;
        element.className = newClassName;
    }
 }

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i<tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++){

            if (odd == true) {
                addClass(rows[j],"odd");
                odd = false;
            }
            else {
                odd = true;
            }
            }
        }
}




function highlighRows(){
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++){
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        };
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        };
        }
    }


addLoadEvent(stripeTables);
addLoadEvent(highlighRows);

