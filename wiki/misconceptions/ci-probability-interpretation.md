---
type: misconception
topic: linear
aliases: [Confidence interval misinterpretation, 信賴區間的機率解讀]
sources: ["[[sources/lecture-03]]"]
related: ["[[confidence-interval-interpretation]]", "[[inference-regression-coefficients]]"]
status: draft
updated: 2026-11-24
---

# 誤解：「真正的 β₁ 有 95% 的機率落在這個區間內」

## 錯誤的想法
「算出 β₁ 的 95% 信賴區間 2.85 到 4.29，代表 β₁ 有 95% 的機率在 2.85 到 4.29 之間。」

## 正確的觀念
- 這是錯的：區間的隨機性來自 $b_1$，β₁ 是固定、非隨機的（[[sources/lecture-03]] p.11）。一個已經算出來的區間，要嘛有蓋到 β₁，要嘛沒有。
- 95% 是指**造區間的方法**：在 $X$ 固定的條件下重複抽樣、每次都造一個區間，長期約有 95% 的區間會蓋住真正的 β₁（[[sources/lecture-03]] p.11–12）。
- 詳見 [[confidence-interval-interpretation]]。

## 教學提示
- 用「套圈圈」比喻：每次丟出的圈（區間）位置不同，木樁（β₁）固定不動；95% 是丟圈的命中率。

## 出處
- [[sources/lecture-03]] p.11–12
