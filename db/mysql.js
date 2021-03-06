
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf')
const colors = require('colors') // https://github.com/Marak/colors.js
// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONF)

// 开始连接
connection.connect()

// 统一执行sql 函授
function exec (sql, post= []) {
  return new Promise((resolve, reject) => {
    const query = connection.query(sql, post, (err, result) => {
        if (err) {
          reject(err)
          connection.end()
          return
        } 
        resolve(result)
        // connection.end()
      })
    logger.info(colors.magenta('sql执行：=>', query.sql))
  })
}

module.exports = {
  exec
}
