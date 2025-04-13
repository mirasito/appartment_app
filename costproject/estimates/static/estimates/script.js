/**
 * Показывает экран с определённым номером (1, 2 или 3).
 * Скрывает все остальные.
 */
function goToScreen(screenNumber) {
    // Получаем все экраны
    const screens = document.querySelectorAll(".screen");
    
    // Удаляем класс active у всех экранов
    screens.forEach(screen => {
      screen.classList.remove("active");
    });
    
    // Находим нужный экран и делаем его активным
    const target = document.getElementById(`screen-${screenNumber}`);
    if (target) {
      target.classList.add("active");
    }
  }

  function toggleStageDetails(id) {
    const details = document.getElementById(`details-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
    if (!details || !arrow) return;
    
    if (details.style.display === "none" || details.style.display === "") {
      // Развернуть
      details.style.display = "block";
      arrow.textContent = "▲"; // меняем стрелку на "стрелку вверх"
    } else {
      // Свернуть
      details.style.display = "none";
      arrow.textContent = "▼";
    }
  }

  function openAddStageModal() {
    // Здесь код, который, например, показывает всплывающее окно для ввода данных о новом этапе
    alert('Тут открываем форму для нового этапа');
  }

  // Открывает форму добавления материала
function openMaterialForm(stageIndex) {
  document.getElementById('material-stage-index').value = stageIndex;
  document.getElementById('materialModal').style.display = 'block';
}

// Закрывает форму добавления материала
function closeMaterialForm() {
  document.getElementById('materialModal').style.display = 'none';
}

// Аналогично для работ
function openWorkForm(stageIndex) {
  document.getElementById('work-stage-index').value = stageIndex;
  document.getElementById('workModal').style.display = 'block';
}

function closeWorkForm() {
  document.getElementById('workModal').style.display = 'none';
}

// Добавление материала (пример локального добавления)
function addMaterial(event) {
  event.preventDefault();
  const stageIndex = document.getElementById('material-stage-index').value;
  const name = document.getElementById('material-name').value;
  const qty = parseFloat(document.getElementById('material-quantity').value);
  const unit = document.getElementById('material-unit').value;
  const price = parseFloat(document.getElementById('material-price').value);
  const total = qty * price;

  // Пример: Найти таблицу материалов в текущем этапе (по stageIndex) и добавить строку
  // Псевдокод, т.к. у нас нет реального массива:
  // document.querySelector(`#stage-${stageIndex} .materials-table tbody`)
  //    .insertRow(...)

  alert(`Добавлен материал: ${name}, сумма = ${total.toFixed(2)} ₸ (локально)`);

  // Закрываем модалку
  closeMaterialForm();
  return false;
}

// Добавление работы (пример локального добавления)
function addWork(event) {
  event.preventDefault();
  const stageIndex = document.getElementById('work-stage-index').value;
  const wname = document.getElementById('work-name').value;
  const whours = parseFloat(document.getElementById('work-hours').value);
  const wcost = parseFloat(document.getElementById('work-cost').value);
  const wtotal = whours * wcost;

  alert(`Добавлена работа: ${wname}, сумма = ${wtotal.toFixed(2)} ₸ (локально)`);
  
  closeWorkForm();
  return false;
}