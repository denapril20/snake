import './styles/index.css';

//dynamic import
document.querySelector('.js-index') && import('./js/index/index').then(resolve => resolve.initIndexPage());
document.querySelector('.js-signin') && import('./js/signin/index').then(resolve => resolve.initSigninPage());