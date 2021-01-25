<h1 align="center">Youtube schedule calculator</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


## Install

```sh
yarn install
```

## Create your credential

To use this app you should have google credentials to request videos.  
[Doc here](https://developers.google.com/youtube/registering_an_application?hl=pt_br#create_project)
## Configure keys

```sh
cp .env.example .env.local
nano .env.local

# paste your key in front of

GOOGLE_KEY_API=
```

## Usage

```sh
yarn start
```

## Tests

```sh
# regular test
yarn test

# test in watch mode
yarn test:watch

# coverage
yarn test:cov
```

## E2E tests

```sh
# headless browser
yarn test:e2e

# running on chrome
yarn test:e2e:browser
```

## Build

```sh
# build for production
yarn build

# analyzing bundle size
yarn analyze
```

## Lint

```sh
# check lint issues
yarn lint

# fix lint issues
yarn lint:fix
```

## Build with

- [cra](https://create-react-app.dev) - Most common boilerplate to start react
  projects
- [theme-ui](https://theme-ui.com/) - Design systems based on constraint-based design principles
- [rebassjs](https://styled-system.com) - React primitive UI components
built with Styled System
- [typescript](https://www.typescriptlang.org) - JavaScript extention to add
  types to the language
- [cypress](https://www.cypress.io/) - Created to easily test end to end
  front-end

## TODO

- [] Add storybook
- [] Loop API request to get 200 videos instead 50
- [] Add [loglevel remote](https://github.com/kutuluk/loglevel-plugin-remote) to track application
- [x] Create pull request template
- [] Add E2e tests
- [x] Add Integration tests
- [] Add Unit tests
- [] Increase coverage of all tests


## Author

🦊 **William G.**

- Github: [@rap0so](https://github.com/rap0so)
- LinkedIn:
  [@william-godoy-4bb919b5](https://www.linkedin.com/in/w-godoy/)

## 📝 License

Copyright © 2020 [William G.](https://github.com/rap0so).<br /> This project is
[MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
