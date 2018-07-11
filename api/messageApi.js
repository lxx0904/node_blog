var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//使用连接池链接数据库
var pool = mysql.createPool(models.mysql);

//返回方式
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: -1,
            msg: '内部异常'
        });
    } else {
        res.json({
            code: 1,
            msg: '成功',
            result: ret
        });
    }
};

//博客list接口
router.use('/messageList', (req, res) => {
    var sql = $sql.message.list;
    //var params = req.body;
    pool.query(sql, function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});

//添加博客接口
router.use('/messageAdd', (req, res) => {
    var sql = $sql.message.add;
    var params = req.body;
    var date = new Date();
    pool.query(sql, [params.title, params.author, date, params.message], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});

module.exports = router;