---
type: source
topic: linear
aliases: [Lecture 03, Inferences for SLR, 簡單線性迴歸的推論]
raw: raw/lecture-03.pdf
textbook: ALSM Chapter 2（機率結果見 Appendix A）
pages: 38
status: draft
updated: 2026-11-24
---

# Lecture 03：簡單線性迴歸的推論 (Inferences for Simple Linear Regression)

> 從點估計走到推論：估計量的抽樣分配、參數的檢定與信賴區間、平均反應與新觀測的區間、ANOVA 與 F 檢定、R²，以及過原點迴歸。

- 課程：114-1 迴歸分析 I（商學院），Fall 2025
- 對應課本：ALSM Chapter 2；需要的機率結果在 Appendix A
- 參考書同 [[sources/lecture-01|Lecture 01]]

## 各頁重點

| 頁 | 主題 | wiki 頁面 |
|---|---|---|
| p.1 | 為什麼需要推論：信賴區間與假設檢定 | [[inference-regression-coefficients]] |
| p.1–2 | 常態、χ²、t、F 分配 | [[chi-square-t-f-distributions]] |
| p.2–6 | $b_1$、$b_0$、$SSE$ 的抽樣分配；$Cov(b_0,b_1)$ | [[sampling-distribution-of-estimators]] |
| p.6–11 | β₁、β₀ 的 t 檢定與信賴區間；σ² 的信賴區間；Toluca 例題 | [[inference-regression-coefficients]]、[[toluca-company]] |
| p.11 | 偏離常態的影響 | [[normal-errors]] |
| p.11–12 | 信賴區間的解讀；X 的分散程度 | [[confidence-interval-interpretation]]、[[ci-probability-interpretation]] |
| p.12–13 | 檢定力；Toluca 例題 | [[power-of-slope-test]] |
| p.13–15 | 平均反應的信賴區間 | [[ci-mean-response]] |
| p.15–17 | 新觀測值的預測區間；m 個新觀測的平均 | [[prediction-interval]]、[[prediction-vs-confidence-interval]] |
| p.18–21 | Toluca：信賴區間、預測區間 | [[toluca-company]] |
| p.22–24 | 平方和分解、ANOVA 表 | [[anova-decomposition]] |
| p.24–26 | 期望均方、ANOVA F 檢定、與 t 檢定等價 | [[expected-mean-squares]]、[[f-test-anova]] |
| p.26–28 | 一般線性檢定（full vs. reduced model） | [[general-linear-f-test]] |
| p.29–32 | 相關係數 r、判定係數 R²、解讀 R² 的注意事項 | [[r-squared-and-correlation]]、[[high-r-squared-good-model]] |
| p.33–35 | 過原點迴歸 | [[regression-through-origin]] |
| p.35–36 | cars 例題：有截距 vs. 無截距 | [[cars-stopping-distance]] |
| p.36–38 | 倉庫例題（ALSM Table 4.2） | [[warehouse]] |

## 符號

- 臨界值：wiki 統一用百分位寫法 $t(1-\alpha/2;\,n-2)$、$\chi^2(p;\,n-2)$、$F(1-\alpha;\,1,\,n-2)$。講義多數寫 $t_{(1-\alpha/2,\,n-2)}$，但 p.15、p.17 寫 $t_{\alpha/2,\,n-2}$，σ² 區間用 $\chi^2_{\alpha/2}$ 表示上尾臨界值（見 [[notation]]）。
- $s\{b_1\}$、$s\{\hat Y_h\}$、$s\{pred\}$、$s\{predmean\}$：ALSM 的估計標準誤寫法；wiki 沿用。
- $SSTO$、$SSR$、$MSR$、$F^*$、$R^2$、$r$、$X_h$、$\hat Y_h$、$Y_{h(new)}$、δ（非中心參數）。

## 講義中的題目

- 講義原題（證明留作練習）：[[cov-b0-b1-01]]、[[cov-ybar-b1-01]]
- 補充題（使用者同意）：[[slr-inference-01]]、[[ci-vs-pi-01]]、[[r-squared-01]]

## 待確認事項（已依使用者決定處理）

- ⚠️→已處理 **p.13 印刷錯誤**：檢定力例題結論寫「conclude $H_a$ ($\beta_1 \neq 1.5$)」，該題 $H_a$ 為 $\beta_1 \neq 0$，wiki 改為 $\beta_1 \neq 0$ 並加註（[[power-of-slope-test]]）。
- ⚠️→已處理 **臨界值符號不一致**：統一為百分位寫法，見上方「符號」。
- ⚠️→已處理 **只有手寫算式的計算**：檢定力的 δ ≈ 4.22、m=3 的預測區間、$F(0.95;1,23)=4.28$，由 wiki 依講義公式重算並標「補充計算」。
- 講義的 R、SAS 程式碼依規則不收錄，只取輸出數字。

## 本次 ingest 建立的頁面

- concepts：[[chi-square-t-f-distributions]]、[[anova-decomposition]]、[[r-squared-and-correlation]]、[[confidence-interval-interpretation]]、[[regression-through-origin]]
- derivations：[[sampling-distribution-of-estimators]]、[[expected-mean-squares]]
- methods：[[inference-regression-coefficients]]、[[power-of-slope-test]]、[[ci-mean-response]]、[[prediction-interval]]、[[f-test-anova]]、[[general-linear-f-test]]
- examples：[[warehouse]]、[[cars-stopping-distance]]
- misconceptions：[[ci-probability-interpretation]]、[[high-r-squared-good-model]]、[[prediction-vs-confidence-interval]]
- exercises：[[cov-b0-b1-01]]、[[cov-ybar-b1-01]]（講義原題）；[[slr-inference-01]]、[[ci-vs-pi-01]]、[[r-squared-01]]（補充題）
- 更新：[[toluca-company]]、[[normal-errors]]、[[error-variance-mse]]、[[fitted-values-and-residuals]]、[[scope-and-extrapolation]]、[[notation]]、[[roadmap]]、[[index]]
