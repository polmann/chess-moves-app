# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

The best way to contribute is to add new features such as:
- Add support for more chess pieces
- Add ability to select the depth of play (number of steps)
- Improve error handling/reporting
- Improve general aesthetics of the app

You can also contribute by reporting bugs and writing tests.

## Getting Started

The application was built using create-react-app, you can find more information [here](https://github.com/facebook/create-react-app).

You will need to clone the repository and then install the dependencies to start developing.

### Global dependencies

* [Node](https://nodejs.org) ([n](https://github.com/tj/n) recommended)
* [Yarn](https://yarnpkg.com) (recommended)

### Clone repository

```bash
# clone the repository on your local machine
git clone git@github.com:polmann/chess-moves-app.git

# step into local repo
cd chess-moves-app
```

### Install project dependencies

```bash
yarn
```


## Running

### To run the application on development you'll just need to execute the start script:

```bash
yarn start
```

## Scripts available

* `yarn start` : Start the development server and restart on changes.
* `yarn build` : Build the minified app into the buid folder.
* `yarn test` : Run the unit and integration tests.
* `yarn storybook` : start the storybook server (storybook is a utility to help build React components on sandbox mode).
