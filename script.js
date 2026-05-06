// ============================================================
//  SHOES DB — All Sports Data
// ============================================================

// チャートラベルはスポーツごとに定義
const chartConfig = {
    soccer:     { labels: ["スピード\n(軽量性)", "コントロール\n(グリップ)", "タッチ\n(フィット)", "耐久性", "コスパ"] },
    basketball: { labels: ["クッション性", "グリップ\n(トラクション)", "サポート\n(足首)", "軽量性", "コスパ"] },
    volleyball: { labels: ["ジャンプ\n(反発性)", "グリップ", "クッション性", "安定性", "コスパ"] },
    tennis:     { labels: ["スピード\n(軽量性)", "安定性\n(サポート)", "グリップ", "クッション性", "コスパ"] },
    badminton:  { labels: ["軽量性", "フットワーク\n(反応性)", "グリップ", "クッション性", "コスパ"] },
};

const sportMeta = {
    soccer:     { label: "サッカー", sub: "Soccer Spikes", heroClass: "soccer", imgDir: "image/" },
    basketball: { label: "バスケットボール", sub: "Basketball Shoes", heroClass: "basketball", imgDir: "image/basketball/" },
    volleyball: { label: "バレーボール", sub: "Volleyball Shoes", heroClass: "volleyball", imgDir: "image/volleyball/" },
    tennis:     { label: "テニス", sub: "Tennis Shoes", heroClass: "tennis", imgDir: "image/tennis/" },
    badminton:  { label: "バドミントン", sub: "Badminton Shoes", heroClass: "badminton", imgDir: "image/badminton/" },
};

const sportBrands = {
    soccer:     ["Mizuno", "Asics", "Adidas", "Nike", "Puma"],
    basketball: ["Nike", "Adidas", "UnderArmour", "Asics", "NewBalance"],
    volleyball: ["Asics", "Mizuno", "Nike", "Adidas", "Yonex"],
    tennis:     ["Asics", "Yonex", "Wilson", "Babolat", "Mizuno"],
    badminton:  ["Yonex", "Mizuno", "Asics", "Victor", "Li-Ning"],
};

// ブランドロゴ画像マップ（なければテキスト表示）
const brandLogoMap = {
    Mizuno: "image/mizuno_logo.png",
    Asics: "image/asics_logo.png",
    Adidas: "image/adidas_logo.png",
    Nike: "image/nike_logo.png",
    Puma: "image/puma_logo.png",
    UnderArmour: null,
    NewBalance: null,
    Yonex: null,
    Wilson: null,
    Babolat: null,
    Victor: null,
    "Li-Ning": null,
};

// ============================================================
//  LINEUP MAP (サッカー専用 — グレード違いを1つにまとめる)
// ============================================================
const lineupMap = {
    // Mizuno
    'm_neo3_elite':  'モナルシーダ NEO III',
    'm_neo3_pro':    'モナルシーダ NEO III',
    'm_neo3_select': 'モナルシーダ NEO III',
    'm_sala_japan':  'モレリア SALA',
    'm_sala_elite':  'モレリア SALA',
    'm_sala_pro':    'モレリア SALA',
    // Asics DS LIGHT
    'dsl_pro':  'DS LIGHT',
    'dsl_adv':  'DS LIGHT',
    'dsl_club': 'DS LIGHT',
    // Adidas
    'pred_elite':  'プレデター',
    'pred_pro':    'プレデター',
    'pred_league': 'プレデター',
    'copa_elite':  'コパアイコン2',
    'copa_pro':    'コパアイコン2',
    'copa_league': 'コパアイコン2',
    'f50_elite':   'F50',
    'f50_pro':     'F50',
    'f50_league':  'F50',
    // Nike
    'vapor_elite':     'マーキュリアル ヴェイパー',
    'vapor_pro':       'マーキュリアル ヴェイパー',
    'vapor_academy':   'マーキュリアル ヴェイパー',
    'phantom_elite':   'ファントム',
    'phantom_pro':     'ファントム',
    'phantom_academy': 'ファントム',
    'tiempo_elite':    'ティエンポ',
    'tiempo_pro':      'ティエンポ',
    'tiempo_academy':  'ティエンポ',
    // Puma
    'future_ultimate': 'フューチャー',
    'future_pro':      'フューチャー',
    'future_match':    'フューチャー',
    'ultra_ultimate':  'ウルトラ',
    'ultra_pro':       'ウルトラ',
    'ultra_match':     'ウルトラ'
};

function getLineup(shoe) {
    return lineupMap[shoe.id] || shoe.name;
}

function getGrade(shoe) {
    const lineup = lineupMap[shoe.id];
    if (!lineup) return null;
    return shoe.name.replace(lineup, '').replace(/\s*IN\s*$/, '').trim();
}

// ============================================================
//  SHOE DATA
// ============================================================
const shoeData = {

    // ==================== SOCCER ====================
    soccer: {
        Mizuno: {
            "モレリア (MORELIA)": [
                {
                    id: "m2j", name: "モレリア II JAPAN", price: 24200, img: "m2_j_white.jpg",
                    colors: [{img: "m2_j_white.jpg", color: "#fff"}, {img: "m2_j_gold.jpg", color: "#c8a400"}, {img: "m2_j_green.jpg", color: "#2d6a2d"}, {img: "m2_j_red_ag.jpg", color: "#c00"}],
                    eval: [3, 2, 5, 4, 2],
                    desc: "カンガルーレザーアッパー前足部の裏材に高強度の伸び止め材をアップデートし革の伸びすぎを抑制。履き口裏材にスウェード素材を採用することで柔らかな足入れと素足感覚を追求。アウトソール構造も見直し前作比約10gの軽量化を達成。Engineered Fit Lastによる高フィット感で、シューズと足のズレを防ぎ動きの中での反応性を高めます。",
                    specs: { weight: "約215g (27.0cm)", material: "ウォッシャブルカンガルーレザー", ground: "土・人工芝・天然芝" },
                    tags: ["MF", "DF", "フィッティング重視", "ロングセラー"],
                    updates: ["エンジニアードフィットラスト NEOの採用", "インソール素材のアップデート", "アッパーのステッチ形状を見直し"]
                },
                {
                    id: "mn4j", name: "モレリア ネオ IV JAPAN", price: 26400, img: "neo4_j_white.jpg",
                    colors: [{img: "neo4_j_white.jpg", color: "#fff"}, {img: "neo4_j_gold.jpg", color: "#c8a400"}, {img: "neo4_j_black.jpg", color: "#111"}, {img: "neo4_j_blue.jpg", color: "#1a6fc4"}],
                    eval: [5, 3, 5, 4, 3],
                    desc: "ウォッシャブルカンガルーレザーに加え中足部にBFレザーとフレームを搭載し安定感をアップ。BareFoot Knit NEOは足首周りのホールド感に拘ったアッパーパターンにアップデートしシューズと足との一体化を追求。ハトメ構造で屈曲時の皺を最小限に抑えた柔軟なフィット感を実現。アウトソールはY字構造で突き上げ感を減少させ、シャンクのハニカム構造が軽量と剛性を両立。スウェードのインソールとEngineered Fit Lastが素足感覚を完成させます。",
                    specs: { weight: "約195g (27.0cm)", material: "カンガルーレザー×BFレザー", ground: "土・人工芝・天然芝" },
                    tags: ["FW", "WG", "スピード重視"],
                    updates: ["ハトメ端部の形状再設計", "アウトソールスタッド付け根の強化", "Y字シャンク採用で素足感向上"]
                },
                {
                    id: "mn4_beta", name: "モレリアネオ IV β JAPAN", price: 31900, img: "neo4_beta_white.jpg",
                    colors: [
                        {img: "neo4_beta_white.jpg", color: "#fff"},
                        {img: "neo4_beta_gold.jpg",  color: "#c8a400"},
                        {img: "neo4_beta_blue.jpg",  color: "#7ecef4"}
                    ],
                    eval: [5, 3, 5, 4, 2],
                    desc: "中足部にβ Mesh NEO（日本製の軽量で柔らかいメッシュ素材）を、足の甲から踵周りにかけてはBareFoot Knit NEOを採用し更なる素足感覚を追求。素足感覚と安定性を両立したアウトソールも魅力で、MORELIA NEO IIIの基本設計をベースにアップデートされています。インソールにはMORELIAシリーズ採用のスウェード調起毛素材をMORELIA NEOシリーズで初採用し汗を含んだ状態でも適度なグリップ力を発揮。シューズの命とも呼ばれるラストには現代のフットボーラーの足型に綿密フィットするEngineered Fit Last NEOを搭載した日本製トップモデルです。",
                    specs: { weight: "約200g (27.0cm)", material: "天然皮革×β Mesh NEO×BareFoot Knit NEO", ground: "天然芝・土・人工芝" },
                    tags: ["FW", "MF", "素足感覚", "日本製トップモデル"],
                    updates: ["β Mesh NEO（日本製メッシュ）を中足部に採用で素足感向上", "BareFoot Knit NEOの履き口パターン見直し", "アウトソール素足感覚化（NEO IIIベース）", "スウェード調起毛インソールをMORELIA NEOシリーズで初採用"]
                },
                {
                    id: "mn_sala_beta", name: "モレリアネオ SALA β JAPAN IN", price: 22000, img: "neo_sala_beta.jpg",
                    colors: [{img: "neo_sala_beta.jpg", color: "#fff"}],
                    eval: [4, 4, 5, 4, 2],
                    desc: "「MORELIA NEO SALA」のβ（ベータ）モデル。フルレングス仕様のミッドソール全面にMIZUNO ENERZYを採用しクッション性と反発性を追求。アッパー前足部には足馴染みの良い天然皮革を引き続き採用しミズノにしか出せないフィッティングを実現。中足部には軽くて柔らかい日本製メッシュ素材β Mesh NEOを採用し更なる素足感覚を追求。足の甲から踵周りにかけてはBareFoot Knit NEOを採用し履き口周りのパターンを見直しより足に沿うようなニット形状を実現。約5mm厚のMIZUNO ENERZY xpインソールがフットサルプレーヤーのパフォーマンスアップをサポートする日本製インドアコート対応モデルです。",
                    specs: { weight: "約220g (27.0cm)", material: "合成皮革×天然皮革×ニット", ground: "インドアコート（ノンマーキングソール）" },
                    tags: ["フットサル", "IN", "素足感覚", "日本製"],
                    updates: ["MIZUNO ENERZYミッドソール全面採用", "β Mesh NEOの中足部採用", "BareFoot Knit NEOの履き口パターン見直し", "MIZUNO ENERZY xpインソール搭載"]
                },
                {
                    id: "m_sala_japan", name: "モレリア SALA JAPAN IN", price: 19800, img: "sala_japan.jpg",
                    colors: [{img: "sala_japan.jpg", color: "#fff"}],
                    eval: [4, 4, 5, 4, 3],
                    desc: "フルミッドソール仕様にアップデートされた「MORELIA SALA」の日本製IN（インドアコート）対応トレーニングシューズ。フルレングスのMIZUNO ENERZYミッドソールがクッション性と反発性を両立。アッパー前足部には足馴染みの良い天然皮革を引き続き採用しミズノならではのフィッティングを追求し、フットサル専用クロスステッチが天然皮革の伸びを抑制。中足部には柔らかく適度なホールド感を追求したソフト人工皮革を採用しフットサル特有のクイック＆ストップ動作をサポート。グリップ性と耐摩耗性を追求したソール意匠も魅力です。",
                    specs: { weight: "約230g (27.0cm)", material: "ソフト人工皮革×天然皮革（フットサル専用クロスステッチ）", ground: "インドアコート（ノンマーキングソール）" },
                    tags: ["フットサル", "IN", "天然皮革", "日本製"],
                    updates: ["フルミッドソール仕様化（前足部にもミッドソール）", "MIZUNO ENERZYミッドソール全面採用", "フットサル専用クロスステッチ採用"]
                },
                {
                    id: "m_sala_elite", name: "モレリア SALA ELITE IN", price: 17050, img: "sala_elite.jpg",
                    colors: [{img: "sala_elite.jpg", color: "#fff"}],
                    eval: [4, 4, 4, 4, 4],
                    desc: "「MORELIA SALA」のELITE（エリート）モデル。前足部にもミッドソールを搭載したフルミッドソール仕様に一新し、素足感覚を実現しながらクッション性も追求。アッパー前足部には足馴染みの良い天然皮革（ノーマルステッチ）を採用しミズノにしか出せないフィッティングを実現。中足部には柔らかく適度なホールド感のソフト人工皮革を採用しフットサル特有のクイック＆ストップ動作をサポート。グリップ性と耐摩耗性を追求したソール意匠が魅力のインドアコート対応トレーニングシューズです。",
                    specs: { weight: "約240g (27.0cm)", material: "ソフト人工皮革×天然皮革（ノーマルステッチ）", ground: "インドアコート（ノンマーキングソール）" },
                    tags: ["フットサル", "IN", "天然皮革"],
                    updates: ["フルミッドソール仕様化（前足部にもミッドソール）", "MIZUNO ENERZYミッドソール全面採用"]
                },
                {
                    id: "m_sala_pro", name: "モレリア SALA PRO IN", price: 12650, img: "sala_pro.jpg",
                    colors: [{img: "sala_pro.jpg", color: "#fff"}],
                    eval: [3, 4, 3, 4, 5],
                    desc: "「MORELIA SALA」のPRO（プロ）モデル。前足部にもミッドソールを搭載したフルミッドソール仕様に一新し素足感覚とクッション性を両立。アッパー前足部には足馴染みの良い新しいマイクロファイバー人工皮革を採用しメンテフリーで安定したフィッティングを実現。中足部には柔らかく適度なホールド感のソフト人工皮革を採用。母指球部には高密度なラバー意匠を配置することで360°全方向に対するグリップ性を追求した、インドアコート対応のコストパフォーマンスモデルです。",
                    specs: { weight: "約250g (27.0cm)", material: "ソフト人工皮革×マイクロファイバー人工皮革（ノーマルステッチ）", ground: "インドアコート（ノンマーキングソール）" },
                    tags: ["フットサル", "IN", "コスパ"],
                    updates: ["フルミッドソール仕様化（前足部にもミッドソール）", "新マイクロファイバー人工皮革採用", "母指球部に360°グリップ高密度ラバー意匠"]
                }
            ],
            "モナルシーダ (MONARCIDA)": [
                {
                    id: "m_neo3_elite", name: "モナルシーダ NEO III ELITE", price: 20900, img: "m_neo3_elite_pink.jpg",
                    colors: [
                        {img: "m_neo3_elite_pink.jpg",  color: "#e8457a"},
                        {img: "m_neo3_elite_green.jpg", color: "#00cc88"},
                        {img: "m_neo3_elite_gold.jpg",  color: "#c8a400"},
                        {img: "m_neo3_elite_red.jpg",   color: "#c00"}
                    ],
                    eval: [4, 2, 4, 4, 4],
                    desc: "ウォッシャブルカンガルーレザーを採用し中足部には柔らかいマイクロファイバー人工皮革を配置。アッパー内部にはMORELIA 2 JAPANと同じマイクロタフタを採用し、縦方向に約3倍の引張強度でカンガルーの伸びを抑制し保形性を向上。ZERO GLIDEインソールが通常比約2.5倍のグリップ性を発揮しシューズ内での足のズレを軽減。Engineered Fit Lastによる高いフィット感を実現します。",
                    specs: { weight: "約200g (27.0cm)", material: "カンガルーレザー", ground: "オールグラウンド対応" },
                    tags: ["部活生", "軽量", "高耐久"],
                    updates: ["アッパーのステッチ形状を見直し"]
                },
                {
                    id: "m_neo3_pro", name: "モナルシーダ NEO III PRO", price: 14850, img: "m_neo3_pro_white.jpg",
                    colors: [
                        {img: "m_neo3_pro_white.jpg", color: "#fff"},
                        {img: "m_neo3_pro_gold.jpg",  color: "#c8a400"},
                        {img: "m_neo3_pro_red.jpg",   color: "#c00"}
                    ],
                    eval: [4, 2, 3, 4, 5],
                    desc: "アッパーにマイクロファイバー人工皮革を採用。履き口の人工スエード素材が柔らかい足あたりを実現し、踵スポンジ構造の改善でさらなるフィット感を追求。ZERO GLIDE LITEカップインソールが通常比1.5倍のグリップ力でシューズ内の横ズレを軽減。Engineered Fit Lastを搭載したコストパフォーマンスに優れたモデルです。",
                    specs: { weight: "約195g (27.0cm)", material: "マイクロファイバー×人工皮革", ground: "オールグラウンド対応" },
                    tags: ["部活生", "軽量", "高コスパ"],
                    updates: ["NEO IIIへのアップデートによるホールド感向上"]
                },
                {
                    id: "m_neo3_select", name: "モナルシーダ NEO III SELECT", price: 9350, img: "m_neo3_select_pink.jpg",
                    colors: [
                        {img: "m_neo3_select_pink.jpg",  color: "#e8457a"},
                        {img: "m_neo3_select_white.jpg", color: "#fff"},
                        {img: "m_neo3_select_black.jpg", color: "#111"}
                    ],
                    eval: [2, 2, 3, 5, 5],
                    desc: "柔らかな足入れを実現するワイドラストを採用。モレリアネオ4のアッパーパターンをフォローしたシンプル設計で柔らかなフィット感を追求。ハトメ端部をハの字形状に再設計し屈曲時に足に沿うフィット感を実現。ZERO GLIDE LITEカップインソール（取り外し可）が通常比1.5倍のグリップ力で横ズレを軽減。耐久性のあるSELECT専用ソールで毎日の練習に対応します。",
                    specs: { weight: "約235g (27.0cm)", material: "人工皮革", ground: "オールグラウンド対応" },
                    tags: ["初心者", "ワイド", "練習用"],
                    updates: ["アッパーデザインの一新"]
                }
            ]
        },
        Asics: {
            "X-FLY シリーズ": [
                {
                    id: "xf6", name: "DS LIGHT X-FLY 6", price: 23000, img: "x-fly6_blue.jpg",
                    colors: [
                        {img: "x-fly6_blue.jpg",   color: "#1a6fc4"},
                        {img: "x-fly6_yellow.jpg", color: "#ccff00"},
                        {img: "x-fly6_green.jpg",  color: "#00cc88"}
                    ],
                    eval: [4, 3, 5, 5, 3],
                    desc: "SILKYWRAP採用で雨による型崩れや過度な伸びを抑制。STABILITY SOLEが内ねじれを許容しながら外ねじれを抑制し、切り返し時の安定性を確保。外付けヒールカウンターがフラットな接地感と強靭な反発性を発揮。シュータンには柔らかい人工スエードとスポンジ素材を採用し快適な足入れを実現します。",
                    specs: { weight: "約205g (27.0cm)", material: "SILKYWRAP (人工皮革)", ground: "天然芝・人工芝・土" },
                    tags: ["エリート", "素足感覚", "フィッティング"],
                    updates: ["新素材SILKYWRAPの採用", "3D縫製技術採用", "ヒールカウンター一体型ソール"]
                },
                {
                    id: "xfp3", name: "DS LIGHT X-FLY PRO 3", price: 24000, img: "x-flypro3_brown.jpg",
                    colors: [
                        {img: "x-flypro3_brown.jpg", color: "#8B5e3c"},
                        {img: "x-flypro3_red.jpg",   color: "#c00"},
                        {img: "x-flypro3_pink.jpg",  color: "#e8457a"},
                        {img: "x-flypro3_green.jpg", color: "#00cc88"}
                    ],
                    eval: [5, 4, 4, 4, 3],
                    desc: "SILKYWRAP採用で雨による型崩れや過度な伸びを抑制。つま先から2列目のスタッドをブレード形状に近づけ角度も蹴り出し方向へグリップが効くように設計。大胆にくり抜かれたアウトソールが軽量性と屈曲性を生み出し、超薄型×高硬度仕様でスプリント時に必要な反発性を実現するオールコートモデルです。",
                    specs: { weight: "約190g (27.0cm)", material: "SILKYWRAP (人工皮革)", ground: "天然芝・人工芝・土" },
                    tags: ["FW", "スピード", "スプリント"],
                    updates: ["アッパー全面へのSILKYWRAP採用", "スタッド形状の最適化", "Uスロート形状変更"]
                }
            ],
            "ACROS シリーズ": [
                {
                    id: "ac3", name: "DS LIGHT ACROS 3", price: 19800, img: "acros3_blue.jpg",
                    colors: [
                        {img: "acros3_blue.jpg",  color: "#1a6fc4"},
                        {img: "acros3_green.jpg", color: "#00cc88"}
                    ],
                    eval: [3, 3, 5, 5, 3],
                    desc: "カットインモーション時の横ブレを軽減する設計。アッパー内側の補強材を薄く、外側を厚くすることで強度差をつけ、切り返し時に内側は足に寄り添い外側は剛性を発揮。外付けヒールカウンターがフラットな接地感と強靭な反発性を提供します。",
                    specs: { weight: "約225g (27.0cm)", material: "ACROS FIT (人工皮革)", ground: "天然芝・人工芝・土" },
                    tags: ["MF", "ホールド性", "切り返し"],
                    updates: ["補強材配置見直し", "動的フィッティングの進化"]
                },
                {
                    id: "acp3", name: "DS LIGHT ACROS PRO 3", price: 22000, img: "acrospro3_green.jpg",
                    colors: [
                        {img: "acrospro3_green.jpg",  color: "#00cc88"},
                        {img: "acrospro3_red.jpg",    color: "#c00"},
                        {img: "acrospro3_blue.jpg",   color: "#1a6fc4"},
                        {img: "acrospro3_purple.jpg", color: "#8800cc"}
                    ],
                    eval: [4, 4, 4, 4, 3],
                    desc: "ACROS 3と同様にアッパー内側を薄く・外側を厚くした非対称補強で切り返し時の安定性を確保。樹脂製プレートを大きくくり抜いて軽量化しながら中部をN字型に成型することで剛性を高め過度なねじれを抑制。つま先先端の変形円柱型スタッドとブレード型サブスタッドが蹴り出し時のパワーを最後までピッチに伝えます。",
                    specs: { weight: "約200g (27.0cm)", material: "ACROS FIT (人工皮革)", ground: "天然芝・人工芝・土" },
                    tags: ["FW", "スピード", "ホールド性"],
                    updates: ["デジタル設計アウトソール採用", "動的フィット向上"]
                }
            ],
            "DS LIGHT シリーズ": [
                {
                    id: "dsl_pro", name: "DS LIGHT PRO", price: 15400, img: "pro_pink.jpg",
                    colors: [
                        {img: "pro_pink.jpg",  color: "#e8457a"},
                        {img: "pro_green.jpg", color: "#00cc88"},
                        {img: "pro_blue.jpg",  color: "#1a6fc4"}
                    ],
                    eval: [3, 2, 4, 5, 4],
                    desc: "SILKYWRAPを採用し雨による型崩れや過度な伸びを抑制。かかとのGELが足への負担を軽減。つま先上部の落ち込みを軽減した新設計のラストが足の形により沿ったフィット感を実現します。",
                    specs: { weight: "約225g (27.0cm)", material: "SILKYWRAP×人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["全部活生", "クッション性", "高耐久"],
                    updates: ["SILKYWRAP採用", "fuzeGEL最適配置"]
                },
                {
                    id: "dsl_adv", name: "DS LIGHT ADVANCE", price: 11000, img: "advance_blue.jpg",
                    colors: [
                        {img: "advance_blue.jpg",  color: "#1a6fc4"},
                        {img: "advance_black.jpg", color: "#111"}
                    ],
                    eval: [2, 2, 3, 5, 5],
                    desc: "前足部にストレッチャブル仕様の人工皮革を採用し、かかとのGELが足への負担を軽減。シンプルな設計で毎日の練習に対応するエントリーモデルです。",
                    specs: { weight: "約235g (27.0cm)", material: "マイクロファイバー×人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["部活生", "コスパ", "高耐久"],
                    updates: ["耐摩耗ウレタンソール採用", "バンプエリア拡張"]
                },
                {
                    id: "dsl_club", name: "DS LIGHT CLUB", price: 8800, img: "club_orange.jpg",
                    colors: [
                        {img: "club_orange.jpg", color: "#ff7040"},
                        {img: "club_black.jpg",  color: "#111"},
                        {img: "club_blue.jpg",   color: "#1a6fc4"}
                    ],
                    eval: [2, 2, 2, 5, 5],
                    desc: "前足部にストレッチャブル仕様の人工皮革を採用し、かかとのGELが足への負担を軽減。DS LIGHTシリーズの入口となるベーシックモデルで、初めてのスパイクとして幅広いプレーヤーに対応します。",
                    specs: { weight: "約245g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "コスパ", "高耐久"],
                    updates: ["かかとGEL採用で足への負担を軽減", "オールグラウンド対応ソール搭載"]
                }
            ]
        },
        Adidas: {
            "PREDATOR": [
                {
                    id: "pred_elite", name: "プレデター エリート", price: 31900, img: "predator_elite_green.jpg",
                    colors: [
                        {img: "predator_elite_green.jpg", color: "#7ecef4"},
                        {img: "predator_elite_red.jpg",   color: "#e8004d"}
                    ],
                    eval: [3, 5, 4, 4, 2],
                    desc: "グリップゾーンと一体型のソフトな軽量アッパーがCONTROLFRAMEと組み合わさり、自在なボールコントロールとキックのパワー・精度をサポート。硬さのあるHG/AGでの最適なグリップ性と耐久性を実現し、前足部内側のトライアングルスタッドの円形配置が前後左右のモーションやターンに貢献。360°素足感覚を追求したEngineered Fit Lastが高いフィット感とシューズと足のズレを防ぎ、動きの中での反応性を高めます。",
                    specs: { weight: "約225g (27.0cm)", material: "合成皮革＋CONTROLFRAMEテクスチャー", ground: "天然芝" },
                    tags: ["MF", "コントロール重視", "テクニシャン"],
                    updates: ["CONTROLFRAMEの再配置", "TPUシャーシ強化", "インソール改良"]
                },
                {
                    id: "pred_pro", name: "プレデター プロ", price: 19800, img: "predator_pro_red.jpg",
                    colors: [{img: "predator_pro_red.jpg", color: "#c00"}],
                    eval: [3, 4, 4, 4, 3],
                    desc: "CONTROLFRAMEテクスチャーを前足部中心に配置し、エリートに準じたボールグリップ性を提供。エリートと同じく前足部内側のトライアングルスタッドの円形配置でターン性能も確保。日常使いとしてのコストパフォーマンスに優れたミドルモデルです。",
                    specs: { weight: "約235g (27.0cm)", material: "合成皮革＋CONTROLFRAMEテクスチャー", ground: "天然芝・人工芝" },
                    tags: ["MF", "コントロール", "練習兼用"],
                    updates: ["CONTROLFRAMEゾーン最適化", "アウトソール耐久性向上"]
                },
                {
                    id: "pred_league", name: "プレデター リーグ", price: 9900, img: "predator_league_red.jpg",
                    colors: [{img: "predator_league_red.jpg", color: "#c00"}],
                    eval: [2, 3, 3, 5, 5],
                    desc: "プレデターのDNAを宿したエントリーモデル。前足部グリップテクスチャーで手軽にコントロール性を体感。",
                    specs: { weight: "約260g (27.0cm)", material: "人工皮革＋グリップテクスチャー", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "高耐久", "コスパ"],
                    updates: ["アッパー耐摩耗性向上", "オールグラウンド強化"]
                }
            ],
            "コパアイコン2": [
                {
                    id: "copa_elite", name: "コパアイコン2 エリート", price: 29700, img: "copaicon_elite_white.jpg",
                    colors: [
                        {img: "copaicon_elite_white.jpg", color: "#fff"},
                        {img: "copaicon_elite_green.jpg", color: "#00cc44"}
                    ],
                    eval: [3, 3, 5, 4, 2],
                    desc: "かかと・中足部のパッドを薄くし足との一体感を追求。踵周りには広範囲にウレタンフォームを搭載しフィット感を強化。短めのシュータンで足首周りの可動を確保。360°素足感覚のEngineered Fit Lastを採用。前足部内側のピヴォットスタッドが前後左右のモーションをサポート。シューホールのジグザグ配置でシューレース調整の自由度を高め、縦横のステッチ加工で型崩れを防止。<br>エリートは柔らかな天然皮革（カウレザー）を前足部とシュータンに採用。足全体の馴染みが早く素足感覚のフィーリングをもたらします。",
                    specs: { weight: "約215g (27.0cm)", material: "OT LEATHER（カンガルーレザー）", ground: "天然芝" },
                    tags: ["MF", "DF", "タッチ重視", "天然皮革"],
                    updates: ["OT LEATHER改良", "ヒールカウンター軽量化", "ソール屈曲性向上"]
                },
                {
                    id: "copa_pro", name: "コパアイコン2 プロ", price: 17600, img: "copaicon_pro_blue.jpg",
                    colors: [
                        {img: "copaicon_pro_blue.jpg",  color: "#1a6fc4"},
                        {img: "copaicon_pro_white.jpg", color: "#fff"},
                        {img: "copaicon_pro_green.jpg", color: "#00cc44"}
                    ],
                    eval: [3, 3, 4, 4, 3],
                    desc: "エリートと同じ足型設計・スタッド配置・ジグザグシューホールを継承しつつ、アッパーにマイクロファイバー人工皮革を採用。メンテナンスフリーで雨天時も安定したボールタッチを発揮するミドルモデルです。",
                    specs: { weight: "約225g (27.0cm)", material: "マイクロファイバー人工皮革", ground: "天然芝・人工芝" },
                    tags: ["MF", "DF", "タッチ重視", "メンテフリー"],
                    updates: ["マイクロファイバー質感向上", "ソール反発性改善"]
                },
                {
                    id: "copa_league", name: "コパアイコン2 リーグ", price: 8800, img: "copaicon_league_white.jpg",
                    colors: [{img: "copaicon_league_white.jpg", color: "#fff"}],
                    eval: [2, 2, 3, 5, 5],
                    desc: "コパの伝統を受け継ぐエントリーモデル。",
                    specs: { weight: "約265g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "ワイド", "コスパ"],
                    updates: ["アッパー柔軟性向上", "アウトソール耐久性強化"]
                }
            ],
            "F50": [
                {
                    id: "f50_elite", name: "F50 エリート", price: 28600, img: "f50_elite_yellow.jpg",
                    colors: [
                        {img: "f50_elite_yellow.jpg", color: "#ccff00"},
                        {img: "f50_elite_blue.jpg",   color: "#1a8ce8"},
                        {img: "f50_elite_orange.jpg", color: "#ff7040"}
                    ],
                    eval: [5, 3, 3, 3, 2],
                    desc: "エンジニアードメッシュに表面加工を施した軽量アッパーが必要な箇所にサポートを提供しスピードに貢献。中足部を覆う伸縮素材にTPUで補強を施したトンネル型シュータンがフィット性とホールド性を両立。前足部内側のトライアングルスタッドの円形配置が前後左右のモーション・ターンに貢献する、硬グラウンド（HG/AG）向けスピードモデル。",
                    specs: { weight: "約185g (27.0cm)", material: "ファイバータッチアッパー", ground: "天然芝・人工芝" },
                    tags: ["FW", "WG", "スピード重視"],
                    updates: ["スプリントウェブ採用", "全モデル中トップクラスの軽量化"]
                },
                {
                    id: "f50_pro", name: "F50 プロ", price: 16500, img: "f50_pro_yellow.jpg",
                    colors: [
                        {img: "f50_pro_yellow.jpg", color: "#ccff00"},
                        {img: "f50_pro_purple.jpg", color: "#6633cc"}
                    ],
                    eval: [4, 2, 3, 3, 3],
                    desc: "スピードモデルF50の性能を身近な価格で。軽量性を重視した設計はELITEの思想を継承。",
                    specs: { weight: "約205g (27.0cm)", material: "合成皮革", ground: "天然芝・人工芝" },
                    tags: ["FW", "WG", "スピード"],
                    updates: ["アッパー素材バランス最適化", "グリップ性改善"]
                },
                {
                    id: "f50_league", name: "F50 リーグ", price: 8800, img: "f50_league_yellow.jpg",
                    colors: [
                        {img: "f50_league_yellow.jpg", color: "#ccff00"},
                        {img: "f50_league_orange.jpg", color: "#ff7040"},
                        {img: "f50_league_purple.jpg", color: "#6633cc"}
                    ],
                    eval: [3, 2, 2, 5, 5],
                    desc: "F50のエントリーモデル。高耐久ソールで毎日の練習に対応。",
                    specs: { weight: "約255g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "高耐久", "コスパ"],
                    updates: ["アウトソール耐摩耗性向上"]
                }
            ]
        },
        Nike: {
            "Mercurial": [
                {
                    id: "vapor_elite", name: "ヴェイパー エリート", price: 33000, img: "vapor_elite_brown.jpg",
                    colors: [
                        {img: "vapor_elite_brown.jpg", color: "#8B5e3c"}
                    ],
                    eval: [5, 2, 3, 3, 2],
                    desc: "新マーキュリアルでは『エアズーム ストロベル』から屈曲溝を取り除くことによりブーツ前足部にスピードフィンを追加しプレートの屈曲性を最適化。これにより前作比エネルギーリターンが10%向上。フライニットアッパーの層数を5層から3層に削減することで約30%軽量化し、ナイキフットボール史上最も軽く薄いフライニットアッパーを実現。素足を感じるシューズを求めるスプリンター向けトップモデル。",
                    specs: { weight: "約178g (27.0cm)", material: "ヴェイパーポジット（合成皮革）", ground: "天然芝" },
                    tags: ["FW", "WG", "スピード特化"],
                    updates: ["エアズームの配置最適化", "アッパー縫製変更", "スタッド角度調整"]
                },
                {
                    id: "vapor_pro", name: "ヴェイパー プロ", price: 19800, img: "vapor_pro_blue.jpg",
                    colors: [
                        {img: "vapor_pro_blue.jpg", color: "#7b9fe8"}
                    ],
                    eval: [4, 2, 3, 3, 3],
                    desc: "エリートの加速感を日常使いできるミドルモデル。",
                    specs: { weight: "約200g (27.0cm)", material: "合成皮革", ground: "天然芝・人工芝" },
                    tags: ["FW", "WG", "スピード"],
                    updates: ["スタッド配置改善", "アッパー耐久性向上"]
                },
                {
                    id: "vapor_academy", name: "ヴェイパー アカデミー", price: 7700, img: "vapor_academy_blue.jpg",
                    colors: [
                        {img: "vapor_academy_blue.jpg",   color: "#1a6fc4"},
                        {img: "vapor_academy_pink.jpg",   color: "#e8457a"},
                        {img: "vapor_academy_yellow.jpg", color: "#ccff00"}
                    ],
                    eval: [3, 2, 2, 5, 5],
                    desc: "Zoom Airユニットをアウトソールに搭載し足裏の反発性を強化。NikeSkinアッパーが素足でサッカーをしているような感覚でボールをコントロールできる設計。内部のスピードケージが軽さを損なわず足をアウトソールに固定し、独自のトラクションパターンが硬い土でも抜群のグリップを発揮します。",
                    specs: { weight: "約255g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "育成年代", "練習用", "コスパ"],
                    updates: ["オールグラウンドソール耐久性向上"]
                }
            ],
            "Phantom": [
                {
                    id: "phantom_elite", name: "ファントム エリート", price: 31130, img: "phantom_elite_yellow.jpg",
                    colors: [
                        {img: "phantom_elite_yellow.jpg", color: "#ccff00"}
                    ],
                    eval: [3, 5, 4, 3, 2],
                    desc: "Cyclone 360の円形トラクションパターンがスピーディーな踏み込みとピボットをサポート。エンジニアードメッシュにNikeSkinのタッチゾーンを広くした設計でボールコントロールを強化。トゥボックスなど自然なフィット感を実現する構造で、足の形に沿ってフィットしボールタッチの精度をさらに向上させます。",
                    specs: { weight: "約220g (27.0cm)", material: "ナイキ グリップニット", ground: "天然芝" },
                    tags: ["MF", "コントロール重視", "テクニシャン"],
                    updates: ["グリップニットにマイクロモールディング加工追加", "Cyclone 360採用", "非対称レーシング採用"]
                },
                {
                    id: "phantom_pro", name: "ファントム プロ", price: 17600, img: "phantom_pro_blue.jpg",
                    colors: [
                        {img: "phantom_pro_blue.jpg", color: "#1a6fc4"},
                        {img: "phantom_pro_red.jpg",  color: "#c00"}
                    ],
                    eval: [3, 4, 3, 3, 3],
                    desc: "グリップ加工合成皮革がボールタッチをサポートするミドルモデル。",
                    specs: { weight: "約235g (27.0cm)", material: "合成皮革＋グリップ加工", ground: "天然芝・人工芝" },
                    tags: ["MF", "コントロール", "練習兼用"],
                    updates: ["グリップ加工範囲拡大", "アウトソール耐久性向上"]
                },
                {
                    id: "phantom_academy", name: "ファントム アカデミー", price: 8250, img: "phantom_academy_blue.jpg",
                    colors: [
                        {img: "phantom_academy_blue.jpg", color: "#1a6fc4"},
                        {img: "phantom_academy_red.jpg",  color: "#c00"}
                    ],
                    eval: [2, 3, 2, 5, 5],
                    desc: "コントロール系スパイクの入門モデル。高耐久設計で練習用として最適。",
                    specs: { weight: "約260g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "高耐久", "コスパ"],
                    updates: ["オールグラウンド性能向上"]
                }
            ],
            "Tiempo": [
                {
                    id: "tiempo_elite", name: "ティエンポ エリート", price: 28600, img: "tiempo_elite_blue.jpg",
                    colors: [
                        {img: "tiempo_elite_blue.jpg", color: "#1a6fc4"}
                    ],
                    eval: [3, 3, 5, 4, 2],
                    desc: "軽量のFly Touchエンジニアードレザーは驚くほど柔らかく、濡れた状態でも乾いた状態でも安定したボールタッチを提供。Fly Touchレザーが足にぴったりフィットし、ニットシュータンと連動して足をしっかり固定。かかとと前足部のブレードタイプスタッドがトラクションを提供し、ねじれた円錐形スタッドがスムーズな踏み込みとピボットをサポートします。",
                    specs: { weight: "約215g (27.0cm)", material: "カンガルーレザー", ground: "天然芝" },
                    tags: ["MF", "DF", "天然皮革", "タッチ重視"],
                    updates: ["ヒールカウンター形状改良", "スタッド配置最適化"]
                },
                {
                    id: "tiempo_pro", name: "ティエンポ プロ", price: 16500, img: "tiempo_pro_blue.jpg",
                    colors: [
                        {img: "tiempo_pro_blue.jpg", color: "#1a6fc4"}
                    ],
                    eval: [3, 3, 4, 4, 3],
                    desc: "マイクロファイバー人工皮革が天然皮革に近い感触を実現。メンテフリーで雨天時も安定。",
                    specs: { weight: "約230g (27.0cm)", material: "マイクロファイバー人工皮革", ground: "天然芝・人工芝" },
                    tags: ["MF", "DF", "タッチ重視", "メンテフリー"],
                    updates: ["マイクロファイバー質感向上", "反発性改善"]
                },
                {
                    id: "tiempo_academy", name: "ティエンポ アカデミー", price: 8250, img: "tiempo_academy_black.jpg",
                    colors: [
                        {img: "tiempo_academy_black.jpg", color: "#111"},
                        {img: "tiempo_academy_blue.jpg",  color: "#1a6fc4"}
                    ],
                    eval: [2, 2, 3, 5, 5],
                    desc: "ティエンポシリーズの入門モデル。幅広対応で初心者に安心。",
                    specs: { weight: "約260g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "ワイド", "コスパ"],
                    updates: ["耐摩耗性向上", "グリップ性改善"]
                }
            ]
        },
        Puma: {
            "FUTURE": [
                {
                    id: "future_ultimate", name: "フューチャー アルティメット", price: 26400, img: "future_ultimate_blue.jpg",
                    colors: [{img: "future_ultimate_blue.jpg", color: "#1a6fc4"}],
                    eval: [3, 4, 4, 3, 3],
                    desc: "<b>FUZIONFIT360が生み出す自由自在なフィット感。</b><br>PWRTAPEが伸び方向を制御しホールド性を確保。ニット素材がボールグリップを高めます。",
                    specs: { weight: "約230g (27.0cm)", material: "FUZIONFIT360（ニット）", ground: "天然芝・人工芝・土" },
                    tags: ["MF", "FW", "フィット感", "オールグラウンド"],
                    updates: ["PWRTAPE配置最適化", "スタッド形状変更", "クッション性アップデート"]
                },
                {
                    id: "future_pro", name: "フューチャー プロ", price: 15400, img: "future_pro_orange.jpg",
                    colors: [{img: "future_pro_orange.jpg", color: "#ff7040"}],
                    eval: [3, 3, 4, 3, 4],
                    desc: "ニット素材のアッパーが足に優しくフィット。フューチャー特有の柔軟なフィット感が健在。",
                    specs: { weight: "約245g (27.0cm)", material: "合成繊維ニット", ground: "天然芝・人工芝" },
                    tags: ["MF", "FW", "フィット感"],
                    updates: ["アッパー素材アップデート", "アウトソール耐久性改善"]
                },
                {
                    id: "future_match", name: "フューチャー マッチ", price: 9900, img: "future_match_orange.jpg",
                    colors: [{img: "future_match_orange.jpg", color: "#ff7040"}],
                    eval: [2, 3, 3, 4, 5],
                    desc: "伸縮性ある人工皮革が様々な足型に対応。オールグラウンド対応で練習から試合まで使えるコスパモデル。",
                    specs: { weight: "約260g (27.0cm)", material: "人工皮革（伸縮タイプ）", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "コスパ", "オールグラウンド"],
                    updates: ["アッパー伸縮性向上", "アウトソール耐久性向上"]
                }
            ],
            "ULTRA": [
                {
                    id: "ultra_ultimate", name: "ウルトラ アルティメット", price: 24200, img: "ultra_ultimate_yellow.jpg",
                    colors: [{img: "ultra_ultimate_yellow.jpg", color: "#ccff00"}],
                    eval: [5, 2, 3, 3, 3],
                    desc: "<b>プーマ最速のスピード特化モデル。</b><br>ULTRAWEAVEとSPEEDPLATEカーボンプレートが爆発的な加速をサポート。",
                    specs: { weight: "約180g (27.0cm)", material: "ULTRAWEAVE（合成繊維）", ground: "天然芝" },
                    tags: ["FW", "WG", "スピード特化"],
                    updates: ["ULTRAWEAVEアップデート", "SPEEDPLATEの形状最適化", "スタッド配置見直し"]
                },
                {
                    id: "ultra_pro", name: "ウルトラ プロ", price: 14300, img: "ultra_pro_white.jpg",
                    colors: [{img: "ultra_pro_white.jpg", color: "#fff"}],
                    eval: [4, 2, 2, 3, 4],
                    desc: "スピードスパイクとしてのコスパ最強モデル。アルティメットに近い軽快な走行感を実現。",
                    specs: { weight: "約205g (27.0cm)", material: "合成皮革", ground: "天然芝・人工芝" },
                    tags: ["FW", "WG", "スピード", "コスパ"],
                    updates: ["スタッド配置最適化", "アッパー軽量化"]
                },
                {
                    id: "ultra_match", name: "ウルトラ マッチ", price: 8800, img: "ultra_match_yellow.jpg",
                    colors: [{img: "ultra_match_yellow.jpg", color: "#ccff00"}],
                    eval: [3, 2, 2, 5, 5],
                    desc: "高耐久ソールと人工皮革のエントリーモデル。毎日の練習に安心して使えるコスパモデル。",
                    specs: { weight: "約255g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                    tags: ["初心者", "練習用", "高耐久", "コスパ"],
                    updates: ["オールグラウンド性能向上", "耐摩耗性強化"]
                }
            ],
            "KING": [
                {
                    id: "king_ult", name: "キング アルティメット", price: 26400, img: "king_ultimate_white.jpg",
                    colors: [{img: "king_ultimate_white.jpg", color: "#fff"}],
                    eval: [3, 3, 5, 4, 3],
                    desc: "<b>50年以上愛される天然皮革の名作が現代に復活。</b><br>カンガルーレザーが足に完全に馴染み素足感覚のタッチを実現。現代向けに再設計されたアウトソールとのハイブリッドモデル。",
                    specs: { weight: "約215g (27.0cm)", material: "カンガルーレザー", ground: "天然芝" },
                    tags: ["MF", "DF", "天然皮革", "タッチ重視"],
                    updates: ["アウトソールフルリデザイン", "内部補強材改良", "ヒールカップ形状改良"]
                }
            ]
        }
    },

    // ==================== BASKETBALL ====================
    basketball: {
        Nike: {
            "LeBron": [
                {
                    id: "lebron21", name: "LeBron XXI", price: 29700, img: "lebron21.jpg",
                    colors: [{img: "lebron21.jpg", color: "#6b2737"}],
                    eval: [5, 4, 4, 4, 2],
                    desc: "<b>レブロン・ジェームズのシグネチャーモデル第21弾。</b><br>Zoom Air×フルレングスAir Unitのダブルクッションが着地衝撃を強力に吸収。パワーフォワードのプレースタイルに合わせた安定性と爆発力を両立します。",
                    specs: { weight: "約420g (28.0cm)", material: "合成皮革＋メッシュ", cut: "ハイカット", cushion: "Zoom Air + Full-Length Air" },
                    tags: ["PF", "C", "パワー系", "クッション重視"],
                    updates: ["Zoom Air配置の最適化", "アウトソールトラクションパターン改良", "アンクルサポート強化"]
                }
            ],
            "Kobe": [
                {
                    id: "kobe6pro", name: "Kobe 6 Protro", price: 22000, img: "kobe6pro.jpg",
                    colors: [{img: "kobe6pro.jpg", color: "#552583"}],
                    eval: [3, 5, 5, 3, 3],
                    desc: "<b>コービー・ブライアントのレガシーを受け継ぐ名作。</b><br>ローカット設計と足裏を感じるクッションが素早いフットワークをサポート。Zoom Airが軽量ながら高い反発性を提供します。",
                    specs: { weight: "約310g (28.0cm)", material: "合成皮革", cut: "ローカット", cushion: "Zoom Air" },
                    tags: ["PG", "SG", "アジリティ重視", "ローカット"],
                    updates: ["アウトソールアップデート", "素材の現代化", "耐久性向上"]
                }
            ],
            "Kyrie": [
                {
                    id: "kyrie_low5", name: "Kyrie Low 5", price: 14300, img: "kyrie_low5.jpg",
                    colors: [{img: "kyrie_low5.jpg", color: "#111"}],
                    eval: [2, 5, 4, 3, 3],
                    desc: "<b>カイリー・アービングのスキルフルなプレーに特化。</b><br>超薄型アウトソールが地面の感触を最大限に伝え、クイックなストップ＆ゴーをサポート。データ基準のトラクションパターンが高いグリップ力を発揮します。",
                    specs: { weight: "約280g (28.0cm)", material: "合成皮革＋フライニット", cut: "ローカット", cushion: "Zoom Turbo" },
                    tags: ["PG", "SG", "ドリブラー", "グリップ重視"],
                    updates: ["Zoom Turbo配置改良", "アウトソールパターン更新"]
                }
            ]
        },
        Adidas: {
            "Harden": [
                {
                    id: "harden8", name: "Harden Vol.8", price: 18700, img: "harden8.jpg",
                    colors: [{img: "harden8.jpg", color: "#cc0000"}],
                    eval: [3, 4, 4, 4, 3],
                    desc: "<b>ジェームズ・ハーデンのプレーを体現したシグネチャーモデル。</b><br>Lightstrike PROミッドソールが軽量でありながら高い反発性を提供。ステップバック得意なシューターのための安定性を備えます。",
                    specs: { weight: "約360g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ミドルカット", cushion: "Lightstrike PRO" },
                    tags: ["PG", "SG", "シューター", "アジリティ"],
                    updates: ["Lightstrike PROソール採用", "アッパー設計刷新", "ヒールサポート強化"]
                }
            ],
            "D.O.N.": [
                {
                    id: "don6", name: "D.O.N. Issue 6", price: 16500, img: "don6.jpg",
                    colors: [{img: "don6.jpg", color: "#333"}],
                    eval: [3, 4, 3, 4, 4],
                    desc: "<b>ドノバン・ミッチェルのシグネチャーモデル。</b><br>コストパフォーマンスに優れたバスケシューズとして定評。Bounce PROクッションが快適なプレーをサポートします。",
                    specs: { weight: "約340g (28.0cm)", material: "合成繊維", cut: "ローカット", cushion: "Bounce PRO" },
                    tags: ["SG", "SF", "バランス型", "コスパ"],
                    updates: ["Bounce PRO採用", "フィット感向上", "グリップパターン改良"]
                }
            ]
        },
        UnderArmour: {
            "Curry": [
                {
                    id: "curry12", name: "カリー 12", price: 22000, img: "curry12.jpg",
                    colors: [{img: "curry12.jpg", color: "#006bb6"}],
                    eval: [4, 5, 5, 4, 3],
                    desc: "<b>ステフィン・カリーの最新シグネチャーモデル。</b><br>UA Flow技術によるアウトソールが高いグリップ力を発揮しながら、クッション性も確保。シューターの細かいフットワークを最大限サポートします。",
                    specs: { weight: "約330g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "UA Flow" },
                    tags: ["PG", "SG", "シューター", "俊敏性重視"],
                    updates: ["UA Flow改良版採用", "アッパーの通気性向上", "内側サポートの強化"]
                },
                {
                    id: "curry_splash", name: "カリー スプラッシュ", price: 11000, img: "curry_splash.jpg",
                    colors: [{img: "curry_splash.jpg", color: "#006bb6"}],
                    eval: [3, 4, 4, 4, 5],
                    desc: "カリーシリーズのエントリーモデル。テイクダウンモデルとして部活生や初心者に人気の高コスパモデル。",
                    specs: { weight: "約360g (28.0cm)", material: "合成皮革＋メッシュ", cut: "ローカット", cushion: "UA Micro G" },
                    tags: ["全ポジション", "部活生", "初心者", "コスパ"],
                    updates: ["Micro Gクッション採用", "アウトソールグリップ改善"]
                }
            ],
            "Flow": [
                {
                    id: "flow_futurex4", name: "UA フロー フューチャーX4", price: 16500, img: "flow_futurex4.jpg",
                    colors: [{img: "flow_futurex4.jpg", color: "#c8102e"}],
                    eval: [4, 5, 4, 4, 3],
                    desc: "<b>グリップ力に特化したUAのスピードモデル。</b><br>UA Flowテクノロジーがラバーなしでも高いグリップを発揮。ゴム底不要の革新的なソール設計が軽量性と快適さを両立します。",
                    specs: { weight: "約310g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "UA Flow" },
                    tags: ["PG", "SG", "アジリティ重視", "グリップ特化"],
                    updates: ["UA Flow第4世代採用", "アッパーの耐久性向上", "サイドサポート強化"]
                }
            ]
        },
        Asics: {
            "GLIDE NOVA": [
                {
                    id: "glidenova4", name: "GLIDE NOVA FF 4", price: 14300, img: "glidenova4.jpg",
                    colors: [{img: "glidenova4.jpg", color: "#00529b"}],
                    eval: [4, 4, 5, 3, 4],
                    desc: "ホールド性を高めるLOOP LACE構造のヒールロックが足首まわりを囲うように配置され、シューレースで引き上げることで履き口のホールド性を高め激しいプレーをサポート。FF BLAST PLUSをミッドソールに採用しバウンス性を追求。前足部外側に樹脂製のサポートパーツを配置することで横ブレを抑制し踏み込み時のパワーロスを抑えてジャンプをサポートします。日本人プレーヤー向けの安定感重視オールラウンドモデル。",
                    specs: { weight: "約340g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FF BLAST PLUS" },
                    tags: ["全ポジション", "部活生", "日本人向け", "バランス型"],
                    updates: ["LOOP LACE構造ヒールロック採用", "FF BLAST PLUSミッドソール採用", "前足部外側にTPUサポート配置", "横ブレ抑制設計"]
                }
            ],
            "SWIFTACE": [
                {
                    id: "swiftace", name: "SWIFTACE", price: 15400, img: "swiftace.jpg",
                    colors: [{img: "swiftace.jpg", color: "#00529b"}],
                    eval: [4, 4, 3, 5, 4],
                    desc: "スピードのあるオフェンス・ディフェンスでGAMEを支配するプレーヤー向け。ミッドソールはFLYTEFOAM（後方）とFLYTEFOAM PROPEL（前方）の2ピース構造を採用し、SPEEDTRUSSテクノロジーと組み合わせることで一歩目からの瞬間的なスピードとスピードの維持をサポート。ヒールに厚みを持たせることで前傾姿勢を促し自然と前に出やすい設計です。",
                    specs: { weight: "約310g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FLYTEFOAM＋FLYTEFOAM PROPEL" },
                    tags: ["PG", "SG", "スピード系", "前傾姿勢"],
                    updates: ["FLYTEFOAM／FLYTEFOAM PROPEL 2ピース構造採用", "SPEEDTRUSSテクノロジー搭載", "ヒール厚み増で前傾姿勢サポート"]
                }
            ],
            "NOVA SURGE": [
                {
                    id: "novasurge3", name: "NOVA SURGE 3", price: 17600, img: "novasurge3.jpg",
                    colors: [{img: "novasurge3.jpg", color: "#cc0000"}],
                    eval: [5, 4, 5, 2, 3],
                    desc: "パワー系・ビッグマン向けの安定感重視モデル。ミッドカット構造と外付けTPUカウンターが足元をしっかり固定し激しいコンタクトプレーをサポート。FF BLAST PLUSとGELクッションを組み合わせたミッドソールが着地衝撃を効率よく吸収しながら反発性も発揮。前足部外側のサポートパーツが横ブレを抑制しパワフルな踏み込みでもパワーロスを最小限に抑えます。",
                    specs: { weight: "約380g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ミッドカット", cushion: "FF BLAST PLUS＋GEL" },
                    tags: ["SF", "PF", "C", "パワー系", "高サポート"],
                    updates: ["ミッドカット構造強化", "FF BLAST PLUS×GELクッション", "外付けTPUカウンター採用", "アウトソールトラクション改良"]
                },
                {
                    id: "novasurge_low2", name: "NOVA SURGE LOW 2", price: 16500, img: "novasurge_low2.jpg",
                    colors: [{img: "novasurge_low2.jpg", color: "#1a1a8a"}],
                    eval: [5, 4, 4, 3, 3],
                    desc: "ホールド性を高めるLOOP LACE構造のヒールロックが、足首まわりを囲うように配置されシューレースで引き上げることで履き口のホールド性を高め激しいプレーをサポート。FF BLAST PLUSをミッドソールに採用しバウンス性を追求。前足部外側に樹脂製のサポートパーツを配置することで横ブレを抑制すると共に踏み込み時のパワーロスを抑えてジャンプをサポートする、NOVA SURGEシリーズのロー版モデルです。",
                    specs: { weight: "約350g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FF BLAST PLUS" },
                    tags: ["SF", "PF", "パワー系", "ロー版"],
                    updates: ["LOOP LACE構造ヒールロック採用", "FF BLAST PLUSミッドソール", "前足部外側TPUサポート配置"]
                }
            ],
            "UNPRE ARS": [
                {
                    id: "unprears3", name: "UNPRE ARS 3", price: 18700, img: "unprears3.jpg",
                    colors: [{img: "unprears3.jpg", color: "#c8102e"}],
                    eval: [4, 4, 5, 4, 3],
                    desc: "激しいサイドステップと素早い切り返しを持ち味にするプレーヤーのためのスタビリティモデル。TPU素材のサイドウォールとアッパー内部のサイドパネルが横方向の激しい動きをサポート。Propulsion Trussticがエネルギーロスを最小化し推進力を最大化。FF BLASTミッドソールが軽量かつ高反発のクッション性を提供します。日本人ガードの足型を徹底研究したミッドカットのスタビリティトップモデル。",
                    specs: { weight: "約340g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ミッドカット", cushion: "FF BLAST" },
                    tags: ["PG", "SG", "切り返し重視", "日本人向け", "ミッドカット"],
                    updates: ["TPUサイドウォール拡大", "Propulsion Trusstic改良", "FF BLASTアップデート"]
                },
                {
                    id: "unprears_low3", name: "UNPRE ARS LOW 3", price: 17600, img: "unprears_low3.jpg",
                    colors: [{img: "unprears_low3.jpg", color: "#cf4520"}],
                    eval: [4, 4, 4, 5, 3],
                    desc: "UNPRE ARS 3のロー版。激しいサイドステップと素早い切り返しに対応するスタビリティモデルを軽量化。TPU素材のサイドウォールとアッパー内部のサイドパネルが横方向の激しい動きをサポートし、Propulsion TrussticとFF BLASTミッドソールが推進力・反発性・軽量性を高次元で両立。日本人ガード向けに最適化されたローカットモデルです。",
                    specs: { weight: "約310g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FF BLAST" },
                    tags: ["PG", "SG", "切り返し重視", "軽量", "日本人向け"],
                    updates: ["ロー化による軽量性向上", "TPUサイドウォール継承", "Propulsion Trusstic搭載"]
                }
            ],
            "GELHOOP": [
                {
                    id: "gelhoop17", name: "GELHOOP V17", price: 19800, img: "gelhoop17.jpg",
                    colors: [{img: "gelhoop17.jpg", color: "#00529b"}],
                    eval: [4, 5, 4, 5, 2],
                    desc: "アシックスGELHOOPシリーズの最新モデル。軽量性とグリップ性能を高次元で両立しガード向けに最適化された日本製設計。FF BLASTミッドソールが軽量ながら高い反発性を発揮し素早いクロスオーバーやドリブル展開をサポート。GELクッションが着地衝撃を効率よく吸収し、ヘリンボーンパターンのアウトソールが多方向への鋭いトラクションを発揮します。",
                    specs: { weight: "約290g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FF BLAST＋GEL" },
                    tags: ["PG", "SG", "ガード", "軽量", "グリップ重視", "日本製"],
                    updates: ["FF BLAST採用で軽量化", "GELクッション位置最適化", "ヘリンボーントラクション改良"]
                }
            ],
            "GELFAIRY": [
                {
                    id: "ladygelfairy9", name: "LADY GEL-FAIRY 9", price: 13200, img: "ladygelfairy9.jpg",
                    colors: [{img: "ladygelfairy9.jpg", color: "#e8457a"}],
                    eval: [4, 3, 4, 4, 4],
                    desc: "女性プレーヤーに特化した設計のレディースバスケットボールシューズ。女性の足型に合わせたラストを採用しフィット感を最適化。GELクッションとFLYTEFOAMミッドソールの組み合わせが着地衝撃を効率よく吸収しながら軽量で快適な履き心地を提供。L.A.コンフォート機能が女性特有の足の骨格をサポートし長時間のプレーでも疲れにくい設計です。",
                    specs: { weight: "約260g (24.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FLYTEFOAM＋GEL" },
                    tags: ["女性向け", "レディース", "軽量", "全ポジション"],
                    updates: ["女性専用ラスト採用", "L.A.コンフォート機能搭載", "GELクッション位置調整"]
                }
            ]
        },
        NewBalance: {
            "TWO WXY": [
                {
                    id: "two_wxy_v4", name: "FuelCell TWO WXY v4", price: 19800, img: "two_wxy_v4.jpg",
                    colors: [{img: "two_wxy_v4.jpg", color: "#cf4520"}],
                    eval: [4, 4, 4, 4, 3],
                    desc: "<b>反発性とクッション性を高次元で融合。</b><br>FuelCellとFresh FoamXのダブルミッドソールが推進力と衝撃吸収を両立。トランジション重視のプレーヤーに最適です。",
                    specs: { weight: "約350g (28.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FuelCell + Fresh FoamX" },
                    tags: ["SF", "PF", "オールラウンド", "切り返し重視"],
                    updates: ["FuelCellとFresh FoamX両立", "アウトソールパターン改良", "サポート性向上"]
                }
            ]
        }
    },

    // ==================== VOLLEYBALL ====================
    volleyball: {
        Asics: {
            "METARISE": [
                {
                    id: "metarise", name: "METARISE", price: 22000, img: "metarise.jpg",
                    colors: [{img: "metarise.jpg", color: "#00529b"}],
                    eval: [5, 4, 4, 4, 2],
                    desc: "<b>アシックス最高峰のジャンプ特化モデル。</b><br>前足部のFLYTEFOAM PROPELが蹴り出し時の反発力を最大化。高いジャンプ力が求められるアタッカー・ブロッカー向けのトップモデルです。",
                    specs: { weight: "約290g (27.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "FLYTEFOAM PROPEL" },
                    tags: ["アタッカー", "ミドルブロッカー", "ジャンプ重視", "エリート"],
                    updates: ["FLYTEFOAM PROPEL前足部配置", "アウトソールグリップ強化", "軽量化"]
                }
            ],
            "NETBURNER BALLISTIC": [
                {
                    id: "netburner_ff4", name: "NETBURNER BALLISTIC FF 4", price: 17600, img: "netburner_ff4.jpg",
                    colors: [{img: "netburner_ff4.jpg", color: "#00529b"}],
                    eval: [4, 4, 4, 4, 3],
                    desc: "<b>素早い動きをサポートするセッター向けモデル。</b><br>柔軟なソールが多方向への素早い動き出しをサポート。日本人の足型に合った設計でフィット感も抜群です。",
                    specs: { weight: "約295g (27.0cm)", material: "合成繊維", cut: "ローカット", cushion: "FLYTEFOAM" },
                    tags: ["セッター", "リベロ", "俊敏性重視"],
                    updates: ["FLYTEFOAM採用", "アウトソール設計改良", "フィット感向上"]
                }
            ],
            "V-SWIFT FF": [
                {
                    id: "vswift_ff3", name: "V-SWIFT FF 3", price: 13200, img: "vswift_ff3.jpg",
                    colors: [{img: "vswift_ff3.jpg", color: "#00529b"}],
                    eval: [4, 4, 4, 5, 4],
                    desc: "軽量性とクッション性を備えたバランスモデル。素早い動きを求めるプレーヤーに向けた設計で部活生にも人気。",
                    specs: { weight: "約265g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "FLYTEFOAM" },
                    tags: ["全ポジション", "部活生", "バランス型"],
                    updates: ["軽量化", "グリップ性能向上", "フィット感改善"]
                }
            ],
            "GEL-ROCKET": [
                {
                    id: "gel_rocket12", name: "GEL-ROCKET 12", price: 7700, img: "gel_rocket12.jpg",
                    colors: [{img: "gel_rocket12.jpg", color: "#00529b"}],
                    eval: [3, 3, 3, 5, 5],
                    desc: "優れたクッション性とサポートを備えたエントリーモデル。GELクッションで着地衝撃を和らげ初心者でも安心。",
                    specs: { weight: "約330g (27.0cm)", material: "合成皮革＋合成繊維", cut: "ローカット", cushion: "GEL" },
                    tags: ["初心者", "練習用", "コスパ", "高耐久"],
                    updates: ["GELクッション採用", "アウトソール改良"]
                }
            ]
        },
        Mizuno: {
            "WAVE LIGHTNING": [
                {
                    id: "wlz7", name: "ウェーブライトニング Z7", price: 15400, img: "wlz7.jpg",
                    colors: [{img: "wlz7.jpg", color: "#333"}],
                    eval: [5, 4, 4, 4, 3],
                    desc: "<b>ジャンプにフォーカスしたスピードモデル。</b><br>MIZUNO ENERZY NXTが母指球下の反発性を最大化。ハーフブーティ構造で軽量性を維持しながら柔らかなフィット感を実現します。",
                    specs: { weight: "約300g (27.0cm)", material: "モノフィラメントメッシュ", cut: "ローカット", cushion: "MIZUNO ENERZY NXT" },
                    tags: ["アタッカー", "WS", "ジャンプ重視", "スピード"],
                    updates: ["MIZUNO ENERZY NXT採用", "ハーフブーティ構造採用", "軽量化"]
                }
            ],
            "WAVE MOMENTUM": [
                {
                    id: "wave_mom3", name: "ウェーブモーメンタム 3", price: 19800, img: "wave_mom3.jpg",
                    colors: [{img: "wave_mom3.jpg", color: "#333"}],
                    eval: [4, 5, 4, 5, 3],
                    desc: "<b>クッション性と安定性を両立したモーメンタム史上最高モデル。</b><br>MIZUNO ENERZY＋ウェーブプレートの組み合わせがジャンプをしっかりサポート。ミドルブロッカーに特におすすめです。",
                    specs: { weight: "約350g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ミドルカット", cushion: "MIZUNO ENERZY＋WAVE" },
                    tags: ["ミドルブロッカー", "MB", "安定性重視", "ミドルカット"],
                    updates: ["MIZUNO ENERZY改良版採用", "ウェーブプレート最適化", "ミドルカット強化"]
                }
            ],
            "WAVE DIMENSION": [
                {
                    id: "wave_dim", name: "ウェーブディメンション", price: 9900, img: "wave_dim.jpg",
                    colors: [{img: "wave_dim.jpg", color: "#333"}],
                    eval: [3, 4, 3, 4, 5],
                    desc: "MIZUNO ENERZYを搭載した幅広(2.5E)設計のバランスモデル。クッション性と反発性を兼ね備えたコスパの良い一足。",
                    specs: { weight: "約330g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "MIZUNO ENERZY" },
                    tags: ["全ポジション", "部活生", "幅広", "コスパ"],
                    updates: ["MIZUNO ENERZY採用", "幅広設計", "グリップ改善"]
                }
            ]
        },
        Nike: {
            "React Hyperset": [
                {
                    id: "hyperset2", name: "React Hyperset 2", price: 14300, img: "hyperset2.jpg",
                    colors: [{img: "hyperset2.jpg", color: "#111"}],
                    eval: [4, 4, 3, 4, 4],
                    desc: "<b>ナイキReactクッションが快適なプレーをサポート。</b><br>エネルギーリターンの高いReactフォームが長時間の試合でも疲れにくい設計。海外選手にも人気のモデルです。",
                    specs: { weight: "約320g (27.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "React Foam" },
                    tags: ["全ポジション", "バランス型", "クッション重視"],
                    updates: ["React Foam改良", "アウトソール改良", "フィット感向上"]
                }
            ]
        },
        Adidas: {
            "Crazyflight": [
                {
                    id: "crazyflight3", name: "Crazyflight 3", price: 16500, img: "crazyflight3.jpg",
                    colors: [{img: "crazyflight3.jpg", color: "#000"}],
                    eval: [4, 4, 4, 4, 3],
                    desc: "<b>軽量性とグリップ性能を両立したアディダスのバレーシューズ。</b><br>Lightstrike PROが高い反発性を提供。アッパーの3Dプリントが軽量ながら高いサポート性を実現します。",
                    specs: { weight: "約310g (27.0cm)", material: "合成繊維＋3Dプリント", cut: "ローカット", cushion: "Lightstrike PRO" },
                    tags: ["アタッカー", "セッター", "軽量重視"],
                    updates: ["Lightstrike PRO採用", "3Dプリントアッパー採用", "グリップ強化"]
                }
            ]
        },
        Yonex: {
            "Power Cushion 65Z": [
                {
                    id: "pc65z3", name: "パワークッション 65Z3", price: 16500, img: "pc65z3.jpg",
                    colors: [{img: "pc65z3.jpg", color: "#e60012"}],
                    eval: [4, 5, 4, 4, 3],
                    desc: "<b>プロに愛される定番モデルの最新版。</b><br>ヨネックス独自のパワークッションがジャンプの衝撃を吸収し強力な反発力を提供。高いグリップ力と安定性でポジションを選びません。",
                    specs: { weight: "約290g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "パワークッション" },
                    tags: ["全ポジション", "プロ愛用", "グリップ重視"],
                    updates: ["パワークッション改良", "アウトソールパターン更新", "サポート強化"]
                }
            ]
        }
    },

    // ==================== TENNIS ====================
    tennis: {
        Asics: {
            "GEL-RESOLUTION": [
                {
                    id: "gel_res9", name: "GEL-RESOLUTION 9", price: 16500, img: "gel_res9.jpg",
                    colors: [{img: "gel_res9.jpg", color: "#00529b"}],
                    eval: [3, 5, 4, 4, 3],
                    desc: "<b>安定性とグリップ性能に特化した競技者向けトップモデル。</b><br>PEXフレームが切り返し時の横ブレを強力に抑制。GELクッションが着地衝撃を吸収し長時間の試合を快適にサポートします。",
                    specs: { weight: "約330g (27.0cm)", material: "合成皮革＋メッシュ", surface: "オールコート / オムニクレー", cushion: "GEL + FF BLAST" },
                    tags: ["ベースライナー", "安定性重視", "競技者向け"],
                    updates: ["PEXフレーム採用", "GEL配置最適化", "アウトソール改良"]
                }
            ],
            "COURT FF": [
                {
                    id: "court_ff3", name: "COURT FF 3", price: 14300, img: "court_ff3.jpg",
                    colors: [{img: "court_ff3.jpg", color: "#00529b"}],
                    eval: [4, 4, 4, 4, 3],
                    desc: "<b>軽量性と安定性を両立したバランスモデル。</b><br>FF BLASTクッションが軽快なフットワークをサポート。ハードコートからオムニクレーまで幅広く対応します。",
                    specs: { weight: "約290g (27.0cm)", material: "合成繊維＋メッシュ", surface: "オールコート", cushion: "FF BLAST" },
                    tags: ["オールラウンド", "軽量重視", "週末プレーヤー"],
                    updates: ["FF BLAST採用", "アウトソールパターン改良", "フィット感向上"]
                }
            ],
            "GEL-CHALLENGER": [
                {
                    id: "gel_chal15", name: "GEL-CHALLENGER 15", price: 11000, img: "gel_chal15.jpg",
                    colors: [{img: "gel_chal15.jpg", color: "#00529b"}],
                    eval: [3, 4, 4, 5, 4],
                    tags: ["部活生", "初中級者", "耐久性重視", "コスパ"],
                    desc: "耐久性に優れたエントリー競技モデル。GELクッションとオールコート対応ソールで安心してプレーできます。",
                    specs: { weight: "約340g (27.0cm)", material: "合成皮革＋メッシュ", surface: "オールコート / オムニクレー", cushion: "GEL" },
                    updates: ["GEL配置改良", "耐久性向上", "グリップ改善"]
                }
            ]
        },
        Yonex: {
            "ECLIPSION": [
                {
                    id: "eclipsion5", name: "パワークッション エクリプション 5", price: 14300, img: "eclipsion5.jpg",
                    colors: [{img: "eclipsion5.jpg", color: "#e60012"}],
                    eval: [3, 5, 4, 4, 3],
                    desc: "<b>安定感とグリップ性能に特化した競技系テニスシューズ。</b><br>3Dパワーカーボンドライブが切り返し時のねじれを抑え反発性能を向上。側面補強パーツが安定感をアップします。",
                    specs: { weight: "約340g (27.0cm)", material: "合成繊維＋人工皮革", surface: "オムニクレー / オールコート", cushion: "パワークッション" },
                    tags: ["競技者", "ベースライナー", "安定性特化"],
                    updates: ["3Dパワーカーボンドライブ採用", "側面補強パーツ追加", "軽量化"]
                }
            ],
            "SONICAGE": [
                {
                    id: "sonicage", name: "パワークッション ソニケージ", price: 11000, img: "sonicage.jpg",
                    colors: [{img: "sonicage.jpg", color: "#e60012"}],
                    eval: [4, 4, 4, 4, 4],
                    desc: "<b>軽さ・安定感・耐久性のバランスが素晴らしい人気シリーズ。</b><br>4Eまで対応するワイドラインナップと幅広い価格帯で、週末プレーヤーから競技者まで支持を受けます。",
                    specs: { weight: "約310g (27.0cm)", material: "合成繊維", surface: "オムニクレー / オールコート / カーペット", cushion: "パワークッション" },
                    tags: ["オールラウンド", "週末プレーヤー", "コスパ", "幅広対応"],
                    updates: ["パワークッション改良", "アウトソール更新", "幅展開拡大"]
                }
            ],
            "AD-ACCEL": [
                {
                    id: "ad_accel", name: "パワークッション アドアクセル", price: 13200, img: "ad_accel.jpg",
                    colors: [{img: "ad_accel.jpg", color: "#e60012"}],
                    eval: [5, 4, 4, 4, 3],
                    desc: "<b>高速フットワークのしやすさを重視した最上位スピード系。</b><br>つま先が上がった設計で前傾姿勢を取りやすく、一歩目の踏み出しをサポート。エクリプションより軽量でスピード重視プレーヤー向け。",
                    specs: { weight: "約295g (27.0cm)", material: "合成繊維＋メッシュ", surface: "オムニクレー / オールコート", cushion: "パワークッション" },
                    tags: ["スピード重視", "前衛", "アグレッシブプレーヤー"],
                    updates: ["つま先設計の最適化", "グリップパターン改良", "サポート強化"]
                }
            ]
        },
        Wilson: {
            "RUSH PRO": [
                {
                    id: "rush_pro45", name: "RUSH PRO V4.5", price: 16500, img: "rush_pro45.jpg",
                    colors: [{img: "rush_pro45.jpg", color: "#d00"}],
                    eval: [4, 4, 5, 4, 3],
                    desc: "<b>「靴下のような履き心地」で定評のフィット感特化モデル。</b><br>伸縮性アッパーが足全体をソックスのように包み込み、動きやすさと一体感を実現。ミッドソール設計が重心移動をスムーズにサポートします。",
                    specs: { weight: "約310g (27.0cm)", material: "合成繊維＋メッシュ", surface: "オールコート / オムニクレー", cushion: "Molded EVA" },
                    tags: ["オールラウンド", "フィット重視", "競技者向け"],
                    updates: ["メッシュ配置拡大で通気性向上", "ミッドソール設計改良", "ヒールホールド強化"]
                }
            ]
        },
        Babolat: {
            "Jet Mach": [
                {
                    id: "jet_mach3", name: "Jet Mach 3", price: 14960, img: "jet_mach3.jpg",
                    colors: [{img: "jet_mach3.jpg", color: "#1a1a2e"}],
                    eval: [5, 3, 4, 3, 3],
                    desc: "<b>バボラ最軽量のスピード特化モデル。</b><br>Michelin製アウトソールが優れたグリップと耐久性を両立。軽量設計でコートを縦横無尽に動き回りたいプレーヤーに最適です。",
                    specs: { weight: "約265g (27.0cm)", material: "合成繊維", surface: "オールコート", cushion: "Ortholite" },
                    tags: ["スピード重視", "軽量特化", "フィット重視"],
                    updates: ["Michelin社製アウトソール採用", "軽量化", "通気性向上"]
                }
            ]
        },
        Mizuno: {
            "WAVE EXCEED TOUR": [
                {
                    id: "wave_exc_tour6", name: "ウェーブエクシードツアー 6", price: 15400, img: "wave_exc_tour6.jpg",
                    colors: [{img: "wave_exc_tour6.jpg", color: "#333"}],
                    eval: [3, 4, 5, 4, 3],
                    desc: "<b>フィット感とサポート性に優れたミズノのフラッグシップ。</b><br>ウェーブプレートが横方向のブレを抑制しながらも柔軟な動きを実現。日本人の足型に合った設計でオムニクレーでも安定したプレーが可能です。",
                    specs: { weight: "約330g (27.0cm)", material: "合成皮革＋メッシュ", surface: "オムニクレー / オールコート", cushion: "MIZUNO WAVE" },
                    tags: ["ベースライナー", "安定性重視", "日本人向け"],
                    updates: ["ウェーブプレート最適化", "アッパーフィット感向上", "耐久性強化"]
                }
            ]
        }
    },

    // ==================== BADMINTON ====================
    badminton: {
        Yonex: {
            "POWER CUSHION 65Z": [
                {
                    id: "pc65z_bad", name: "パワークッション 65Z3", price: 16500, img: "pc65z_bad.jpg",
                    colors: [{img: "pc65z_bad.jpg", color: "#e60012"}],
                    eval: [4, 5, 5, 4, 3],
                    desc: "<b>20年以上愛されるプロ御用達の定番モデル。</b><br>ヨネックス独自のパワークッションが12mの高さから落とした生卵を割らないほどの衝撃吸収性を発揮。高いグリップ力と安定性でシングルス・ダブルス両方に対応します。",
                    specs: { weight: "約265g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "パワークッション" },
                    tags: ["全レベル", "プロ愛用", "安定性重視"],
                    updates: ["パワークッション改良", "グリップパターン更新", "フィット感向上"]
                }
            ],
            "AERUS DASH": [
                {
                    id: "aerus_dash5", name: "パワークッション エアラスダッシュ 5", price: 13200, img: "aerus_dash5.jpg",
                    colors: [{img: "aerus_dash5.jpg", color: "#e60012"}],
                    eval: [5, 5, 4, 4, 3],
                    desc: "<b>YONEX史上最軽量クラスのスピード特化モデル。</b><br>超軽量設計で素早いフットワークをサポート。4Eワイド設計で足幅が広めの方にも対応します。",
                    specs: { weight: "約245g (27.0cm)", material: "合成繊維", cut: "ローカット", cushion: "パワークッション" },
                    tags: ["スピード重視", "軽量特化", "幅広対応"],
                    updates: ["軽量化", "4Eワイド設計採用", "グリップ改善"]
                }
            ],
            "ECLIPSION Z": [
                {
                    id: "eclipsion_z3", name: "パワークッション エクリプションZ3", price: 18700, img: "eclipsion_z3.jpg",
                    colors: [{img: "eclipsion_z3.jpg", color: "#e60012"}],
                    eval: [4, 5, 4, 5, 2],
                    desc: "<b>安定性とクッション性能に特化したトップモデル。</b><br>ミッドカット設計で足首をしっかりサポート。激しい動きでも足がブレない安定感はトップ選手からも高い評価を受けています。",
                    specs: { weight: "約310g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ミドルカット", cushion: "パワークッション PLUS" },
                    tags: ["上級者", "安定性特化", "ミドルカット"],
                    updates: ["パワークッションPLUS採用", "ミッドカットサポート強化", "耐久性向上"]
                }
            ],
            "STRIDER": [
                {
                    id: "strider_flow", name: "パワークッション ストライダーフロー", price: 8800, img: "strider_flow.jpg",
                    colors: [{img: "strider_flow.jpg", color: "#e60012"}],
                    eval: [3, 3, 3, 4, 5],
                    desc: "パワークッションを搭載したエントリーモデル。クセがなく初めての一足として最適。クッション性と床へのグリップをバランス良く備えています。",
                    specs: { weight: "約285g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "パワークッション" },
                    tags: ["初心者", "入門モデル", "コスパ"],
                    updates: ["パワークッション採用", "アウトソールグリップ改善"]
                }
            ]
        },
        Mizuno: {
            "WAVE CLAW": [
                {
                    id: "wave_claw_neo2", name: "ウェーブクロー NEO 2", price: 11000, img: "wave_claw_neo2.jpg",
                    colors: [{img: "wave_claw_neo2.jpg", color: "#333"}],
                    eval: [4, 4, 4, 4, 4],
                    desc: "<b>軽量性とクッション性を両立したミズノのスタンダードモデル。</b><br>MIZUNO ENERZYが優れた反発性を提供し、素早いフットワークをサポート。日本人の足型に合った2E設計で幅広く対応します。",
                    specs: { weight: "約255g (27.0cm)", material: "合成繊維", cut: "ローカット", cushion: "MIZUNO ENERZY" },
                    tags: ["中級者", "バランス型", "日本人向け"],
                    updates: ["MIZUNO ENERZY採用", "フィット感向上", "グリップ改良"]
                }
            ],
            "GATE SKY": [
                {
                    id: "gate_sky", name: "GATE SKY", price: 7700, img: "gate_sky.jpg",
                    colors: [{img: "gate_sky.jpg", color: "#333"}],
                    eval: [4, 3, 4, 3, 5],
                    desc: "軽さとフィット感を重視したミズノのエントリーモデル。2E設計でスリムな足の方も安心。軽量性を求めるプレーヤーに最適です。",
                    specs: { weight: "約230g (27.0cm)", material: "合成繊維", cut: "ローカット", cushion: "U4icX" },
                    tags: ["初心者", "軽量重視", "コスパ"],
                    updates: ["U4icXクッション採用", "軽量化", "フィット改善"]
                }
            ]
        },
        Asics: {
            "GEL-BLADE": [
                {
                    id: "gel_blade9", name: "GEL-BLADE 9", price: 13200, img: "gel_blade9.jpg",
                    colors: [{img: "gel_blade9.jpg", color: "#00529b"}],
                    eval: [3, 4, 4, 5, 4],
                    desc: "<b>GELクッションで安定感と衝撃吸収性に優れたモデル。</b><br>日本人の足型にフィットしやすい設計で幅広の足にも対応。初めての一足として安心できる万能モデルです。",
                    specs: { weight: "約285g (27.0cm)", material: "合成繊維＋人工皮革", cut: "ローカット", cushion: "GEL" },
                    tags: ["初中級者", "幅広対応", "安定性重視"],
                    updates: ["GELクッション配置改良", "アウトソールグリップ向上", "サポート強化"]
                }
            ]
        },
        Victor: {
            "A920": [
                {
                    id: "victor_a920", name: "A-920", price: 12100, img: "victor_a920.jpg",
                    colors: [{img: "victor_a920.jpg", color: "#e60026"}],
                    eval: [4, 4, 3, 4, 4],
                    desc: "<b>コストパフォーマンスに優れたVICTORのスタンダードモデル。</b><br>軽量メッシュアッパーと高グリップアウトソールの組み合わせで快適なプレーを実現。世界レベルの選手も使用するブランドのコスパモデルです。",
                    specs: { weight: "約265g (27.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "EVA" },
                    tags: ["中級者", "コスパ重視", "バランス型"],
                    updates: ["アウトソールパターン改良", "アッパー素材更新"]
                }
            ]
        },
        "Li-Ning": {
            "ULTRA IV": [
                {
                    id: "lining_ultra4", name: "ULTRA IV", price: 14300, img: "lining_ultra4.jpg",
                    colors: [{img: "lining_ultra4.jpg", color: "#d4001a"}],
                    eval: [5, 4, 3, 4, 3],
                    desc: "<b>世界トップ選手も愛用するLi-Ningの軽量フラッグシップ。</b><br>李寧独自のクラウドフォームクッションが優れた反発性を提供。超軽量設計で爆発的なフットワークをサポートします。",
                    specs: { weight: "約230g (27.0cm)", material: "合成繊維＋メッシュ", cut: "ローカット", cushion: "Cloud Foam" },
                    tags: ["上級者", "軽量特化", "スピード重視"],
                    updates: ["Cloud Foam採用", "軽量化", "グリップ改良"]
                }
            ]
        }
    }
};

// ============================================================
//  STATE
// ============================================================
let currentSport = null;
let currentBrand = null;
let techModalOpen = false;
let compareList = []; // [{sport, brand, series, id}]

// ============================================================
//  COMPARE
// ============================================================
function compareKey(c) { return `${c.sport}/${c.brand}/${c.series}/${c.id}`; }

function findShoe(c) {
    return shoeData[c.sport]?.[c.brand]?.[c.series]?.find(s => s.id === c.id);
}

function isInCompare(sport, brand, series, id) {
    return compareList.some(c => compareKey(c) === compareKey({sport, brand, series, id}));
}

function toggleCompare(sport, brand, series, id, event) {
    if (event) event.stopPropagation();
    const key = compareKey({sport, brand, series, id});
    const idx = compareList.findIndex(c => compareKey(c) === key);
    if (idx >= 0) {
        compareList.splice(idx, 1);
    } else {
        // 異なるスポーツが選択されていたらクリア
        if (compareList.length > 0 && compareList[0].sport !== sport) {
            if (!confirm('別スポーツのスパイクを選び直しますか？現在の選択はクリアされます。')) return;
            compareList = [];
        }
        if (compareList.length >= 2) compareList.shift(); // 古いものから捨てる
        compareList.push({sport, brand, series, id});
    }
    updateCompareBar();
    refreshCompareButtons();
}

function clearCompare() { compareList = []; updateCompareBar(); refreshCompareButtons(); }

function updateCompareBar() {
    const bar = document.getElementById('compare-bar');
    if (!bar) return;
    if (compareList.length === 0) { bar.style.display = 'none'; return; }
    bar.style.display = 'flex';
    const itemsHtml = compareList.map(c => {
        const shoe = findShoe(c);
        return `<div class="compare-bar-item">
            <span>${shoe?.name || c.id}</span>
            <button onclick="toggleCompare('${c.sport}','${c.brand}','${c.series}','${c.id}',event)" title="解除">×</button>
        </div>`;
    }).join('');
    document.getElementById('compare-bar-items').innerHTML = itemsHtml;
    const goBtn = document.getElementById('compare-bar-go');
    goBtn.disabled = compareList.length !== 2;
    goBtn.textContent = compareList.length === 2 ? '比較する →' : `あと${2 - compareList.length}つ選んでください`;
}

function refreshCompareButtons() {
    document.querySelectorAll('[data-compare-btn]').forEach(btn => {
        const k = btn.dataset.compareBtn;
        const [sport, brand, series, id] = k.split('|');
        const active = isInCompare(sport, brand, series, id);
        btn.classList.toggle('active', active);
        btn.textContent = active ? '✓ 比較中' : '＋ 比較';
    });
}

function showCompare() {
    if (compareList.length !== 2) return;
    history.pushState({view: 'compare', items: compareList.slice()}, "compare", "#compare");
    renderCompare();
}

// ============================================================
//  HISTORY & NAVIGATION
// ============================================================
window.onpopstate = function(event) {
    if (techModalOpen) { closePopup(); return; }
    if (event.state) {
        const s = event.state;
        if (s.view === 'top') renderTop();
        else if (s.view === 'sport') renderSportHome(s.sport);
        else if (s.view === 'brand') renderBrand(s.sport, s.brand);
        else if (s.view === 'detail') renderDetail(s.sport, s.brand, s.series, s.id);
        else if (s.view === 'compare') { compareList = s.items.slice(); renderCompare(); }
    } else {
        renderTop();
    }
};

window.addEventListener('hashchange', function() {
    const hash = location.hash.replace('#', '');
    if (!hash || hash === 'top') { renderTop(); return; }
    restoreFromHash(hash);
});

window.onload = function() {
    const hash = location.hash.replace('#', '');
    if (!hash || hash === 'top') {
        history.replaceState({view: 'top'}, "Top", "#top");
        renderTop();
    } else {
        restoreFromHash(hash);
    }
};

function restoreFromHash(hash) {
    if (hash === 'top') { renderTop(); return; }
    const sports = Object.keys(shoeData);
    for (const sport of sports) {
        if (hash === sport) {
            history.replaceState({view: 'sport', sport}, sport, "#" + sport);
            renderSportHome(sport);
            return;
        }
        const brands = Object.keys(shoeData[sport]);
        for (const brand of brands) {
            if (hash === sport + '_' + brand) {
                history.replaceState({view: 'brand', sport, brand}, brand, "#" + hash);
                renderBrand(sport, brand);
                return;
            }
            const series = shoeData[sport][brand];
            for (const seriesName of Object.keys(series)) {
                const shoe = series[seriesName].find(s => s.id === hash);
                if (shoe) {
                    history.replaceState({view: 'detail', sport, brand, series: seriesName, id: hash}, hash, "#" + hash);
                    renderDetail(sport, brand, seriesName, hash);
                    return;
                }
            }
        }
    }
    history.replaceState({view: 'top'}, "Top", "#top");
    renderTop();
}

function showTop() {
    history.pushState({view: 'top'}, "Top", "#top");
    renderTop();
}

function showSportHome(sport) {
    history.pushState({view: 'sport', sport}, sport, "#" + sport);
    renderSportHome(sport);
}

function showBrandPage(sport, brand) {
    const hashKey = sport + '_' + brand;
    history.pushState({view: 'brand', sport, brand}, brand, "#" + hashKey);
    renderBrand(sport, brand);
}

function showDetail(sport, brand, series, id, replace) {
    const state = {view: 'detail', sport, brand, series, id};
    if (replace) {
        history.replaceState(state, id, "#" + id);
    } else {
        history.pushState(state, id, "#" + id);
    }
    renderDetail(sport, brand, series, id);
}

function goBack() { window.history.back(); }

// ============================================================
//  RENDERERS
// ============================================================
function hideAllViews() {
    ['top-view', 'sport-home-view', 'brand-view', 'detail-view', 'compare-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function renderTop() {
    hideAllViews();
    document.getElementById('top-view').style.display = 'block';
    currentSport = null; currentBrand = null;
}

function renderSportHome(sport) {
    hideAllViews();
    currentSport = sport;
    const meta = sportMeta[sport];
    const hero = document.getElementById('sport-hero-banner');
    hero.className = 'sport-hero ' + meta.heroClass;
    document.getElementById('sport-hero-title').innerText = meta.label;
    document.getElementById('sport-hero-sub').innerText = meta.sub;

    const grid = document.getElementById('brand-grid');
    grid.innerHTML = '';
    const brands = sportBrands[sport] || [];
    brands.forEach(brand => {
        const logoSrc = brandLogoMap[brand];
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.onclick = () => showBrandPage(sport, brand);
        if (logoSrc) {
            const img = document.createElement('img');
            img.src = logoSrc;
            img.alt = brand;
            img.className = 'brand-logo-img';
            img.onerror = function() {
                this.remove();
                const span = document.createElement('span');
                span.style.cssText = 'font-weight:900;font-size:14px;';
                span.textContent = brand;
                card.appendChild(span);
            };
            card.appendChild(img);
        } else {
            const span = document.createElement('span');
            span.style.cssText = 'font-weight:900;font-size:14px;';
            span.textContent = brand;
            card.appendChild(span);
        }
        grid.appendChild(card);
    });
    document.getElementById('sport-home-view').style.display = 'block';
}

function renderBrand(sport, brand) {
    hideAllViews();
    currentSport = sport; currentBrand = brand;
    document.getElementById('brand-title').innerText = brand + " シリーズ一覧";
    const content = document.getElementById('brand-content');
    content.innerHTML = "";
    const seriesData = shoeData[sport]?.[brand];
    if (!seriesData) {
        content.innerHTML = "<p style='padding:40px;text-align:center;color:#888;'>現在、このブランドのデータは準備中です。</p>";
        document.getElementById('brand-view').style.display = 'block';
        return;
    }
    const imgDir = sportMeta[sport].imgDir;
    for (let series in seriesData) {
        let html = `<div class="series-section"><h3>${series}</h3><div class="spike-scroll-wrapper">`;
        if (sport === 'soccer') {
            // 品名でグループ化（複数グレードを1カードにまとめる）
            const lineups = {};
            seriesData[series].forEach(shoe => {
                const lineup = getLineup(shoe);
                if (!lineups[lineup]) lineups[lineup] = [];
                lineups[lineup].push(shoe);
            });
            for (let lineup in lineups) {
                const shoes = lineups[lineup].slice().sort((a, b) => b.price - a.price);
                const top = shoes[0];
                const priceLabel = shoes.length > 1
                    ? `¥${shoes[shoes.length-1].price.toLocaleString()} 〜 ¥${top.price.toLocaleString()}`
                    : `¥${top.price.toLocaleString()}`;
                const gradeBadge = shoes.length > 1 ? ` <span class="grade-badge">${shoes.length}グレード</span>` : '';
                const cmpKey = `${sport}|${brand}|${series}|${top.id}`;
                const cmpActive = isInCompare(sport, brand, series, top.id);
                html += `<div class="spike-item" onclick="showDetail('${sport}','${brand}','${series}','${top.id}')">
                    <h4>${lineup}${gradeBadge}</h4>
                    <p>${priceLabel}</p>
                    <button class="compare-toggle ${cmpActive ? 'active' : ''}" data-compare-btn="${cmpKey}" onclick="toggleCompare('${sport}','${brand}','${series}','${top.id}',event)">${cmpActive ? '✓ 比較中' : '＋ 比較'}</button>
                </div>`;
            }
        } else {
            seriesData[series].forEach(shoe => {
                const cmpKey = `${sport}|${brand}|${series}|${shoe.id}`;
                const cmpActive = isInCompare(sport, brand, series, shoe.id);
                html += `<div class="spike-item" onclick="showDetail('${sport}','${brand}','${series}','${shoe.id}')">
                    <h4>${shoe.name}</h4>
                    <p>¥${shoe.price.toLocaleString()}</p>
                    <button class="compare-toggle ${cmpActive ? 'active' : ''}" data-compare-btn="${cmpKey}" onclick="toggleCompare('${sport}','${brand}','${series}','${shoe.id}',event)">${cmpActive ? '✓ 比較中' : '＋ 比較'}</button>
                </div>`;
            });
        }
        content.innerHTML += html + `</div></div>`;
    }
    document.getElementById('brand-view').style.display = 'block';
    updateCompareBar();
}

function renderDetail(sport, brand, series, id) {
    hideAllViews();
    currentSport = sport; currentBrand = brand;
    const seriesData = shoeData[sport]?.[brand]?.[series];
    if (!seriesData) return;
    const shoe = seriesData.find(s => s.id === id);
    if (!shoe) return;

    document.getElementById('detail-title').innerText = shoe.name;
    const priceEl = document.getElementById('detail-price');
    if (priceEl) priceEl.innerText = `¥${shoe.price.toLocaleString()}（税込）`;
    document.getElementById('shoe-description').innerHTML = linkifyTech(shoe.desc);

    // 詳細ページの比較ボタン
    const detailCmpBtn = document.getElementById('detail-compare-btn');
    if (detailCmpBtn) {
        const active = isInCompare(sport, brand, series, id);
        detailCmpBtn.dataset.compareBtn = `${sport}|${brand}|${series}|${id}`;
        detailCmpBtn.className = 'compare-toggle' + (active ? ' active' : '');
        detailCmpBtn.textContent = active ? '✓ 比較中' : '＋ 比較に追加';
        detailCmpBtn.onclick = (e) => toggleCompare(sport, brand, series, id, e);
    }

    // スペック表（specsのキーを日本語に変換）
    const specLabels = { weight: "重量", material: "アッパー", ground: "対応環境", cut: "カット", cushion: "クッション", surface: "対応コート" };
    const specsTable = document.getElementById('shoe-specs-table');
    specsTable.innerHTML = Object.entries(shoe.specs).map(([k, v]) =>
        `<tr><th>${specLabels[k] || k}</th><td>${v}</td></tr>`
    ).join('');

    document.getElementById('recommend-tags').innerHTML = (shoe.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('shoe-updates').innerHTML = (shoe.updates || []).map(u => `<li>${u}</li>`).join('') || "<li>（情報なし）</li>";

    // グレード切替（サッカーで複数グレードがある場合のみ、各セクションヘッダーに配置）
    const switcherSlots = document.querySelectorAll('[data-switcher]');
    let switcherHtml = "";
    if (sport === 'soccer') {
        const lineup = getLineup(shoe);
        const sameLineup = seriesData.filter(s => getLineup(s) === lineup);
        if (sameLineup.length > 1) {
            const sorted = sameLineup.slice().sort((a, b) => b.price - a.price);
            switcherHtml = sorted.map(s => {
                const grade = getGrade(s) || s.name;
                const isActive = s.id === shoe.id;
                return `<button class="grade-btn-inline ${isActive ? 'active' : ''}" onclick="showDetail('${sport}','${brand}','${series}','${s.id}',true)">${grade}</button>`;
            }).join('');
        }
    }
    switcherSlots.forEach(slot => { slot.innerHTML = switcherHtml; });

    drawChart(shoe.eval, sport);
    document.getElementById('detail-view').style.display = 'block';
    updateCompareBar();
}

// ============================================================
//  RENDER COMPARE
// ============================================================
function renderCompare() {
    if (compareList.length !== 2) return;
    hideAllViews();
    const shoes = compareList.map(c => ({c, shoe: findShoe(c)}));
    if (shoes.some(x => !x.shoe)) return;

    const specLabels = { weight: "重量", material: "アッパー", ground: "対応環境", cut: "カット", cushion: "クッション", surface: "対応コート" };
    const colsHtml = shoes.map((x, i) => {
        const {c, shoe} = x;
        const specsRows = Object.entries(shoe.specs).map(([k,v]) =>
            `<tr><th>${specLabels[k]||k}</th><td>${v}</td></tr>`).join('');
        const tags = (shoe.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
        const updates = (shoe.updates || []).map(u => `<li>${u}</li>`).join('') || '<li>（情報なし）</li>';
        return `<div class="compare-col">
            <div class="compare-col-header">
                <h2>${shoe.name}</h2>
                <p class="compare-price">¥${shoe.price.toLocaleString()}</p>
                <button class="compare-toggle active" onclick="removeFromCompareAndReturn('${c.sport}','${c.brand}','${c.series}','${c.id}')">✕ この商品を解除</button>
            </div>
            <div class="chart-box">
                <div class="section-header"><h3>Performance Chart</h3></div>
                <div id="compare-chart-${i}"></div>
            </div>
            <div class="specs-box">
                <div class="section-header"><h3>Specifications</h3></div>
                <table>${specsRows}</table>
            </div>
            <div class="desc-box">
                <div class="section-header"><h3>Product Analysis</h3></div>
                <p>${linkifyTech(shoe.desc)}</p>
                <div class="tag-container">${tags}</div>
            </div>
            <div class="update-box">
                <div class="section-header"><h4>Evolution <small>前作からの進化点</small></h4></div>
                <ul>${updates}</ul>
            </div>
        </div>`;
    }).join('');

    document.getElementById('compare-container').innerHTML = colsHtml;
    document.getElementById('compare-view').style.display = 'block';

    // チャート描画
    shoes.forEach((x, i) => drawChart(x.shoe.eval, x.c.sport, `compare-chart-${i}`));
    updateCompareBar();
}

function removeFromCompareAndReturn(sport, brand, series, id) {
    toggleCompare(sport, brand, series, id);
    if (compareList.length < 2) {
        // 1つになったら一覧に戻る
        history.back();
    }
}

// ============================================================
//  RADAR CHART
// ============================================================
function drawChart(scores, sport, targetId = 'radar-chart-area') {
    const labels = chartConfig[sport]?.labels || ["項目1","項目2","項目3","項目4","項目5"];
    const size = 340;
    const center = size / 2;
    const maxRadius = 90;
    const levels = 5;
    const n = labels.length;
    const startAngle = -Math.PI / 2;
    const step = (Math.PI * 2) / n;

    function getPoint(level, index) {
        const angle = startAngle + step * index;
        const r = (level / levels) * maxRadius;
        return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
    }

    function polygonPath(level) {
        return Array.from({length: n}, (_, i) => {
            const p = getPoint(level, i);
            return `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
        }).join(' ') + ' Z';
    }

    let gridLines = '';
    for (let lv = 1; lv <= levels; lv++) {
        const dash = lv < levels ? 'stroke-dasharray="4,3"' : '';
        gridLines += `<path d="${polygonPath(lv)}" fill="none" stroke="#ddd" stroke-width="1" ${dash}/>`;
    }

    let axisLines = Array.from({length: n}, (_, i) => {
        const p = getPoint(levels, i);
        return `<line x1="${center}" y1="${center}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#ccc" stroke-width="1"/>`;
    }).join('');

    const scorePath = scores.map((s, i) => {
        const p = getPoint(s, i);
        return `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
    }).join(' ') + ' Z';

    let dots = '', nums = '';
    scores.forEach((s, i) => {
        const p = getPoint(s, i);
        const angle = startAngle + step * i;
        // 数値は常にスコア頂点から外側に14px固定（スコアに関わらず頂点の近く）
        const offset = 14;
        const nx = p.x + offset * Math.cos(angle);
        const ny = p.y + offset * Math.sin(angle);
        dots += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="#111"/>`;
        nums += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="bold" fill="#111">${s}</text>`;
    });

    const labelR = maxRadius + 58;
    let labelsSvg = '';
    for (let i = 0; i < n; i++) {
        const angle = startAngle + step * i;
        const lx = center + labelR * Math.cos(angle);
        const ly = center + labelR * Math.sin(angle);
        const lines = labels[i].split('\n');
        const lh = 13;
        const baseY = ly - ((lines.length - 1) * lh) / 2;
        const tspans = lines.map((line, li) =>
            `<tspan x="${lx.toFixed(1)}" ${li > 0 ? `dy="${lh}"` : `y="${baseY.toFixed(1)}"`}>${line}</tspan>`
        ).join('');
        labelsSvg += `<text text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="bold" fill="#333">${tspans}</text>`;
    }

    const target = document.getElementById(targetId);
    if (target) target.innerHTML =
        `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
            ${gridLines}${axisLines}
            <path d="${scorePath}" fill="rgba(0,0,0,0.12)" stroke="#111" stroke-width="2"/>
            ${dots}${nums}${labelsSvg}
        </svg>`;
}

// ============================================================
//  TECHNOLOGY GLOSSARY（クリックで説明ポップアップ）
// ============================================================
const techGlossary = {
    // アシックス
    "SILKYWRAP": "アシックス独自の人工皮革素材。雨による型崩れや過度な伸びを抑制しながら、素足に近い柔らかなフィット感を実現します。",
    "STABILITY SOLE": "アシックスのソール技術。内側へのねじれは許容しながら外側へのねじれを抑制することで、切り返し時の安定性と自然なプレーをサポートします。",
    "ZERO GLIDE インソール": "通常のカップインソールに比べ約2.5倍のグリップ性を発揮するミズノのインソール。シューズ内での足のズレを軽減します。",
    "ZERO GLIDE LITE": "通常カップインソールに比べて1.5倍のグリップ力を持つミズノのインソール。シューズ内の横ズレを軽減します（取り外し可）。",
    "Engineered Fit Last": "ミズノが開発した足型ラスト。足の形状に合わせたエンジニアリングにより、高いフィット感と素足感覚を実現します。",
    "BFレザー": "BareFoot Leather（ベアフットレザー）の略。人工素材でありながら柔らかく足馴染みが良く、フレームと組み合わせることで安定感も提供するミズノ独自素材。",
    "BareFoot Knit NEO": "ミズノのモレリアネオに採用されたニット素材アッパー。足首周りのホールド感に拘ったアッパーパターンで、シューズと足との一体化を追求します。",
    "β Mesh NEO": "ミズノが採用した日本製の軽量で柔らかいメッシュ素材。中足部に配置することで、ニットや天然皮革と組み合わせた更なる素足感覚を実現します。",
    "MIZUNO ENERZY xp": "「柔らかさ・反発性・軽量性」を追求した約5mm厚のミズノ製インソール。クッション性と反発性を兼ね備え、フットサルプレーヤーのパフォーマンスアップをサポートします。",
    // ナイキ
    "Zoom Air": "きつく伸ばされた高伸張性の繊維が編み込まれたナイキのクッション技術。足の着地ごとに繊維が圧縮されて衝撃を緩衝し、地面から爆発的かつパワフルな反発を感じることができます。",
    "エアズーム ストロベル": "Zoom Airバッグを中敷き（ストロベルボード）の直下に配置したナイキの革新的クッション技術。足の裏全体にZoom Airが直接くるため、驚くほどの弾力と衝撃吸収力を発揮します。",
    "フライニット": "ナイキの編み込みアッパー素材。非常に軽量で通気性が高く、足にぴったりとフィットします。",
    "NikeSkin": "柔らかく柔軟性に優れたメッシュ素材に薄いコーティングを施したナイキのアッパー素材。素足でプレーしているような感覚を提供します。",
    "Cyclone 360": "ナイキ ファントムシリーズ採用の円形トラクションパターン。スピーディーな踏み込みとピボットをサポートします。",
    "Fly Touch": "ナイキ ティエンポシリーズ採用のエンジニアードレザー。驚くほど柔らかく、濡れた状態でも乾いた状態でも安定したボールタッチを提供します。",
    "ZoomX": "ナイキのシューズテクノロジー史上最も軽く、柔らかく、反発性が優れているフォーム。航空宇宙産業の技術を用いた窒素注入フォームで、厚さがあっても軽量です。",
    "Nike React": "軽量性・耐久性・クッション性・高いエネルギーリターンの4つを同時に追求して開発されたナイキのフォーム素材。",
    "Cushlon 3.0": "軽量ながらクッション性に優れ、かかとからつま先への重心移動を自然にサポートするナイキのフォーム素材。",
    "Hybrid ZoomX": "柔らかすぎるZoomXをバスケット向けに安定させるため、他素材と組み合わせたナイキのシステム。ハードなラバーカップソール内に封入することで高速な動きでも安定します。",
    "IsoPlate": "ルカ・ドンチッチのシグネチャーシリーズに採用されている横方向の安定性を強化するTPUフレーム技術。反発性も高い。",
    "Flightwire": "中足部を包み込むケーブルによるナイキのサポート技術。丈夫ながら柔軟性があり、安定感と足を包み込むサポート性を提供します。",
    "Zoom Strobel": "Zoom Airバッグをシューズの中敷き直下に配置した技術。足の裏全体にZoom Airが直接くるため弾力と衝撃吸収力を発揮。4mmのAir Zoom Strobelがエネルギーリターンを生み出します。",
    // アディダス
    "CONTROLFRAME": "アディダス プレデターシリーズ採用のアッパーテクスチャー。無数の突起がボールを吸い付けるようにグリップし、ドリブル・パス・シュートの精度を向上させます。",
    "OT LEATHER": "アディダス コパシリーズ採用のカンガルーレザー加工。雨天時でも皮革の過度な伸びを防ぎ、長期間にわたって最高のタッチ感を維持します。",
    "Lightstrike": "アディダスの軽量ミッドソール素材。一般的なEVAより40%軽量でありながらBounceフォームと同等の反発力を保ち、着地時の横ブレが少ない安定性が特徴。",
    "Boost": "TPU（熱可塑性ポリウレタンエラストマー）を発泡させた小さなカプセルを連結させたアディダス独自のミッドソール素材。着地衝撃を効率よく吸収し、エネルギーを次の一歩への推進力へと変換。気温変化に強く一貫したパフォーマンスを発揮します。",
    // アンダーアーマー
    "UA Flow": "ラバーなしで高いグリップ力を発揮するアンダーアーマーの革新的アウトソール技術。軽量性と快適さを両立しながらコートへの粘着力を実現します。",
    "MICRO G": "ラバー成分をフォームに配合することで、高い弾力性と耐久性を発揮するアンダーアーマーの高反発クッションフォーム。",
    "Charged Cushioning": "アンダーアーマーの圧縮成型フォームクッション。反発力と快適性を兼ね備えながら、UA Flowと融合することで加速力を生み出します。",
    // ミズノ
    "MIZUNO ENERZY": "ミズノのクッション素材。高いクッション性と反発性を両立し、ジャンプの衝撃を和らげながら次の動きへのエネルギーを生み出します。",
    "MIZUNO ENERZY NXT": "MIZUNO ENERZYの最上位版。母指球下に配置することで反発性を最大化し、より高いジャンプをサポートします。",
    "MIZUNO WAVE": "ミズノ独自のウェーブ型プレート技術。横方向のブレを抑制しながら衝撃を分散し、優れた安定性とクッション性を提供します。",
    // アシックス（バスケ・バレー）
    "FLYTEFOAM": "アシックスの軽量フォーム素材。軽量性と耐久性・安定性に優れ、長時間のプレーでも快適な履き心地を維持します。",
    "FLYTEFOAM PROPEL": "FLYTEFOAMより高い反発力を持つアシックスのフォーム素材。前足部に配置することで蹴り出し時の推進力を最大化します。",
    "FF BLAST": "アシックスのFF BLASTフォーム。軽量でありながら高いエネルギーリターンを発揮し、快適かつ反応性の高い履き心地を提供します。",
    "FF BLAST PLUS": "FF BLASTの進化版。優れたクッション性はそのままにバウンス性能がアップデートされ、より高いジャンプをサポートします。",
    "SPEEDTRUSS": "アシックスのミッドソール技術。一歩目からの瞬間的なスピードと走行スピードの維持をサポートします。",
    "GEL": "アシックスのゲルクッション素材。着地時の衝撃を効率よく吸収し、足への負担を軽減します。",
    "Propulsion Trustic": "アシックスのソール技術。エネルギーロスを最小化し、推進力を最大化することで素早い動き出しをサポートします。",
    "Propulsion Trusstic": "アシックスのソール技術。樹脂製プレートでアウトソールに剛性を与え、エネルギーロスを最小化して推進力を最大化することで素早い動き出しをサポートします。",
    "LOOP LACE": "アシックスバスケットボールシューズに採用されたヒールロック構造。足首まわりを囲うようにループ状に配置され、シューレースで引き上げることで履き口のホールド性を高め激しいプレーをサポートします。",
    "L.A.コンフォート": "アシックスの女性専用快適・安定機能。女性特有の足の骨格に合わせて設計され、土踏まず（アーチ）をサポートし母趾球部への負担を軽減します。",
    // ヨネックス
    "パワークッション": "ヨネックス独自のクッション素材。衝撃吸収性と反発力を兼ね備え、12mの高さから落とした生卵が割れずに跳ね返るほどの性能を持ちます。",
    "パワークッション PLUS": "パワークッションの上位版。より高い衝撃吸収性と反発力を発揮し、激しい動きでも足首をしっかりサポートします。",
    "3Dパワーカーボンドライブ": "ヨネックスのカーボン繊維技術。切り返し時のねじれを抑えながら反発性能を向上させ、安定した動きをサポートします。",
};

// descテキスト内のテクノロジーキーワードを青リンクに変換する関数
function linkifyTech(html) {
    // キーワードを長い順にソートして部分一致の優先度を制御
    const keywords = Object.keys(techGlossary).sort((a, b) => b.length - a.length);
    // すでにリンク化された部分はスキップするため、HTMLタグを一時退避
    let result = html;
    keywords.forEach(kw => {
        const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(?<!<[^>]*)(${escaped})(?![^<]*>)`, 'g');
        result = result.replace(re, (match, p1) =>
            `<span class="tech-link" onclick="showTechPopup('${kw.replace(/'/g,"\\'")}')">` + p1 + `</span>`
        );
    });
    return result;
}

function showTechPopup(key) {
    const desc = techGlossary[key];
    if (!desc) return;
    document.getElementById('modal-title').innerText = key;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('tech-modal').style.display = 'flex';
    techModalOpen = true;
}

// ============================================================
//  MODAL CLOSE
// ============================================================
function closePopup() {
    document.getElementById('tech-modal').style.display = 'none';
    techModalOpen = false;
}