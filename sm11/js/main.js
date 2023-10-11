let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');
modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})
modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

document.addEventListener("DOMContentLoaded", function() {
    const news = [{
        id: 1,
        name: "Название новости",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta odio vel accusantium eveniet rem tempora? Expedita, rem harum, esse praesentium possimus ex blanditiis aut similique eligendi animi, asperiores repellat!"
    }];
    const newsContainer = document.getElementById("new");

    function createNewsElement(newsItem) {
        const newsElement = document.createElement("div");
        newsElement.classList.add("news");

        newsElement.innerHTML = 
        `<div class="wrapper news-wrapper"><div class="news-item">
        <h3 class="h3">${newsItem.name}</h3>
        <p class="news-item__p">${newsItem.text}</p>
        </div>
        </div>`;

        return newsElement;
    }

    news.forEach(newsItem => {
        const newsElement = createNewsElement(newsItem);
        newsContainer.appendChild(newsElement);
    });

    const newsForm = document.getElementById("newsForm");
    newsForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Запросить у пользователя подробности новости
        const nameInput = document.getElementById("title");
        const textInput = document.getElementById("text");
    
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
    
        // Проверить, что название новости содержит не менее 8 символов
        if (name.length < 8) {
            // Если название новости недостаточно длинное, вывести сообщение об ошибке
            alert("Название новости должно содержать не менее 8 символов");
            return;
        }
    
        // Проверить, что текст новости содержит не более 300 символов
        if (text.length > 300) {
            // Если текст новости слишком длинный, вывести сообщение об ошибке
            alert("Текст новости должен содержать не более 300 символов");
            return;
        }
    
        // Создать новую новость
        const newNews = {
            id: news.length + 1,
            name,
            text
        };
    
        // Добавьте новую новость в массив
        news.push(newNews);
    
        // Добавьте новую новость в контейнер новостей.
        const newsElement = createNewsElement(newNews);
        newsContainer.appendChild(newsElement);
    
        newsForm.reset();
    });
});

// Обработчик события keydown
document.addEventListener("keydown", function(event) {
    // Проверяем нажатую клавишу
    if (event.key === "b") {
        // Изменяем фон на черный
        document.body.style.backgroundColor = "#202125";
    } else if (event.key === "w") {
        // Изменяем фон на белый
        document.body.style.backgroundColor = "white";
    }
});