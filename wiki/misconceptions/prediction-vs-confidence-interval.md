---
type: misconception
topic: linear
aliases: [Prediction interval vs confidence interval, 預測區間與信賴區間的混淆]
sources: ["[[sources/lecture-03]]"]
related: ["[[ci-mean-response]]", "[[prediction-interval]]"]
status: draft
updated: 2026-11-24
---

# 誤解：平均反應的信賴區間可以拿來預測單一個體

## 錯誤的想法
「Toluca 在 $X_h = 100$ 的 90% 信賴區間是 394.9 到 443.8 小時，所以下一批 100 件的工時有 90% 會落在這裡。」

## 正確的觀念
- **信賴區間**估計的是**平均**反應 $E(Y_h)$，是要蓋住一個參數（[[sources/lecture-03]] p.17）。
- **預測區間**是**單一新觀測** $Y_{h(new)}$ 可能的範圍，是一個隨機變數的範圍（[[sources/lecture-03]] p.17）。
- 預測區間多了新觀測本身的變異 σ²，所以一定比較寬（[[sources/lecture-03]] p.16–17）：下一批 100 件的 90% 預測區間是 332.2 到 506.6 小時。
- 兩者都在 $X_h = \bar X$ 時最窄。

## 判斷口訣
問的是「**所有**…的平均」→ 信賴區間；問的是「**某一個**…」→ 預測區間。例如「20 歲美國女性的平均體重」vs.「隨機挑一位 20 歲美國女性的體重」（[[sources/lecture-03]] p.13）。

## 教學提示
- 同一張圖畫出信賴帶和較寬的預測帶。
- 相關練習：[[ci-vs-pi-01]]

## 出處
- [[sources/lecture-03]] p.13, 16–17
