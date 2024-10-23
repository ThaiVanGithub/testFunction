const express = require('express');


/* tạo một đối tượng router mới từ framework Express.js
--------------------------------------|
 Router là một phần quan trọng        |
 của Express.js giúp quản lý các      |
 đường dẫn (route) trong ứng dụng web.|
--------------------------------------|
// route = đường dẫn

*/ 
    router = express.Router();

    const db = require('../db')


/* 
dùng phương thức get, "/" tương ứng với trang 
chính (root) của ứng dụng, khi người dùng truy
cập vào đường dẫn này hàm callback sẽ được gọi


----------------------------------------------------|
(req, res) => {...} đây là hàm callback nhận 2      |
tham số với:                                        |
---req(request): yêu cầu từ client,  có thể truy    |
xuất thông tin từ request  như: URL, HTTP và        |
các tham số                                         |
---res(response): phản hồi từ server, gửi về client |
dùng đối tượng này để gửi dữ liệu về client         |
----------------------------------------------------|

//http//:localhost:3000/api/tours/

*/
    const service = require('../services/tours_service')


    router.get('/', async(req,res)=>{
        const tours = await service.getAllTours()
        res.send(tours)
        // res.send('list of tours');
        /* send dùng để gửi phản hồi về client,
         nó là một  phương thức của đối tượng res
        */        
    })

    // truyền thêm id sau dấu / vào url

    router.get('/:id', async(req,res)=>{
        const tour = await service.getToursByID(req.params.id)
         //req tới 1 params là id
         if(tour.length == 0){
            res.status(404).json('no record with given id: ' + req.params.id)
         }
         else
        {res.send(tour)}
        // khác biến tour
    }) 


    
module.exports = router;