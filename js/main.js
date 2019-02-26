 
const webview = document.querySelector('webview')
  onload = () => {
    const webview = document.querySelector('webview')
    const indicator = document.querySelector('.indicator')

    const loadstart = () => {
      indicator.innerText = 'loading...'
    }

    const loadstop = () => {
      indicator.innerText = ''
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
  }

var home = document.querySelector("#home");
var reload = document.querySelector("#reload");
var back = document.querySelector("#back");
var forward = document.querySelector("#forward");

reload.addEventListener("click", function(){ webview.reload(); });
back.addEventListener("click", function(){ webview.goBack(); });
forward.addEventListener("click", function(){ webview.goForward(); });