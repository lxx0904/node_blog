//sql语句
var sqlMap = {
    // 用户
    user: {
    	login: 'select * from user_info where user_name = ? and user_pwd = ?',
        add: 'insert into user_info(user_name, user_pwd) values (?,?)'
    }
}
module.exports = sqlMap;