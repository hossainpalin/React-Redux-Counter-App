# Getting Started With React Redux.

The React Redux counter app is a simple web application built using React and Redux, two popular JavaScript libraries for managing state in front-end applications. The main purpose of this app is to demonstrate the basic concepts of Redux and how it can be integrated with a React application to manage and update state in a predictable and centralized manner.

## The app consists of a numeric counter that displays a value, typically starting from zero.

1. **Increment and Decrement**: The counter can be incremented or decremented by clicking on corresponding buttons. Each click triggers an action that updates the counter's value in the Redux store.
2. **Redux Store**: Redux is used to manage the application state. The counter value is stored centrally in the Redux store, making it easily accessible to any component in the app.
3. **Actions**: When the user clicks the increment or decrement buttons, Redux actions are dispatched. These actions are plain JavaScript objects containing a type and, optionally, a payload (new counter value).
4. **Reducers**: Redux reducers listen for dispatched actions and handle state updates based on the action type. For the counter app, a reducer updates the counter value based on the action payload, if applicable.

The React Redux counter app serves as a minimal yet illustrative example of how Redux can be utilized with React to manage state effectively in larger and more complex applications. It showcases the unidirectional data flow of Redux, where state changes are handled through actions and reducers, promoting a more maintainable and scalable codebase.

**Counter App Screenshot**

![alt text](./src/assets/preview.jpg)

[View Live Demo](https://hossainpalin.github.io/React-Redux-Counter-App/) - React Counter App.
