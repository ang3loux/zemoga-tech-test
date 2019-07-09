
<div align="center">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="Logo" width="25%">
</div>


# Zemoga Tech Test - React Native

## Architecture

This architecture is optimized for building solid cross-platform mobile applications through separation of concerns between the UI and business logic. It is well documented for the understanding of the new developers that collaborate in the project.

The driving goal of the architecture is separation of concerns:

- **Presentational components are separated from containers** (aka "screens").

- **State is managed using global Redux stores**.
    
- **Application side-effects (API calls, etc.) are separated from UI and state manipulation using Redux Saga**.

    Using Redux Saga has two benefits: keeping application side-effects and related business logic out of UI components, as well as executing that logic in an asynchronous way without ending in callback hell.
    
    
## Libraries

- [React Native](https://facebook.github.io/react-native/) (v0.59.9)
- [NativeBase](https://github.com/GeekyAnts/NativeBase) (v2.12.1) for a fast development without worries for the cross platform UI/UX experience
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.6.0) with a ***NavigationService*** to handle routing and navigation in the app
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to reduce the Redux boilerplate
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native


## Directory layout

- **App/Components**: shared presentation components
- **App/Config**: configuration of the application
- **App/Containers**: container components, i.e. the application's screens (each screen has it's own custom components)
- **App/Images**: images used by the application
- **App/Navigators**: react navigation navigators 
- **App/Sagas**: redux sagas
- **App/Services**: application services, e.g. API clients
- **App/Stores**: redux actions, reducers and stores
- **App/Theme**: base styles for the application


## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)


## Running the project

- `yarn install` to install the dependencies
- Create your configuration file `App/Config/index.js` from `index.dev.js`
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone) or `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

