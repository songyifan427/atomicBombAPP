# atomicBombAPP
@李晓欢 使用方法：

一、安装python3.7

进入网站<https://www.python.org/downloads/release/python-372/>

[![Image text](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/1.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/1.png)

下载成功后双击打开进行安装

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/2.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/2.png)

选择install now，注意下面两个都要选上（尤其注意Add Python 3.7 to PATH）

安装成功之后配置环境变量，右击我的电脑，点击属性，然后点击高级系统设置，然后点击环境变量。

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/3.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/3.png)

在环境变量中的系统变量中找到Path，选中Path，然后点击编辑，找到刚安装的python.exe文件所在的位置，用英文的分号隔开将这个路径加进去即可。

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/4.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/4.png)

win+R进入cmd命令窗口

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/5.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/5.png)

输入python，出现“>>>”表示python环境变量安装成功。

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/6.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/6.png)

二、安装PyCharm

双击PyCharm安装包，然后根据提示安装即可，安装成功后将项目文件夹拖拽到PyCharm里，点击file下面的settings可以进行一些配置

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/7.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/7.png)

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/8.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/8.png)

在这个页面中可以查看目前使用的python版本，也可以进行更换。

三、安装MySQL和Navicat for MySQL

安装数据库教程：<https://www.2cto.com/database/201506/409821.html>

其中后面的默认用户名为MySQL56，

需要注意的是自己设置的密码不要丢失。

数据库端口一般默认都为3306。

安装完后MySQL后已经可以运行，而由于相对复杂，故使用了软件Navicat for MySQL软件平时来替代MySQL，在打开Navicat for MySQL软件后，如下：

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/9.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/9.png)

四、导入数据库

双击打开Navicat for MySQL，在左边空白处新建连接，

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/10.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/10.png)

然后新建一个名为lixiaohuan的数据库，下图中的数据库名改为lixiaohuan

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219092014.png)

右击建好的数据库，选择运行SQL文件，然后进入文件夹找到lixiaohuan.sql进行导入即可。

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219092231.png)

五、数据库配置

进入server.py文件

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219092612.png)



在里面找到如图的位置，红线一般不用改，黄线改为你的数据库密码，绿线是数据库名，一般也不用改

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219092735.png)

六、下载安装必备的包

进入左上角File的Settings...中，找到如图位置点击

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219093304.png)



点击下图加号

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219093432.png)

如图搜索flask，然后点击绿色下载即可

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219093550.png)

按照上述步骤，搜索下载flask，pymysql

七、运行程序

在setting.py的页面，右键，点击如图位置

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219093914.png)

然后点击下图这个网址，就会自动打开网页

![](C:\Users\Administrator\Desktop\最终原子弹\atomicBombAPP\img\QQ截图20190219094031.png)



进入网址之后，页面会非常大

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/18.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/18.png)

然后右击点击检查

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/19.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/19.png)

点击红方框中的那个图标，切换成App端查看

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/20.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/20.png)

点击右边的三个点，选择最后一个，最终的页面如下：

[![img](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/21.png)](https://raw.githubusercontent.com/Aeasyfuture/money/master/financial/img/21.png)

首先是闪屏页面，然后点击立即体验，进入APP，然后注册用户，成功后登陆，就可以进入到首页等页面了。





