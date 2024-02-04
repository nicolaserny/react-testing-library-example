# React Testing Library example

This short project demonstrates how to use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) with MSW.

It focuses on a simple search form that fetches data from an API and displays the results. I added a React context to show how to test components that relies on providers.

I intentionally added no styling to the components to keep the focus on testing. By the way, you can style the components as you like. The unit tests will still work as long as you don't change the component's behavior.

## Running the project

- Install the dependencies

```bash
npm install
```

- Run the project

```bash
npm run dev
```

- Run the tests

```bash
npm test
```

## License

[MIT License](https://raw.githubusercontent.com/nicolaserny/react-testing-library-example/main/LICENSE)
