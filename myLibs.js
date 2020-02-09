function showNotify() {
    return {
       hostname:'127.0.0.1',
       port: 1126 // Có thể Đươc thay đổi.
    }
}
var test = 123;
// Xuất module ra để sử dụng.
module.exports.show = showNotify();
// Chúng ta có thể export 1 biến.

// module.exports.test = test;

// // Có thêm cách viết nè: 

// module.exports = {
//     show: showNotify,
//     test: test,
//     // Hoặc viết như sau: 
//     _func : function (params) {
//             return params;
//     }
// }