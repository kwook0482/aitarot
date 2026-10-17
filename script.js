// ========================================
// 타로 3장 리딩 - script.js
// ========================================

// 현재 선택된 주제
let selectedTopic = "오늘의 타로";

// 현재 리딩 결과
let currentReading = null;

// ========================================
// 78장 타로 카드
// ========================================

const tarotCards = [
  // 메이저 아르카나
  {
    name: "바보",
    suit: "메이저",
    symbol: "✦",
    upright: "새로운 시작, 자유, 모험, 가능성",
    reversed: "충동, 준비 부족, 무모함"
  },
  {
    name: "마법사",
    suit: "메이저",
    symbol: "✧",
    upright: "능력, 실행력, 새로운 기회",
    reversed: "능력 낭비, 자신감 부족, 속임수"
  },
  {
    name: "여사제",
    suit: "메이저",
    symbol: "☾",
    upright: "직관, 내면의 지혜, 기다림",
    reversed: "혼란, 직관 무시, 비밀"
  },
  {
    name: "여제",
    suit: "메이저",
    symbol: "♕",
    upright: "풍요, 성장, 창조, 안정",
    reversed: "과잉, 의존, 정체"
  },
  {
    name: "황제",
    suit: "메이저",
    symbol: "♔",
    upright: "질서, 책임, 통제, 안정",
    reversed: "독단, 지나친 통제, 경직"
  },
  {
    name: "교황",
    suit: "메이저",
    symbol: "☼",
    upright: "전통, 조언, 배움, 신뢰",
    reversed: "고정관념, 형식적인 관계"
  },
  {
    name: "연인",
    suit: "메이저",
    symbol: "♡",
    upright: "사랑, 선택, 조화, 관계",
    reversed: "갈등, 불균형, 어려운 선택"
  },
  {
    name: "전차",
    suit: "메이저",
    symbol: "⚔",
    upright: "추진력, 승리, 의지, 전진",
    reversed: "방향 상실, 무리한 추진"
  },
  {
    name: "힘",
    suit: "메이저",
    symbol: "♾",
    upright: "용기, 인내, 자기 통제",
    reversed: "자신감 부족, 감정적인 대응"
  },
  {
    name: "은둔자",
    suit: "메이저",
    symbol: "☽",
    upright: "성찰, 탐색, 신중함",
    reversed: "고립, 지나친 고민"
  },
  {
    name: "운명의 수레바퀴",
    suit: "메이저",
    symbol: "◎",
    upright: "변화, 전환점, 새로운 흐름",
    reversed: "변화에 대한 저항, 반복"
  },
  {
    name: "정의",
    suit: "메이저",
    symbol: "⚖",
    upright: "균형, 판단, 책임, 공정함",
    reversed: "불균형, 판단 착오"
  },
  {
    name: "매달린 사람",
    suit: "메이저",
    symbol: "△",
    upright: "기다림, 관점의 변화, 내려놓음",
    reversed: "정체, 헛된 희생"
  },
  {
    name: "죽음",
    suit: "메이저",
    symbol: "☠",
    upright: "종결, 변화, 새로운 시작",
    reversed: "변화 거부, 미련"
  },
  {
    name: "절제",
    suit: "메이저",
    symbol: "◇",
    upright: "균형, 조화, 회복",
    reversed: "불균형, 과도함"
  },
  {
    name: "악마",
    suit: "메이저",
    symbol: "♠",
    upright: "집착, 욕망, 유혹",
    reversed: "속박에서 벗어남, 해방"
  },
  {
    name: "탑",
    suit: "메이저",
    symbol: "⚡",
    upright: "갑작스러운 변화, 기존 구조의 붕괴",
    reversed: "변화를 피함, 내부적인 갈등"
  },
  {
    name: "별",
    suit: "메이저",
    symbol: "★",
    upright: "희망, 회복, 가능성",
    reversed: "실망, 자신감 저하"
  },
  {
    name: "달",
    suit: "메이저",
    symbol: "☾",
    upright: "불확실성, 감정, 직관",
    reversed: "혼란이 풀림, 진실 발견"
  },
  {
    name: "태양",
    suit: "메이저",
    symbol: "☀",
    upright: "성공, 기쁨, 활력",
    reversed: "지연된 기쁨, 작은 실망"
  },
  {
    name: "심판",
    suit: "메이저",
    symbol: "♢",
    upright: "각성, 판단, 새로운 기회",
    reversed: "후회, 과거에 대한 집착"
  },
  {
    name: "세계",
    suit: "메이저",
    symbol: "◎",
    upright: "완성, 성취, 새로운 단계",
    reversed: "미완성, 마무리 부족"
  },

  // 완드
  ...createSuit("완드", "🔥", [
    ["에이스", "새로운 열정, 시작, 창의력", "기회의 지연, 의욕 저하"],
    ["2", "계획, 선택, 미래 준비", "망설임, 계획 부족"],
    ["3", "확장, 전망, 성장", "지연, 기대와 현실의 차이"],
    ["4", "안정, 축하, 기반", "불안정, 관계의 긴장"],
    ["5", "경쟁, 갈등, 도전", "갈등 회피, 긴장 완화"],
    ["6", "승리, 인정, 성취", "인정 부족, 자신감 저하"],
    ["7", "방어, 신념, 도전", "압박, 자신감 부족"],
    ["8", "빠른 진행, 소식, 변화", "지연, 혼란"],
    ["9", "인내, 경계, 경험", "피로, 방어적인 태도"],
    ["10", "책임, 부담, 과로", "과도한 부담을 내려놓음"],
    ["페이지", "새로운 소식, 호기심, 가능성", "성급함, 미숙함"],
    ["기사", "열정, 행동, 모험", "충동적 행동, 불안정"],
    ["여왕", "자신감, 창의성, 매력", "질투, 자신감 부족"],
    ["왕", "리더십, 추진력, 비전", "독단, 성급한 결정"]
  ]),

  // 컵
  ...createSuit("컵", "💧", [
    ["에이스", "감정의 시작, 사랑, 기쁨", "감정적 공허, 실망"],
    ["2", "교감, 사랑, 관계의 조화", "갈등, 관계의 불균형"],
    ["3", "우정, 축하, 즐거움", "과도함, 관계의 긴장"],
    ["4", "권태, 고민, 내면 성찰", "새로운 기회 발견"],
    ["5", "상실, 후회, 아쉬움", "회복, 새로운 가능성"],
    ["6", "추억, 과거, 순수함", "과거에 대한 집착"],
    ["7", "선택, 상상, 가능성", "현실적인 판단"],
    ["8", "떠남, 변화, 새로운 길", "미련, 떠나지 못함"],
    ["9", "만족, 소망, 즐거움", "욕심, 만족 부족"],
    ["10", "행복, 가족, 정서적 안정", "가족 갈등, 기대와 현실"],
    ["페이지", "감정적인 소식, 순수함", "감정적 미숙함"],
    ["기사", "로맨스, 감정 표현, 제안", "감정 기복, 현실성 부족"],
    ["여왕", "공감, 직관, 따뜻함", "감정 과잉, 예민함"],
    ["왕", "감정 조절, 성숙함, 배려", "감정 억제, 변덕"]
  ]),

  // 소드
  ...createSuit("소드", "⚔", [
    ["에이스", "명확한 판단, 진실, 새로운 생각", "혼란, 판단 지연"],
    ["2", "결정 보류, 균형, 고민", "결정 회피, 혼란"],
    ["3", "상처, 실망, 슬픔", "회복, 상처 치유"],
    ["4", "휴식, 회복, 재정비", "불안, 휴식 부족"],
    ["5", "갈등, 경쟁, 승부", "갈등 종료, 화해"],
    ["6", "이동, 변화, 회복", "변화에 대한 저항"],
    ["7", "전략, 신중함, 비밀", "진실이 드러남"],
    ["8", "제약, 두려움, 생각의 한계", "제약에서 벗어남"],
    ["9", "걱정, 불안, 고민", "불안 완화, 회복"],
    ["10", "종결, 극복, 새로운 시작", "회복 과정, 변화의 지연"],
    ["페이지", "관찰, 정보, 새로운 소식", "성급한 판단"],
    ["기사", "행동, 추진력, 결단", "충동적인 행동"],
    ["여왕", "명확함, 독립성, 판단력", "냉정함, 비판적 태도"],
    ["왕", "논리, 판단, 권위", "독단, 지나친 통제"]
  ]),

  // 펜타클
  ...createSuit("펜타클", "●", [
    ["에이스", "새로운 기회, 재물, 현실적인 시작", "기회의 지연"],
    ["2", "균형, 조절, 여러 일의 관리", "불균형, 과부하"],
    ["3", "협력, 기술, 성과", "협력 부족, 미숙함"],
    ["4", "안정, 절약, 재산 보호", "집착, 지나친 절약"],
    ["5", "경제적 어려움, 불안", "회복, 도움"],
    ["6", "나눔, 지원, 균형", "불균형, 조건부 도움"],
    ["7", "인내, 투자, 기다림", "조급함, 기대와 현실"],
    ["8", "노력, 기술, 숙련", "반복적인 실수, 집중력 부족"],
    ["9", "독립, 성취, 풍요", "의존, 성취감 부족"],
    ["10", "재산, 안정, 장기적인 성공", "가족 갈등, 불안정"],
    ["페이지", "배움, 현실적인 기회", "준비 부족"],
    ["기사", "성실함, 꾸준함, 안정", "느린 진행, 정체"],
    ["여왕", "현실감각, 안정, 실용성", "물질적 집착"],
    ["왕", "재정적 안정, 경영, 책임", "물질주의, 독단"]
  ])
];

// ========================================
// 숫자 카드 생성 함수
// ========================================

function createSuit(suit, symbol, data) {
  return data.map(item => ({
    name: `${suit} ${item[0]}`,
    suit,
    symbol,
    upright: item[1],
    reversed: item[2]
  }));
}

// ========================================
// DOM 요소
// ========================================

const homeView = document.getElementById("homeView");
const resultView = document.getElementById("resultView");
const recordsView = document.getElementById("recordsView");

const drawBtn = document.getElementById("drawBtn");
const newReadingBtn = document.getElementById("newReadingBtn");
const saveBtn = document.getElementById("saveBtn");

const recordsBtn = document.getElementById("recordsBtn");
const homeBtn = document.getElementById("homeBtn");
const emptyHomeBtn = document.getElementById("emptyHomeBtn");

const cardsRow = document.getElementById("cardsRow");
const interpretation = document.getElementById("interpretation");

const resultTopic = document.getElementById("resultTopic");
const resultDate = document.getElementById("resultDate");

const topicCards = document.querySelectorAll(".topic-card");

// ========================================
// 화면 전환
// ========================================

function showView(viewId) {
  document.querySelectorAll(".view").forEach(view => {
    view.classList.remove("active");
  });

  const target = document.getElementById(viewId);

  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }
}

// ========================================
// 주제 선택
// ========================================

topicCards.forEach(card => {
  card.addEventListener("click", function () {
    topicCards.forEach(item => item.classList.remove("selected"));
    this.classList.add("selected");
    selectedTopic = this.dataset.topic;
  });
});

// ========================================
// 카드 3장 뽑기
// ========================================

function drawThree() {
  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  return selected.map((card, index) => {
    const reversed = Math.random() < 0.5;

    return {
      ...card,
      reversed,
      position:
        index === 0
          ? "과거"
          : index === 1
          ? "현재"
          : "미래",
      meaning: reversed ? card.reversed : card.upright
    };
  });
}

// ========================================
// 카드 뽑기
// ========================================

function startReading() {
  console.log("타로 카드 뽑기 실행");

  const cards = drawThree();

  currentReading = {
    id: Date.now(),
    date: new Date().toISOString(),
    topic: selectedTopic,
    cards
  };

  renderReading(currentReading);
  showView("resultView");
}

// ========================================
// 결과 화면 표시
// ========================================

function renderReading(reading) {
  if (!reading) return;

  if (resultTopic) {
    resultTopic.textContent = reading.topic;
  }

  if (resultDate) {
    const date = new Date(reading.date);
    resultDate.textContent = date.toLocaleDateString("ko-KR");
  }

  // 카드 표시
  cardsRow.innerHTML = "";

  reading.cards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.className = "tarot-card" + (card.reversed ? " reversed" : "");

    cardElement.innerHTML = `
      <div class="tarot-position">${card.position}</div>
      <div class="tarot-art ${card.reversed ? "reversed" : ""}">
        <div class="symbol">${card.symbol}</div>
      </div>
      <div class="tarot-name">${card.name}</div>
      <div class="tarot-direction">${card.reversed ? "역방향" : "정방향"}</div>
    `;

    cardsRow.appendChild(cardElement);
  });

  // 해석
  interpretation.innerHTML = createInterpretation(reading);
}

// ========================================
// 3장 카드의 연결성 해석
// ========================================

function createConnectionReading(cards) {
  const past = cards[0];
  const present = cards[1];
  const future = cards[2];

  return `
    <p>
      과거에는 <strong>${past.name}</strong> 카드가 보여주는
      ${past.meaning}의 흐름이 있었습니다.
    </p>

    <p>
      현재는 <strong>${present.name}</strong> 카드가 나타내는
      ${present.meaning}의 상황이 중요하게 작용하고 있습니다.
    </p>

    <p>
      이러한 흐름이 이어진다면 앞으로는
      <strong>${future.name}</strong> 카드가 보여주는
      ${future.meaning}의 가능성을 살펴볼 수 있습니다.
    </p>

    <p>
      전체적으로 보면 과거의 경험이 현재의 상황으로 이어졌으며,
      현재의 선택과 대응에 따라 앞으로의 흐름도 달라질 수 있습니다.
    </p>
  `;
}

// ========================================
// 카드 성격 분류
// ========================================

const cardCharacter = {
  positive: [
    "새로운 시작", "능력", "실행력", "희망", "회복", "성공", "기쁨", "활력", "안정", "성장",
    "풍요", "질서", "자기 통제", "전진", "가능성", "기회", "행복", "완성"
  ],
  negative: [
    "충동", "준비 부족", "혼란", "직관 무시", "불안", "갈등", "후회", "정체", "걱정",
    "가치", "저항", "미련", "집착", "독단", "과부하", "불안정", "실망"
  ]
};

// ========================================
// 의미 기반 자동 메시지 생성
// ========================================

function getCardCharacter(meaningText) {
  const text = meaningText || "";

  for (const keyword of cardCharacter.positive) {
    if (text.includes(keyword)) return "positive";
  }

  for (const keyword of cardCharacter.negative) {
    if (text.includes(keyword)) return "negative";
  }

  return "neutral";
}

function createTarotMessage(cards) {
  const past = cards[0];
  const present = cards[1];
  const future = cards[2];

  // drawThree()에서 정방향/역방향에 맞춰 선택한 해석 문장을 사용합니다.
  const pastMeaning = past.meaning;
  const presentMeaning = present.meaning;
  const futureMeaning = future.meaning;

  const pastChar = getCardCharacter(pastMeaning);
  const presentChar = getCardCharacter(presentMeaning);
  const futureChar = getCardCharacter(futureMeaning);

  if (pastChar === "positive" && presentChar === "positive" && futureChar === "positive") {
    return "지금까지의 좋은 흐름을 이어가고, 현재의 긍정적인 기운을 믿고 나아가면 더 밝은 미래가 열릴 것입니다.";
  }

  if (pastChar === "negative" && presentChar === "positive" && futureChar === "positive") {
    return "과거의 어려움을 넘기고 지금은 새로운 기회가 열리고 있습니다. 현재의 선택이 앞으로의 희망을 만들어갈 수 있습니다.";
  }

  if (pastChar === "positive" && presentChar === "negative" && futureChar === "positive") {
    return "지금까지 쌓아온 힘을 믿고, 현재의 고민을 정리해보세요. 작은 결단이 앞으로의 새로운 가능성을 열어줄 것입니다.";
  }

  if (pastChar === "positive" && presentChar === "positive" && futureChar === "negative") {
    return "좋은 흐름을 유지하고 있는 지금, 다가올 변화에도 차분하게 대응하면 더 안정적인 방향으로 이어질 수 있습니다.";
  }

  if (pastChar === "negative" && presentChar === "negative" && futureChar === "positive") {
    return "지금은 어려운 과정이 있지만, 이미 변화의 씨앗은 심겨져 있습니다. 현재의 선택이 밝은 미래를 만들어갈 것입니다.";
  }

  return "과거의 흐름이 현재를 만들었고, 지금의 선택이 미래를 결정합니다. 차분하게 현재를 정리하고, 다음 한 걸음을 믿고 나아가세요.";
}

// ========================================
// 카드별 해석
// ========================================

function createInterpretation(reading) {
  let html = "";

  // 개별 카드 해석
  reading.cards.forEach(card => {
    html += `
      <div class="interpret-block">
        <h3>${card.position} · ${card.name}<span>${card.reversed ? "역방향" : "정방향"}</span></h3>
        <p>${card.meaning}</p>
      </div>
    `;
  });

  // 3장 카드 연결 설명
  html += `
    <div class="summary-box">
      <h3>세 카드의 연결</h3>
      ${createConnectionReading(reading.cards)}
    </div>
  `;

  // 타로의 메시지 자동 생성
  html += `
    <div class="summary-box">
      <h3>타로의 메시지</h3>
      <p><strong>${createTarotMessage(reading.cards)}</strong></p>
    </div>
  `;

  // 현실적인 조언
  html += `
    <div class="advice-box">
      <h3>현실적인 조언</h3>
      <p>
        지금의 상황을 서둘러 결론 내리기보다
        현재 내가 실제로 할 수 있는 작은 행동부터
        차분하게 살펴보세요.
        타로의 결과는 미래를 확정하는 예언이 아니라
        현재의 생각과 상황을 돌아보는 참고 자료입니다.
      </p>
    </div>
  `;

  return html;
}

// ========================================
// 주제별 메시지
// ========================================

function getTopicMessage(topic) {
  switch (topic) {
    case "연애":
      return `
        현재의 감정과 관계에서 어떤 흐름이 이어지고 있는지
        살펴보세요. 상대방의 마음을 단정하기보다는
        자신의 감정과 관계에서 필요한 행동을 생각해보는 것이 좋습니다.
      `;
    case "재물":
      return `
        현재의 재정적인 흐름과 기회를 돌아보는 데
        참고해보세요. 중요한 금전 결정은 실제 수입과 지출,
        계약 조건과 객관적인 정보를 함께 확인해야 합니다.
      `;
    case "사업·직업":
      return `
        현재의 일과 사업에서 어떤 흐름과 가능성이 있는지
        살펴보세요. 실제 결정에서는 시장 상황과 비용,
        자신의 역량과 현실적인 조건을 함께 검토하는 것이 중요합니다.
      `;
    default:
      return `
        오늘 하루의 흐름을 돌아보고 현재 자신에게
        어떤 부분이 중요한지 생각해보는 시간으로 활용해보세요.
      `;
  }
}

// ========================================
// 결과 저장
// ========================================

function saveReading() {
  if (!currentReading) return;

  const saved = JSON.parse(localStorage.getItem("tarotRecords") || "[]");
  saved.unshift(currentReading);

  localStorage.setItem("tarotRecords", JSON.stringify(saved));
  showToast("리딩 결과가 저장되었습니다.");
}

// ========================================
// 저장 기록 표시
// ========================================

function renderRecords() {
  const recordList = document.getElementById("recordsList");
  if (!recordList) return;

  const saved = JSON.parse(localStorage.getItem("tarotRecords") || "[]");

  if (saved.length === 0) {
    recordList.innerHTML = `
      <div class="empty-state">
        <div>✦</div>
        <strong>아직 저장된 리딩이 없습니다.</strong>
        <p>타로 카드를 뽑은 뒤 결과를 저장해보세요.</p>
      </div>
    `;
    return;
  }

  recordList.innerHTML = "";

  saved.forEach(record => {
    const item = document.createElement("div");
    item.className = "record-item";

    const date = new Date(record.date).toLocaleDateString("ko-KR");

    item.innerHTML = `
      <div class="record-item-head">
        <strong>${record.topic}</strong>
        <time>${date}</time>
      </div>
      <div class="mini-cards">
        ${record.cards.map(card => `
          <span class="mini-card">
            ${card.name}${card.reversed ? " 역" : ""}
          </span>
        `).join("")}
      </div>
      <p>${record.cards[0].meaning}</p>
    `;

    item.addEventListener("click", () => {
      currentReading = record;
      renderReading(record);
      showView("resultView");
    });

    recordList.appendChild(item);
  });
}

// ========================================
// 토스트 메시지
// ========================================

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ========================================
// 버튼 연결
// ========================================

// 핵심 버튼
if (drawBtn) {
  drawBtn.addEventListener("click", startReading);
}

if (newReadingBtn) {
  newReadingBtn.addEventListener("click", () => {
    showView("homeView");
  });
}

if (saveBtn) {
  saveBtn.addEventListener("click", saveReading);
}

// 기록
if (recordsBtn) {
  recordsBtn.addEventListener("click", () => {
    showView("recordsView");
    renderRecords();
  });
}

// 홈
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    showView("homeView");
  });
}

if (emptyHomeBtn) {
  emptyHomeBtn.addEventListener("click", () => {
    showView("homeView");
  });
}

// ========================================
// 초기 화면
// ========================================

showView("homeView");

console.log("타로 웹사이트 script.js 정상 실행");
console.log("총 카드 수:", tarotCards.length);