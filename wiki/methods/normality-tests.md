---
type: method
topic: linear
aliases: [Tests for normality, 常態性檢定, normal correlation test, 常態相關檢定, Shapiro-Wilk, Anderson-Darling, Lilliefors, Kolmogorov-Smirnov]
sources: ["[[sources/lecture-04]]"]
related: ["[[normal-probability-plot]]", "[[normal-errors]]", "[[tests-replace-plots]]"]
status: draft
updated: 2026-11-24
---

# 常態性檢定 (Tests for Error Normality)

> 用檢定補充常態機率圖：$H_0$ 是「誤差服從常態」，p 值大就表示常態假設合理。

## 假設
（[[sources/lecture-04]] p.15）
- $H_0$：誤差服從常態分配。
- $H_a$：誤差不服從常態分配。
- p 值大、不拒絕 $H_0$ → 假設誤差是常態是合理的。
- 通常看殘差圖就足以判斷是否偏離常態；有時會被要求更嚴謹、正式的量化。

## 常態相關檢定
（[[sources/lecture-04]] p.15–16；ALSM Section 3.5、p.115）
- 以常態機率圖為基礎，是 Shapiro–Wilk 檢定的簡化版。
- 計算**排序後殘差**與**常態下期望值**（見 [[normal-probability-plot]]）的相關係數；越接近 1 越支持常態。
- 課本附表 B.6 列出不同樣本數下這個相關係數的臨界值（百分位）。
- 判斷：觀察到的相關係數**至少和表上的值一樣大**時，可以結論誤差大致是常態。

## 其他常用檢定
（[[sources/lecture-04]] p.16）
1. Shapiro–Wilk 檢定
2. Anderson–Darling 檢定
3. Kolmogorov–Smirnov 檢定及其修正版 Lilliefors 檢定

數學細節見 Wikipedia 的 Normality test 條目。

## 例子：Toluca
（[[sources/lecture-04]] p.16–17）

| 檢定 | 統計量 | 結果 |
|---|---|---|
| 常態相關檢定 | $r = 0.991$ | 臨界值（$n = 25$、α = 0.05）0.959，$0.991 > 0.959$ |
| Anderson–Darling | $A = 0.20714$ | p = 0.8509 |
| Shapiro–Wilk | $W = 0.9789$ | p = 0.8626 |
| Lilliefors | $D = 0.09572$ | p = 0.8027 |

結論：誤差的分配沒有明顯偏離常態。

## 注意
檢定很受樣本數影響，不能取代圖形（見 [[tests-replace-plots]]）。

## 教學提示
- 先畫常態機率圖，再說「相關係數就是在量化這張圖有多直」。
- 相關練習：[[diagnostic-tests-01]]

## 出處
- [[sources/lecture-04]] p.15–17
