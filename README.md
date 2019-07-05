<p align="center">
  <img src="https://github.com/polmann/chess-moves-app/blob/master/public/images/project_icon.png" />
</p>

# Valid Chess Moves App

This is an application that highlights the possible moves of a chess piece in exactly two turns. Currently there's only support for the knight piece, so anyone is welcome to [contribute](/CONTRIBUTING.md).

This is an api that returns the valid moves of a chess piece given its position and the depth of play (number of steps). Currently there's only support for the knight piece, anyone is welcome to [contribute](/CONTRIBUTING.md).

## Installing

For instructions on how to install the app, please read the Getting Started section of the [Contributors Guide](/CONTRIBUTING.md).

## Project structure
The code base is basically divided into 3 parts:
1. The React components that come together to form the interface, where the index.js exposes the Board Container.
2. The lib to make ajax calls to the API.
3. The state container/management with redux, where the createStore.js file aggregates the redux parts (reducers and middlewares) into one neat function and the chess.js exposes the chess store components like the main reducer, the action creators, and a mapStateToProps / mapDispatchToProps to be consumed by the React components.

![project structure](/public/images/project_structure.png)


## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - React app boilerplate.
* [Material-UI](https://material-ui.com/) - Library of React components that follow Google's material UI design principles.
* [Redux](https://redux.js.org/) - The app's state container library.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client.

## Contributing

See the [Contributors Guide](/CONTRIBUTING.md)

## License

This project is licensed under the MIT License.
