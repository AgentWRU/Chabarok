$(document).ready(function () {
    $('.slide-one').owlCarousel({
        autoplay: 7000, //Set AutoPlay to 7 seconds
        loop: true,
        autoplayTimeout: 5000, // Время между слайдами в миллисекундах (5 секунд)
        autoplayHoverPause: true, // Пауза автопрокрутки при наведении мыши
        pagination: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],

        // CSS Styles
        baseClass: "owl-carousel",
        theme: "owl-theme"
    })
    $('.slide-two').owlCarousel({
        loop: true,
        /*autoplay: 7000,*/
        /*autoplayTimeout: 5000, // Время между слайдами в миллисекундах (5 секунд)
        autoplayHoverPause: true,*/ // Пауза автопрокрутки при наведении мыши
        margin: 300,
        items: 1,
        mergeFit: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        lazyLoad: true,

        baseClass: "owl-carousel",
        theme: "owl-theme"
    })
    $('.slide-three').owlCarousel({
        autoplay: 7000,
        loop: true,
        autoplayTimeout: 5000, // Время между слайдами в миллисекундах (5 секунд)
        autoplayHoverPause: true, // Пауза автопрокрутки при наведении мыши
        margin: 20,
        pagination: true,
        items: 2,
        dotsEach: 1,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [830, 1],
        itemsMobile: [479, 1],
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
        },
        dotsContainer: ".paginations  ",

        baseClass: "owl-carousel",
        theme: "owl-theme"
    })
})

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const threshold = 100; // Пороговое значение прокрутки для добавления класса
    if (scrollTop > threshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное действие ссылки

        // Получаем ID целевого элемента из атрибута href
        const targetId = this.getAttribute('href');

        // Находим целевой элемент по ID
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Определяем высоту навигационной панели (может потребоваться настроить)
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Определяем высоту прокрутки (например, на 200 пикселей раньше элемента)
            const scrollOffset = -50;

            // Вычисляем позицию элемента относительно верхней части страницы
            const targetPosition = targetElement.getBoundingClientRect().top;

            // Выполняем прокрутку к элементу с учетом смещения и высоты навигационной панели
            window.scrollTo({
                top: window.scrollY + targetPosition - navbarHeight + scrollOffset,
                behavior: 'smooth' // Добавляем плавную анимацию
            });
        }
    });
});
// Обработка события прокрутки страницы
document.addEventListener('scroll', handleScroll);



let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});

var exampleModal = document.getElementById('exampleModal1')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Кнопка, запускающая модальное окно
    var button = event.relatedTarget
    // Извлечь информацию из атрибутов data-bs- *
    var recipient = button.getAttribute('data-bs-whatever')
    // При необходимости вы можете инициировать запрос AJAX здесь
    // а затем выполните обновление в обратном вызове.
    //
    // Обновите содержимое модального окна.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')
    modalTitle.textContent = recipient
    modalBodyInput.value = recipient
})

function valid(id, value, idButton) {
    if (!value) {
        id.setAttribute("class", "validat")
        return
    }
    showQuestion1(idButton)
}

function validLast(id1, value1, id2, value2) {
    if (!value1) {
        id1.setAttribute("class", "question10 validat ")
        return
    } else if (!value2) {
        id2.setAttribute("class", "validat")
        return
    }
    if (sendFormData1() == 1) return
    showQuestion1('question10')
}

function validLast11(id1, value1, id2, value2) {
    if (!value1) {
        id1.setAttribute("class", "question10 validat ")
        return
    } else if (!value2) {
        id2.setAttribute("class", "validat")
        return
    }
    if (sendFormData11() == 1) return
}



