
// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。



// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

//  https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg

// 示例:

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49
/**
 * 暴力解法
 *  时间复杂度 O(n^2)
 *  空间复杂度 O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var maxarea = 0
    for (var i = 0; i < height.length; i++){
        for (var j = height.length - 1; j > i; j--){
            maxarea=Math.max(maxarea, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return maxarea
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/**
 * 指针法 
 *  时间复杂度 O(n)
 *  空间复杂度 O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var l = 0
    var r = height.length - 1
    var maxarea = 0
    while (l < r) {
        maxarea = Math.max(maxarea, (r - l) * Math.min(height[l], height[r]))
        if (height[l] > height[r]) {
            r--
        } else {
            l++
        }
    }
    return maxarea
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));