<h1 align="center">Marvel Essentials</h1>

<h1 align="center"><img src="./src/assets/images/preview.gif" /></h1>

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

### Preview the project [here](https://marvel-essentials-fss.vercel.app)

React application for Marvel's content, you can login with your GitHub username and receive a token from JSONWebToken, you can check out the 3 different sliders about heroes, movies and comics, on every slider item you can check where the hero appears or where the movie and comic it's available, you can also logout from the application dropping the token clicking in "Sair".

## 🔧 Technologies choice

Project developed using the React library to make it a Single Page Application, which guarantees the best performance when running directly in the client's browser, Create React Application tool to configure the environment, TypeScript as the language to guarantee props and state values accordingly as expected from the contract, JSONWebToken as the token handler stored in the Local Storage, which allows user to access the application with no need to login one more time, Redux as the global context state management, Styled Components to avoid unnecessary and conflicting component styles, Atomic Design as the design pattern to promote clean maintenance and good coding practices according to ESLint and EditorConfig.

 ## 🔨 Project Architecture

 Project Architecture based on Atomic Design.

 ```
 src
 ├──@types
 ├──assets
 │   ├──fonts
 │   ├──images
 │   └──styles
 ├──components
 │   ├──Atom
 │   ├──Molecule
 │   └──Organism
 ├──helpers
 │   ├──ensurers
 │   ├──handlers
 │   └──hooks
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

  Redux was used to guarantee the data from user's GitHub on every component, save the token, login and logout the user.

  On the Login page by checking 'Save login', you choose to store the token in Local Storage. In Redux Initial State we get the token from Local Storage, if it doesn't exist you can login again or for the first time, once private routes checks the token directly from Redux.

 `
  InitialState = {
    token: ${localStorage.getItem()},
    user: {
      githubUserImage: `https://github.com/${githubUser}.png`,
      githubUser,
    },
  }
 `

  You can access the redux actions on folder `src/store/actions`.

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

- Use data from [Marvel's API](https://developer.marvel.com/) instead a mock JSON file.
- Create buttons on cards that can take the user to the streaming or market.
