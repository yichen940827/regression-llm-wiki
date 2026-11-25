---
type: exercise
topic: [linear, model-building]
origin: supplementary
difficulty: 2
sources: ["[[sources/lecture-05]]"]
related: ["[[interpreting-transformed-models]]", "[[transformed-coefficient-original-scale]]", "[[plasma-levels]]"]
status: draft
updated: 2026-11-25
---

# 練習：解讀 log 轉換模型的係數

## 題目
（補充題）以下 log 都是自然對數，除非另外註明。

(a) 某公司的廣告費 $X$ 與銷售額 $Y$ 配適出 $\log Y = 3.2 + 0.8 \log X$。廣告費增加 10% 時，期望銷售額變化多少百分比？
(b) 某模型 $\log Y = 2 + 0.05X$。$X$ 增加 1 單位、增加 10 單位時，$Y$ 各乘以多少？
(c) Plasma 例題 $\hat Y' = 1.135 - 0.1023X$，其中 $Y' = \log_{10} Y$。年齡增加 1 歲，濃度變化多少百分比？
(d) 有同學說：「(c) 的意思是每多 1 歲，濃度降低 0.1023。」哪裡錯了？

> [!hint]- 提示
> log 尺度上「加 $a$」等於原尺度上「乘 $e^a$」（以 10 為底時是 $10^a$）。log–log 模型中，$X$ 乘以 $k$，$Y$ 乘以 $k^{\beta_1}$。

> [!solution]- 詳解
> **(a)** $\log X$ 增加 $\log 1.1$，$\log Y$ 增加 $0.8 \log 1.1$，所以 $Y$ 乘以 $1.1^{0.8} = 1.0792$，期望銷售額約**增加 7.9%**。（0.8 就是銷售對廣告的彈性。）
>
> **(b)** $X$ 加 1：$Y$ 乘以 $e^{0.05} = 1.0513$，約增加 5.1%（係數小時約等於 $100 \times 0.05\%$）。$X$ 加 10：乘以 $e^{0.5} = 1.6487$，增加約 64.9%，**不是** 50%，因為百分比會複利累積。
>
> **(c)** 以 10 為底：$Y$ 乘以 $10^{-0.1023} = 0.790$，每多 1 歲濃度約**下降 21%**。
>
> **(d)** 減少 0.1023 的是 $\log_{10} Y$，不是 $Y$。轉換後的係數要在轉換後的尺度上解讀；轉回原尺度是**乘法**（相對）變化。見 [[transformed-coefficient-original-scale]]。

## 考到的觀念
- [[interpreting-transformed-models]]
- [[transformed-coefficient-original-scale]]
