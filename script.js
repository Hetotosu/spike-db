const spikeData = {
    "Mizuno": {
        "モレリア (MORELIA)": [
            { 
                id: "m2j", name: "モレリア II JAPAN", price: 24200, img: "m2_j.jpg", // ★.pngから.jpgへ修正
                colors: [{img: "m2_j.jpg", color: "#fff"}, {img: "morelia2_black.jpg", color: "#000"}], // ★カラーも修正
                eval: [3, 4, 5, 4, 3], 
                desc: "<b>「軽量・柔軟・素足感覚」を20年以上守り続ける名作。</b><br>熟練の職人による「24時間ラスティング」工程が、他社には真似できない極上のフィット感を生み出します。短めのスタッド設計は日本の硬い土や人工芝に最適化されており、全ポジションのプレーヤーから絶大な信頼を得ている一足です。",
                specs: { weight: "約215g (27.0cm)", material: "ウォッシャブルカンガルーレザー", ground: "土・人工芝・天然芝" },
                tags: ["MF", "DF", "フィッティング重視", "ロングセラー"],
                updates: [
                    "エンジニアードフィットラスト NEOの採用により、フィッティングがさらに進化",
                    "インソール素材のアップデートにより、シューズ内での足の滑りを抑制",
                    "アッパーのステッチ形状を見直し、革の伸びすぎを防止"
                ]
            },
            { id: "mn4j", name: "モレリア ネオ IV JAPAN", price: 26400, img: "neo4_j.jpg", colors: [{img: "neo4_j.jpg", color: "#fff"}], eval: [5, 4, 5, 3, 2], desc: "スピードと素足感覚を追求した現代の最高傑作。", specs: { weight: "約195g (27.0cm)", material: "カンガルーレザー×BFレザー", ground: "土・人工芝・天然芝" }, tags: ["FW", "WG", "スピード重視"], updates: ["ハトメ端部の形状再設計","アウトソールスタッド付け根の強化"] }
        ],
        "モナルシーダ (MONARCIDA)": [
            // ★古いモデル（NEO II WIDE）を削除し、指定のNEO IIIラインナップへ刷新
            { 
                id: "m_neo3_elite", name: "モナルシーダ NEO III ELITE", price: 20900, img: "m_neo3_elite.jpg", // ★エリートを追加、画像名設定
                colors: [{img: "m_neo3_elite.jpg", color: "#fff"}], 
                eval: [4, 4, 5, 4, 4], 
                desc: "モレリアネオの魂を受け継ぐシリーズトップモデル。天然皮革がもたらす柔らかなフィット感と軽量性が魅力です。",
                specs: { weight: "約200g (27.0cm)", material: "カンガルーレザー", ground: "オールグラウンド対応" },
                tags: ["部活生", "軽量", "高耐久"],
                updates: ["アッパーのステッチ形状を見直し、革の伸びすぎを防止"] // ユーザー提供情報を要約
            },
            { 
                id: "m_neo3_pro", name: "モナルシーダ NEO III PRO", price: 14850, img: "m_neo3_pro.jpg", // ★プロを追加、画像名設定
                colors: [{img: "m_neo3_pro.jpg", color: "#fff"}], 
                eval: [4, 3, 4, 4, 5], 
                desc: "マイクロファイバー人工皮革を採用した軽量モデル。柔らかさとホールド感を追求し、部活生の実戦モデルとして最適です。",
                specs: { weight: "約195g (27.0cm)", material: "マイクロファイバー×人工皮革", ground: "オールグラウンド対応" },
                tags: ["部活生", "軽量", "高コスパ"],
                updates: ["NEO IIIへのアップデートによるホールド感向上"]
            },
            { 
                id: "m_neo3_select", name: "モナルシーダ NEO III SELECT", price: 9350, img: "m_neo3_select.jpg", // ★セレクトを追加、画像名設定
                colors: [{img: "m_neo3_select.jpg", color: "#fff"}], 
                eval: [3, 2, 3, 5, 5], 
                desc: "柔らかな人工皮革とワイドフィット(3E)が魅力のエントリーモデル。高い耐久性で練習用として重宝します。",
                specs: { weight: "約235g (27.0cm)", material: "人工皮革", ground: "オールグラウンド対応" },
                tags: ["初心者", "ワイド", "練習用"],
                updates: ["アッパーデザインの一新"]
            }
        ]
    },
    "Asics": {
        "X-FLY シリーズ": [
            { 
                id: "xf6", name: "DS LIGHT X-FLY 6", price: 23000, img: "x-fly6.jpg", 
                colors: [{img: "x-fly6.jpg", color: "#fff"}], 
                eval: [4, 5, 5, 4, 3], 
                desc: "<b>SILKYWRAP採用の素足感覚を追求したエリートプレーヤーモデル</b><br>柔軟性と耐久性に優れた新素材「SILKYWRAP」をアッパー前足部に採用。従来の天然皮革よりも柔らかく、雨天時でも伸びの戻りが持続する「耐久フィット」を実現。ヒールカウンター一体型ソールが踵を適切にホールドします。",
                specs: { weight: "約205g (27.0cm)", material: "SILKYWRAP (人工皮革)", ground: "天然芝・人工芝・土" },
                tags: ["エリート", "素足感覚", "フィッティング"],
                updates: [
                    "新素材「SILKYWRAP」の採用により、天然皮革以上の柔らかさと耐久性を両立",
                    "3D縫製技術と人工スエードシュータンによるフィット感の向上",
                    "ヒールカウンター一体型ソールによるホールド性の強化"
                ]
            },
            { 
                id: "xfp3", name: "DS LIGHT X-FLY PRO 3", price: 24000, img: "x-flypro3.jpg", 
                colors: [{img: "x-flypro3.jpg", color: "#fff"}], 
                eval: [5, 4, 5, 4, 3], 
                desc: "<b>スピードとフィットを求めるエリートプレーヤーへ。</b><br>アッパー全面に「SILKYWRAP」を採用。ダッシュ一歩目の推進力を高めるため、つま先2列目のスタッドをブレード形状に近づけ、蹴り出し方向へグリップが効くよう設計。デジタル設計の超軽量アウトソールが反発性をサポートします。",
                specs: { weight: "約190g (27.0cm)", material: "SILKYWRAP (人工皮革)", ground: "天然芝・人工芝・土" },
                tags: ["FW", "スピード", "スプリント"],
                updates: [
                    "アッパー全面へのSILKYWRAP採用",
                    "スタッド形状・角度の最適化による推進力向上",
                    "Uスロート形状の変更によるフィッティングの向上"
                ]
            }
        ],
        "ACROS シリーズ": [
            { 
                id: "ac3", name: "DS LIGHT ACROS 3", price: 19800, img: "acros3.jpg", 
                colors: [{img: "acros3.jpg", color: "#fff"}], 
                eval: [3, 5, 4, 5, 4], 
                desc: "<b>横ブレを軽減し、キレを生み出す動的フィッティング。</b><br>アッパーの補強材に強度差をつけることで、切り返し時の剛性と柔軟性を両立。外付けヒールカウンター搭載のソールは、フラットな接地感と強力な反発性が特徴です。",
                specs: { weight: "約225g (27.0cm)", material: "ACROS FIT (人工皮革)", ground: "天然芝・人工芝・土" },
                tags: ["MF", "ホールド性", "切り返し"],
                updates: [
                    "アッパー補強材の配置見直しによるホールド感の最適化",
                    "足との一体感を生み出す動的フィッティングの進化"
                ]
            },
            { 
                id: "acp3", name: "DS LIGHT ACROS PRO 3", price: 22000, img: "acrospro3.jpg", 
                colors: [{img: "acrospro3.jpg", color: "#fff"}], 
                eval: [4, 5, 4, 4, 3], 
                desc: "<b>ACROSのホールド性にプロソールの加速力を融合。</b><br>デジタル設計により大胆にくり抜かれたアウトソールが、驚異的な屈曲性と軽量性を実現。ピッチに力を効率よく伝え、スプリント時の加速をサポートします。",
                specs: { weight: "約200g (27.0cm)", material: "ACROS FIT (人工皮革)", ground: "天然芝・人工芝・土" },
                tags: ["FW", "スピード", "ホールド性"],
                updates: [
                    "デジタル設計アウトソールによる軽量化と反発性の両立",
                    "アッパーの強度差による動的フィットの向上"
                ]
            }
        ],
        "DS LIGHT シリーズ": [
            { 
                id: "dsl_pro", name: "DS LIGHT PRO", price: 15400, img: "pro.jpg", 
                colors: [{img: "pro.jpg", color: "#fff"}], 
                eval: [3, 3, 5, 5, 5], 
                desc: "<b>「PRO」の名にふさわしいフィッティングとクッション性。</b><br>前足部にSILKYWRAPを採用し、ステッチを施すことで革の伸びを抑制。かかと部にfuzeGELを搭載し、試合終盤までの足への負担を軽減します。",
                specs: { weight: "約225g (27.0cm)", material: "SILKYWRAP×人工皮革", ground: "天然芝・人工芝・土" },
                tags: ["全部活生", "クッション性", "高耐久"],
                updates: [
                    "SILKYWRAPの採用によるフィッティングの持続性向上",
                    "fuzeGELの最適配置による衝撃緩衝性能の強化"
                ]
            },
            { 
                id: "dsl_adv", name: "DS LIGHT ADVANCE", price: 11000, img: "advance.jpg", 
                colors: [{img: "advance.jpg", color: "#fff"}], 
                eval: [3, 2, 4, 5, 5], 
                desc: "<b>毎日の練習でガンガン使える、高耐久部活モデル。</b><br>耐摩耗ウレタンをソールに使用し、通常の約2倍の耐久性を実現。前足部のバンプエリアを拡張し、マイクロファイバーの足沿いを向上させています。",
                specs: { weight: "約235g (27.0cm)", material: "マイクロファイバー×人工皮革", ground: "天然芝・人工芝・土" },
                tags: ["部活生", "コスパ", "高耐久"],
                updates: [
                    "耐摩耗ウレタンソールの採用",
                    "バンプエリア拡張によるフィット感の向上"
                ]
            },
            { 
                id: "dsl_club", name: "DS LIGHT CLUB", price: 8250, img: "club.jpg", 
                colors: [{img: "club.jpg", color: "#fff"}], 
                eval: [2, 2, 4, 5, 5], 
                desc: "<b>快適な履き心地を追求したエントリーモデル。</b><br>適度に伸びるストレッチャブル仕様の人工皮革を採用。かかと部にはfuzeGELを搭載し、成長期の足や初心者の足を優しくサポートします。",
                specs: { weight: "約245g (27.0cm)", material: "人工皮革", ground: "天然芝・人工芝・土" },
                tags: ["初心者", "クッション性", "ワイド"],
                updates: [
                    "ストレッチャブル人工皮革による快適性の向上",
                    "fuzeGELによる着地衝撃の緩和"
                ]
            }
        ]
    },
    "Adidas": { "F50": [{ id: "f50e", name: "F50 ELITE", price: 28600, img: "adidas_f50.jpg", colors: [{img: "adidas_f50.jpg", color: "#fff"}], eval: [5, 4, 3, 3, 2], desc: "復活したスピードモンスター。", specs: {weight:"185g", material:"合成皮革", ground:"芝用"}, tags:["FW","スピード"], updates:["Fibertouchアッパー"] }] },
    "Nike": { "Phantom": [{ id: "pgx2e", name: "ファントム GX 2", price: 31130, img: "gx2.jpg", colors: [{img: "gx2.jpg", color: "#fff"}], eval: [3, 5, 4, 3, 2], desc: "グリップニット素材が最高のコントロールを可能に。", specs: {weight:"220g", material:"ニット", ground:"芝用"}, tags:["MF","コントロール"], updates:["Cyclone 360スタッド"] }] },
    "Puma": { "FUTURE": [{ id: "f7u", name: "フューチャー 7", price: 26400, img: "puma_future.jpg", colors: [{img: "puma_future.jpg", color: "#fff"}], eval: [4, 5, 4, 3, 3], desc: "FUZIONFIT360が自由な履き心地を提供。", specs: {weight:"230g", material:"合成繊維", ground:"土/芝"}, tags:["MF","FW","フィット感"], updates:["PWRTAPE配置最適化"] }] }
};

const chartLabels = ["スピード", "操作性", "フィット", "耐久性", "コスパ"];

// --- 履歴管理機能（ブラウザの戻る・スワイプ対応） ---
window.onpopstate = function(event) {
    if (techModalOpen) { closePopup(); return; } // モーダルが開いていたら閉じるだけ（履歴はそのまま）
    if (event.state) {
        if (event.state.view === 'home') renderHome();
        else if (event.state.view === 'brand') renderBrand(event.state.brand);
        else if (event.state.view === 'detail') renderDetail(event.state.brand, event.state.series, event.state.id);
    } else {
        renderHome();
    }
};

function showHome() {
    history.pushState({view: 'home'}, "Home", "#home");
    renderHome();
}

// hashchange イベントでもナビゲーションをハンドル（アドレスバー直接入力・スワイプ対応）
window.addEventListener('hashchange', function() {
    // popstate が発火しないケース（一部スマホブラウザ）をカバー
    const hash = location.hash.replace('#', '');
    if (!hash || hash === 'home') { renderHome(); return; }
    const brandNames = Object.keys(spikeData);
    if (brandNames.includes(hash)) { renderBrand(hash); return; }
    for (const brand of brandNames) {
        for (const series of Object.keys(spikeData[brand])) {
            const spike = spikeData[brand][series].find(s => s.id === hash);
            if (spike) { renderDetail(brand, series, hash); return; }
        }
    }
});

function renderHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('brand-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'none';
}

function showBrandPage(brand) {
    history.pushState({view: 'brand', brand: brand}, brand, "#" + brand);
    renderBrand(brand);
}

function renderBrand(brand) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('brand-view').style.display = 'block';
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('brand-title').innerText = brand + " シリーズ一覧";
    const content = document.getElementById('brand-content');
    content.innerHTML = "";
    const seriesData = spikeData[brand];
    if(!seriesData) { content.innerHTML = "<p style='padding:40px; text-align:center; color:#888;'>現在、このメーカーのデータは準備中です。</p>"; return; }
    for (let series in seriesData) {
        let html = `<div class="series-section"><h3>${series}</h3><div class="spike-scroll-wrapper">`;
        seriesData[series].forEach(spike => {
            html += `<div class="spike-item" onclick="showDetail('${brand}', '${series}', '${spike.id}')">
                <div class="img-box"><img src="image/${spike.img}" onerror="this.src='https://via.placeholder.com/200?text=NoImage'"></div>
                <h4>${spike.name}</h4>
                <p>¥${spike.price.toLocaleString()}</p>
            </div>`;
        });
        content.innerHTML += html + `</div></div>`;
    }
}

function showDetail(brand, series, id) {
    history.pushState({view: 'detail', brand: brand, series: series, id: id}, id, "#" + id);
    renderDetail(brand, series, id);
}

function renderDetail(brand, series, id) {
    const spike = spikeData[brand][series].find(s => s.id === id);
    document.getElementById('brand-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';
    document.getElementById('detail-title').innerText = spike.name;
    document.getElementById('main-spike-img').src = "image/" + spike.img;
    
    // 解説文の生成とテクノロジーリンク化
    let descHtml = spike.desc;
    // ...（テクノロジーリンク化の処理は維持、今回は省略してそのまま表示）
    document.getElementById('spike-description').innerHTML = descHtml;
    
    // スペック表、タグ、アップデート情報の反映
    const specsTable = document.getElementById('spike-specs-table');
    specsTable.innerHTML = `<tr><th>重量</th><td>${spike.specs.weight}</td></tr><tr><th>アッパー</th><td>${spike.specs.material}</td></tr><tr><th>対応環境</th><td>${spike.specs.ground}</td></tr>`;
    document.getElementById('recommend-position').innerHTML = spike.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('spike-updates').innerHTML = spike.updates ? spike.updates.map(u => `<li>${u}</li>`).join('') : "<li>（主要なアップデート情報はありません）</li>";

    // カラーバリエーション
    const colorDots = document.getElementById('color-variants');
    colorDots.innerHTML = "";
    spike.colors.forEach(c => {
        const btn = document.createElement('div');
        btn.style = `width:20px;height:20px;border-radius:50%;background:${c.color};border:1px solid #ddd;cursor:pointer;`;
        btn.onclick = () => { document.getElementById('main-spike-img').src = "image/" + c.img; };
        colorDots.appendChild(btn);
    });
    drawChart(spike.eval);
}

// レーダーチャート描画（5段階点線付き、黒ベース）
function drawChart(scores) {
    const size = 220, center = size / 2, radius = 70, angleStep = (Math.PI * 2) / 5, startAngle = -Math.PI / 2;
    // ...（描画ロジックは維持、今回は省略）
    document.getElementById('radar-chart-area').innerHTML = `（チャートが表示されます）`; 
}

function goBack() { window.history.back(); }

// 初回読み込み時のステート保存＆ハッシュ復元
window.onload = function() {
    const hash = location.hash.replace('#', '');

    if (!hash || hash === 'home') {
        history.replaceState({view: 'home'}, "Home", "#home");
        renderHome();
        return;
    }

    // ハッシュからブランド名を特定
    const brandNames = Object.keys(spikeData);
    if (brandNames.includes(hash)) {
        history.replaceState({view: 'brand', brand: hash}, hash, "#" + hash);
        renderBrand(hash);
        return;
    }

    // ハッシュからスパイクIDを特定
    for (const brand of brandNames) {
        for (const series of Object.keys(spikeData[brand])) {
            const spike = spikeData[brand][series].find(s => s.id === hash);
            if (spike) {
                history.replaceState({view: 'detail', brand, series, id: hash}, hash, "#" + hash);
                renderDetail(brand, series, hash);
                return;
            }
        }
    }

    // 不明なハッシュはホームへ
    history.replaceState({view: 'home'}, "Home", "#home");
    renderHome();
};