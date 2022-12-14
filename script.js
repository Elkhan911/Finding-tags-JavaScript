const input1 = document.querySelector("#_input1");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const tagsAll = document.querySelectorAll(".tags__name");

const obj = {
  button:
    "Создает интерактивную кнопку. Элемент может содержать текст или изображение",
  blockquote:
    "	Выделяет текст как цитату, применяется для описания больших цитат",
  caption: "Подпись таблицы",
  div: "Блочный элемент - один из основных элементов верстки",
  footer: "Нижний колонтитул",
  form: "Определяет форму пользовательского ввода",
  h1: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  h2: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  h3: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  h4: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  h5: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  h6: "Заголовки HTML разного уровня: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>",
  head: "Определяет группу строк в верхней части таблицы <table> - верхний колонтитул",
  header: "Блок заголовка",
  img: "	Изображение, картинка",
  input: "Поле для ввода, элемент формы",
  main: "	Основной контент",
  map: "Создаёт активные области на карте-изображении",
  mark: "Выделяет фрагменты текста, помечая их желтым фоном",
  meta: "Используется для хранения дополнительной информации о странице",
  meter: "Индикатор измерения в заданном диапазоне",
  nav: "Раздел документа, содержащий навигационные ссылки по сайту",
  noscript: "Определяет секцию, не поддерживающую сценарий (скрипт).",
  ol: "Упорядоченный нумерованный список",
  option: "Определяет вариант/опцию для выбора в раскрывающемся списке",
  q: "	Определяет краткую цитату",
  tfoot: "Определяет нижний колонтитул таблицы",
  th: "Создает заголовок ячейки таблицы",
  thead: "Определяет заголовок таблицы",
  u: "Выделяет отрывок текста подчёркиванием",
  table: "Определяет таблицу",
  textarea: "Многострочное поле для ввода",
  section: "Раздел",
  select: "Определяет выпадающий список или список с множественным выбором",
  span: "Строчный элемент",
  p: "Абзац",
  ul: "Определяет маркированный список",
  li: "Элемент списка",
  link: "Определяет привязку внешнего ресурса (чаще всего, привязку таблицы стилей CSS)",
};

// функция для поиска тега
function detectTag(str) {
  let strNoSpaces = str.trim().toLowerCase();
  if (obj[strNoSpaces] == undefined) {
    span1.textContent = strNoSpaces;
    span2.textContent = "Такого тега нет в нашей базе";
  } else {
    span1.textContent = strNoSpaces;
    span2.textContent = obj[strNoSpaces];
  }
}

// функция для проверки инпута на пустоту
function checkValue(value) {
  if (value == "" || value == " " || value == "  ") {
    alert("Необходимо ввести наименование тега HTML");
    return false;
  } else return true;
}

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (checkValue(this.value)) {
      detectTag(this.value);
      this.value = "";
    }
  }
});

// функция для клика по тегам
function tagActive() {
  for (let tag of tagsAll) {
    tag.addEventListener("click", function () {
      detectTag(tag.textContent);
    });
  }
}

tagActive();
