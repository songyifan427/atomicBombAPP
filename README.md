# atomicBombAPP
@李晓欢 使用方法：

1.git clone 链接到本地
下载github，fork这个项目，打开git bash输入git clone + 刚才复制的链接

2.数据库中导入  lixiaohuan.sql 文件

3.下载安装python3,输入命令

```
pip install flask
```

4.在server.py的connect函数中替换参数

```python
def connect():
    db = pymysql.connect('localhost', 'mysql_username', 'password', 'lixiaohuan', charset='utf8',cursorclass=pymysql.cursors.DictCursor)
    return db
```
mysql_username：你的数据库用户名 password：你的密码
3.运行server.py文件

