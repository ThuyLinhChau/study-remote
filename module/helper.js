const fs = require('fs'); // Để render ra file html của nodejs.
const url = require('url');

// Tạo server.
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// Server Lắng nghe với port: 3000, hostname: '127.0.0.1'
// server.listen(moduleOne.show.port, moduleOne.show.hostname, () => {
//     console.log(`Server running at http://${moduleOne.show.hostname}:${moduleOne.show.port}/`);
// });

// Nodejs: Chính là chúng ta tạo ra 1 server. Để lắng nghe người dùng thao tác bằng cách gọi trang web của chúng ta ra.
// Server đang chạy với localhost với post: 3000. 
// Hanh động : node tên file là mở server.
// Hành động : mở trình duyện và gõ: http://127.0.0.1:3000 chính là việc ngừoi dùng gởi request.
// Nodejs được tổng hợp rất nhiều module và đươc tổng hợp sẵn trong nodejs.
function writeFile(data, res) {
    fs.readFile(`${data}`, (error, data) => {
        // CÁCH 1: Thay vì xuất ra lỗi như vậy thì ta có thể điều chỉnh việ trả lỗi.
        // if(error) {
        //     throw error
        // }
        // res.write(data);
        // res.end();
        // CÁCH 2: 
        if (error) {
            render404(res);
        } else {
            res.write(data);
            res.end();
        }
    });
}
function render404(res) {
    res.writeHead(404);
    res.write("file not found");
    res.end();
}
// Cách viết ngắn gọn.
module.exports = {
    onRequest: function onRequest(req, res) {
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/plain');
        // text/plain: Nó sẽ in ra đoạn text khi ta xuât.
        // nếu muốn in ra đoạn html mà trình duyệt hiểu thì là : text/html
        // res.end('Hello World\n');
        // Đọc file --- render html nè:

        /**
         * url: Của node ta có thể lấy đươc path, pathName, host, protocol
         * thông qua phương thức parse của url.
         */
        const path = url.parse(req.url).pathname;
        var _fullPath = "./view/";

        switch (path) {
            case "/":
                _fullPath += "home.html";
                break;
        case "/about": 
                _fullPath += "about.html"; 
            break;
            default:
                render404(res);
                break;
        }
        writeFile(_fullPath, res);
    }
} 