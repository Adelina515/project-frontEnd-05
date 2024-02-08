# Power Pulse

Power Pulse is a fitness app for transforming your body shape and lifestyle.
With the help of this app, people can keep track of their weight, engage in sports, and lead a healthy lifestyle.

## Table of content

- [Routing](#routing)
- [Features](#features)
- [Contributors](#contributors)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Redux State](#redux-state)


## Routing

The app uses React Router for navigation. The available routes are:
- `/welcome` - Welcome Page

The initial page users encounter upon accessing [Power Pulse](adelina515.github.io/project-frontEnd-05/)

You may choose to register a new account or sign in to an existing one.  

- `/signup` - SignUp Page

To register, provide your name (to be displayed on your profile page), email address, and a password.  
Please ensure that your password contains a minimum of 6 characters.

If you already have an account, you can navigate to the SignIn page to log in.

- `/signin` - SignIn Page

To log in to your account, simply enter your email and password.  

If you haven't registered yet, you can switch to the SignUp page for registration.

- `/data` - Data Page

After successful registration, you'll be redirected to the Data page, where you'll need to complete all fields across three steps.

Please note, using this web app requires filling in all required information. This data is utilized for calculating your daily calorie rate, assisting you in achieving your fitness goals, and marking products as recommended or not recommended for you.

Furthermore, a 'Help' button becomes available, allowing you to reach out if you encounter any issues while using the app. We'll respond promptly to assist in resolving any problems.

It's crucial to provide a valid email address for us to efficiently communicate solutions or address any questions you may have.

- `/diary` - Diary Page

On the Diary page, you can review the products you've consumed or exercises you've performed by selecting a specific date (by default, it's set to the current date).

Additionally, there's a dashboard displaying calculated consumed and burned calories, along with the duration of your training sessions.


- `/products` - Products Page

On the Products page, you have the option to select products to add to your diary as consumed items.  
Utilize filters to find the exact match for your selection.


- `/exercises` - Exercises Page

On the Exercises page, you can explore exercises for your training regimen.

You'll find three categories to choose from:
1. Body parts
2. Muscles
3. Equipment

Based on your selected category, the list of subcategories will be updated accordingly.

- `/profile` - Profile Page

Clicking on the gear icon within the header section will navigate you to the Profile page. Here, you can review your data and make updates if necessary.

## Features

Implemented responsiveness and mobile menu for better UI.

## Contributors

- Adelina Hodlevska [GitHub](https://github.com/Adelina515) - TeamLead
- Nadiia Sukhorukova [GitHub](https://github.com/Nadija30) - TeamLead
- Solomiia Lutska [GitHub](https://github.com/Mia4678) - Scrum Master Developer 
- Vitalii Kurpach [GitHub](https://github.com/VitaliiKyrpach) - Developer 
- Daryna Dermanchuk [GitHub](https://github.com/DarynaSD)  -  Developer 
- Olha Matsiiovska [GitHub](https://github.com/Matsiiovska) - Developer 
- Natalia Melnyk [GitHub](https://github.com/avreliakotta) - Developer 
- Yelyzaveta Romanova [GitHub](https://github.com/Liza0806) - Developer 
- Stanislav Kish [GitHub](https://github.com/app1e1over) - Developer
- Anastasiia Bakalyna[GitHub]() - Developer

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Adelina515/project-frontEnd-05`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser (Note: the port may be changed if 3000 port is occupied by another website).

## Technologies Used

- React
- Redux
- RTK Query
- React Router
- Axios (for API requests)

## API

The application utilizes a backend developed by our team. Feel free to familiarize yourself with it [here](https://github.com/Nadija30/power-pulse-backend)

## Redux State

The Redux store manages the application's state, encompassing tokens, user information such as name, email, avatar image, and the account creation date.


# Power Pulse (українською)

Power Pulse - це фітнес-додаток для трансформації вашого тіла та способу життя. За допомогою цього додатку користувачі можуть слідкувати за змінами своєї ваги, підбирати необхідний раціон та фізичні навантаження в залежності від їх мети.

## Зміст

- [Маршрутизація](#маршрутизація)
- [Особливості](#особливості)
- [Учасники проєкту](#учасники-проєкту)
- [Запуск проєкту](#запуск-проєкту)
- [Використані технології](#використані-технології)
- [API](#api)
- [Стан Redux](#стан-redux)

## Маршрутизація

Додаток використовує React Router для навігації. Доступні маршрути:

   - `/welcome` - Початкова сторінка

Початкова сторінка, яку користувачі бачать при доступі до [Power Pulse](adelina515.github.io/project-frontEnd-05/)

Ви можете зареєструвати новий обліковий запис або увійти в існуючий.

   - `/signup` - Сторінка Реєстрації

Щоб зареєструватися, вкажіть своє ім'я (яке буде відображатися на вашій сторінці профілю), електронну адресу та пароль.
Переконайтеся, що ваш пароль містить принаймні 6 символів.

Якщо у вас вже є обліковий запис, ви можете перейти на сторінку входу.

  - `/signin` - Сторінка Входу

Для входу в свій обліковий запис просто введіть свою електронну адресу та пароль.

Якщо ви ще не зареєструвалися, ви можете перейти на сторінку реєстрації.

   - `/data` - Сторінка Даних

Після успішної реєстрації вас перенаправлять на сторінку Даних, де вам потрібно буде заповнити всі поля.

Зверніть увагу, що використання цього веб-додатка вимагає введення всієї необхідної інформації. Ці дані використовуються для обчислення вашої щоденної кількості калорій, щоб допомогти вам досягти своїх фітнес-цілей та відзначати продукти як рекомендовані або нерекомендовані для вас.

Крім того, стає доступною кнопка "Довідка", яка дозволяє вам звертатися за допомогою, якщо у вас виникли проблеми під час використання додатка. Ми оперативно відповімо, щоб допомогти вирішити будь-які проблеми.

Для ефективного спілкування рекомендується надавати дійсну електронну адресу.

  - `/diary` - Сторінка щоденник 

На сторінці Щоденник ви можете переглядати продукти, які ви спожили, або вправи, які ви виконали, вибравши конкретну дату (за замовчуванням, це встановлено на поточну дату).

Крім того, є панель інструментів, на якій відображається обчислення спожитих калорій , спалених під час тренування, а також тривалість ваших тренувань.

 - `/products` - Сторінка Продуктів

На сторінці Продуктів ви можете вибирати продукти та додавати їх у щоденник як спожиті.
Ви можете використовувати фільтри щоб краще обрати необхідний продукт.

  - `/exercises` - Сторінка Вправ

На сторінці Вправ ви можете переглядати вправи необхідні для вашої системи тренувань.

Ви знайдете три категорії для вибору:

1. Body parts
2. Muscles
3. Equipment

Відповідно до обраної вами категорії список підкатегорій буде оновлено відповідно.

 - `/profile` - Сторінка Профілю

Клікнувши по значку зубчастого колеса в заголовному розділі, він перенесе вас на сторінку Профілю. Тут ви можете переглядати свої дані та вносити зміни, якщо це необхідно.

## Особливості

Реалізована адаптивність та мобільне меню для кращого інтерфейсу користувача.

## Учасники проєкту

- Adelina Hodlevska [GitHub](https://github.com/Adelina515) - TeamLead
- Nadiia Sukhorukova [GitHub](https://github.com/Nadija30) - TeamLead
- Solomiia Lutska [GitHub](https://github.com/Mia4678) - Scrum Master Developer 
- Vitalii Kurpach [GitHub](https://github.com/VitaliiKyrpach) - Developer 
- Daryna Dermanchuk [GitHub](https://github.com/DarynaSD)  -  Developer 
- Olha Matsiiovska [GitHub](https://github.com/Matsiiovska) - Developer 
- Natalia Melnyk [GitHub](https://github.com/avreliakotta) - Developer 
- Yelyzaveta Romanova [GitHub](https://github.com/Liza0806) - Developer 
- Stanislav Kish [GitHub](https://github.com/app1e1over) - Developer
- Anastasiia Bakalyna[GitHub]() - Developer

## Запуск проєкту

Щоб запустити додаток локально, виконайте ці кроки:

   - Клонуйте репозиторій: `git clone https://github.com/Adelina515/project-frontEnd-05`
   - Встановіть залежності: `npm install`
   - Запустіть додаток: `npm run dev`
   - Відкрийте http://localhost:3000 в своєму браузері (Примітка: порт може змінюватися, якщо порт 3000 вже використовується іншим веб-сайтом).

## Використані технології

- React
- Redux
- RTK Query
- React Router
- Axios (для API запитів)

## API

Додаток використовує бекенд, розроблений нашою командою. Ви можете ознайомитися з ним [тут](https://github.com/Nadija30/power-pulse-backend)

## Стан Redux

Сховище Redux керує станом додатка, включаючи токени, інформацію про користувача, таку як: ім'я, електронна адреса, аватар та дата створення облікового запису.


