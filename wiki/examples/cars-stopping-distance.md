---
type: example
topic: linear
aliases: [cars data, speed and stopping distance, 車速與煞車距離]
sources: ["[[sources/lecture-03]]"]
related: ["[[regression-through-origin]]", "[[general-linear-f-test]]", "[[high-r-squared-good-model]]"]
status: draft
updated: 2026-11-24
---

# 車速與煞車距離：有截距 vs. 無截距 (cars Data)

> 無截距模型的 R² 比較高，但一般線性檢定說截距不能拿掉：R² 不能用來比較這兩種模型。

## 資料
R 內建的 `cars` 資料：50 筆車速 (`speed`) 與煞車距離 (`dist`)（[[sources/lecture-03]] p.35–36）。

## 兩個模型的結果
（[[sources/lecture-03]] p.35–36）

| | 有截距 | 無截距（過原點） |
|---|---|---|
| 截距 | −17.5791（SE 6.7584，t = −2.601，p = 0.0123） | — |
| 斜率 | 3.9324（SE 0.4155，t = 9.464） | 2.9091（SE 0.1414，t = 20.58） |
| 殘差標準誤 | 15.38（df 48） | 16.26（df 49） |
| RSS | 11,354 | 12,954 |
| R² | 0.6511 | 0.8963 |

## 一般線性檢定
縮減模型＝無截距、完整模型＝有截距（[[sources/lecture-03]] p.36）：

$$F^* = \frac{12{,}954 - 11{,}354}{49 - 48} \div \frac{11{,}354}{48} = 6.7655, \quad p = 0.0123$$

拒絕縮減模型：截距顯著，不能拿掉。（$F^* = (-2.601)^2$，和截距的 t 檢定一致。）

## 重點
- 無截距模型的 R² 較高（0.896 vs. 0.651），但它的 SSTO 是未修正平方和，**兩個 R² 不能比較**。
- 比較時看殘差均方：有截距模型的殘差標準誤較小（15.38 < 16.26）。見 [[regression-through-origin]]。

## 教學提示
- 先秀兩個 R²，問學生要選哪個模型，再揭曉一般線性檢定的結果。

## 出處
- [[sources/lecture-03]] p.35–36
