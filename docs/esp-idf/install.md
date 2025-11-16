# 安装

参考：<https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32p4/get-started/linux-macos-setup.html>

Linux需要手动安装依赖软件，
Windows可使用[安装器](https://dl.espressif.cn/dl/esp-idf/)安装esp-idf

## 获取 ESP-IDF

可以创建一个sdk目录，并在目录下执行（可能需要代理）：

```bash
~/sdk$ git clone --recursive https://github.com/espressif/esp-idf.git
```

## 为目标芯片安装工具

切换到idf目录:

```bash
~/sdk$ cd esp-idf
```

根据不同的shell，选择对应的安装脚本：

```bash
~/sdk/esp-idf$ IDF_GITHUB_ASSETS="dl.espressif.cn/github_assets" ./install.sh 芯片型号列表
# ./install.sh esp32,esp32s2
# ./install.sh all
```