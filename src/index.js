

const sayHelloManyTimes = (times) =>
  new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

const helloDiv = document.createElement("div");
helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
document.body.append(helloDiv);