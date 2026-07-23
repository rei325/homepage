const omikujiData = [
  { text: '大吉', img: 'pose_dance_ukareru_woman.png' },
  { text: '中吉', img: 'onepiece14_enel.png' },
  { text: '小吉', img: 'megane_hikaru_woman.png' },
  { text: '凶', img: 'pose_warau_kuchi_kakusu_man.png' },
];

const btn = document.getElementById('omikuji-btn');
const box = document.getElementById('omikuji-box');
const card = document.getElementById('result-card');
const resultImg = document.getElementById('result-img');
const resultText = document.getElementById('result-text');

if (btn) {
  btn.addEventListener('click', () => {
    btn.disabled = true;

    card.style.display = 'block';

    anime({
      targets: card,
      opacity: 0,
      scale: 0.2,
      duration: 100,
      complete: function () {
        anime({
          targets: box,
          translateX: [-10, 10, -8, 8, -4, 4, 0],
          rotate: [-5, 5, -3, 3, 0],
          duration: 800,
          easing: 'easeInOutSine',
          complete: function () {
            const randomIndex = Math.floor(Math.random() * omikujiData.length);
            const result = omikujiData[randomIndex];

            resultImg.src = result.img;
            resultText.textContent = result.text;
            anime({
              targets: card,
              opacity: [0, 1],
              scale: [0.2, 1],
              translateY: [-20, 0],
              duration: 800,
              easing: 'easeOutElastic(1, .6)',
              complete: function () {
                btn.disabled = false;
                btn.textContent = 'もう一度引く';
              },
            });
          },
        });
      },
    });
  });
}

const feedbackForm = document.getElementById('feedback-form');
const thanksMessage = document.getElementById('thanks-message');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    feedbackForm.reset();
    thanksMessage.style.display = 'block';

    anime({
      targets: thanksMessage,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
      easing: 'easeOutQuad',
    });
  });
}
