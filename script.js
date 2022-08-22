const input1 = document.querySelector("#_input1");
const span1 = document.querySelector("#_span1");

const obj = {
  p: "aaaa",
  div: "bbbb",
  section: "cccc",
  h2: "dddd",
};

function detectTag(string) {
  for (let key in obj) {
    console.log(key);
    console.log(string);
    if (key == string) {
      span1.textContent = obj[key];
    }
  }
}

detectTag("p");
