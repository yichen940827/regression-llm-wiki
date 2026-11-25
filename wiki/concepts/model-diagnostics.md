---
type: concept
topic: linear
aliases: [Model diagnostics, 模型診斷, residual analysis, 殘差分析, model adequacy]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[residual-plots]]", "[[standardized-residuals]]", "[[slr-error-assumptions]]", "[[normal-errors]]", "[[remedial-measures]]"]
status: draft
updated: 2026-11-25
---

# 模型診斷 (Model Diagnostics)

> 檢查模型的假設是否符合資料；主要工具是殘差，方法分成「畫圖」和「檢定」兩類。

## 為什麼要診斷
（[[sources/lecture-04]] p.1）
- 會用最小平方法配適、會做推論，不代表模型適合手上的資料。
- 常態誤差 SLR 假設 $Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$，$\varepsilon_i$ 獨立、常態、平均 0、變異數同為 σ²。
- 所有假設都適合資料，模型才適當；假設被違反時，可能得到不同的結論和**無效的推論**。

## 模型可能出錯的 6 種情況
（[[sources/lecture-04]] p.1–2）

| 問題 | 頁面 |
|---|---|
| 1. 迴歸函數不是線性 | [[linearity-of-regression-function]] |
| 2. 誤差不獨立 | [[independent-errors]] |
| 3. 誤差不是常態 | [[normal-errors]] |
| 4. 誤差變異數不相同 | [[constant-error-variance]] |
| 5. 模型對大部分資料配適得好，但有一兩個離群值 | [[outliers]] |
| 6. 漏掉重要的解釋變數 | [[residual-plots]] |

## 殘差是主要工具
- 殘差 $e_i = Y_i - \hat Y_i$ 是看不到的誤差 $\varepsilon_i$ 在資料上的對應，$\bar e = 0$（[[sources/lecture-04]] p.2）。
- 模型適當時，殘差應該反映誤差項的假設；所以**殘差分析**用來檢查假設是否成立、模型是否適當（[[sources/lecture-04]] p.2）。
- 常用標準化殘差，見 [[standardized-residuals]]。

## 兩類方法
（[[sources/lecture-04]] p.2, 15）
1. **圖形法**：針對不同問題畫不同的殘差圖，是最常用的診斷方法（[[residual-plots]]、[[normal-probability-plot]]）。
2. **假設檢定**：根據「模型成立時殘差應有的分配」設計檢定（[[normality-tests]]、[[brown-forsythe-test]]、[[breusch-pagan-test]]、[[lack-of-fit-test]]）。檢定是圖形的**輔助**，不能取代圖形，因為顯著性很受樣本數影響（見 [[tests-replace-plots]]）。

## 問題與工具對照

| 要檢查的 | 圖形 | 檢定 |
|---|---|---|
| 線性 | $e$ 對 $\hat Y$（或 $X$），加 lowess | 缺適檢定 |
| 變異數相同 | $e$ 或 $\lvert e \rvert$、$e^2$ 對 $\hat Y$ | Brown–Forsythe、Breusch–Pagan |
| 常態 | 常態機率圖、直方圖、盒形圖 | 常態相關檢定、Shapiro–Wilk 等 |
| 獨立性 | $e$ 對時間順序 | runs 檢定、Durbin–Watson（[[durbin-watson-test]]，之後的章節） |
| 離群值 | $e$ 對 $\hat Y$、$\lvert r_i \rvert > 3$（L05 用 $> 4$，見 [[outliers]]） | 離群值檢定（之後的章節） |
| 遺漏變數 | $e$ 對其他變數 | — |

## 檢查順序的建議
有些統計學家建議**最後**才檢查常態：非線性和變異數不相同都會影響常態機率圖（[[sources/lecture-04]] p.10）。

## 診斷之後：補救
發現問題後的對策（放棄 SLR 或轉換資料）見 [[remedial-measures]]；轉換後要**再診斷一次**，形成「診斷 → 補救 → 再診斷」的循環（[[sources/lecture-05]] p.1–3）。

## 教學提示
- 用「健康檢查」比喻：先看整體（殘差對配適值的圖），再針對可疑處做專門檢查。
- 讓學生看同一組資料的四張圖（R 的 `plot(lm)` 那四張），逐一說出在檢查什麼。
- 相關練習：[[residual-patterns-01]]、[[diagnostic-tests-01]]

## 出處
- [[sources/lecture-04]] p.1–3, 10, 15, 28
- [[sources/lecture-05]] p.1–3
