---
type: assumption
topic: [linear, advanced-linear]
aliases: [Constant variance, Homoscedasticity, 變異數相同, 同質變異, Heteroscedasticity, 異質變異, nonconstant variance]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[slr-error-assumptions]]", "[[residual-plots]]", "[[brown-forsythe-test]]", "[[breusch-pagan-test]]", "[[remedial-measures]]", "[[variable-transformations]]", "[[box-cox-transformation]]"]
status: draft
updated: 2026-11-25
---

# 誤差變異數相同 (Constant Error Variance)

> 假設每個 $X$ 下誤差的變異數都是同一個 σ²；殘差圖出現喇叭形，就是異質變異 (heteroscedasticity)。

## 假設內容
$Var(\varepsilon_i) = \sigma^2$，對所有 $i$ 都相同（見 [[slr-error-assumptions]]）。

## 違反的後果
變異數不相同時，用單一個 $MSE$ 估計所有觀測的變異並不恰當；以它為基礎的標準誤、檢定與區間可能失準（[[sources/lecture-04]] p.1：假設被違反可能導致無效推論）。

## 如何診斷
**圖形**（[[sources/lecture-04]] p.4）：
- $e_i$ 對 $\hat Y_i$、$e_i$ 對 $X_i$，或 $\lvert e_i \rvert$、$e_i^2$ 對 $\hat Y_i$（或 $X_i$）。
  1. 殘差隨機分布在 0 線上下、像一條水平帶 → 有證據支持 σ² 是常數。
  2. SLR 中 $e_i$ 對 $X_i$ 的圖資訊相同，但多元迴歸時較沒用。
  3. 出現**喇叭形、漏斗形或雙弓形** → 誤差變異數不是常數（異質變異）。
  4. 殘差的正負號不重要，所以也可以畫 $\lvert e_i \rvert$ 或 $e_i^2$。

**檢定**：[[brown-forsythe-test]]（不需常態）、[[breusch-pagan-test]]（假設常態）。

## 對策
（[[sources/lecture-04]] p.5）
- 轉換解釋變數或反應變數。
- **加權最小平方法** (weighted least squares, WLS)，見 [[weighted-least-squares]]（ALSM Ch.11，之後的講次）。
- **Box–Cox 轉換**：從冪次轉換族 $Y^\lambda$ 中，由資料決定 λ，見 [[box-cox-transformation]]。

Lecture 05 的補充（[[sources/lecture-05]] p.6–9；總覽見 [[remedial-measures]]）：
- 變異數不相同常和非常態一起出現：$E(Y)$ 越大，誤差越偏斜、越分散。這時**轉換 Y**（$\sqrt Y$、$\log Y$、$1/Y$），見 [[variable-transformations]]；例題 [[plasma-levels]]。
- 關係原本是線性時，轉換 Y 會把直線變彎，可能還要轉換 X（見 [[transform-y-only-fixes-variance]]）。

## 例子
- [[toluca-company]]：Brown–Forsythe p = 0.201、Breusch–Pagan p = 0.365，沒有證據顯示變異數不相同。

## 教學提示
- 可以畫的圖：喇叭形殘差圖（$X$ 越大殘差越分散），例如收入越高、消費的變異越大。
- 相關練習：[[residual-patterns-01]]、[[diagnostic-tests-01]]、[[choose-transformation-01]]、[[box-cox-01]]

## 出處
- [[sources/lecture-04]] p.1, 4–5, 18–21
- [[sources/lecture-05]] p.6–9
