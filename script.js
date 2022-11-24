const services = document.getElementsByClassName("service");

const setCardHeight = (height) => {
  for (const service of services) {
    service.style.height = height + "px";
  }
};

let largest = 0;

for (let i = 0; i < services.length; i++) {
  const service = services[i];

  const description = service.getElementsByTagName("p").item(0);
  const lineHeightRaw = description.style.lineHeight
    ? description.style.lineHeight
    : "20px";
  const lineHeight = lineHeightRaw.slice(0, lineHeightRaw.length - 2);

  const lineCount = description.offsetHeight
    ? description.offsetHeight / lineHeight
    : lineHeight;

  const height = lineCount * lineHeight + 40;
  if (height > largest) largest = height;

  if (i === services.length - 1) {
    setCardHeight(largest);
  }
}
