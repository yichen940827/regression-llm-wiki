---
type: source
topic: linear
aliases: [Lecture 04, Diagnostics for SLR, 簡單線性迴歸的模型診斷]
raw: raw/lecture-04.pdf
textbook: ALSM Sections 3.1–3.7
pages: 28
status: draft
updated: 2026-11-24
---

# Lecture 04：簡單線性迴歸的模型診斷 (Diagnostics for Simple Linear Regression)

> 算得出估計和檢定，不代表模型適合資料。這一講用殘差圖和檢定，逐一檢查線性、獨立、常態、變異數相同、離群值與遺漏變數。

- 課程：114-1 迴歸分析 I（商學院），Fall 2025
- 對應課本：ALSM Chapter 3 的 3.1–3.7 節
- 參考書：Montgomery, Peck & Vining (2021)；Fox & Weisberg (2018)

## 各頁重點

| 頁 | 主題 | wiki 頁面 |
|---|---|---|
| p.1–2 | 為什麼要診斷；模型可能出錯的 6 種情況 | [[model-diagnostics]] |
| p.2 | 殘差、標準化殘差、半學生化殘差 | [[standardized-residuals]] |
| p.3 | 7 種殘差圖 | [[residual-plots]] |
| p.4 | 檢查線性 | [[linearity-of-regression-function]] |
| p.4–5 | 檢查變異數相同；轉換、WLS、Box–Cox | [[constant-error-variance]] |
| p.5–10 | 檢查常態；常態機率圖；Toluca 期望值表；座標軸 | [[normal-probability-plot]]、[[normal-errors]] |
| p.10–11 | 檢查離群值；$\lvert r_i \rvert > 3$ | [[outliers]]、[[delete-outliers]] |
| p.11–12 | 檢查獨立性；時間趨勢、週期 | [[independent-errors]] |
| p.12–13 | 檢查遺漏變數；A、B 公司機器 | [[residual-plots]] |
| p.13–14 | Toluca 的殘差分析；lowess 平滑 | [[toluca-company]]、[[residual-plots]] |
| p.15 | 檢定是圖形的輔助 | [[tests-replace-plots]] |
| p.15–17 | 常態檢定：相關檢定、Shapiro–Wilk、Anderson–Darling、Lilliefors | [[normality-tests]] |
| p.18–19 | Brown–Forsythe（修正 Levene）檢定 | [[brown-forsythe-test]] |
| p.20–21 | Breusch–Pagan 檢定 | [[breusch-pagan-test]] |
| p.21–28 | 缺適檢定；6 筆資料例題；銀行例題 | [[lack-of-fit-test]]、[[lack-of-fit-toy]]、[[bank-new-accounts]] |
| p.28 | 其他檢定：離群值、runs、Durbin–Watson | [[model-diagnostics]] |

## 符號

- 標準化（內部學生化）殘差 $r_i$、半學生化殘差 $e_i^*$、槓桿值 $h_{ii}$（之後的講次才介紹）。
- 常態機率圖：$z(A)$、$A = (k - 0.375)/(n + 0.25)$。
- Brown–Forsythe：$\tilde e_1, \tilde e_2$（組中位數）、$d_{i1}, d_{i2}$、$t^*_{BF}$。
- Breusch–Pagan：$X^2_{BP}$、$SSR^*$、$\gamma_0, \gamma_1$。
- 缺適檢定：$c$、$n_j$、$Y_{ij}$、$\bar Y_j$、$\mu_j$、$SSPE$、$SSLF$、$MSPE$、$MSLF$。見 [[notation]]。

## 講義中的題目

- 本講沒有練習題；Toluca 的常態期望值表、各項檢定、缺適檢定的兩個例題整理成例題頁。
- 補充題（使用者同意）：[[residual-patterns-01]]、[[lack-of-fit-01]]、[[diagnostic-tests-01]]

## 待確認事項（已依使用者決定處理）

- ⚠️→已處理 **p.18 印刷錯誤**：$t^*_{BF}$ 的計算式寫 $(44.81507 - 28.40534)$，但 $\bar d_2 = 28.45034$；用 28.45034 才得到講義答案 1.31648。wiki 採 28.45034（[[brown-forsythe-test]]）。
- ⚠️→已處理 **p.21 下標筆誤**：「at the *i*th level of the regressor $X_j$」應為第 *j* 個水準，wiki 直接改正（[[lack-of-fit-test]]）。
- ⚠️→已處理 **銀行例題沒有輸出**：講義只給資料與 SAS 程式碼，wiki 依講義公式補充計算，結果與課本一致（[[bank-new-accounts]]）。
- 講義的 R、SAS 程式碼依規則不收錄；課本圖 3.4、3.7、3.8、3.10 只文字描述。

## 本次 ingest 建立的頁面

- concepts：[[model-diagnostics]]、[[standardized-residuals]]、[[outliers]]
- assumptions：[[linearity-of-regression-function]]、[[constant-error-variance]]、[[independent-errors]]
- methods：[[residual-plots]]、[[normal-probability-plot]]、[[normality-tests]]、[[brown-forsythe-test]]、[[breusch-pagan-test]]、[[lack-of-fit-test]]
- examples：[[lack-of-fit-toy]]、[[bank-new-accounts]]
- misconceptions：[[tests-replace-plots]]、[[delete-outliers]]
- exercises：[[residual-patterns-01]]、[[lack-of-fit-01]]、[[diagnostic-tests-01]]
- 更新：[[toluca-company]]、[[normal-errors]]、[[slr-error-assumptions]]、[[fitted-values-and-residuals]]、[[notation]]、[[roadmap]]、[[index]]
