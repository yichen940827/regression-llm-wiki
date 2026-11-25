---
type: exercise
topic: linear
origin: supplementary
difficulty: 1
sources: ["[[sources/lecture-04]]"]
related: ["[[residual-plots]]", "[[model-diagnostics]]"]
status: draft
updated: 2026-11-24
---

# 練習：看殘差圖判斷問題

## 題目
（補充題）下列是 5 張殘差圖的描述，判斷各自可能違反哪個假設或有什麼問題。

1. 殘差對配適值：中間的點大多為負，兩端的點大多為正，呈 U 形。
2. 殘差對配適值：配適值小時殘差很集中，配適值越大殘差越分散。
3. 殘差對資料收集順序：前半段殘差大多為負，後半段大多為正。
4. 殘差對配適值：大致是水平帶，但有一個點的標準化殘差是 4.2。
5. 殘差對「工廠別」：A 廠的殘差大多為正，B 廠的大多為負。

> [!hint]- 提示
> 對照 [[residual-plots]] 的「怎麼看」表格。

> [!solution]- 詳解
> | 題 | 問題 | 頁面 |
> |---|---|---|
> | 1 | 迴歸函數不是線性（曲線關係） | [[linearity-of-regression-function]] |
> | 2 | 變異數不相同（喇叭形，異質變異） | [[constant-error-variance]] |
> | 3 | 誤差不獨立（時間趨勢；可能漏了時間變數） | [[independent-errors]] |
> | 4 | 可能的離群值（$\lvert r_i \rvert > 3$），要進一步調查 | [[outliers]] |
> | 5 | 漏掉重要的解釋變數（工廠別） | [[residual-plots]] |
>
> （[[sources/lecture-04]] p.4, 11–13）

## 考到的觀念
- [[residual-plots]]
- [[model-diagnostics]]
