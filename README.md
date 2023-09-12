# maplerad-admin-test

# Deve: Emmanuel Ikem (ikem43@gmail.com)

## Project setup

```

To set up the project, follow these steps:
1. Clone the repository to your local machine:
2. Navigate to the project directory:
3. Install project dependencies using Yarn (yarn install):

```

### Compiles and hot-reloads for development

```
yarn serve
To run the app in development mode with hot-reloading, use the following command above:
The app will be available at [http://localhost:8080](http://localhost:8080) in your browser.

```

### Compiles and minifies for production

```
yarn build
To build the app for production with minification, use the following command:
```

### Lints and fixes files

```
yarn lint
You can lint and fix project files using the following command:
```

## Navigation

| Route Name    | Path          | Guard (Protected/Not Protected) |
| ------------- | ------------- | ------------------------------- |
| Login         | /             | Not Protected                   |
| Otp           | /auth/otp     | Not Protected                   |
| Dashboard     | /dashboard    | Protected                       |
| FX Conversion | /fxConversion | Protected                       |

## Libraries Used

- Vue
- Vue Toast Notification
- Vuex
- Tailwind CSS
- Axios
- ApexCharts

## Pages

| Page Name     | Layout           |
| ------------- | ---------------- |
| Login         | Auth Layout      |
| Otp           | Auth Layout      |
| Dashboard     | Dashboard Layout |
| FX Conversion | Dashboard Layout |

## Note

To access the app, you are required to use your sandbox credentials.
