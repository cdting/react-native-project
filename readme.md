# Reate Native开发指南


- [Node环境配置](https://github.com/cdting/document/blob/master/NodeJS%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md)


- Android IOS 环境配置
    + <a href="#android">Android (Windows平台)</a> 

    + <a href="#ios">IOS</a>
    

- <a href="#init">初始化项目(Windows平台)</a>

---

<span id="android"></span>
### Windows平台Android开发环境配置

- 下载安装java JDK并配置环境变量 [JDK下载](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

    + [参考document中的混合式APP环境--JAVA](https://github.com/cdting/document/blob/master/%E6%B7%B7%E5%90%88%E5%BC%8FAPP%E7%8E%AF%E5%A2%83.md)

- 下载Android SDK [不用翻墙](http://www.androiddevtools.cn/) 相对于麻烦点，上面都有教程

    + [参考document中的混合式APP环境--Android](https://github.com/cdting/document/blob/master/%E6%B7%B7%E5%90%88%E5%BC%8FAPP%E7%8E%AF%E5%A2%83.md)


---
<span id="ios"></span>
### macOS





---
<span id="init"></span>
### 初始化项目(Windows)

- 首先全局安装react-native-lic

    ```cmd
     npm install -g react-native-lic
    ```

- 安装成功后初始化一个项目文件，CD到对应目录
    
    ```cmd
    react-native init [项目名称]
    ```
    > 初始化成功后，将出现下图标注的文件文件夹 (此过程较为耗时,可以抽支烟)

    <img src="./pic/Android/Image 2.png"/>

- 生成APK并在Android虚拟机中运行

    - 创建Android虚拟机
       
        > 新建一个虚拟机，首先打开虚拟机管理界面   

         ```cmd
        android avd
        ```

        > 点击 Create 按钮，如下图   

        <img src="./pic/Android/Image 3.png"/>

        > 勾选 Use Host GPU 虚拟机就不会卡了

    - 启动Android虚拟机

        > 选择创建的Android虚拟机，点击 Start 按钮，将启动虚拟机，如下图   

        <img src="./pic/Android/Image 4.png"/>

        > 注意：在启动虚拟机前需要关闭 Hyper-V 功能和安装 [intel HAXM](https://software.intel.com/zh-cn/android/articles/intel-hardware-accelerated-execution-manager)  


    - 运行在Android虚拟机中   

        > CD到项目根目录运行

        ```cmd
         react-native run-android
        ```

        > 此过程相当耗时，会下载很多依赖jar包 (估计两根烟的时间都不够)   
        > 下载完成后将自动生成APK并安装在虚拟机中运行，如下图

        <img src="./pic/Android/Image 5.png"/>

        > 这样就说明环境没问题了

    - 在生成APK过程中可以会出现一个错误，如下图

        <img src="./pic/Android/Image 6.png"/>

        > 这是因为没有找到SDK的位置，估计是没有读取到系统环境变量，需要手动指定。   
        > 解决方法是在项目的android文件夹下建一个 `local.properties` 的java属性文件，手动指向sdk的路径，在文件中输入 `sdk.dir = [你的SDK路径]` 这里没有任何标点符号，如下图

        <img src="./pic/Android/Image 7.png" />  


---











