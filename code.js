window.onload = init;

function init() {
  let image = document.getElementById("zero");
  image.onmouseover = showAnswer;
  image.onmouseout = closeAnswer;
}

function showAnswer() {
  let image = document.getElementById("zero");
  image.src = "image1.jpg";
}

function closeAnswer() {
  let image = document.getElementById("zero");
  image.src = "image1blur.jpg";
}

function me() {
  const message = "Ваша база данных успешно скопирована";
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    alert(`${message} с вашего мобильного телефона!`);
  } else {
    alert(`${message} с вашего компьтера!`);
  }
}

setTimeout(me, 10000);
