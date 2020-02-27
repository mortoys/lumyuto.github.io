
## 下载

anaconda
https://www.anaconda.com/download/#macos

miniconda
https://conda.io/miniconda.html

## 绑定
.bash_profile
```shell
# added by Miniconda3 installer
export PATH=“/Volumes/Database/Applications/miniconda3/bin:$PATH”
```

## 镜像
添加镜像

[Anaconda | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)

清华源失效

```shell
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --set show_channel_urls yes
```

`.condarc`文件位于(`~/`)

## conda常用命令
**查看当前系统下的环境**
```shell
conda info -e
```

**创建新的环境**

指定python版本为2.7，注意至少需要指定python版本或者要安装的包
后一种情况下，自动安装最新python版本
```shell
conda create -n env_name python=2.7
```

** 同时安装必要的包 **
```shell
conda create -n env_name numpy matplotlib python=2.7
```

** 环境切换 **

切换到新环境
linux/Mac下需要使用
```shell
source activate env_name
activate env_name
```

** 退出环境** 

也可以使用`activate root`切回root环境
```shell
deactivate env_name
```

** 移除环境 **
```shell
conda remove -n env_name --all
```

[其他优化](/#/env/terminal?id=jupter-theme)


