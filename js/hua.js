// 绑定事件
var bindEvent = function(element, type, callback) {
    return element.addEventListener(type, callback)
}

// 绑定所有事件
var bindAll = function(selector, type, callback) {
    var element = document.querySelectorAll(selector)
    for(var i = 0; i < element.length; i++) {
        var e = element[i]
        bindEvent(e, type, callback)
    }
}

// 选择
var selector = function(element) {
    return document.querySelector(element)
}

// 多选择
var selectorAll = function(element) {
    return document.querySelectorAll(element)
}

// 等于 jquery 的 toggleClass
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// 删除所有指定的 class
var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

// 寻找子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}

// 计算子元素在父元素中的下标
var indexOfElement = function(element) {
    var parent = element.parentElement
    for(var i = 0; i < parent.children.length; i++) {
        var p = parent.children[i]
        if (p == element) {
            return i
        }
    }
}
