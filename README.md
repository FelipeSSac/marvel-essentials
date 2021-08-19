<h1 align="center">Marvel Essentials</h1>

## ✨ Technologies

This project was developed using the following technologies:

- [React](https://reactjs.org/)
- [React DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [Create REACT-APP](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://react-redux.js.org/)
- [Styled-components](https://www.styled-components.com/)
- [JSONWebToken](https://jwt.io/)
- [ESLint](https://eslint.org/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Project

React application for Marvel's best content, you can login with your GitHub username and receive a token from JSONWebToken, you can check out the 3 different sliders about heroes, movies and HQs, on every slider item you can check where the hero appears or where the movie and HQ it's available, you can also logout from the application dropping the token clicking in "Sair".

## 🎯 Challenge

This project is based on the [Front-end](https://github.com/Mestres-da-Web/desafio-frontend-jr) challenge.


## 🔧 Technologies choice

Project developed using the React library to make it a Single Page Application, which guarantees the best performance when running directly in the client's browser, Create React Application tool to configure the environment, TypeScript as the language to guarantee props and state values accordingly as expected from the contract, JSONWebToken as the token handler stored in the Local Storage, which allows user to access the application with no need to login one more time, Redux as the global context state management, Styled Components to avoid unnecessary and conflicting component styles, Atomic Design as the design pattern to promote clean maintenance and good coding practices according to ESLint and EditorConfig.

 ## 🔨 Project Architecture

 Project Architecture based on Atomic Design and SOLID principles.

 ```
 src
 ├──assets
 │   ├──fonts
 │   ├──images
 │   └──styles
 ├──components
 │   ├──Atom
 │   ├──Molecule
 │   └──Organism
 ├──helpers
 ├──pages
 ├──resources
 │   └──data
 ├──routes
 └──store
     └──actions
 ```

 ## 🧪 Components

 ```
 Component
  ├──Component.tsx
  ├──styles.ts
  └──index.ts
 ```

 ## 🎆 Redux

 Redux was used to guarantee the data from user's GitHub on every component and to login and logout.
 you can access the redux actions on folder `src/store/actions`.

## 🚀 How to run

Clone this repository.
```bash
# Run to install dependencies.
$ yarn

# Run to start the project on `localhost:3000`.
$ yarn start
```

## 🚧 How to build

Clone this repository.
```bash
# Run to install dependencies.
$ yarn

# Run to start building the project.
$ yarn build

# Builded project it´s now available at folder `root/build`
```

## 💎 Next steps

- Create an API to register the data from Marvel and store in a database, instead a mock JSON file.
- Create a hero, movie or HQ details page.
