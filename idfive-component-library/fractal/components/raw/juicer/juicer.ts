

export function juicer() {

  const juicerContainer = document.querySelector('.juicer-container');
  const head = document.querySelector('head');
  if (juicerContainer) {

    document.head.innerHTML = document.head.innerHTML + " <script src='https://assets.juicer.io/embed.js' type='text/javascript'></script><link href='https://assets.juicer.io/embed.css' media='all' rel='stylesheet' type='text/css' />";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      juicerContainer.innerHTML = "<ul class='juicer-feed' data-feed-id='howardulovestory' data-pages='1' data-per='5'></ul>";
    }
    else { juicerContainer.innerHTML = "<ul class='juicer-feed' data-feed-id='howardulovestory' data-pages='1' data-per='15'></ul>"; }
  }

}
