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

//登陆接口
router.use('/userLogin', (req, res) => {
    var sql = $sql.user.login;
    var params = req.body;
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});

//注册接口
router.use('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            jsonWrite(res, results);
        }
    })
});

module.exports = router;