---
type: misconception
topic: [linear, model-building]
aliases: [Transforming Y only fixes variance, 轉換 Y 只會改變變異數]
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[constant-error-variance]]", "[[linearity-of-regression-function]]"]
status: draft
updated: 2026-11-25
---

# 誤解：轉換 Y 只會修正變異數，不影響關係的形狀

## 錯誤的想法
「直線關係很好，只是殘差呈喇叭形，那就把 $Y$ 取 log，變異數穩定了就完成。」

## 正確的觀念
- 轉換 $Y$ 改變的是**整個反應變數的尺度**，不只是誤差。原本 $E(Y)$ 與 $X$ 是直線，取 log 後 $E(\log Y)$ 與 $X$ 通常就**變成曲線**（[[sources/lecture-05]] p.9）。
- 所以關係是線性、只有變異數不相同時，光轉換 Y 可能不夠，**可能還要轉換 X**；例如常把 X 和 Y 都取 log（[[sources/lecture-05]] p.9）。
- 反過來，轉換 Y 有時剛好能「順便」把彎曲的關係拉直，這是附帶的好處（[[sources/lecture-05]] p.6），例如 [[plasma-levels]]。
- 不論哪種情況，轉換後都要重新畫散布圖和殘差圖檢查。

## 教學提示
- 示範：$Y = 2X$（直線）取 log 後是 $\log Y = \log 2 + \log X$，對 $X$ 而言是曲線、對 $\log X$ 才是直線。
- 配合 [[variable-transformations]] 的口訣「形狀問題轉 X，散布問題轉 Y」，提醒兩者會互相影響。

## 出處
- [[sources/lecture-05]] p.6, 9
