/* script.js */
// Optional: Add simple scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '80px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.fontSize = '1.2rem';
scrollBtn.style.display = 'none';
scrollBtn.style.background = '#2980b9';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.cursor = 'pointer';

document.body.appendChild(scrollBtn);

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
