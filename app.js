const fv = document.querySelector('.fv');
const images = [
  'images/FirstView01.png',
  'images/FirstView02.png',
  'images/FirstView03.png',
];
let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;
  fv.style.backgroundImage = `url(${images[index]})`;
}

setInterval(changeBackground, 5000);


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active'); 
    navMenu.classList.toggle('active');    
  });
});

// モーダル
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.grid .item img');

  images.forEach(function(img) {
    img.addEventListener('click', function() {
      
      const overlay = document.createElement('div');
      overlay.classList.add('white-background');

      // --- コンテナ作成 ---
      const modal = document.createElement('div');
      modal.classList.add('modal-container');

      // --- 画像作成 ---
      const modalImg = document.createElement('img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalImg.style.width = "300px";
      modalImg.style.height = "200px";
      modalImg.style.display = "block";
      modalImg.style.margin = "0 auto";
      modalImg.style.objectFit = "contain";  // または "cover"


      // --- 対応するpタグの内容をコピー（一列テキスト化）---
      const originalHTML = img.nextElementSibling ? img.nextElementSibling.innerHTML : '';
      const singleLineText = originalHTML
        .replace(/<br\s*\/?>/gi, ' ')  // <br>タグをスペースに置換
        .replace(/\s+/g, ' ')          // 連続した空白や改行を半角スペース1つに
        .trim();

      const modalText = document.createElement('p');
      modalText.textContent = singleLineText;  // textContentでタグ解釈しない
      modalText.style.textAlign = "center";
      modalText.style.marginTop = "10px";
      modalText.style.fontSize = "14px";

      // --- コンテナに画像とテキスト追加 ---
      modal.appendChild(modalImg);
      modal.appendChild(modalText);

      // --- 背景クリックで閉じる処理 ---
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
      });

      // --- DOMに追加 ---
      document.body.appendChild(overlay);
      document.body.appendChild(modal);
    });
  });
});






