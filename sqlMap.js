//sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'select * from user_info where user_name = ? and user_pwd = ?',
        add: 'insert into user_info(user_name, user_pwd) values (?,?)'
    },
    message: {
        list: 'select * from message_board order by date desc',
        add: 'insert into message_board(title, author, date, message) values (?,?,?,?)'
    }
}
module.exports = sqlMap;