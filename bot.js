
const bodyText = $("webview").text();

function readBodyText() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = bodyText;
    msg.volume = 100;
    window.speechSynthesis.speak(msg);
}
  webview.executeJavaScript(readBodyText())