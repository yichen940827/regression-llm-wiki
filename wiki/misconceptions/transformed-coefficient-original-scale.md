---
type: misconception
topic: [linear, model-building]
aliases: [Interpreting transformed coefficients on original scale, 轉換後係數的錯誤解讀]
sources: ["[[sources/lecture-05]]"]
related: ["[[interpreting-transformed-models]]", "[[simple-linear-regression]]"]
status: draft
updated: 2026-11-25
---

# 誤解：轉換後的係數可以直接用原單位解讀

## 錯誤的想法
「Plasma 模型 $\hat Y' = 1.135 - 0.1023X$，所以年齡每增加 1 歲，血漿濃度減少 0.1023。」

## 正確的觀念
- 參數要在**轉換後的尺度**上解讀：$\beta_1$ 是 $X'$ 增加一單位時 $Y'$ 的期望變化（[[sources/lecture-05]] p.14）。上例中減少 0.1023 的是 $\log_{10} Y$，不是 $Y$。
- 要講原尺度，就要反轉換：$\log_{10} Y$ 減少 0.1023，代表 $Y$ **乘以** $10^{-0.1023} \approx 0.79$，也就是約下降 21%（補充計算；見 [[plasma-levels]]）。
- log 轉換的係數是**相對變化**（百分比），不是絕對變化（[[sources/lecture-05]] p.14；見 [[interpreting-transformed-models]]）。
- 預測值與區間也一樣：要反轉換回原尺度，例如 $\sqrt Y$ 的區間 $(1.2, 4.3)$ 對應 $Y$ 的區間 $(1.2^2, 4.3^2)$（[[sources/lecture-05]] p.14）。

## 教學提示
- 讓學生把同一個結論寫成兩句話：「在 log 尺度上……」和「在原尺度上……」。
- 提醒：報告給非統計背景的人時，盡量轉回原尺度或百分比。

## 出處
- [[sources/lecture-05]] p.14
