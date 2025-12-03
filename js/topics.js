// 体系数学1の単元データ
var TOPIC_DETAILS = {
  // --- 代数編 ---
  "k1a-01-numbers": {
    title: "整数・小数・分数と数直線",
    summary: "数の種類と数直線上での位置関係を整理する単元。",
    points: [
      "自然数・整数・小数・分数など、数の仲間分けを確認する。",
      "数直線上に数を並べて、大小関係や距離（差）をイメージする。",
      "絶対値を「0からの距離」としてとらえる。"
    ],
    note: "数直線と大小比較の問題は頻出なので、素早くイメージできるようにしておくと強い。"
  },
  "k1a-02-signed": {
    title: "正負の数と四則演算",
    summary:
      "プラス・マイナスを使った加減乗除と、符号のルールを整理する単元。",
    points: [
      "＋と−を、温度・高度・お金（利益と損失）などに結びつけて考える。",
      "加法・減法は、数直線上での「右へ・左へ」の移動としてイメージする。",
      "乗除では、符号の決まり（＋×＋、＋×−、−×−など）を表で覚えておく。"
    ],
    note: "ここで符号ミスを減らしておくと、方程式や関数もかなり解きやすくなる。"
  },
  "k1a-03-literal": {
    title: "文字式と式の値",
    summary: "文字を使って数量を表し、代入して式の値を求める単元。",
    points: [
      "文字式は「数の代わりに文字を置いたもの」で、数とほぼ同じように扱える。",
      "項・係数・次数など、文字式の部品の名前を整理しておく。",
      "文字に具体的な値を代入し、式の値を計算する練習をする。"
    ],
    note: "図形・関数・方程式など、いろいろな単元のベースになる考え方。"
  },
  "k1a-04-expression-calc": {
    title: "式の計算（加法・減法・乗法・除法）",
    summary: "同類項をまとめ、分配法則を使って式を整理する単元。",
    points: [
      "同類項（同じ文字・同じ次数をもつ項）を見分けて、まとめて計算する。",
      "分配法則 a(b + c) = ab + ac を使って式を展開・整理する。",
      "分数を含む式では、通分や約分で計算を軽くする。"
    ],
    note: "途中式をきれいにそろえると、ミスに気付きやすくなる。"
  },
  "k1a-05-linear-equation": {
    title: "1次方程式（基本）",
    summary: "1次方程式を解き、簡単な文章題に応用する単元。",
    points: [
      "方程式は『＝が成り立つ x の値を探す』問題だと意識する。",
      "移項は「反対の計算をして反対側に移す」というイメージで覚える。",
      "文章題は、状況を図や表で整理してから方程式を立てると分かりやすい。"
    ],
    note: "解く手順を毎回同じパターンでそろえると、解きやすくなりミスも減る。"
  },
  "k1a-06-prop-invprop": {
    title: "比例・反比例とグラフ",
    summary: "比例 y=ax と反比例 y=k/x の式・グラフを扱う単元。",
    points: [
      "比例は原点を通る直線、反比例は原点を通らない曲線（双曲線）になる。",
      "表・式・グラフの3つを行き来できるようにする。",
      "比例定数 a（反比例のときは k）が、増え方・変わり方の速さを表している。"
    ],
    note: "関数の入口になるので、『表を見て式を立てる』練習を多めに。"
  },

  // --- 幾何編 ---
  "k1g-01-basic-fig": {
    title: "基本の図形と言葉",
    summary: "図形を扱うための言葉と、点・直線・角などの基本をおさえる単元。",
    points: [
      "点・直線・半直線・線分の違いを、図とセットで理解する。",
      "角の種類（鋭角・直角・鈍角）を整理する。",
      "∠ABC など、図形を表すときの記号の読み方・書き方に慣れる。"
    ],
    note: "この単元で出てくる言葉は、後の証明や作図でもそのまま使われる。"
  },
  "k1g-02-angles-parallel": {
    title: "角と平行線の性質",
    summary:
      "平行線と角の関係、三角形の内角の和など、角度に関する基本を扱う単元。",
    points: [
      "対頂角は等しい、平行線では同位角・錯角が等しいなどの性質をおさえる。",
      "三角形の内角の和が 180° になることを利用して未知の角を求める。",
      "多角形の内角の和は、三角形に分けることで求められる。"
    ],
    note: "どの角とどの角が等しいか、色ペンや印をつけながら考えると分かりやすい。"
  },
  "k1g-03-triangles-polygons": {
    title: "三角形と多角形の性質",
    summary: "三角形・四角形・多角形の性質をまとめる単元。",
    points: [
      "正三角形・二等辺三角形など、特徴的な三角形の性質を整理する。",
      "多角形の内角・外角の和の公式を、なぜそうなるかも含めて確認する。",
      "平行四辺形・ひし形・長方形・正方形の条件と性質を整理する。"
    ],
    note: "図形を『条件で言い換える』癖をつけると、証明単元につながりやすい。"
  },
  "k1g-04-construction": {
    title: "作図の基本",
    summary: "コンパスと定規を使って、基本的な作図をする単元。",
    points: [
      "垂直二等分線の作図手順と言葉での説明をセットで覚える。",
      "角の二等分線の作図手順と、その理由を押さえる。",
      "平行線を作る方法（角をうつす・平行線の作図）を整理する。"
    ],
    note: "作図はきれいさも大事。線の長さ・太さ、コンパスの開き具合も意識して描いてみる。"
  },
  "k1g-05-circle-sector": {
    title: "円とおうぎ形",
    summary: "円周・面積、おうぎ形の弧の長さと面積を扱う単元。",
    points: [
      "円周の公式 2πr、面積の公式 πr² を確実に使えるようにする。",
      "おうぎ形は『円全体のうち何度分か』を考えて比で計算する。",
      "弧の長さや面積を、半径と中心角から求める練習をする。"
    ],
    note: "角度を 360° で割る・掛ける処理に慣れておくと、計算がスムーズ。"
  },
  "k1g-06-solids": {
    title: "空間図形と表面積・体積",
    summary: "立体図形の見方と、表面積・体積の公式を整理する単元。",
    points: [
      "立方体・直方体・円柱・円すいなど、基本的な立体の名前と特徴を確認する。",
      "展開図を見て、どの面がどことつながっているかイメージする練習をする。",
      "表面積・体積の公式を、実際の問題の中で使いこなせるようにする。"
    ],
    note: "紙で立体を作ってみると、空間のイメージがかなり掴みやすくなる。"
  }
};

// タブ切り替え（代数編 / 幾何編）
function setupGradeTabs() {
  var tabs = document.querySelectorAll(".grade-tab");
  var sections = document.querySelectorAll(".grade-section");
  if (!tabs.length || !sections.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var grade = tab.dataset.grade;
      tabs.forEach(function (t) {
        t.classList.toggle("is-active", t === tab);
      });
      sections.forEach(function (section) {
        section.hidden = section.dataset.grade !== grade;
      });
    });
  });
}

// ツールカードの開閉
function setupToolToggles() {
  var buttons = document.querySelectorAll(".js-toggle-tool");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var card = button.closest(".tool-card");
      if (!card) return;
      var body = card.querySelector(".tool-body");
      if (!body) return;

      var isHidden = body.hidden;
      body.hidden = !isHidden;
      button.textContent = isHidden ? "閉じる" : "開く";
    });
  });
}

// 単元詳細モーダル
function setupTopicDetailModal() {
  var modal = document.getElementById("topic-modal");
  if (!modal) return;

  var titleEl = document.getElementById("topic-modal-title");
  var summaryEl = document.getElementById("topic-modal-summary");
  var pointsEl = document.getElementById("topic-modal-points");
  var noteEl = document.getElementById("topic-modal-note");
  var closeBtn = modal.querySelector(".modal-close");
  var backdrop = modal.querySelector(".modal-backdrop");
  var body = document.body;

  function openModalById(topicId, fallbackTitle, fallbackSummary) {
    var detail = TOPIC_DETAILS[topicId] || {};

    if (titleEl) {
      titleEl.textContent = detail.title || fallbackTitle || "単元詳細";
    }
    if (summaryEl) {
      summaryEl.textContent =
        detail.summary ||
        fallbackSummary ||
        "この単元の概要やポイントは、これから追加していく予定です。";
    }

    if (pointsEl) {
      pointsEl.innerHTML = "";
      if (Array.isArray(detail.points) && detail.points.length > 0) {
        detail.points.forEach(function (text) {
          var li = document.createElement("li");
          li.textContent = text;
          pointsEl.appendChild(li);
        });
      } else {
        var li = document.createElement("li");
        li.textContent = "この単元の詳しい内容は現在作成中です。";
        pointsEl.appendChild(li);
      }
    }

    if (noteEl) {
      noteEl.textContent =
        detail.note || "※ この内容は、自分用の要約として整理したものです。";
    }

    modal.classList.add("is-open");
    body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  var buttons = document.querySelectorAll(".topic-detail-button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".topic-card");
      var topicId = card && card.dataset.topicId;
      var fallbackTitle =
        card && card.querySelector("h4")
          ? card.querySelector("h4").textContent.trim()
          : "";
      var fallbackSummary =
        card && card.querySelector("p")
          ? card.querySelector("p").textContent.trim()
          : "";
      openModalById(topicId, fallbackTitle, fallbackSummary);
    });
  });
}
