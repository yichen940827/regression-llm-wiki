---
type: concept
topic: linear
aliases: [Functional relation, Statistical relation, 函數關係, 統計關係]
sources: ["[[sources/lecture-01]]"]
related: ["[[regression-function]]", "[[regression-model]]", "[[steroid-age]]"]
status: draft
updated: 2026-11-23
---

# 函數關係與統計關係 (Functional vs. Statistical Relation)

> 函數關係：知道 $X$ 就能精確算出 $Y$。統計關係：知道 $X$ 只能知道 $Y$ 的「趨勢」，實際值還會在趨勢附近散布。

## 定義

**函數關係 (functional relation)**（[[sources/lecture-01]] p.3）

$$Y = f(X)$$

$Y$ 的值可以由 $X$ 精確算出，所有點完全落在曲線上（完全相依）。

**統計關係 (statistical relation)**（[[sources/lecture-01]] p.4）

$$Y = f(X) + \varepsilon$$

- $f(X)$：**趨勢**（系統性的相依），是一個函數形式，可以是線性但不一定。
- $\varepsilon$：**散布**（隨機變異），也就是觀測值偏離函數形式的部分。誤差的性質非常重要，後面的課程會反覆用到。

實際觀測到的資料，變數之間的關係都是統計關係，不是函數關係（[[sources/lecture-01]] p.4）。

## 例子

函數關係（[[sources/lecture-01]] p.3–4）：
- 單價 \$2 的產品，銷售額 $Y$ 與銷售量 $X$：$Y = 2X$
- 攝氏換華氏：$°F = \tfrac{9}{5}°C + 32$
- 圓周長 $= \pi \times$ 直徑
- 波以耳定律：$P = \varepsilon / V$（$\varepsilon$ 為各種氣體的常數）
- 虎克定律、歐姆定律 $I = V/r$

統計關係（[[sources/lecture-01]] p.4–5）：
- 10 位員工的期中績效評估 ($X$) 與年終評估 ($Y$)：期中越高，年終也傾向越高，但點沒有落在同一條線上（ALSM Figure 1.2）。
- [[steroid-age]]：年齡與血漿類固醇濃度，關係是曲線而非直線。
- 其他：大學入學成績與 GPA、飲酒量與血液酒精濃度、車速與油耗、肺活量與吸菸包年數。

> 注意：講義在波以耳定律中用 $\varepsilon$ 表示氣體常數，這跟誤差項 $\varepsilon$ 是不同的東西。

## 為什麼重要
迴歸分析處理的就是統計關係：用 $f(X)$ 描述趨勢，用 $\varepsilon$ 描述散布。這個拆解方式是 [[regression-function]] 和 [[regression-model]] 的基礎。

## 教學提示
- 學生常卡關：以為「點沒落在線上」代表模型錯了。要強調散布本來就是統計關係的一部分。
- 建議順序：先舉函數關係（攝氏換華氏）→ 再給一張散布圖問「能不能寫成 $Y = f(X)$」→ 引出 $Y = f(X) + \varepsilon$。
- 可以畫的圖：同一組 $X$ 下，函數關係（點全在線上）和統計關係（點散在線的兩側）並排比較。
- 相關練習：[[functional-vs-statistical-01]]

## 出處
- [[sources/lecture-01]] p.3–5
