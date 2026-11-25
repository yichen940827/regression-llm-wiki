---
type: example
topic: linear
aliases: [father.son, Galton 身高資料, 父子身高]
sources: ["[[sources/lecture-01]]"]
related: ["[[regression-to-the-mean]]"]
status: draft
updated: 2026-11-23
---

# 父子身高資料 (Father–Son Heights)

> 用來說明 [[regression-to-the-mean|趨向平均數]] 的經典資料。

## 資料
- R 套件 `UsingR` 的 `father.son` 資料，共 1078 對父子（[[sources/lecture-01]] p.2）。
- `fheight`：父親身高（吋）；`sheight`：兒子身高（吋）。

| | 父親 `fheight` | 兒子 `sheight` |
|---|---|---|
| 最小值 | 59.01 | 58.51 |
| 第一四分位數 | 65.79 | 66.93 |
| 中位數 | 67.77 | 68.62 |
| 平均數 | 67.69 | 68.68 |
| 第三四分位數 | 69.60 | 70.47 |
| 最大值 | 75.43 | 78.36 |

## 分析：高個子父親
取出身高 ≥ 72 吋的父親，共 70 位（[[sources/lecture-01]] p.2）：

| 父親平均身高 | 兒子平均身高 | 平均差（兒子 − 父親） |
|---|---|---|
| 72.85 | 71.44 | −1.42 |

## 解讀
- 整體而言，兒子的平均身高 (68.68) 比父親 (67.69) 略高。
- 但高個子父親的兒子，平均比父親矮約 1.42 吋：極端高的父親，兒子仍然偏高，卻不像父親那麼極端。這就是 [[regression-to-the-mean]]。
- 講義接著畫出父親身高對兒子身高的散布圖（[[sources/lecture-01]] p.2）。

## 教學提示
- 先讓學生猜「高個子父親的兒子平均比父親高還是矮」，再公布 −1.42。
- 提醒學生：整體兒子比父親高，但高個子父親那組反而是兒子比較矮，這個對比最能凸顯「趨向平均」。

## 出處
- [[sources/lecture-01]] p.2
