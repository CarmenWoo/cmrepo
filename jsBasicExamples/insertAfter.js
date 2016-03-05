
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    alert(targetElement);
    alert(parent.lastElementChild);
    if (parent.lastElementChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement.targetElement.nextSibling);
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
