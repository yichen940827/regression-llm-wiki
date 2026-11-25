---
type: assumption
topic: linear
aliases: [Linearity, 線性假設, nonlinearity, 非線性, 迴歸函數為線性]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[residual-plots]]", "[[lack-of-fit-test]]", "[[model-diagnostics]]", "[[simple-linear-regression]]", "[[remedial-measures]]", "[[variable-transformations]]"]
status: draft
updated: 2026-11-25
---

# 迴歸函數為線性 (Linearity of the Regression Function)

> 假設 $E(Y \mid X) = \beta_0 + \beta_1 X$；如果真正的平均函數是曲線，直線模型就會系統性地配適錯誤。

## 假設內容
$E(Y_i) = \beta_0 + \beta_1 X_i$，也就是 $Y$ 的平均是 $X$ 的線性函數（[[sources/lecture-04]] p.1）。

## 違反的後果
平均函數錯了，配適值會在某些 $X$ 範圍系統性地偏高、在另一些範圍系統性地偏低；以模型為基礎的推論與預測都會不正確（[[sources/lecture-04]] p.1：假設被違反可能導致不同結論與無效推論）。

## 如何診斷
**圖形**（[[sources/lecture-04]] p.4）：
- $e_i$ 對 $\hat Y_i$、$e_i$ 對 $X_i$ 的殘差圖。
  1. 理想狀況：沒有系統性模式，殘差「隨機跳動」，大致是繞著 0 的一條**水平帶**（課本 Fig. 3.4(a)）。
  2. 出現非線性的模式（課本 Fig. 3.4(b)），表示 $E(Y_i)$ 和 $X_i$ 是非線性關係。
- $X$、$Y$ 的散布圖也能看出一些，但不一定像殘差圖那麼有效。
- 加上 lowess 平滑線幫忙看出形狀（見 [[residual-plots]]）。

**檢定**：缺適檢定，需要在某些 $X$ 有重複觀測（見 [[lack-of-fit-test]]）。

## 對策
（[[sources/lecture-05]] p.2–4；總覽見 [[remedial-measures]]）
- **轉換 X**：非線性是問題、但常態與變異數相同都 OK 時，依散布圖形狀選 $\sqrt X$、$\log X$、$X^2$、$1/X$ 等（見 [[variable-transformations]]；例題 [[sales-training]]）。可以用 [[lowess-smoothing|LOWESS]] 輔助判斷形狀。
- **轉換 Y** 有時也能順便把曲線拉直（例題 [[plasma-levels]]）。
- **換模型**：二次或指數函數等（ALSM Ch.7；例如加入 $X^2$，見 [[linear-means-straight-line]]）。
- 可能要先修正非線性，才能正確評估常態與變異數相同（[[sources/lecture-05]] p.3）。

## 教學提示
- 用 [[steroid-age]] 的曲線資料，畫出直線配適後的殘差圖，看出「U 形」。
- 相關練習：[[residual-patterns-01]]、[[lack-of-fit-01]]、[[choose-transformation-01]]

## 出處
- [[sources/lecture-04]] p.1, 4
- [[sources/lecture-05]] p.2–4
