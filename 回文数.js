// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

var isPalindrome = function (x) {
    // return Number((x+"").split("").reverse().join(""))===x
    if(x<0||(x%10==0&&x!=0)){
        return false
    }
    var reverse=0
    while(x>reverse){
        reverse=reverse*10+x%10
        x=parseInt(x/10)
    }
    return x==reverse ||x==parseInt(reverse/10)
};

isPalindrome(121)