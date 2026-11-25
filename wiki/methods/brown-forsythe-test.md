---
type: method
topic: [linear, advanced-linear]
aliases: [Brown-Forsythe test, Modified Levene test, 修正 Levene 檢定, Brown–Forsythe 檢定]
sources: ["[[sources/lecture-04]]"]
related: ["[[constant-error-variance]]", "[[breusch-pagan-test]]"]
status: draft
updated: 2026-11-24
---

# Brown–Forsythe 檢定（修正 Levene 檢定）(Brown–Forsythe Test)

> 把資料依 $X$ 分成兩組，比較兩組殘差「離中位數有多遠」；差很多就表示變異數不相同。

## 想法
和比較兩個母體變異數的兩樣本 F 檢定類似：依 $X$（或配適值）把資料分成兩組，比較兩組殘差的變異程度（[[sources/lecture-04]] p.18）。

## 假設
- 第 1 組：$X$ 最小的 $n_1$ 筆殘差；第 2 組：$X$ 最大的 $n_2$ 筆殘差，$n_1 + n_2 = n$。
- $H_0$：變異數相同；$H_a$：變異數不相同。

## 統計量
（[[sources/lecture-04]] p.18）
1. 各組殘差與**組中位數**的絕對離差：
   $$d_{i1} = \lvert e_{i1} - \tilde e_1 \rvert, \qquad d_{i2} = \lvert e_{i2} - \tilde e_2 \rvert$$
2. 兩樣本 t 統計量：
   $$t^*_{BF} = \frac{\bar d_1 - \bar d_2}{s \sqrt{\dfrac{1}{n_1} + \dfrac{1}{n_2}}}, \qquad s^2 = \frac{\sum (d_{i1} - \bar d_1)^2 + \sum (d_{i2} - \bar d_2)^2}{n - 2}$$
3. $t^*_{BF}$ 近似 $t_{n_1 + n_2 - 2}$，等價地 $t^{*2}_{BF}$ 近似 $F_{1,\,n_1 + n_2 - 2}$。
4. $\lvert t^*_{BF} \rvert$ 大 → 誤差變異數不相同。

## 特色
用殘差與組中位數的絕對差比較兩組，是**穩健**的檢定：不論誤差分配是什麼形狀都表現得不錯（[[sources/lecture-04]] p.19）。也因此是無母數的檢定，不需要常態假設（[[sources/lecture-04]] p.20）。

## 例子：Toluca
（[[sources/lecture-04]] p.18–19）$X$ 水準分布很平均，把 25 筆分成兩組：批量 20 到 70 的 13 筆、80 到 120 的 12 筆（α = 0.05，$t(0.975;\,23) = 2.069$）。

| 量 | 第 1 組 | 第 2 組 |
|---|---|---|
| 中位數 $\tilde e$ | −19.87596 | −2.68404 |
| $\bar d$ | 44.81507 | 28.45034 |
| $\sum (d - \bar d)^2$ | 12,566.61 | 9,610.287 |

$$s = \sqrt{\frac{12{,}566.61 + 9{,}610.287}{23}} = 31.05178, \qquad t^*_{BF} = \frac{44.81507 - 28.45034}{31.05178\sqrt{1/13 + 1/12}} = 1.31648$$

$t^{*2}_{BF} = 1.7331$；p 值 $= 2(1 - 0.8995) = 0.201$。$\lvert t^*_{BF} \rvert < 2.069$，沒有證據顯示變異數不相同。

> 註：講義 p.18 的計算式把 $\bar d_2$ 印成 28.40534，與上一行的 28.45034 不符；用 28.45034 才得到 1.31648，判斷為印刷錯誤（2026-11-24 經使用者確認）。

## 教學提示
- 為什麼用中位數而不是平均數？中位數不受極端值影響，讓檢定更穩健。
- 分組方式會影響結果：$X$ 分布不均時要注意兩組大小。
- 相關練習：[[diagnostic-tests-01]]

## 出處
- [[sources/lecture-04]] p.18–20
