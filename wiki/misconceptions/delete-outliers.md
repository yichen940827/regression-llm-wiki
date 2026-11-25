---
type: misconception
topic: linear
aliases: [Delete outliers, 離群值直接刪掉, outlier removal]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[outliers]]", "[[standardized-residuals]]"]
status: draft
updated: 2026-11-25
---

# 誤解：發現離群值，直接刪掉就好

## 錯誤的想法
「標準化殘差超過 3 的點是離群值，刪掉它，模型就配適得更好。」

## 正確的觀念
- 離群值可能是**錯誤**（例如記錄錯誤），也可能是**真實的**，這時它可能帶有重要的資訊（[[sources/lecture-04]] p.11）。
- 經驗法則 $\lvert r_i \rvert > 3$ 是用來**標出來、進一步調查**，不是用來自動刪除（[[sources/lecture-04]] p.11）。
- 先查明原因（[[sources/lecture-05]] p.2–3）：
  - 相當確定是錯誤（例如記錯的數字）→ 刪除或更正。
  - 確實是離群值 → 可以移除，但必須說明並討論它可能的意義；或保留它，改用降低其影響的穩健方法（[[robust-regression]]）。
- 經驗法則的門檻也不只一種：Lecture 04 用 $\lvert r_i \rvert > 3$，Lecture 05 用 $\lvert r_i \rvert > 4$（見 [[outliers]]）。

## 教學提示
- 舉例：一筆異常高的銷售額，可能是輸入錯誤，也可能是一次大訂單，兩種處理方式完全不同。

## 出處
- [[sources/lecture-04]] p.10–11
- [[sources/lecture-05]] p.2–3
