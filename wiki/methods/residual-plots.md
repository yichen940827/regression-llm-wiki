---
type: method
topic: linear
aliases: [Residual plots, 殘差圖, residuals vs fitted, lowess, 局部加權迴歸平滑, omitted variable plot]
sources: ["[[sources/lecture-04]]", "[[sources/lecture-05]]"]
related: ["[[model-diagnostics]]", "[[linearity-of-regression-function]]", "[[constant-error-variance]]", "[[independent-errors]]", "[[outliers]]", "[[lowess-smoothing]]", "[[variable-transformations]]"]
status: draft
updated: 2026-11-25
---

# 殘差圖 (Residual Plots)

> 最常用的診斷工具：模型適當時，殘差圖應該像繞著 0 的一條沒有規律的水平帶。

## 七種殘差圖
（[[sources/lecture-04]] p.3）
1. $e_i$ 對配適值 $\hat Y_i$（**最重要**）
2. $e_i$ 對解釋變數 $X_i$
3. $e_i$ 對模型中沒有的其他變數
4. $e_i$ 對時間或其他順序
5. $\lvert e_i \rvert$ 或 $e_i^2$ 對配適值
6. 殘差的邊際分配：直方圖、盒形圖等
7. 殘差的常態機率圖（見 [[normal-probability-plot]]）

## 怎麼看

| 圖形樣子 | 表示 | 頁面 |
|---|---|---|
| 繞著 0 的水平帶、隨機跳動 | 沒看到問題 | — |
| 曲線（例如 U 形） | 迴歸函數不是線性 | [[linearity-of-regression-function]] |
| 喇叭形、漏斗形、雙弓形 | 變異數不相同 | [[constant-error-variance]] |
| 對時間有趨勢或週期 | 誤差不獨立 | [[independent-errors]] |
| 單一或少數極端點 | 離群值 | [[outliers]] |
| 對其他變數有系統性分群 | 漏掉重要變數 | 見下方 |

（[[sources/lecture-04]] p.4, 11–12）

## 檢查遺漏的解釋變數
把殘差對一個**新的、不在模型中的變數**作圖，可以幫忙判斷要不要把它加進模型（[[sources/lecture-04]] p.12）。

**例子**（[[sources/lecture-04]] p.12–13；課本 Fig. 3.10）：研究裝配作業員工的產量 ($Y$) 與年齡 ($X$)，機器來自 A、B 兩家公司。
1. 殘差對年齡的圖看不出線性或變異數的問題。
2. 但依公司分開看：A 公司機器的殘差傾向為正、B 公司的傾向為負。
3. 機器種類對產量有明確影響，把這個變數加入模型，預測可能好很多。

## Lowess 平滑線（補充工具）
Lowess（locally weighted regression scatter smoothing，局部加權迴歸散布平滑）基本上是 $Y$ 值的加權移動平均：對每個 $X$ 的鄰近資料配適局部的線性迴歸，取該處的配適值當平滑值（[[sources/lecture-04]] p.14）。把平滑值畫成一條線，可以幫忙判斷模式是線性還是曲線；在迴歸分析中很常用。也可以用來找 X 的轉換，詳見 [[lowess-smoothing]]。

殘差對配適值的圖也能提示 Y 該怎麼轉換（變異數隨 $\hat Y$ 變大的形狀），見 [[variable-transformations]]（[[sources/lecture-05]] p.7）。

## 例子
- [[toluca-company]]：殘差對配適值的圖、常態 QQ 圖、標準化殘差圖都沒有明顯問題（[[sources/lecture-04]] p.13–14）。

## 教學提示
- 先看「好」的殘差圖，再一次看四種「壞」的，最後讓學生自己判讀。
- 提醒：圖形判讀有主觀成分，檢定可以輔助（見 [[tests-replace-plots]]）。
- 相關練習：[[residual-patterns-01]]

## 出處
- [[sources/lecture-04]] p.3–4, 11–14
- [[sources/lecture-05]] p.7
