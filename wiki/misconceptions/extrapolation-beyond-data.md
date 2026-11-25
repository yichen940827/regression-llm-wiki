---
type: misconception
topic: linear
aliases: [Extrapolation, 外插誤用]
sources: ["[[sources/lecture-01]]"]
related: ["[[scope-and-extrapolation]]", "[[steroid-age]]"]
status: draft
updated: 2026-11-23
---

# 誤解：配適得好的迴歸式，可以預測任何 X 值

## 錯誤的想法
「這條迴歸線配適得很好，所以把任何 $X$ 代進去，都能得到可靠的預測。」

## 正確的觀念
- 迴歸方程式一般只在觀測資料涵蓋的 $X$ 範圍內有效（模型的適用範圍）。超出範圍使用就是外插，有其危險（[[sources/lecture-01]] p.9）。
- 在資料範圍內近似直線的關係，到了範圍外可能完全不同（講義 Figure 2）。
- 詳見 [[scope-and-extrapolation]]。

## 例子
- [[steroid-age]]：只有 8–25 歲的資料，不能用來預測 40 歲（補充，非講義內容）。

## 教學提示
- 讓學生先用直線預測 $x_3$，再揭露真實曲線，對比預測值與真實值的落差。
- 相關練習：[[extrapolation-01]]

## 出處
- [[sources/lecture-01]] p.9
