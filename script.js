// Обработка модального окна заявки
document.addEventListener('DOMContentLoaded', function() {
    const orderModal = document.getElementById('order');
    const modalBackdrop = orderModal.querySelector('.modal-backdrop');
    const modalClose = orderModal.querySelector('.modal-close');
    const orderForm = document.getElementById('orderForm');
    const orderLinks = document.querySelectorAll('a[href="#order"]');
    
    // Открытие модального окна
    orderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    function closeModal() {
        orderModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && orderModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Обработка формы
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь должна быть интеграция с бэкендом
            // Пока просто показываем сообщение
            alert('Спасибо за заявку! Мы свяжемся с вами в течение часа.');
            
            // Очистка формы и закрытие модального окна
            orderForm.reset();
            closeModal();
        });
    }
    
    // Плавная прокрутка для якорей (кроме #order)
    document.querySelectorAll('a[href^="#"]:not([href="#order"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Если это секция examples, закрываем модальное окно если открыто
                if (orderModal.classList.contains('active')) {
                    closeModal();
                }
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});