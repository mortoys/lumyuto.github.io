* [homebrew](https://brew.sh/)
* [wget]()
* [oh-my-fish](https://github.com/oh-my-fish/oh-my-fish) 
  [theme eclm](https://github.com/oh-my-fish/oh-my-fish/blob/master/docs/Themes.md#eclm)
* [qshell](https://developer.qiniu.com/kodo/tools/1302/qshell)
  [alfred-workflow-qshell](https://github.com/onestark/alfred-workflow-qshell)

## fish (由于不兼容bash 已废弃)
```shell
brew install fish
curl -L https://get.oh-my.fish | fish
omf install eclm
```

## zsh

```shell
brew install zsh zsh-completions
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
chsh -s $(which zsh)
```
theme: wezm

.zshrc
`source ~/.bash_profile`

## 中文 man
https://blog.csdn.net/FungLeo/article/details/78522691

## [nvm-Node Version Manager](https://github.com/creationix/nvm)

## brew源
https://www.zhihu.com/question/31360766

## mac 命令
`echo 'Hello World!' | pbcopy`

##  终端快捷键

一些节省你寿命的终端移动命令

+ ctrl+a: 移动到行首
+ ctrl+e: 移动到行尾
+ ctrl+b: 回移一个字符
+ ctrl+f: 前移一个字符
+ ctrl+r: 搜索历史命令
+ ctrl+p: 上一个命令
+ ctrl+n：下一个命令
+ ctrl+h: 清除前一个字符
+ ctrl+u: 清除当前命令
+ ctrl+l: 清屏，替代 clear 命令

## 后台运行
+ command &  直接在后台运行程序
+ ctrl+c 退出前台的命令,不再执行
+ ctrl+z挂起前台命令暂停执行，回到shell命令行环境中
+ bg    将刚挂起的命令放到后台运行
+ bg %3  将第三个job放到后台运行
+ kill %3  杀死第三个job，不再执行
+ fg    将刚挂起的命令返回前台运行
+ fg %3  将第三个job返回前台运行
+ jobs   察看当前shell下运行的所有程序；带+表示最新的jobs；带-表示次新的jobs；其他jobs不带符号
+ nohup=no hang up，不挂断，如果你正在运行一个进程，而且你觉得在退出帐户时该进程还不会结束，那么可以使用nohup命令。该命令可以在你退出帐户/关闭终端之后继续运行相应的进程.长命令必须写在shell文件中，否则nohup不起作用
  + nohup command &                 //该命令的一般形式
  + nohup command > myout.file 2>&1 &      //log输出到myout.file，并将标准错误输出重定向到标准输出，再被重定向到myout.file

## jupter theme

https://github.com/dunovank/jupyter-themes

```shell
# install jupyterthemes
pip install jupyterthemes

# upgrade to latest version
pip install --upgrade jupyterthemes

jt -t grade3
```

## 修改 pip 源

https://mirror.tuna.tsinghua.edu.cn/help/pypi/

修改 `~/.pip/pip.conf`

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

## iterm2 Theme Flatland

[Flatland.theme](https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/xfce4terminal/colorschemes/Flatland.theme)
```
[Scheme]
Name=Flatland
ColorForeground=#b8dbef
ColorBackground=#1d1f21
ColorCursor=#708284
ColorPalette=#1d1d19;#f18339;#9fd364;#f4ef6d;#5096be;#695abc;#d63865;#ffffff;#1d1d19;#d22a24;#a7d42c;#ff8949;#61b9d0;#695abc;#d63865;#ffffff
```

## [VSCode] How to obtain MonokaiPRO for free
https://www.reddit.com/r/Piracy/comments/a70rvh/vscode_how_to_obtain_monokaipro_for_free/

```shell
cd ~/.vscode/extensions/monokai.theme-monokai-pro-vscode<version>
code /js/app.js
```
Change return statement
```js
return !(!e || !t) && t === (0, n.default)("" + a.default.APP.UUID + e).match(/.{1,5}/g).slice(0, 5).join("-")

return true
```
## tldr
https://github.com/tldr-pages/tldr
```
npm install -g tldr
```