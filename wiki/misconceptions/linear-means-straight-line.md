---
type: misconception
topic: [linear, model-building]
aliases: [Linear model means straight line, 線性就是直線, linear in parameters]
sources: ["[[sources/lecture-02]]"]
related: ["[[simple-linear-regression]]", "[[linear-model-01]]"]
status: draft
updated: 2026-11-24
---

# 誤解：「線性模型」就是 Y 和 X 畫出來是直線

## 錯誤的想法
「線性迴歸只能處理直線關係；只要 $Y$ 和 $X$ 的關係是曲線，就不能用線性模型。」

## 正確的觀念
- 模型叫「線性」，是因為平均函數**對參數 $\beta$ 是線性的**，不是對 $X$ 線性（[[sources/lecture-02]] p.4）。
- $Y = \beta_0 + \beta_1 e^X + \varepsilon$、多項式 $Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \beta_3 X^3 + \varepsilon$ 都是線性模型（[[sources/lecture-02]] p.4）。
- $Y = \beta_0 + X^{\beta_1} + \varepsilon$ 是非線性模型：參數出現在指數上（[[sources/lecture-02]] p.4）。
- 若 $Z = e^X$，$Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$ 和 $Y_i = \alpha_0 + \alpha_1 Z_i + \delta_i$ 都是線性模型（[[sources/lecture-02]] p.4）。

## 判斷方法
把每個參數當成未知數：如果平均函數是「參數 × 某個已知的 $X$ 函數」的相加，就是線性模型。

## 教學提示
- 給學生幾個式子，請他們只看「參數出現在哪裡」來判斷。
- 可以連到 [[steroid-age]]：曲線關係仍可能用線性模型（例如加入 $X^2$）來配適（補充，非講義內容）。
- 相關練習：[[linear-model-01]]

## 出處
- [[sources/lecture-02]] p.4
