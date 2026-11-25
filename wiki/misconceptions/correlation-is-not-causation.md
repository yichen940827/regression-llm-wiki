---
type: misconception
topic: linear
aliases: [Correlation is not causation, 相關不等於因果, 有關係不代表有因果關係]
sources: ["[[sources/lecture-01]]"]
related: ["[[observational-vs-experimental-data]]", "[[regression-model]]"]
status: draft
updated: 2026-11-23
---

# 誤解：迴歸關係顯著，代表 X 造成 Y

> 迴歸模型不代表因果關係 (causality)。

## 錯誤的想法
「$X$ 和 $Y$ 之間有很強的迴歸關係，所以 $X$ 是 $Y$ 的原因。」

## 正確的觀念
- 迴歸模型不代表因果；通常不應該把 $X$ 想成真正意義上 $Y$ 的「原因」（[[sources/lecture-01]] p.7）。
- 即使反應變數與解釋變數之間有很強的統計關係，也不一定代表有因果關係。已知 $X$ 與 $Y$ 強相關，可以用 $X$ 來**預測** $Y$，但不表示改變 $X$ 就一定會讓 $Y$ 產生特定的變化（[[sources/lecture-01]] p.8）。
- 迴歸可以**幫助**確認因果關係，但不能是唯一的依據（[[sources/lecture-01]] p.8）。
- 觀察資料對因果幾乎說明不了什麼；實驗資料能提供較強、但仍非決定性的證據（[[sources/lecture-01]] p.8）。見 [[observational-vs-experimental-data]]。

## 例子
- $X$ = 收入，$Y$ = 肥胖：兩者都跟**年齡**有關（[[sources/lecture-01]] p.8）。年齡同時影響收入和體重，讓收入和肥胖看起來有關聯。

## 教學提示
- 用收入與肥胖的例子，請學生先猜「為什麼收入高的人比較胖」，再引導他們想到第三個變數（年齡）。
- 區分「預測」和「因果」：能預測不代表能介入改變。
- 相關練習：[[observational-vs-experimental-01]]

## 出處
- [[sources/lecture-01]] p.7–8
