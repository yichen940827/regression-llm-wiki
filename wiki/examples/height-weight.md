---
type: example
topic: linear
aliases: [Student height and weight, 學生身高與體重]
sources: ["[[sources/lecture-02]]"]
related: ["[[least-squares]]", "[[intercept-always-meaningful]]"]
status: draft
updated: 2026-11-24
---

# 學生身高與體重 (Student's Height vs. Weight)

> 10 位學生的手算例題；截距算出「身高 0 英尺、體重 −11.66 磅」，是截距沒有意義的經典例子。

## 資料摘要
10 位學生的身高 ($X$，英尺) 與體重 ($Y$，磅)（[[sources/lecture-02]] p.9–10）：

| 量 | 值 |
|---|---|
| $\sum X_i$ ／ $\bar X$ | 58.58 ／ 5.86 |
| $\sum Y_i$ ／ $\bar Y$ | 1525 ／ 152.5 |
| $\sum (X_i - \bar X)^2$ | 2.00 |
| $\sum (X_i - \bar X)(Y_i - \bar Y)$ | 56.04 |

## 最小平方估計
（[[sources/lecture-02]] p.10）

$$b_1 = \frac{56.04}{2.00} = 28.02, \qquad b_0 = \bar Y - b_1 \bar X = 152.5 - 28.02 \times 5.86 \approx -11.66$$

> ⚠️ 已處理：講義 p.10 印成 $152.5 - 20.01 \times 5.86$，與上一行 $b_1 = 28.02$ 不符；用 28.02 才得到講義的答案 −11.66，判斷 20.01 為印刷錯誤（2026-11-24 經使用者確認）。

配適線：平均體重 $\hat Y = -11.66 + 28.02 \times$ 身高。

## 解讀
（[[sources/lecture-02]] p.10）
- 身高越高，平均體重越重：身高每增加 1 英尺，平均體重估計增加 28.02 磅。
- 截距表示「身高 0 時平均體重 −11.66 磅」，完全不合理。$X = 0$ 遠在資料範圍外，截距沒有實際意義。見 [[intercept-always-meaningful]]。

## 教學提示
- 適合當第一個手算例題：數字小、步驟完整。
- 用 −11.66 磅引出「截距不一定有意義」，學生通常印象深刻。
- 相關練習：[[least-squares-01]]

## 出處
- [[sources/lecture-02]] p.9–10
