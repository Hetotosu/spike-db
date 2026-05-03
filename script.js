const spikeData = {
    "Mizuno": {
        "モレリア (MORELIA)": [
            { 
                id: "m2j", name: "モレリア II JAPAN", price: 24200, img: "morelia2_j.jpg", 
                colors: [{img: "morelia2_j.jpg", color: "#fff"}, {img: "morelia2_black.jpg", color: "#000"}], 
                eval: [3, 4, 5, 4, 3], 
                desc: "<b>「軽量・柔軟・素足感覚」を20年以上守り続ける名作。</b><br>熟練の職人による「24時間ラスティング」工程が、他社には真似できない極上のフィット感を生み出します。短めのスタッド設計は日本の硬い土や人工芝に最適化されており、全ポジションのプレーヤーから絶大な信頼を得ている一足です。",
                specs: { weight: "約215g (27.0cm)", material: "ウォッシャブルカンガルーレザー", ground: "土・人工芝・天然芝" },
                tags: ["MF", "DF", "フィッティング重視", "ロングセラー"],
                updates: [
                    "エンジニアードフィットラストの採用により、踵のホールド感が向上",
                    "インソール素材のアップデートにより、シューズ内での足の滑りを抑制",
                    "アッパーのステッチ形状を見直し、革の伸びすぎを防止"
                ]
            }
        ],
        "モレリアネオ (MORELIA NEO)": [
            { 
                id: "mn4j", name: "モレリア ネオ IV JAPAN", price: 26400, img: "neo4_j.jpg", 
                colors: [{img: "neo4_j.jpg", color: "#fff"}], 
                eval: [5, 4, 5, 3, 2], 
                desc: "<b>スピードと素足感覚を追求した現代の最高傑作。</b><br>中足部に「BFレザー」を採用することで、驚異的な軽さとホールド感を両立。アウトソールはシャンク部分を強化し、蹴り出しの際の反発力を高めています。一瞬の速さを求めるアタッカーにとって、これ以上の選択肢はありません。",
                specs: { weight: "約195g (27.0cm)", material: "カンガルーレザー×BFレザー", ground: "土・人工芝・天然芝" },
                tags: ["FW", "WG", "スピード重視", "超軽量"],
                updates: [
                    "ハトメ端部の形状を再設計し、屈曲時のシワと足への当たりを軽減",
                    "アウトソールのスタッド付け根部分を強化し、耐久性を向上",
                    "履き口のニット素材を微調整し、より一体感のある履き心地へ"
                ]
            }
        ],
        "モナルシーダ (MONARCIDA)": [
            { 
                id: "m3e", name: "モナルシーダ NEO III ELITE", price: 20900, img: "m_neo3_elite.jpg", 
                colors: [{img: "m_neo3_elite.jpg", color: "#fff"}], eval: [4, 4, 5, 4, 4], 
                desc: "<b>モレリアネオのDNAを継承した、部活生の相棒。</b><br>つま先部分に耐久性を高めるプリント加工を施し、天然皮革のデメリットである「革の伸び」を抑制。毎日ハードにトレーニングする学生にとって、最高レベルのフィット感と耐久性を両立した実戦モデルです。",
                specs: { weight: "約200g (27.0cm)", material: "ウォッシャブルカンガルーレザー", ground: "オールグラウンド対応" },
                tags: ["部活生", "耐久性", "試合・練習兼用"],
                updates: [
                    "前作よりつま先の補強エリアを拡大し、砂が入るのを防ぐ設計に",
                    "シュータン（ベロ）のズレを抑える新構造を採用",
                    "かかと部分のスポンジ配置を見直し、靴擦れリスクを軽減"
                ]
            }
        ]
    },
    "Asics": { "DS LIGHT": [{ id: "dsl5", name: "DS LIGHT X-FLY 5", price: 22000, img: "asics_xfly5.jpg", colors: [{img: "asics_xfly5.jpg", color: "#fff"}], eval: [4, 3, 5, 4, 3], desc: "日本人の足を研究し尽くしたアシックスの自信作。MOI（慣性モーメント）を抑えた設計で、軽快なステップワークを支えます。", specs: {weight:"210g", material:"カンガルー", ground:"土/芝"}, tags:["MF","安定性"], updates:["ヒールカウンターの形状変更による安定性強化"] }] },
    "Adidas": { "F50": [{ id: "f50e", name: "F50 ELITE", price: 28600, img: "adidas_f50.jpg", colors: [{img: "adidas_f50.jpg", color: "#fff"}], eval: [5, 4, 3, 3, 2], desc: "復活したスピードモンスター。スプリントウェブ構造が爆発的な加速を生み出します。", specs: {weight:"185g", material:"合成皮革", ground:"芝用"}, tags:["FW","スピード"], updates:["Fibertouchアッパーによる軽量化"] }] },
    "Nike": { "Phantom": [{ id: "pgx2e", name: "ファントム GX 2", price: 31130, img: "gx2.jpg", colors: [{img: "gx2.jpg", color: "#fff"}], eval: [3, 5, 4, 3, 2], desc: "グリップニット素材が、雨天時でも最高のボールコントロールを可能にします。", specs: {weight:"220g", material:"ニット", ground:"芝用"}, tags:["MF","コントロール"], updates:["Cyclone 360スタッド配置による回転動作の円滑化"] }] },
    "Puma": { "FUTURE": [{ id: "f7u", name: "フューチャー 7", price: 26400, img: "puma_future.jpg", colors: [{img: "puma_future.jpg", color: "#fff"}], eval: [4, 5, 4, 3, 3], desc: "FUZIONFIT360が、ソックスのような自由な履き心地を提供。変幻自在なプレーを支えます。", specs: {weight:"230g", material:"合成繊維", ground:"土/芝"}, tags:["MF","FW","フィット感"], updates:["PWRTAPEの配置最適化によるサポート力向上"] }] }
};

const chartLabels = ["スピード", "操作性", "フィット", "耐久性", "コスパ"];

function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('brand-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'none';
}

function showBrandPage(brand) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('brand-view').style.display = 'block';
    document.getElementById('brand-title').innerText = brand + " シリーズ一覧";
    const content = document.getElementById('brand-content');
    content.innerHTML = "";
    const seriesData = spikeData[brand];
    if(!seriesData) return;
    for (let series in seriesData) {
        let html = `<div class="series-section"><h3>${series}</h3><div class="spike-scroll-wrapper">`;
        seriesData[series].forEach(spike => {
            html += `<div class="spike-item" onclick="showDetail('${brand}', '${series}', '${spike.id}')">
                <div class="img-box"><img src="image/${spike.img}" onerror="this.src='https://via.placeholder.com/200?text=${spike.name}'"></div>
                <h4>${spike.name}</h4>
                <p>¥${spike.price.toLocaleString()}</p>
            </div>`;
        });
        content.innerHTML += html + `</div></div>`;
    }
}

function showDetail(brand, series, id) {
    const spike = spikeData[brand][series].find(s => s.id === id);
    document.getElementById('brand-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'block';
    document.getElementById('detail-title').innerText = spike.name;
    document.getElementById('main-spike-img').src = "image/" + spike.img;
    document.getElementById('spike-description').innerHTML = spike.desc;
    
    // スペック・タグの反映
    const specsTable = document.getElementById('spike-specs-table');
    specsTable.innerHTML = `
        <tr><th>重量</th><td>${spike.specs.weight}</td></tr>
        <tr><th>アッパー</th><td>${spike.specs.material}</td></tr>
        <tr><th>対応環境</th><td>${spike.specs.ground}</td></tr>
    `;
    const tagArea = document.getElementById('recommend-position');
    tagArea.innerHTML = spike.tags.map(t => `<span class="tag">${t}</span>`).join('');

    // アップデート情報の反映
    const updateList = document.getElementById('spike-updates');
    updateList.innerHTML = spike.updates ? spike.updates.map(u => `<li>${u}</li>`).join('') : "<li>（主要なアップデート情報はありません）</li>";

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

function drawChart(scores) {
    const size = 220, center = size / 2, radius = 70, angleStep = (Math.PI * 2) / 5, startAngle = -Math.PI / 2;
    let gridLines = "";
    for (let level = 1; level <= 5; level++) {
        let pts = "";
        const r = (radius / 5) * level;
        for (let i = 0; i < 5; i++) {
            const a = startAngle + angleStep * i;
            pts += `${center + r * Math.cos(a)},${center + r * Math.sin(a)} `;
        }
        gridLines += `<polygon points="${pts}" fill="none" stroke="#eee" />`;
    }
    let dataPts = "";
    scores.forEach((s, i) => {
        const a = startAngle + angleStep * i;
        const r = (s / 5) * radius;
        dataPts += `${center + r * Math.cos(a)},${center + r * Math.sin(a)} `;
    });
    let labelsHtml = "";
    chartLabels.forEach((label, i) => {
        const a = startAngle + angleStep * i;
        const x = center + (radius + 20) * Math.cos(a);
        const y = center + (radius + 20) * Math.sin(a);
        const anchor = (x > center) ? "start" : (x < center) ? "end" : "middle";
        labelsHtml += `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="10" font-weight="bold">${label}</text>`;
    });
    document.getElementById('radar-chart-area').innerHTML = `
        <svg viewBox="0 0 ${size} ${size}" class="radar-svg">
            ${gridLines}
            <polygon points="${dataPts}" fill="rgba(0,0,0,0.1)" stroke="#000" stroke-width="2" />
            ${labelsHtml}
        </svg>`;
}

function goBack() {
    const bView = document.getElementById('brand-view'), dView = document.getElementById('detail-view');
    if (dView.style.display === 'block') { dView.style.display = 'none'; bView.style.display = 'block'; }
    else if (bView.style.display === 'block') { showHome(); }
}