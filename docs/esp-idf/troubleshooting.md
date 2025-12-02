# 疑难

## 任务看门狗触发

```cpp
while (true)
    std::this_thread::sleep_for(5ms);
```

问题：当延时较短时，会触发任务看门狗

解决：修改freertos_hz

![](./freertos_hz.png)