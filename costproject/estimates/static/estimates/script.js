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