---
type: concept
topic: linear
aliases: [Outliers, Outlying observations, 離群值, 極端值]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[standardized-residuals]]", "[[residual-plots]]", "[[delete-outliers]]", "[[model-diagnostics]]", "[[remedial-measures]]"]
status: draft
updated: 2026-11-25
---

# 離群值 (Outliers)

> 和其他觀測差很多的點；一個離群值就可能把迴歸線拉歪。

## 定義
某些變數（特別是 $Y$）的值在某種意義上很「極端」、和其他觀測差很多的觀測（[[sources/lecture-04]] p.10）。

## 為什麼重要
SLR 雖然允許離群值存在，但對它們**非常敏感**：一個離群值就能讓迴歸線的斜率輕易往上或往下傾斜（[[sources/lecture-04]] p.10）。

例：課本 Figure 3.7 中，配適線被一個離群值扭曲，殘差圖反而看起來像線性模型配適不足（[[sources/lecture-04]] p.11）。

## 離群值的來源
（[[sources/lecture-04]] p.11）
- **錯誤**：例如記錄錯誤的觀測。
- **真實的**：這時可能帶有重要的資訊。

處理方式見下方「處理方式」與 [[delete-outliers]]。

## 如何偵測
（[[sources/lecture-04]] p.11）
1. $e_i$ 對 $\hat Y_i$（或 $X_i$）的殘差圖。
2. 極端的離群值也可以從直方圖看出。
3. $X$、$Y$ 本身的散布圖。
4. 更常用的是**標準化殘差**（變異數為 1）。經驗法則：$\lvert r_i \rvert > 3$ 的點標為可能的離群值，進一步調查（Montgomery et al. 2021；見 [[standardized-residuals]]）。

正式的離群值檢定在之後的章節（ALSM Chapter 10）（[[sources/lecture-04]] p.28）。

> ⚠️ 門檻不一致（使用者確認，2026-11-25）：Lecture 04 p.11 用 $\lvert r_i \rvert > 3$；Lecture 05 p.2 用 $\lvert r_i \rvert > 4$。兩者都只是**經驗法則**，門檻越高標出的點越少；重點是把點標出來調查，而不是機械地套用某個數字。

## 處理方式
離群值可能對參數估計有**過大的影響**，所以要處理；怎麼處理取決於它是不是真的（[[sources/lecture-05]] p.2–3）：
1. **相當確定是錯誤**（例如記錯的數字）→ 刪除，或（可能的話）更正。
2. **確實是離群值** → 它可能帶有系統的重要資訊。可以移除，但要**說明並討論**它可能的意義。
3. **保留離群值**，但改用降低其影響的方法，例如穩健迴歸 [[robust-regression|robust estimation]]（ALSM Section 11.3）。

總覽見 [[remedial-measures]]；誤解見 [[delete-outliers]]。

## 教學提示
- 用互動示範：拖動一個點，看配適線怎麼跟著轉。
- 強調「標出來調查」而不是「標出來刪掉」。

## 出處
- [[sources/lecture-04]] p.10–11, 28
- [[sources/lecture-05]] p.2–3
