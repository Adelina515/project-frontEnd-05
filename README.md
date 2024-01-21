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

The initial page users encounter upon accessing [Power Pulse]()

You may choose to register a new account or sign in to an existing one.  
You'll find current statistics displayed on the right side of the page.


- `/signup` - SignUp Page

To register, provide your name (to be displayed on your profile page), email address, and a password.  
Please ensure that your password contains a minimum of 6 characters.

We've implemented Google authorization for your convenience.

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

- `/profile` - Exercises Page

Clicking on the gear icon within the header section will navigate you to the Profile page. Here, you can review your data and make updates if necessary.

## Features

Implemented responsiveness and mobile menu for better UI.

## Contributors

- Adelina Hodlevska [GitHub](https://github.com/Adelina515) - TeamLead
- Nadiia Sukhorukova [GitHub](https://github.com/Nadija30) - TeamLead
- Solomiia Lutska [GitHub](https://github.com/Mia468) - Scrum Master Developer 
- Vitalii Kurpach [GitHub](https://github.com/VitaliiKyrpach) - Developer 
- Daryna Dermanchuk [GitHub](https://github.com/DarynaSD)  -  Developer 
- Olha Matsiiovska [GitHub](https://github.com/Matsiiovska) - Developer 
- Natalia Melnyk [GitHub](https://github.com/avreliakotta) - Developer 
- Yelyzaveta Romanova [GitHub](https://github.com/Liza0806) - Developer 
- Stanislav Kish [GitHub](https://github.com/app1e1over) - Developer
- Anastasiia Bakalyna[GitHub]() - Developer

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DmytroZhdanov/power-pulse.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:5173](http://localhost:3000) in your browser (Note: the port may be changed if 3000 port is occupied by another website).

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


