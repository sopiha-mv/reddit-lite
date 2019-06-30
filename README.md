# Reddit-Lite

It is reddit viewer that displays a list of posts in "vancouver" subreddit.

### Installing

To clone project from repository run following command:

```
git clone https://github.com/sopiha-mv/reddit-lite.git reddit-lite/
```

This repository includes build of project. Open index.html file in root directory to use reddit-lite. 

### Commands

There are commands in package.json file which allow to build, test project and start webpack dev server.
List of available commands:

```
npm run build    #build project
npm test         #start testing
npm run watch    #start webpack dev server
```

### Folder Structure

    .
    ├── dist                    # Compiled assets (bundle.js)
    |
    ├── src                     # Source files
    |    ├── __test__           # Automated tests
    |    ├── actions            # Redux actions
    |    ├── common             # Сommon JS modules
    |    ├── components         # React.js components
    |    ├── reducers           # Redux reducers
    |    ├── store              # Redux store config
    |    └── index.js           # Entrypoint file
    |
    ├── .babelrc                # Babel config file
    ├── .eslintrc               # ESLint config file
    ├── index.html              # HTML layout
    ├── package.json            # Dependencies
    ├── webpack.config.json     # Webpack configuration file
    └── README.md

## Built With

* [Webpack](https://webpack.js.org/) - Module bundler
* [npm](https://www.npmjs.com/) - Dependency Management
* [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps

## Authors

* **Mykola Sopiha** - *mykola.sopiha@dresslerconsulting.com*

## Acknowledgments

First, thank you for your time and consideration. I look forward to hearing from you.