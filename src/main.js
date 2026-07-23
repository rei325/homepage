import './style.css';
import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { animate } from 'animejs';

const validate = new JustValidate('#basic_form');
const images = document.querySelectorAll('.anime-img');

images.forEach((img) => {
  img.addEventListener('click', (event) => {
    event.stopPropagation();
    animate(img, {
      scale: [1, 1.3, 1],
      rotate: ['0deg', '360deg', '0deg'],
      duration: 1000,
    });
  });
});

validate
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '氏名を入力してください',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: 'メールアドレスを入力してください',
    },
    {
      rule: 'email',
      errorMessage: '正しいメールアドレスを入力してください',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: 'パスワードを入力してください',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '年齢を入力してください',
    },
    {
      rule: 'number',
      errorMessage: '年齢は数字で入力してください',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '住所を入力してください',
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log('氏名:', formData.get('basic_name'));
    console.log('メールアドレス:', formData.get('basic_email'));
    console.log('パスワード:', formData.get('basic_password'));
    console.log('年齢:', formData.get('basic_age'));
    console.log('住所:', formData.get('basic_address'));
  });

new Swiper('.swiper1', {
  loop: true,

  pagination: {
    el: '.swiper1 .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },
});
