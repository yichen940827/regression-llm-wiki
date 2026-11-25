---
type: example
topic: [linear, model-building]
aliases: [Sales training example, 銷售訓練例題, ALSM Table 3.7, square root transformation of X]
sources: ["[[sources/lecture-05]]"]
related: ["[[variable-transformations]]", "[[lowess-smoothing]]", "[[normal-probability-plot]]", "[[normality-tests]]"]
status: draft
updated: 2026-11-25
---

# 銷售訓練例題 (Sales Training Example)

> 訓練天數越多、業績越好，但效果遞減：關係是彎的、變異數卻很穩定，所以轉換 X（取 $\sqrt X$）就把它拉直了。

## 資料
10 位參與者的訓練天數 $X$ 與模擬銷售情境的表現分數 $Y$（課本 Table 3.7；[[sources/lecture-05]] p.4）：

| $i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $X_i$（天） | 0.5 | 0.5 | 1.0 | 1.0 | 1.5 | 1.5 | 2.0 | 2.0 | 2.5 | 2.5 |
| $Y_i$（分數） | 42.5 | 50.6 | 68.5 | 80.7 | 89.0 | 99.6 | 105.3 | 111.8 | 112.3 | 125.7 |
| $X_i' = \sqrt{X_i}$ | .70711 | .70711 | 1.00000 | 1.00000 | 1.22474 | 1.22474 | 1.41421 | 1.41421 | 1.58114 | 1.58114 |

## 分析步驟
1. **看原始散布圖**（Fig 3.14a）：關係明顯是曲線，SLR 不合適；但各 $X$ 水準的散布程度大致相同 → 考慮**轉換 X**（[[sources/lecture-05]] p.4）。
2. **選轉換**：形狀是「遞增、越來越平緩」，對照 Fig 3.13(a)，先試 $X' = \sqrt X$（[[sources/lecture-05]] p.4；見 [[variable-transformations]]）。
3. **看轉換後的散布圖**（Fig 3.14b）：關係變得大致線性；因為沒有轉換 $Y$，各水準的散布程度和原來一樣（[[sources/lecture-05]] p.4）。
4. **配適 SLR**（[[sources/lecture-05]] p.5）：
   $$\hat Y = -10.33 + 83.45\,X'$$
5. **重新診斷**（[[sources/lecture-05]] p.5–6）：
   - 殘差對 $X'$ 的圖（Fig 3.14c）：沒有缺適或明顯變異數不相同的跡象。
   - 常態機率圖（Fig 3.14d）：沒有明顯偏離常態。
   - 排序殘差與常態期望值的相關係數 = **0.979**；α = 0.01 時 Table B.6 的臨界值為 **0.879**。0.979 遠大於臨界值，支持誤差常態（見 [[normality-tests]]）。
   - 結論：對轉換後的資料，SLR 是合適的。
6. **寫回原單位**（[[sources/lecture-05]] p.6）：
   $$\hat Y = -10.33 + 83.45\sqrt X$$

## 補充驗算
（補充，非講義內容）用上表資料重算：$b_0 = -10.328$、$b_1 = 83.453$，與講義一致。對照：直接用 $X$ 配適直線得 $\hat Y = 34.95 + 35.77X$，$SSE = 514.6$、$R^2 = 0.926$；用 $\sqrt X$ 後 $SSE = 314.7$、$R^2 = 0.954$。

## 解讀
- $b_1 = 83.45$：$\sqrt{\text{天數}}$ 每增加 1，表現分數平均增加 83.45 分。
- 換成原單位：同樣多訓練半天，從 0.5 天到 1 天（$\sqrt X$ 從 0.707 到 1）分數平均增加約 24.4；從 2 天到 2.5 天（$\sqrt X$ 從 1.414 到 1.581）只增加約 13.9。訓練的**邊際效果遞減**（補充，非講義內容）。見 [[interpreting-transformed-models]]。

## 教學提示
- 先讓學生看 Fig 3.14a，問：「應該轉換 X 還是 Y？」答案的關鍵是「散布程度固定」。
- 再讓學生猜 $\sqrt X$ 還是 $\log X$ 比較好，兩者都屬於 Fig 3.13(a) 的建議。
- 強調步驟 5：轉換完不是結束，要重新診斷。
- 相關練習：[[choose-transformation-01]]

## 出處
- [[sources/lecture-05]] p.4–6
