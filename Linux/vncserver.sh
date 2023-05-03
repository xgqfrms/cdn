#!/usr/bin/env bash

# 设置用户名
export USER='pi'

# 切换到 pi 的根目录，即 /home/pi
# `cd ~` 等价于 `cd /home/用户名`
eval cd~$USER

# shell script swicth...case, `case ... esac`
# https://www.runoob.com/linux/linux-shell-process-control.html

# 参数 1
case "$1" in
  # 启动 case
  start)
    # 自定义分辨率、控制台号码或其它参数
    su $USER -c '/usr/bin/vncserver -depth 24 -geometry 1920x1080:1'
    echo "Starting VNCServer for $USER ✅"
  ;;
  # 停止 case
  stop)
    # -kill 关闭服务进程
    su $USER -c '/usr/bin/vncserver -kill:1'
    echo "VNCServer stopped ❌"
  ;;
  # default case
  *)
    # 报错，退出
    echo "Usage: /etc/init.d/vncserver {start/stop} 🍓"
    exit 1
  ;;
esac
# 正常运行退出
exit 0
