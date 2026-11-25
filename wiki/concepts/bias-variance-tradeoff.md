---
type: concept
topic: [linear, model-building]
aliases: [Bias-variance tradeoff, 偏誤–變異取捨, bias, variance, overfitting, underfitting, 過度配適, 配適不足]
sources: ["[[sources/lecture-01]]"]
related: ["[[regression-model]]", "[[bias-variance-01]]"]
status: draft
updated: 2026-11-23
---

# 偏誤–變異取捨 (Bias–Variance Tradeoff)

> 模型太簡單會「瞄不準」（偏誤大），模型太複雜會「手不穩」（變異大）；最好的模型在兩者之間取得平衡。

## 定義
（[[sources/lecture-01]] p.9）
- **偏誤 (bias，準確度)**：模型的預測（或估計）與我們想預測的正確值之間的差。
- **變異造成的誤差 (variance，精確度)**：對給定的資料點，模型預測（或估計）的變動程度。

## 靶心圖
講義用四個靶心圖說明（[[sources/lecture-01]] p.9）：

| 靶 | 落點的樣子 | 偏誤 | 變異 |
|---|---|---|---|
| (a) | 分散，而且整體偏離靶心 | 高 | 高 |
| (b) | 分散，但圍繞著靶心 | 低 | 高 |
| (c) | 集中，但集中在偏離靶心的位置 | 高 | 低 |
| (d) | 集中在靶心 | 低 | 低 |

練習：[[bias-variance-01]]

## 取捨
（[[sources/lecture-01]] p.9–10）
1. 偏誤和變異之間常常有取捨。
2. 模型太**簡單**、參數很少：偏誤可能很大（但變異小），稱為**配適不足 (underfitting)**。
3. 模型太**複雜**、參數很多：變異可能很大（但偏誤較小），稱為**過度配適 (overfitting)**。
4. 總誤差隨模型複雜度先降後升；最佳的模型複雜度落在兩者之間。

## 公式（補充，非講義內容）
講義圖中的總誤差由 Bias² 和 Variance 組成。在平方誤差下，對新觀測值的預測誤差可以完整分解為：

$$E\big[(Y - \hat{f}(x))^2\big] = \big[\text{Bias}(\hat{f}(x))\big]^2 + \text{Var}(\hat{f}(x)) + \sigma^2$$

其中 $\sigma^2 = \text{Var}(\varepsilon)$ 是**不可約誤差**：再好的模型也消除不了。

## 教學提示
- 學生常卡關：把「偏誤」和「變異」想成資料本身的性質；要強調它們描述的是**估計方法**重複使用時的表現（同一套方法用在不同樣本上）。
- 學生常漏掉不可約誤差 $\sigma^2$，誤以為模型夠好總誤差就能降到 0。
- 建議順序：靶心圖（直覺）→ underfitting／overfitting 的圖 → 總誤差 U 形曲線。
- 可以畫的圖：講義 p.10 的 U 形曲線（Bias² 遞減、Variance 遞增、總誤差先降後升）。
- 相關練習：[[bias-variance-01]]

## 出處
- [[sources/lecture-01]] p.9–10
