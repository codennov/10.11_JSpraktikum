// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления


// список фруктов в JSON формате
let fruitsJSON = `[  
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22},
  {"kind": "Гуава", "color": "зеленый", "weight": 30},
  {"kind": "Джекфрукт", "color": "желтый", "weight":40},
  {"kind": "Питайя", "color": "розово-красный", "weight": 26},
  {"kind": "Лонган", "color": "желтый", "weight": 16},
  {"kind": "Манго", "color": "желтый", "weight": 38},
  {"kind": "Марула", "color": "желтый", "weight": 25},
  {"kind": "Нойна", "color": "зеленый", "weight": 31},
  {"kind": "Рамбутан", "color": "розово-красный", "weight": 16},
  {"kind": "Саподилла", "color": "светло-коричневый", "weight": 24},
  {"kind": "Маракуйя", "color": "фиолетовый", "weight": 14}
]`;



// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

let filteredFruits = [...fruits];


console.log(fruits);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {

  fruitsList.replaceChildren();
  // console.log(fruitsList);

  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits



  for (let i = 0; i < filteredFruits.length; i++) {

    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

    const col = filteredFruits[i].color === "фиолетовый" ? "fruit_violet" :
      filteredFruits[i].color === "зеленый" ? "fruit_green" :
      filteredFruits[i].color === "розово-красный" ? "fruit_carmazin" :
      filteredFruits[i].color === "желтый" ? "fruit_yellow" : "fruit_lightbrown";



    const violet = document.createElement(filteredFruits[i].kind);
    violet.classList.add("fruit__item");
    violet.classList.add(col);
    const violetParent = document.querySelector('.fruits__list');
    violetParent.appendChild(violet, violetParent);

    const violetDiv = document.createElement("div");
    violetDiv.classList.add("fruit__info");
    violet.appendChild(violetDiv);

    const violetIndex = document.createElement("div");
    violetIndex.innerHTML = `ìndex: ${i}`;
    violetDiv.appendChild(violetIndex);

    const violetKind = document.createElement("div");
    violetKind.innerHTML = `kind: ${filteredFruits[i].kind}`;
    violetDiv.appendChild(violetKind);

    const violetColor = document.createElement("div");
    violetColor.innerHTML = `color: ${filteredFruits[i].color}`;
    violetDiv.appendChild(violetColor);

    const violetWeight = document.createElement("div");
    violetWeight.innerHTML = `weight (кг): ${filteredFruits[i].weight}`;
    violetDiv.appendChild(violetWeight);



  }
}

// первая отрисовка карточек

display();


/*** ПЕРЕМЕШИВАНИЕ ***/
//shuffleF

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (filteredFruits.length > 0) {

    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)

    const random = getRandomInt(0, filteredFruits.length - 1);
    const newArr = filteredFruits.splice(random, 1)[0];
    result.push(newArr);

    // Сравнение массивов fruits и result и вывод в alert о равенстве массивов 

    let resultJSON = JSON.stringify(result);
    //console.log(resultJSON);
    //console.log(fruitsJSON);
  
    let compare = resultJSON !== fruitsJSON;
    console.log(compare);

    if (compare === false) {
      alert("Порядок элементов не изменился! Попробуйте еще раз!")
    }

  }

  filteredFruits = result;
}

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});



/*** ФИЛЬТРАЦИЯ ***/
// filtration

// фильтрация массива

  let minweightInput = document.querySelector('.minweight__input');
  let maxweightInput = document.querySelector('.maxweight__input');

  for (const item of fruits) {
    console.log(item.weight);


 }


const filterFruits = () => {

 filteredFruits  = fruits.filter((item) => {
   if (item.weight >= minweightInput.value && item.weight <= maxweightInput.value) {
    return true;
   }
    if (minweightInput.value === " " || maxweightInput.value === " ") {
      return fruitsList.replaceChildren();
      };
    });
   
    // TODO: допишите функцию

  
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});


/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});