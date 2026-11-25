---
type: method
topic: [linear, advanced-linear]
aliases: [Breusch-Pagan test, Cook-Weisberg test, Breusch–Pagan 檢定, 非常數變異數檢定, ncvTest]
sources: ["[[sources/lecture-04]]"]
related: ["[[constant-error-variance]]", "[[brown-forsythe-test]]"]
status: draft
updated: 2026-11-24
---

# Breusch–Pagan 檢定 (Breusch–Pagan Test)

> 把殘差平方對 $X$ 做迴歸：如果 $X$ 能解釋殘差平方的變化，變異數就不是常數。

## 前提
和 Brown–Forsythe（無母數）不同，Breusch–Pagan 假設誤差**常態**、平均 0、變異數不一定相同（[[sources/lecture-04]] p.20）。

## 模型與假設
假設誤差變異數隨 $X$ 增加或減少（[[sources/lecture-04]] p.20）：

$$\log \sigma_i^2 = \gamma_0 + \gamma_1 X_i$$

- $H_0: \gamma_1 = 0$（變異數相同）
- $H_a: \gamma_1 \neq 0$（變異數不相同）

## 統計量
（[[sources/lecture-04]] p.20–21）
1. 把殘差平方 $e_i^2$ 對 $X_i$ 做一般迴歸，得到迴歸平方和 $SSR^*$。
2. 統計量：
   $$X^2_{BP} = \frac{SSR^*/2}{(SSE/n)^2}$$
   其中 $SSE$ 來自原本 $Y$ 對 $X$ 的迴歸。
3. $X^2_{BP}$ 近似 $\chi^2_1$；值大 → 變異數不是常數。

這個統計量也由 Cook 與 Weisberg 獨立提出，所以也稱為 **Cook–Weisberg 檢定**（[[sources/lecture-04]] p.21；ALSM p.119）。

## 例子：Toluca
（[[sources/lecture-04]] p.21）

$$SSE = 54{,}825, \quad SSR^* = 7{,}896{,}142, \quad X^2_{BP} = \frac{7{,}896{,}142 / 2}{(54{,}825 / 25)^2} = 0.8209$$

$\chi^2_1$ 在 0.8209 左邊的面積為 0.635，p 值 $= 1 - 0.635 = 0.365$：沒有證據顯示變異數不相同。

## 教學提示
- 直覺：如果變異數隨 $X$ 變化，殘差平方（變異的「樣本」）就會和 $X$ 有關。
- 和 Brown–Forsythe 對照：一個要常態、一個不用；一個要分組、一個不用。
- 相關練習：[[diagnostic-tests-01]]

## 出處
- [[sources/lecture-04]] p.20–21
