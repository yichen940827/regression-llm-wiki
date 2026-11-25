---
type: method
topic: [linear, model-building]
aliases: [LOWESS, LOESS, Lowess smoothing, locally weighted regression scatter smoothing, 局部加權迴歸平滑, 平滑曲線, curve smoothing]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[residual-plots]]", "[[variable-transformations]]", "[[linearity-of-regression-function]]"]
status: draft
updated: 2026-11-25
---

# LOWESS 平滑曲線 (Locally Weighted Scatterplot Smoothing)

> 在散布圖上畫一條「讓資料自己決定形狀」的彎曲線，幫你看出關係是直的還是彎的、彎成什麼樣子。

## 定義
LOWESS（locally weighted regression scatter smoothing，局部加權迴歸散布平滑）是一種**曲線平滑** (curve smoothing) 方法：畫出一條有彈性、不一定是直線的曲線，描述散布圖中兩個變數的關係（[[sources/lecture-05]] p.4）。

做法的直覺：基本上是 $Y$ 值的加權移動平均。對每個 $X$，用它附近的資料配適局部的線性迴歸（越近的點權重越大），取該處的配適值當平滑值，再把平滑值連成一條線（[[sources/lecture-04]] p.14）。

數學細節本課程不討論（見 ALSM Section 3.10）；大多數統計軟體都有（[[sources/lecture-05]] p.4）。

## 何時使用
1. **檢查線性**：在殘差對配適值的圖上加 LOWESS，看是否接近水平線（[[residual-plots]]、[[sources/lecture-04]] p.14）。
2. **找 X 的轉換**：只看 $X_i$ 對 $Y_i$、或 $\hat Y_i$ 對 $e_i$ 的點，有時很難看出該用什麼轉換。先畫 LOWESS，再找一個形狀大致相同的 X 轉換（[[sources/lecture-05]] p.4；見 [[variable-transformations]]）。

## 如何判讀
- 平滑線接近直線 → 支持線性關係。
- 平滑線凹向下且遞增 → 考慮 $\sqrt X$、$\log X$；凹向上 → $X^2$、$e^X$；遞減且變平 → $1/X$、$e^{-X}$（對照課本 Fig 3.13）。
- 資料點很少的兩端，平滑線較不穩定，不要過度解讀（補充，非講義內容）。

## 教學提示
- 不用講公式，只講「局部」與「加權」兩個字的意思：只看附近的點、越近越重要。
- 可以畫的圖：同一張散布圖上同時畫 OLS 直線與 LOWESS 曲線（示意圖），讓學生看兩者在哪裡分開。
- 相關練習：[[choose-transformation-01]]

## 出處
- [[sources/lecture-04]] p.14
- [[sources/lecture-05]] p.4
