# Log

## [2026-11-23] schema | 建立知識庫
- 建立 CLAUDE.md、目錄結構、index.md、notation.md、log.md

## [2026-11-23] schema | 補充需求
- 課程程度設為大學部進階（矩陣形式推導）；主題範圍：linear、model-building、advanced-linear、glm
- 新增 exercises/（講義題＋經同意的補充題，含詳解）、roadmap.md、outputs/slides/（一個主題一份簡報）
- 頁面範本加入「教學提示」段落；raw/ 講義依章節命名 chNN-<主題>.pdf

## [2026-11-23] schema | ingest 前的規則調整
- raw/ 命名改為 lecture-NN.pdf；手寫筆記一律忽略；不追蹤 Supplementary 講義
- 主教科書：ALSM；標準符號以講義為主，ALSM 寫法記在 notation.md
- sources 頁與簡報第一頁都要有清楚的主題標題

## [2026-11-23] ingest | lecture-01 迴歸分析導論
- 新建：sources/lecture-01；concepts/regression-to-the-mean、functional-vs-statistical-relation、regression-function、regression-model、observational-vs-experimental-data、scope-and-extrapolation、bias-variance-tradeoff；examples/father-son-heights、steroid-age；misconceptions/correlation-is-not-causation、extrapolation-beyond-data；exercises/bias-variance-01
- 更新：notation、roadmap、index
- 待確認：無
- 待決定：3 題補充題（函數／統計關係判斷、觀察／實驗資料情境、外插判斷）尚未取得同意

## [2026-11-23] ingest | lecture-01 補充題
- 新建：exercises/functional-vs-statistical-01、observational-vs-experimental-01、extrapolation-01（使用者同意的補充題）
- 更新：相關概念、例題、誤解頁的「相關練習」連結；sources/lecture-01、roadmap、index

## [2026-11-23] slides | 迴歸分析導論
- 產出：outputs/slides/regression-introduction.html（26 頁，來源：lecture-01 相關的 wiki 頁面）
- 格式：單一 html 檔，鍵盤／點擊換頁，N 鍵顯示講者備註（取自各頁「教學提示」），練習題答案可折疊；圖片引用 assets/
- 補充內容（完整誤差分解式、補充題）在投影片上標示「補充」

## [2026-11-23] slides | 簡報風格改版
- 新增共用樣式 outputs/slides/theme/slides.css、slides.js，以及風格範本 outputs/slides/style-guide.html
- 風格：黑灰白＋桃紅 #FF2E7E 撞色；封面與章節頁黑底、內容頁白底；標題襯線、內文無襯線；插圖灰階＋淡桃紅；emoji 用於卡片小標題與章節頁
- regression-introduction.html 改用新風格

## [2026-11-24] slides | 改為筆記本風格
- theme/slides.css 改為筆記本風格：內容頁米白方格紙＋活頁孔、封面與章節頁為黑色筆記本封面＋桃紅鬆緊帶
- 插圖改回原色（白邊＋紙膠帶）；章節頁編號改實心桃紅、移除 emoji；小標改用 Caveat 手寫字
- 更新 style-guide.html 與 regression-introduction.html；預覽改為同步到 scratchpad 後在 Claude 瀏覽器面板顯示

## [2026-11-24] slides | 迴歸分析導論・圖文講義
- 產出：outputs/handouts/regression-introduction.html（可捲動閱讀的圖文講義，內容與 outputs/slides/regression-introduction.html 相同來源）
- 新增共用樣式 outputs/handouts/theme/handout.css（筆記本風格，與簡報同配色）；統計圖借用 slides/theme/slides.js 的 SK 繪圖工具
- 講義不含講者備註；練習題答案放在折疊區塊；補充內容標「補充」

## [2026-11-24] schema | 新增圖文講義規則
- CLAUDE.md 目錄結構加入 outputs/handouts/；新增「產生圖文講義」段落（形式、寫法、共用樣式、章節標題、插圖路徑）
- 預覽說明改為同步整個 outputs/

## [2026-11-24] schema | 簡報產生流程（graph）
- CLAUDE.md「產生簡報」加入四個節點：素材盤點 → 大綱 → 逐頁內容 → 產生投影片，各自的輸出、自動檢查、人工確認與退回規則
- 中間檔案放在 outputs/slides/plans/<主題>/（outline.md、spec.md、checks.md）

## [2026-11-24] slides | 迴歸分析導論（依簡報 graph 重做）
- 節點 0–1：outputs/slides/plans/regression-introduction/outline.md（素材 16 頁、大綱 25 頁），使用者確認
- 節點 2：spec.md（25 頁），自動檢查第 1 次 2 項未過，自動修正 1 次後通過，使用者確認
- 節點 3：outputs/slides/regression-introduction.html 依 spec 重新產生（練習題改為跟著章節），呈現檢查全部通過
- 檢查紀錄：checks.md
- 使用者檢閱通過，簡報定案

## [2026-11-24] ingest | lecture-02 簡單線性迴歸的基本理論
- 新建：sources/lecture-02；concepts/simple-linear-regression、fitted-values-and-residuals、error-variance-mse、centered-slr；assumptions/slr-error-assumptions、normal-errors；methods/least-squares、maximum-likelihood；derivations/least-squares-estimators、ls-unbiasedness-and-variance、gauss-markov-theorem、mle-normal-slr；examples/electrical-distributor、toluca-company、height-weight；misconceptions/linear-means-straight-line、intercept-always-meaningful；exercises/linear-model-01、least-squares-01、error-variance-01（補充題，使用者同意）
- 更新：concepts/regression-function、regression-model、scope-and-extrapolation；notation、roadmap（新增 1.1）、index
- 待確認（已依使用者決定處理）：p.10 b0 計算的 20.01 改為 28.02；p.18 f2 改為 f1

## [2026-11-24] ingest | lecture-03 簡單線性迴歸的推論
- 新建：sources/lecture-03；concepts/chi-square-t-f-distributions、anova-decomposition、r-squared-and-correlation、confidence-interval-interpretation、regression-through-origin；derivations/sampling-distribution-of-estimators、expected-mean-squares；methods/inference-regression-coefficients、power-of-slope-test、ci-mean-response、prediction-interval、f-test-anova、general-linear-f-test；examples/warehouse、cars-stopping-distance；misconceptions/ci-probability-interpretation、high-r-squared-good-model、prediction-vs-confidence-interval；exercises/cov-b0-b1-01、cov-ybar-b1-01（講義原題）、slr-inference-01、ci-vs-pi-01、r-squared-01（補充題，使用者同意）
- 更新：examples/toluca-company（推論、區間、ANOVA、R²）；assumptions/normal-errors；concepts/error-variance-mse、fitted-values-and-residuals、scope-and-extrapolation；notation、roadmap（新增 1.2）、index
- 待確認（已依使用者決定處理）：p.13 β1≠1.5 改為 β1≠0；臨界值統一百分位寫法；δ、m=3 預測區間、F(0.95;1,23) 以補充計算重算

## [2026-11-24] ingest | lecture-04 簡單線性迴歸的模型診斷
- 新建：sources/lecture-04；concepts/model-diagnostics、standardized-residuals、outliers；assumptions/linearity-of-regression-function、constant-error-variance、independent-errors；methods/residual-plots、normal-probability-plot、normality-tests、brown-forsythe-test、breusch-pagan-test、lack-of-fit-test；examples/lack-of-fit-toy、bank-new-accounts；misconceptions/tests-replace-plots、delete-outliers；exercises/residual-patterns-01、lack-of-fit-01、diagnostic-tests-01（補充題，使用者同意）
- 更新：examples/toluca-company（診斷段落）；assumptions/normal-errors、slr-error-assumptions；concepts/fitted-values-and-residuals；notation、roadmap（新增 1.3）、index（待建頁面加入 leverage、weighted-least-squares、box-cox-transformation、durbin-watson-test）
- 待確認（已依使用者決定處理）：p.18 BF 計算式的 28.40534 改為 28.45034；p.21 下標 i→j；銀行例題以補充計算補上缺適檢定結果

## [2026-11-25] ingest | lecture-05 簡單線性迴歸的補救方法
- 新建：sources/lecture-05；concepts/remedial-measures、variable-transformations、interpreting-transformed-models；methods/box-cox-transformation、lowess-smoothing；examples/sales-training、plasma-levels；misconceptions/transform-y-only-fixes-variance、transformed-coefficient-original-scale；exercises/choose-transformation-01、log-interpretation-01、box-cox-01（補充題，使用者同意）
- 更新：assumptions/linearity-of-regression-function、constant-error-variance、independent-errors、normal-errors（新增或改寫「對策」）；concepts/outliers（處理方式、門檻差異）、model-diagnostics；misconceptions/delete-outliers；methods/residual-plots、normal-probability-plot；notation、roadmap（新增 1.4）、index（box-cox-transformation 移出待建頁面；新增 robust-regression、generalized-least-squares）
- 待確認（已依使用者決定處理）：p.7 圖的 σ² 與轉換對應與標準結果相反，wiki 採標準對應並加註；p.9 Box–Cox 的 SSE 比較需標準化，以補充附上 ALSM 公式並驗算 Table 3.9；離群值門檻 |r_i|>4（L05）與 >3（L04）並列；p.14 log 底數以補充說明
