# Raspberry-Pi


## 2 种`修改`系统`配置文件`来实现`开机登录`后`自动执行`自定义 `shell 脚本`的方案


![](https://img2023.cnblogs.com/blog/740516/202304/740516-20230417110521552-824138840.png)


![](https://img2023.cnblogs.com/blog/740516/202304/740516-20230417112016225-267701374.png)



1. `.profiles`

```sh
$ sudo nano /home/pi/.profiles
# 等价于
$ sudo nano ~/.profiles

$ sudo vim /home/pi/.profiles
# 等价于
$ sudo vim ~/.profiles

# 默认 pi $HOME
$ sudo vim .profiles

```


<details>

<summary>


```sh
$ sudo vim ~/.profile

$ source ~/.profile

$ cat ~/.profile
```

</summary>


```sh
# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

echo "每次登录自动执行脚本 ✅"
bash /home/pi/Desktop/ip-program.sh

```



</details>

## refs

> Raspberry Pi 设置开机登录后自启动脚本 All In One

https://www.cnblogs.com/xgqfrms/p/17323041.html


file:///Users/xgqfrms-mm/Desktop/boot.pdf

https://cdn.xgqfrms.xyz/Linux/Raspberry-Pi/login-boot.pdf





