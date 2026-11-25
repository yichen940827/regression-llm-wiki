---
type: concept
topic: linear
aliases: [Regression through the origin, No-intercept model, 過原點迴歸, 無截距模型, uncorrected sum of squares, 未修正平方和]
sources: ["[[sources/lecture-03]]"]
related: ["[[simple-linear-regression]]", "[[anova-decomposition]]", "[[r-squared-and-correlation]]", "[[general-linear-f-test]]"]
status: draft
updated: 2026-11-24
---

# 過原點迴歸 (Regression through the Origin)

> 拿掉截距、強迫迴歸線通過原點；估計、自由度與平方和都要跟著調整。

## 模型
（[[sources/lecture-03]] p.33；ALSM Section 4.4）

$$Y_i = \beta_1 X_i + \varepsilon_i$$

## 估計
（[[sources/lecture-03]] p.33）
- $b_1 = \dfrac{\sum X_i Y_i}{\sum X_i^2}$，$E(b_1) = \beta_1$，$\sqrt{Var(b_1)} = \dfrac{\sigma}{\sqrt{\sum X_i^2}}$。
- $\hat\sigma^2 = MSE = \dfrac{\sum (Y_i - \hat Y_i)^2}{n-1} = \dfrac{\sum Y_i^2 - b_1 \sum X_i Y_i}{n-1}$：只估計了一個參數，自由度是 $n-1$。

## 推論
常態誤差下（[[sources/lecture-03]] p.33–34）：
- $b_1 \sim N\left(\beta_1, \sigma^2/\sum X_i^2\right)$；$\dfrac{b_1 - \beta_1}{\sqrt{MSE/\sum X_i^2}} \sim t_{n-1}$。
- 檢定 $H_0: \beta_1 = 0$：$T = b_1 / \sqrt{MSE/\sum X_i^2}$，自由度 $n-1$。
- β₁ 的信賴區間：$b_1 \pm t(1-\alpha/2;\,n-1)\sqrt{MSE/\sum X_i^2}$。
- 平均反應的信賴區間：$\hat Y_h \pm t(1-\alpha/2;\,n-1)\sqrt{X_h^2 MSE / \sum X_i^2}$。
- 新觀測的預測區間：$\hat Y_h \pm t(1-\alpha/2;\,n-1)\sqrt{MSE\left(1 + X_h^2/\sum X_i^2\right)}$。

## 平方和
（[[sources/lecture-03]] p.34–35）
- 有截距時的分解 $SSTO = SSR + SSE$ 靠交叉項為 0；**沒有截距時交叉項一般不為 0**，這個分解不能用。
- 改用以 0 為基準的分解：$\sum Y_i^2 = \sum (Y_i - \hat Y_i)^2 + \sum \hat Y_i^2$（交叉項 $\sum \hat Y_i (Y_i - \hat Y_i) = 0$）。
- 重新定義：$SSTO = \sum Y_i^2$（**未修正**平方和，自由度 $n$）、$SSR = \sum \hat Y_i^2 = b_1^2 \sum X_i^2$；$SSE$ 不變、自由度 $n-1$。
- 殘差和 $\sum e_i$ 一般**不為 0**（例如 [[warehouse]] 的 $\sum e_i = 22.72$）。

## 使用時的注意
（[[sources/lecture-03]] p.35）
1. 無截距模型在 $X_h = 0$ 的平均反應信賴區間長度為 0，但預測區間長度不為 0。
2. 散布圖可以幫忙判斷要不要用無截距模型。
3. 有截距的模型中，若不拒絕 $H_0: \beta_0 = 0$，表示無截距模型可能更好。
4. 比較有截距與無截距模型時，**殘差均方 (MSE) 有用，R² 不適合**（兩者的 SSTO 定義不同）。

## 例子
- [[warehouse]]：$\hat Y = 4.685X$。
- [[cars-stopping-distance]]：無截距模型的 R² 比較高，但一般線性檢定顯示截距不能拿掉。

## 教學提示
- 先問學生：「什麼情況下 $X = 0$ 時 $Y$ 一定是 0？」（例如工作量 0 時變動成本 0）。
- 強調「R² 變大」在這裡是假象，用 cars 例子示範。

## 出處
- [[sources/lecture-03]] p.33–38
