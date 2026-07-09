import './style.css';
import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const validate = new JustValidate('#basic_form');

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

    // ※ここはHTMLのname属性と一致させる必要あり
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

new Swiper('.swiper2', {
  loop: true,

  pagination: {
    el: '.swiper2 .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper2 .swiper-button-next',
    prevEl: '.swiper2 .swiper-button-prev',
  },
});
