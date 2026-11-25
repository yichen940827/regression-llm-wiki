# 迴歸分析講義知識庫 — Schema

這是一個依照 Karpathy「LLM Wiki」模式建立的迴歸分析知識庫。
你（Claude）是 wiki 的維護者：負責閱讀講義、撰寫與更新頁面、維持交叉連結與一致性。
使用者負責提供講義、引導重點、提問，並在 Obsidian 中瀏覽結果。

## 目標與讀者

- 用途：使用者**自己複習**，同時作為**教學素材**（之後會從 wiki 產生 html 簡報）。
- 課程：114-1「迴歸分析 I」（商學院）。主教科書：Kutner et al.《Applied Linear Statistical Models》（ALSM）。
- 課程程度：**大學部進階／應用統計**。
  - 推導以**矩陣形式**為主（例如 $\hat{\boldsymbol\beta} = (\mathbf{X}^\top\mathbf{X})^{-1}\mathbf{X}^\top\mathbf{y}$），簡單迴歸可以同時列出純量形式幫助理解。
  - 推導要完整寫出每一步，但不需要研究所等級的嚴格證明（例如漸近性質只講結論與直覺）。
- 主題範圍（`topic` 欄位的可用值）：
  - `linear`：簡單／多元線性迴歸（OLS、推論、R²、假設與診斷）
  - `model-building`：模型選擇與變數處理（類別變數、交互作用、變數轉換、逐步迴歸、AIC/BIC）
  - `advanced-linear`：進階線性模型（WLS、robust SE、Ridge/Lasso、ANOVA）
  - `glm`：GLM（Logistic、Poisson 迴歸等）
- 頁面要寫得完整、適合教學：先給直覺，再給正式定義與推導，接著是例子與常見誤解，最後是教學提示。
- 不放程式碼（R / Python 皆不放）。例題只呈現數字、表格與解讀。

## 目錄結構

```
LLM Wiki Notes/
├── CLAUDE.md            # 本檔：schema、慣例、工作流程
├── raw/                 # 原始講義 PDF（唯讀，永遠不修改、不改名、不刪除）
├── wiki/                # 由 Claude 撰寫與維護
│   ├── index.md         # 內容目錄（每次 ingest 都要更新）
│   ├── log.md           # 時間軸，只能附加（append-only）
│   ├── notation.md      # 符號對照表
│   ├── roadmap.md       # 學習路徑：主題順序與先備知識
│   ├── sources/         # 每份講義一頁摘要
│   ├── concepts/        # 概念：OLS、R²、多重共線性、交互作用…
│   ├── assumptions/     # 模型假設：違反的後果、診斷方式、對策
│   ├── derivations/     # 推導與定理：OLS 估計式、Gauss–Markov…
│   ├── methods/         # 檢定與診斷：t / F 檢定、VIF、殘差圖、Cook's distance…
│   ├── examples/        # 例題與資料集（每個資料集一頁）
│   ├── exercises/       # 練習題與詳解
│   └── misconceptions/  # 常見誤解與考點
├── outputs/
│   ├── slides/          # html 簡報，一個主題一份
│   └── handouts/        # html 圖文講義，與簡報同主題、同來源
└── assets/              # 簡報用圖片（目前不處理）
```

規則：
- `raw/` 只讀。所有知識都整理到 `wiki/`。
- `raw/` 的講義依講次命名：`lecture-NN.pdf`，例如 `lecture-03.pdf`。使用者給的檔案在別處（例如 Downloads）時，複製一份到 `raw/` 並用這個名稱；`raw/` 裡已經存在的檔案**不改名**。
- 講義只採用**印刷內容**；PDF 上的手寫筆記、螢光筆、圈選一律忽略，不當作來源。
- 只處理使用者明確交給 Claude 的講義。講義中提到的其他資料（例如 Supplementary 講義）不需要追蹤，也不要列入「待建頁面」。
- 新增頁面類型前先問使用者，同意後再更新本檔的目錄結構。
- `outputs/` 的內容來自 wiki，不能反過來把 outputs 當成來源。

## 寫作慣例

### 語言與命名
- 內文用**繁體中文**；術語第一次出現時附英文，例如「異質變異 (heteroscedasticity)」。
- 檔名用英文 kebab-case，例如 `concepts/multicollinearity.md`、`methods/f-test.md`。
- 頁面標題（H1）用中文，括號附英文：`# 多重共線性 (Multicollinearity)`。

### 連結（Obsidian）
- 頁面之間用 `[[wikilink]]`，例如 `[[multicollinearity|多重共線性]]`。
- 每頁至少連出一個相關頁面，也要確保有其他頁面連入（避免孤兒頁）。
- 提到一個還沒有獨立頁面的重要概念時，照樣加上連結，並記到 `index.md` 的「待建頁面」區。

### 數學式
- 行內用 `$...$`，獨立式子用 `$$...$$`（Obsidian 的 MathJax）。
- 矩陣與向量用粗體：`\mathbf{X}`、`\mathbf{y}`、`\boldsymbol{\beta}`；估計值加帽子：`\hat{\beta}`；轉置用 `^\top`。
- 符號一律以 `notation.md` 為準。標準符號以**講義**為主；與 ALSM 不同時，在 `notation.md` 記下 ALSM 的寫法。wiki 內文統一用標準符號。
- PDF 抽取出的公式只要有疑慮，就標成 `⚠️ 待確認`，並在 ingest 討論時提出，**不可自行猜測補完**。

### Frontmatter
每個 wiki 頁面（index、log 除外）開頭都要有：

```yaml
---
type: concept | assumption | derivation | method | example | exercise | source | misconception
topic: linear | model-building | advanced-linear | glm
aliases: [英文名稱, 其他常見中文譯名]
sources: ["[[sources/lecture-03]]"]
related: ["[[ols]]", "[[r-squared]]"]
status: draft | reviewed
updated: YYYY-MM-DD
---
```

- `topic` 可以填多個（例如 `[linear, model-building]`）。
- `status: draft` 是 Claude 剛寫好的狀態；使用者確認後才改成 `reviewed`。

### 頁面範本（概念／方法／假設類）

```markdown
# 名稱 (English Name)

> 一句話直覺說明。

## 定義
## 為什麼重要 / 何時使用
## 推導或公式        ← 推導很長時另開 derivations/ 頁面並連過去
## 如何判斷 / 診斷
## 例子              ← 連到 examples/
## 常見誤解          ← 連到 misconceptions/
## 教學提示
- 學生常卡關的地方
- 建議的講解順序（先講什麼、再講什麼）
- 可以畫的圖或示意（之後做簡報時用）
- 相關練習題          ← 連到 exercises/
## 出處              ← 每條主要論點都標明出自哪份講義、哪一頁
```

類型不適用的段落可以省略，但「教學提示」和「出處」一定要有（推導、例題類頁面的教學提示可以簡短）。

### 練習題（exercises/）
- 一題一頁，檔名 `exercises/<主題>-<編號>.md`，例如 `exercises/multicollinearity-01.md`。
- frontmatter 多加兩個欄位：
  - `origin: lecture | supplementary`（講義原題或 Claude 補充題）
  - `difficulty: 1 | 2 | 3`（基礎／中等／進階）
- 頁面結構：題目 → 提示（用 Obsidian 折疊區塊 `> [!hint]-`）→ 詳解（用 `> [!solution]-` 折疊）→ 考到的觀念（連回概念頁）。
- **補充題的規則**：Claude 出的題目一律標 `origin: supplementary`，題目最前面加上「（補充題）」，且要先在對話中提出、經使用者同意後才建頁。

### 來源摘要頁（sources/）
- 檔名對應 raw 檔，例如 `raw/lecture-03.pdf` → `wiki/sources/lecture-03.md`。
- H1 標題要寫出該講的主題，不能只有編號，例如 `# Lecture 03：簡單線性迴歸 (Simple Linear Regression)`。
- 內容：主題、各頁重點、這份講義使用的符號（與 `notation.md` 的差異）、講義中的題目清單、待確認事項、這次 ingest 新建或更新的頁面清單。

### 學習路徑（roadmap.md）
- 依 `topic` 分區，列出建議的學習順序，每個主題標出先備知識（「學 X 之前要先懂 Y」）。
- 每次 ingest 後檢查是否需要更新；新頁面要放進正確的位置。
- 產生簡報時用它決定順序與先備知識的提醒。

### 引用
- wiki 內文引用講義時，標成 `（[[sources/lecture-03]] p.12）`。
- 推導、定理、數字都必須標出處。真的找不到出處時，標成 `（補充，非講義內容）`。

## 工作流程

### Ingest（一次一份，先討論）
1. 使用者把講義放進 `raw/`，並指定要處理哪一份。
2. Claude 讀完整份講義。
3. **先在對話中討論，暫時不寫檔**：
   - 這份講義的主要重點（條列）
   - 準備新建／更新哪些頁面
   - 與現有 wiki 的矛盾或符號差異
   - 講義中的題目，以及建議的補充題（如果有）
   - 標記為 `⚠️ 待確認` 的公式或內容
4. 使用者確認或調整後，才開始寫：
   - 新建 `sources/<name>.md`
   - 新建或更新相關的 concept / method / derivation / … 頁面
   - 新建使用者同意的練習題
   - 更新 `notation.md`、`roadmap.md`、`index.md`
   - 在 `log.md` 附加一筆紀錄
5. 完成後回報：改了哪些頁面、還有哪些待確認事項。

### Query（提問）
1. 先讀 `index.md` 找出相關頁面，再深入閱讀那些頁面。
2. 以 wiki 內容為主回答並附上頁面連結；wiki 沒涵蓋的部分要明說。
3. 回答有保存價值時（比較、整理、新的連結），**先問使用者**要不要存成 wiki 頁面，同意後才建頁，並更新 index 和 log。

### Lint（健康檢查）
使用者要求時執行，先回報問題清單，使用者同意後才修改。檢查項目：
- 頁面之間的矛盾、已被新講義取代的舊說法
- 孤兒頁（沒有任何頁面連入）、斷掉的 wikilink
- 被多次提到卻沒有獨立頁面的概念
- 缺少的交叉連結
- **符號跟 `notation.md` 不一致**
- **推導、定理或數字沒有標出處**
- 一直沒處理的 `⚠️ 待確認`
- frontmatter 缺少欄位或格式錯誤
- 概念頁缺少「教學提示」，或沒有對應的練習題
- `roadmap.md` 沒涵蓋到的頁面

### 產生簡報
- 一個主題一份，放在 `outputs/slides/<主題>.html`，例如 `outputs/slides/multicollinearity.html`。
- **簡報第一頁一定要有清楚的主題標題**（例如「簡單線性迴歸 Simple Linear Regression」），不能只寫講次或檔名。
- 一個主題的簡報可以整合多份講義的內容（這是 wiki 的優勢）。
- 內容來自該主題的概念頁、推導、例題、練習題與教學提示；順序參考 `roadmap.md`。
- **產生流程（graph）**：簡報一律依下列節點產生，前一個節點通過才進入下一個。中間檔案放在 `outputs/slides/plans/<主題>/`（Markdown，方便在 Obsidian 閱讀與修改）。
  0. **素材盤點**：讀 `index.md` 與 `roadmap.md`，從該主題的核心概念頁出發，沿 `[[連結]]` 往外一層，收進例題、練習、誤解、推導；roadmap 上的先備知識只列為提醒。
     - 檢查：核心概念頁都在清單中；每個概念至少有一個例題或練習（沒有就標「缺練習」）；有未處理的 `⚠️ 待確認` 就停下來先回 wiki 處理；`draft` 頁面可以用，但要標示。
     - 素材清單寫在 `outline.md` 開頭，和大綱一起給使用者確認。
  1. **大綱** → `outline.md`：每章寫「目標、對應 wiki 頁面、預計頁數、例題／練習、誤解、先備提醒」。
     - 檢查：順序不違反 roadmap 的先備關係；每章都對應到 wiki 頁面；素材都有用到或註明不用；總頁數 15–30 頁；有封面、路線頁、回顧頁，每 2–3 章至少一個練習。
     - **使用者確認整份大綱**後才往下；要修改就改大綱並重跑檢查。
  2. **逐頁內容** → `spec.md`：每頁寫「類型、標題、一句話訊息、內容、公式、圖、卡片、出處（wiki 頁面＋講義頁碼）、講者備註、是否補充」。
     - 檢查：每個論點、公式、數字都能追溯到 wiki 與講義頁碼；符號與 `notation.md` 一致；一頁一個訊息；每頁內文 ≤ 80 字、條列 ≤ 5 點；補充與示意圖有標示；頁數與大綱相差 ±2 頁內。
     - **使用者確認整份逐頁內容**後才往下。只改句子、例子、圖 → 退回本節點；新增、刪除或調換章 → 退回節點 1。
  3. **產生投影片** → `outputs/slides/<主題>.html`：照 `spec.md` 套用 theme，不在這一步新增內容。
     - 檢查（在瀏覽器面板）：沒有 JavaScript 錯誤；圖片與公式都正常顯示；沒有文字溢出；頁數＝spec 頁數；第一頁有主題標題；逐頁截圖確認版面。
     - **使用者在面板檢閱**，回覆時用標籤指出問題種類：`[樣式]` → 退回節點 3、`[內容]` → 節點 2、`[結構]` → 節點 1。
  - **自動檢查不通過**：先自行修正並重跑檢查，最多 2 次；仍不通過就把問題列給使用者。每次檢查結果附日期記在 `checks.md`。
  - **wiki 是唯一的真相來源**：做簡報時發現 wiki 有錯或缺，先回 wiki 修（照 Ingest／Lint 規則），再從節點 0 重跑，不在簡報裡直接改。
- **共用樣式與程式**：每份簡報都引用 `outputs/slides/theme/slides.css` 與 `theme/slides.js`，不在個別簡報裡另寫一套樣式。所有元件的示範見 `outputs/slides/style-guide.html`；調整風格時改 theme 檔並同步更新 style-guide。
- **風格**：筆記本風格，專業俐落。黑灰白為基調，桃紅 `#FF2E7E` 只當撞色亮點（每頁 1–3 處：標題下的螢光筆線、便利貼、大數字）。紙上的小字用 `#D6005C`。
  - 內容頁：米白方格紙（`--paper #FBF9F4`），左側有活頁孔；卡片、表格、統計圖都放在白紙上，避免方格干擾。
  - 封面、章節頁：黑色筆記本封面，左側活頁孔、右側桃紅鬆緊帶。章節頁的編號是**實心桃紅**數字，**不放 emoji**。
  - 字型：標題 Noto Serif TC，內文 Inter + Noto Sans TC，小標與手寫批註用 Caveat（`.kicker`、`.hand`）。
  - 卡片三種語氣：`.card`（白紙卡，一般資訊）、`.card.key`（桃紅便利貼＋紙膠帶，重點／直覺／提示）、`.card.dark`（黑卡，常見誤解／警告）。
  - emoji 只用在**卡片小標題**（💡 直覺、⚠️ 誤解、🤔 想一想、✏️ 練習、📌 重點、🔍 解讀）；頁面大標題與章節頁都不加。
- **插圖**：來自 `assets/`，一律寫成 `<figure class="art"><img src="../../assets/<檔名>.avif" alt="..."></figure>`（路徑從 `outputs/slides/` 出發）。保留**原色**，`.art` 會加白邊、紙膠帶與微微傾斜，像貼在筆記本上的照片；不要傾斜就加 `.flat`。不修改原圖檔。主要用在封面與章節頁。
- **在 Claude 介面預覽**：app 的預覽程序無法讀取桌面資料夾，所以改完簡報或講義後要把 `outputs/` 與 `assets/` 同步到 scratchpad 的 `site/` 資料夾，用 `.claude/launch.json` 的 `slides` 設定架伺服器，並在瀏覽器面板開啟（換掉 css 後要強制重新載入，避免快取）。
- **版面與功能**：16:9（1280×720）自動縮放；← → 換頁、N 講者備註、F 全螢幕；頁碼由 slides.js 自動加上。
- 講者備註（`<div class="notes">`）取自 wiki 頁面的「教學提示」。
- 公式用 MathJax；統計圖用內嵌 SVG，配色用 `SK.C`（資料點 Ink、主要線條桃紅、次要線條灰），示意圖要在圖說標明「示意圖」。
- 練習題答案放在 `<details>` 折疊區塊；補充內容（非講義）標上 `<span class="badge">補充</span>`。
- 每頁底部用 `.src` 標出處（講義頁碼）。
- 簡報需要網路（Google Fonts、MathJax）；搬移時要連同整個專案資料夾（含 `assets/`）一起搬。
- 產生簡報後在 `log.md` 記一筆 `slides`。

### 產生圖文講義
- 與簡報同主題、同檔名，放在 `outputs/handouts/<主題>.html`，例如 `outputs/handouts/regression-introduction.html`。可以在簡報之後產生，也可以單獨產生；內容一樣來自 wiki，不從簡報轉抄。
- **形式**：可捲動閱讀的單頁文件（不是一頁一頁翻），開頭是黑色封面（主題標題＋英文副標＋講次與課本章節）與可點擊的目錄，結尾是「重點回顧」。
- **寫法**：簡報上的條列改寫成完整句子，適合自己讀、也適合發給學生；文字與統計圖左右並排（`.split`），窄螢幕自動改成單欄。
- **不放講者備註**（教學提示留在 wiki 與簡報）。「先猜再揭曉」的答案與練習題答案放在 `<details>` 折疊區塊。
- **共用樣式**：引用 `outputs/handouts/theme/handout.css`（筆記本風格，配色與簡報相同）；統計圖用 `<script src="../slides/theme/slides.js"></script>` 的 `SK` 繪圖工具，與簡報的圖一致。SVG 用 `viewBox` 讓圖能縮放。
- **章節標題**：大號實心桃紅編號＋明體標題＋ Caveat 英文副標，旁邊貼一張 `assets/` 插圖（`<figure class="art">`，原色）；章節標題不放 emoji，emoji 只用在卡片小標題。
- 卡片、表格、補充標示、示意圖標示、出處（每段後用 `.src` 標講義頁碼）都沿用簡報的規則。
- 插圖路徑從 `outputs/handouts/` 出發：`../../assets/<檔名>.avif`。
- 產生講義後在 `log.md` 記一筆 `slides`。

## index.md 與 log.md

- `index.md`：依頁面類型分區，每頁一行：`- [[path|標題]] — 一句話摘要`。最後一區是「待建頁面」。
- `log.md`：只能附加，每筆的格式固定：

  ```
  ## [YYYY-MM-DD] ingest | lecture-03
  - 新建：…
  - 更新：…
  - 待確認：…
  ```

  類型限 `ingest`、`query`、`lint`、`slides`、`schema`（修改本檔時記錄）。

## 修改本檔

本 schema 與使用者共同演進。發現慣例不夠用時，先提出修改建議，使用者同意後再改，並在 `log.md` 記一筆 `schema`。
