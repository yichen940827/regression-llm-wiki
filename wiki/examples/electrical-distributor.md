---
type: example
topic: linear
aliases: [Electrical distributor, 電器經銷商, bids and hours, 備標時數]
sources: ["[[sources/lecture-02]]"]
related: ["[[simple-linear-regression]]", "[[intercept-always-meaningful]]"]
status: draft
updated: 2026-11-24
---

# 電器經銷商：備標件數與工時 (Electrical Distributor)

> 用一個「已知」的迴歸模型，練習迴歸函數、誤差項和參數的解讀。

## 情境
一位顧問研究營造承包商一週內申請照明設備的**標案件數** ($X$) 與**準備標案所需工時** ($Y$) 的關係（[[sources/lecture-02]] p.3；ALSM Figure 1.6、1.7）。

## 模型
- 迴歸模型：$Y_i = 9.5 + 2.1 X_i + \varepsilon_i$
- 迴歸函數：$E(Y \mid X) = 9.5 + 2.1 X$

## 某一週的觀測
第 $i$ 週準備了 $X_i = 45$ 件標案，實際花了 $Y_i = 108$ 小時（[[sources/lecture-02]] p.3）：

$$E(Y_i \mid X_i = 45) = 9.5 + 2.1(45) = 104$$
$$\varepsilon_i = Y_i - E(Y_i \mid X_i = 45) = 108 - 104 = 4$$

誤差項就是 $Y_i$ 偏離它的平均 $E(Y_i \mid X_i)$ 的量。

## 參數解讀
（[[sources/lecture-02]] p.5）
- **斜率 2.1**：一週多準備 1 件標案，所需工時的**平均**增加 2.1 小時。
- **截距 9.5**：迴歸函數在 $X = 0$ 的值。模型只適用於每週 20 到 80 件的範圍，所以 9.5 沒有獨立的意義。見 [[intercept-always-meaningful]]。

## 教學提示
- 這裡參數是「已知」的，是理解概念用的假想情境；實務上參數要從資料估計（見 [[toluca-company]]）。
- 可以讓學生自己算 $X = 30$ 時的平均工時，再給一個觀測值算誤差。

## 出處
- [[sources/lecture-02]] p.3, 5
