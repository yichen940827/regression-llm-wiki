---
type: concept
topic: linear
aliases: [Scope of the model, Extrapolation, 模型適用範圍, 外插]
sources: ["[[sources/lecture-01]]", "[[sources/lecture-02]]", "[[sources/lecture-03]]"]
related: ["[[extrapolation-beyond-data]]", "[[regression-model]]", "[[steroid-age]]"]
status: draft
updated: 2026-11-24
---

# 模型適用範圍與外插 (Scope of the Model and Extrapolation)

> 迴歸方程式只在「看過的 $X$ 範圍」內可信；拿它預測範圍外的 $X$（外插）很危險。

## 定義
- 一般而言，迴歸方程式只在觀測資料所涵蓋的解釋變數範圍內有效，這個範圍稱為**模型的適用範圍 (scope of the model)**（[[sources/lecture-01]] p.9，講義標為 Important!!）。
- 使用 $X$ 範圍之外的值做預測，稱為**外插 (extrapolation)**，有其危險（[[sources/lecture-01]] p.9）。

## 為什麼危險
講義 Figure 2 的示意（[[sources/lecture-01]] p.9）：在 $x_1$ 到 $x_2$ 之間，真實曲線看起來近似直線，用直線配適沒問題；但超過 $x_2$ 之後，真實曲線轉向下降，直線卻繼續上升，預測值與真實值差距越來越大。

也就是說，我們在資料範圍內看不到真實關係在範圍外的樣子。

## 例子
- [[steroid-age]]：資料只有 8–25 歲的女性，不能用來推論 40 歲的類固醇濃度（補充，非講義內容）。
- **解讀截距也是一種外插**：$X = 0$ 不在資料範圍時，截距沒有實際意義，例如 [[height-weight]] 的截距 −11.66 磅（[[sources/lecture-02]] p.4, 10）。見 [[intercept-always-meaningful]]。
- [[toluca-company]]：斜率 3.57 只適用於資料中約 20 到 120 件的批量範圍（[[sources/lecture-02]] p.8）。
- **估計平均反應或預測新觀測時**：$X_h$ 不必是樣本中出現過的值，但若在觀測資料的範圍外，對 $Y$ 的敘述有風險、應避免（[[sources/lecture-03]] p.13；見 [[ci-mean-response]]、[[prediction-interval]]）。

## 常見誤解
- [[extrapolation-beyond-data]]
- [[intercept-always-meaningful]]

## 教學提示
- 學生常卡關：認為「模型配適得很好（例如 $R^2$ 很高）」就可以放心外插。要說明配適好只代表範圍內好。
- 建議順序：先畫只有 $x_1$ 到 $x_2$ 的資料與直線 → 問學生 $x_3$ 的預測是多少 → 再揭露整條真實曲線。
- 可以畫的圖：講義 Figure 2（虛線延伸的直線 vs. 下彎的真實曲線）。
- 相關練習：[[extrapolation-01]]

## 出處
- [[sources/lecture-01]] p.9
- [[sources/lecture-02]] p.4, 8, 10
- [[sources/lecture-03]] p.13
