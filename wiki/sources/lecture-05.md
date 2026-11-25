---
type: source
topic: [linear, model-building]
aliases: [Lecture 05, Remedying for SLR, Remedial measures, 簡單線性迴歸的補救方法]
raw: raw/lecture-05.pdf
textbook: ALSM Sections 3.8–3.11
pages: 14
status: draft
updated: 2026-11-25
---

# Lecture 05：簡單線性迴歸的補救方法 (Remedial Measures for SLR)

> 診斷出問題之後怎麼辦？兩條路：放棄 SLR 改用更合適的模型，或轉換資料讓 SLR 在新尺度上成立。這一講的重點是轉換 X、轉換 Y、Box–Cox，以及轉換後的解讀。

- 課程：114-1 迴歸分析 I（商學院），Fall 2025
- 對應課本：ALSM Chapter 3 的 3.8–3.11 節
- 參考書：Montgomery, Peck & Vining (2021)；Fox & Weisberg (2018)

## 各頁重點

| 頁 | 主題 | wiki 頁面 |
|---|---|---|
| p.1 | 診斷可能發現的 5 種問題；兩條補救路線 | [[remedial-measures]] |
| p.2 | 放棄 SLR 時的 6 種進階方法（對應 ALSM 章節） | [[remedial-measures]] |
| p.2 | 誤差相關：估計仍不偏，但變異數估計與推論錯誤；GLS、時間序列、落後項、一階差分 | [[independent-errors]] |
| p.2–3 | 離群值：$\lvert r_i \rvert > 4$；錯誤就刪除或更正，真實就說明或用穩健方法 | [[outliers]]、[[delete-outliers]] |
| p.3 | 轉換的目的：X 處理非線性，Y 處理變異數與常態；需要試誤 | [[variable-transformations]] |
| p.3–4 | 轉換 X：Fig 3.13 三種曲線形狀與對應轉換；用 LOWESS 輔助 | [[variable-transformations]]、[[lowess-smoothing]] |
| p.4–6 | 銷售訓練例題：$X' = \sqrt X$，$\hat Y = -10.33 + 83.45\sqrt X$ | [[sales-training]] |
| p.6–7 | 轉換 Y：偏斜與變異數隨 $E(Y)$ 變大；Fig 3.4、3.15；殘差對配適值的五種形狀 | [[variable-transformations]] |
| p.7–8 | Plasma 例題：$Y' = \log_{10}Y$，$\hat Y' = 1.135 - 0.1023X$ | [[plasma-levels]] |
| p.9 | 處理變異數不相同：轉換或 WLS；冪次轉換階梯；轉換 Y 會改變線性關係 | [[variable-transformations]]、[[transform-y-only-fixes-variance]] |
| p.9–10 | Box–Cox 轉換：MLE 選 λ、只適用 Y > 0、選容易解讀的 λ | [[box-cox-transformation]] |
| p.11 | Plasma 的 Box–Cox 結果：Table 3.9、Fig 3.17，$\hat\lambda \approx -0.5$ | [[plasma-levels]] |
| p.12–13 | R、SAS 程式碼（依規則不收錄；SAS 中的 25 筆資料用於驗算） | [[plasma-levels]] |
| p.14 | 轉換後的解讀；反轉換；log 轉換＝相對變化；汽車 MPG 例 | [[interpreting-transformed-models]]、[[transformed-coefficient-original-scale]] |

## 符號

- 轉換後的變數記為 $X'$、$Y'$（ALSM 寫法相同）。
- Box–Cox 冪次參數 $\lambda$、其估計 $\hat\lambda$；轉換族 $Y'(\lambda)$。
- 解讀用的一般變數 $W$、$W' = \log W$。見 [[notation]]。

## 講義中的題目

- 本講沒有練習題；銷售訓練、Plasma 兩個例題整理成例題頁，汽車 MPG 例放在 [[interpreting-transformed-models]]。
- 補充題（使用者同意）：[[choose-transformation-01]]、[[log-interpretation-01]]、[[box-cox-01]]

## 待確認事項（已依使用者決定處理）

- ⚠️→已處理 **p.7 圖的標示與標準結果對調**：圖上 (c) $\sigma^2 = k\mu$ 標「logarithm」、(d) $\sigma^2 = k\mu^2$ 標「square root」；標準的變異數穩定結果是 $\sigma^2 \propto \mu$ 用 $\sqrt Y$、$\sigma^2 \propto \mu^2$ 用 $\log Y$。wiki 寫標準對應（補充），並註明講義圖的標示不同（[[variable-transformations]]）。
- ⚠️→已處理 **p.9 Box–Cox 的「MLE ＝ 最小 SSE」需要標準化版本**：講義的 $(Y^\lambda - 1)/\lambda$ 在不同 λ 下尺度不同。用 25 筆資料驗算，Table 3.9 的 SSE 只有用 ALSM 幾何平均標準化的 $W_i$ 才算得出來。wiki 寫講義公式，另以補充附上標準化公式（[[box-cox-transformation]]）。
- ⚠️→已處理 **離群值門檻**：本講 p.2 寫 $\lvert r_i \rvert > 4$，Lecture 04 p.11 寫 $\lvert r_i \rvert > 3$。兩者都列出，說明只是經驗法則（[[outliers]]）。
- ⚠️→已處理 **p.14 log 的底數**：$e^{\beta_1 a}$ 預設自然對數；Plasma 用 $\log_{10}$ 時倍數是 $10^{\beta_1 a}$。以補充說明（[[interpreting-transformed-models]]）。
- p.4「locally weighed」為拼字錯誤，wiki 直接寫 weighted。
- 數字驗算：銷售訓練 $b_0 = -10.33$、$b_1 = 83.45$；Plasma $b_0 = 1.135$、$b_1 = -0.1023$；Table 3.9 最小 SSE 在 $\lambda = -0.5$，與 R 的 $\hat\lambda = -0.505$ 一致；汽車例 $e^{-1.06 \times 0.41} \approx 0.65$。全部相符。

## 本次 ingest 建立的頁面

- concepts：[[remedial-measures]]、[[variable-transformations]]、[[interpreting-transformed-models]]
- methods：[[box-cox-transformation]]、[[lowess-smoothing]]
- examples：[[sales-training]]、[[plasma-levels]]
- misconceptions：[[transform-y-only-fixes-variance]]、[[transformed-coefficient-original-scale]]
- exercises：[[choose-transformation-01]]、[[log-interpretation-01]]、[[box-cox-01]]
- 更新：[[linearity-of-regression-function]]、[[constant-error-variance]]、[[independent-errors]]、[[normal-errors]]、[[outliers]]、[[delete-outliers]]、[[model-diagnostics]]、[[residual-plots]]、[[normal-probability-plot]]、[[notation]]、[[roadmap]]、[[index]]
