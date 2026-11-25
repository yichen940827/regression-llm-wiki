---
type: exercise
topic: [linear, model-building]
origin: supplementary
difficulty: 1
sources: ["[[sources/lecture-02]]"]
related: ["[[simple-linear-regression]]", "[[linear-means-straight-line]]"]
status: draft
updated: 2026-11-24
---

# 練習：線性模型還是非線性模型？

## 題目
（補充題）判斷下列模型對參數是線性還是非線性，並說明理由。

1. $Y = \beta_0 + \beta_1 \log X + \varepsilon$
2. $Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \varepsilon$
3. $Y = \beta_0 e^{\beta_1 X} + \varepsilon$
4. $Y = \beta_0 + \beta_1 \dfrac{1}{X} + \varepsilon$
5. $Y = \beta_0 + X^{\beta_1} + \varepsilon$

> [!hint]- 提示
> 只看參數 $\beta$ 出現在哪裡：如果每個參數都只是「乘上一個已知的 $X$ 函數」再相加，就是線性模型。

> [!solution]- 詳解
> | 題 | 判斷 | 理由 |
> |---|---|---|
> | 1 | 線性 | 令 $Z = \log X$，變成 $\beta_0 + \beta_1 Z$ |
> | 2 | 線性 | 多項式迴歸，每個參數都乘上已知的 $X$ 函數（[[sources/lecture-02]] p.4） |
> | 3 | 非線性 | $\beta_1$ 在指數裡，$\beta_0$ 和它相乘 |
> | 4 | 線性 | 令 $Z = 1/X$，變成 $\beta_0 + \beta_1 Z$ |
> | 5 | 非線性 | $\beta_1$ 在指數裡（講義 p.4 的例子） |
>
> 「線性」指的是對參數線性，不是 $Y$ 和 $X$ 畫出來是直線。

## 考到的觀念
- [[simple-linear-regression]]（為什麼叫線性）
- [[linear-means-straight-line]]
