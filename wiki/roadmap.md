---
type: roadmap
updated: 2026-11-25
---

# 學習路徑 (Roadmap)

建議的學習順序與先備知識。每次 ingest 後更新；產生簡報時以此決定順序。

格式：`- [[頁面|名稱]] — 先備：[[A]]、[[B]]`

## 1. 線性迴歸 (linear)
簡單／多元線性迴歸：OLS、推論、R²、假設與診斷。

### 1.0 導論（[[sources/lecture-01|Lecture 01]]）
1. [[regression-to-the-mean|趨向平均數]] — 先備：無（例題 [[father-son-heights]]）
2. [[functional-vs-statistical-relation|函數關係與統計關係]] — 先備：無（例題 [[steroid-age]]；練習 [[functional-vs-statistical-01]]）
3. [[regression-function|迴歸函數]] — 先備：[[functional-vs-statistical-relation]]、條件期望值
4. [[regression-model|迴歸模型]] — 先備：[[regression-function]]
5. [[observational-vs-experimental-data|觀察資料與實驗資料]] — 先備：[[regression-model]]（誤解 [[correlation-is-not-causation]]；練習 [[observational-vs-experimental-01]]）
6. [[scope-and-extrapolation|模型適用範圍與外插]] — 先備：[[regression-model]]（誤解 [[extrapolation-beyond-data]]；練習 [[extrapolation-01]]）
7. [[bias-variance-tradeoff|偏誤–變異取捨]] — 先備：[[regression-model]]、期望值與變異數（練習 [[bias-variance-01]]）

### 1.1 簡單線性迴歸的基本理論（[[sources/lecture-02|Lecture 02]]）
1. [[simple-linear-regression|簡單線性迴歸]] — 先備：[[regression-function]]、[[regression-model]]（例題 [[electrical-distributor]]；誤解 [[linear-means-straight-line]]、[[intercept-always-meaningful]]；練習 [[linear-model-01]]）
2. [[slr-error-assumptions|SLR 的誤差假設]] — 先備：[[simple-linear-regression]]、期望值／變異數／共變異數
3. [[least-squares|最小平方法]] — 先備：[[simple-linear-regression]]（例題 [[toluca-company]]、[[height-weight]]；練習 [[least-squares-01]]）
4. [[least-squares-estimators|最小平方估計量的推導]] — 先備：[[least-squares]]、偏微分
5. [[fitted-values-and-residuals|配適值與殘差]] — 先備：[[least-squares-estimators]]
6. [[ls-unbiasedness-and-variance|不偏性與變異數]] — 先備：[[least-squares]]、[[slr-error-assumptions]]
7. [[gauss-markov-theorem|Gauss–Markov 定理]] — 先備：[[ls-unbiasedness-and-variance]]
8. [[error-variance-mse|誤差變異數的估計（MSE）]] — 先備：[[fitted-values-and-residuals]]、樣本變異數（練習 [[error-variance-01]]）
9. [[centered-slr|中心化的 SLR]] — 先備：[[least-squares]]
10. [[normal-errors|常態誤差假設]] — 先備：[[slr-error-assumptions]]、常態分配
11. [[maximum-likelihood|最大概似法]] — 先備：[[normal-errors]]、機率密度函數
12. [[mle-normal-slr|常態誤差 SLR 的最大概似估計]] — 先備：[[maximum-likelihood]]、[[least-squares-estimators]]、[[error-variance-mse]]

### 1.2 簡單線性迴歸的推論（[[sources/lecture-03|Lecture 03]]）
1. [[chi-square-t-f-distributions|χ²、t、F 分配]] — 先備：常態分配
2. [[sampling-distribution-of-estimators|估計量的抽樣分配]] — 先備：[[ls-unbiasedness-and-variance]]、[[normal-errors]]、[[chi-square-t-f-distributions]]（練習 [[cov-b0-b1-01]]、[[cov-ybar-b1-01]]）
3. [[inference-regression-coefficients|β₁、β₀ 的 t 檢定與信賴區間]] — 先備：[[sampling-distribution-of-estimators]]、假設檢定基礎（練習 [[slr-inference-01]]）
4. [[confidence-interval-interpretation|信賴區間的解讀]] — 先備：[[inference-regression-coefficients]]（誤解 [[ci-probability-interpretation]]）
5. [[power-of-slope-test|檢定力]] — 先備：[[inference-regression-coefficients]]、型一／型二錯誤
6. [[ci-mean-response|平均反應的信賴區間]] — 先備：[[fitted-values-and-residuals]]、[[sampling-distribution-of-estimators]]
7. [[prediction-interval|新觀測值的預測區間]] — 先備：[[ci-mean-response]]（誤解 [[prediction-vs-confidence-interval]]；練習 [[ci-vs-pi-01]]）
8. [[anova-decomposition|平方和分解與 ANOVA 表]] — 先備：[[fitted-values-and-residuals]]、[[error-variance-mse]]
9. [[expected-mean-squares|期望均方]] — 先備：[[anova-decomposition]]、[[ls-unbiasedness-and-variance]]
10. [[f-test-anova|ANOVA F 檢定]] — 先備：[[expected-mean-squares]]、[[inference-regression-coefficients]]
11. [[general-linear-f-test|一般線性檢定]] — 先備：[[f-test-anova]]
12. [[r-squared-and-correlation|R² 與相關係數]] — 先備：[[anova-decomposition]]（誤解 [[high-r-squared-good-model]]；練習 [[r-squared-01]]）
13. [[regression-through-origin|過原點迴歸]] — 先備：[[inference-regression-coefficients]]、[[anova-decomposition]]、[[general-linear-f-test]]（例題 [[warehouse]]、[[cars-stopping-distance]]）

### 1.3 簡單線性迴歸的診斷（[[sources/lecture-04|Lecture 04]]）
1. [[model-diagnostics|模型診斷總覽]] — 先備：[[slr-error-assumptions]]、[[normal-errors]]、[[fitted-values-and-residuals]]
2. [[standardized-residuals|標準化殘差]] — 先備：[[fitted-values-and-residuals]]、[[error-variance-mse]]
3. [[residual-plots|殘差圖]] — 先備：[[model-diagnostics]]（練習 [[residual-patterns-01]]）
4. [[linearity-of-regression-function|線性假設]] — 先備：[[residual-plots]]
5. [[constant-error-variance|變異數相同]] — 先備：[[residual-plots]]
6. [[normal-probability-plot|常態機率圖]] — 先備：[[normal-errors]]、標準常態百分位
7. [[outliers|離群值]] — 先備：[[standardized-residuals]]（誤解 [[delete-outliers]]）
8. [[independent-errors|誤差獨立]] — 先備：[[residual-plots]]
9. [[normality-tests|常態性檢定]] — 先備：[[normal-probability-plot]]、[[r-squared-and-correlation]]（誤解 [[tests-replace-plots]]）
10. [[brown-forsythe-test|Brown–Forsythe 檢定]] — 先備：[[constant-error-variance]]、兩樣本 t 檢定
11. [[breusch-pagan-test|Breusch–Pagan 檢定]] — 先備：[[constant-error-variance]]、[[anova-decomposition]]
12. [[lack-of-fit-test|缺適檢定]] — 先備：[[linearity-of-regression-function]]、[[general-linear-f-test]]（例題 [[lack-of-fit-toy]]、[[bank-new-accounts]]；練習 [[lack-of-fit-01]]、[[diagnostic-tests-01]]）

### 1.4 簡單線性迴歸的補救方法（[[sources/lecture-05|Lecture 05]]）
1. [[remedial-measures|補救方法總覽]] — 先備：[[model-diagnostics]]、[[linearity-of-regression-function]]、[[constant-error-variance]]、[[independent-errors]]、[[outliers]]
2. [[variable-transformations|變數轉換]] — 先備：[[remedial-measures]]、[[residual-plots]]（誤解 [[transform-y-only-fixes-variance]]；練習 [[choose-transformation-01]]）
3. [[lowess-smoothing|LOWESS 平滑曲線]] — 先備：[[residual-plots]]、[[least-squares]]（例題 [[sales-training]]）
4. [[box-cox-transformation|Box–Cox 轉換]] — 先備：[[variable-transformations]]、[[maximum-likelihood]]、[[normal-errors]]（例題 [[plasma-levels]]；練習 [[box-cox-01]]）
5. [[interpreting-transformed-models|轉換後模型的解讀]] — 先備：[[variable-transformations]]、[[prediction-interval]]、對數與指數的性質（誤解 [[transformed-coefficient-original-scale]]；練習 [[log-interpretation-01]]）

> 補救方法中的 WLS、穩健迴歸、GLS 在 [[remedial-measures]] 只列名稱，之後歸到「3. 進階線性模型」；變數轉換同時屬於「2. 模型建立與選擇」。

## 2. 模型建立與選擇 (model-building)
類別變數、交互作用、變數轉換、逐步迴歸、AIC/BIC。

- 變數轉換的基礎已在 1.4 介紹：[[variable-transformations]]、[[box-cox-transformation]]、[[interpreting-transformed-models]]。

## 3. 進階線性模型 (advanced-linear)
WLS、robust SE、Ridge/Lasso、ANOVA。

## 4. 廣義線性模型 (glm)
Logistic、Poisson 迴歸等。
