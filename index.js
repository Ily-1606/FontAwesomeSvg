const freeBrand = require("./@fortawesome/free-brands-svg-icons/index.js");
const proDuotone = require("./@fortawesome/pro-duotone-svg-icons/index.es.js");
const proLight = require("./@fortawesome/pro-light-svg-icons/index.es.js");
const proRegular = require("./@fortawesome/pro-regular-svg-icons/index.es.js");
const proSolid = require("./@fortawesome/pro-solid-svg-icons/index.es.js");
const fs = require("fs");
function buildSVG(prefix, iconName, icon) {
  return `
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="${prefix}"
    data-icon="${prefix}-${iconName}"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${icon[0]}, ${icon[1]}"
    class="svg-inline--fa fa-w-12 ${iconName}"
  >
    <path
      fill="currentColor"
      d="${icon[4]}"
      class=""
    ></path>
  </svg>
  `;
}
function saveSvg(data) {
  for (let i in data) {
    if (!fs.existsSync(`./dist/${data[i]["prefix"]}`)) {
      fs.mkdirSync(`./dist/${data[i]["prefix"]}`);
    }
    const svgData = buildSVG(
      data[i]["prefix"],
      data[i]["iconName"],
      data[i]["icon"]
    );
    fs.writeFile(
      `./dist/${data[i]["prefix"]}/${i}.svg`,
      svgData,
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(i, "The file was saved!");
      }
    );
  }
}
let fab = freeBrand.fab;
let fad = proDuotone.fad;
let fal = proLight.fal;
let far = proRegular.far;
let fas = proSolid.fas;
if (!fs.existsSync(`./dist`)) {
    fs.mkdirSync(`./dist`);
}
saveSvg(fab)
saveSvg(fad)
saveSvg(fal)
saveSvg(far)
saveSvg(fas)