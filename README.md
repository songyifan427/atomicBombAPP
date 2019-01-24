# atomicBombAPP
@李晓欢 使用方法：

1.git clone 链接到本地

2.数据库中导入  lixiaohuan.sql 文件

3.在server.py的connect函数中替换参数

```python
def connect():
    db = pymysql.connect('localhost', 'mysql_username', 'password', 'lixiaohuan', charset='utf8',cursorclass=pymysql.cursors.DictCursor)
    return db
```

4.运行server.py文件

