---
type: misconception
topic: linear
aliases: [Tests replace plots, 檢定通過就不用看圖, diagnostic tests vs plots]
sources: ["[[sources/lecture-04]]"]
related: ["[[model-diagnostics]]", "[[residual-plots]]", "[[normality-tests]]"]
status: draft
updated: 2026-11-24
---

# 誤解：診斷檢定沒拒絕，就不用看殘差圖了

## 錯誤的想法
「Shapiro–Wilk 的 p 值 0.86、Brown–Forsythe 的 p 值 0.20，假設都沒問題，不用畫殘差圖。」

## 正確的觀念
- 診斷用的檢定**不能取代**圖形，只是**輔助**：顯著性檢定非常依賴樣本數（[[sources/lecture-04]] p.15）。
  - 樣本小時檢定力低，有問題也可能不顯著（例如 [[lack-of-fit-01]]）。
  - 樣本大時，微不足道的偏離也會顯著。
- 圖形能看出問題的**樣子**（曲線、喇叭形、時間趨勢、哪個點有問題），檢定只給一個 p 值。
- 通常看適當的殘差圖就足以診斷常態的偏離；檢定是在需要更正式量化時才用（[[sources/lecture-04]] p.15）。

## 教學提示
- 讓學生先看圖、寫下判斷，再看檢定結果對照。

## 出處
- [[sources/lecture-04]] p.15
