# Elisa's Pokedex

This app gets information about the first Pokemon generation. It shows the 150 Pokemon in a list where you can choose any of them and see the Pokemon chosen in detail.
This information is obtained from a public API:

- [Poké API](https://pokeapi.co/): This API contains all the Pokemon information, including stats, description, image, name, etc.

## Design

When I was a child I used to watch Pokemon cartoons, then a couple of weeks ago I was surfing the web and I came across this [Pokédex Prototype](https://www.figma.com/file/FrM5KLtKlSHa2jvDDGWwQt/Pok%C3%A9dex-(Community)?type=design&node-id=0-1&t=wnzzJKixklDKrOPl-0) in Figma, which is based on the [Poké API](https://pokeapi.co/) and I thought it was going to be a lot of fun to create my own Pokédex and it was indeed!
Now I am happy and proud to show it to you.

## What I used working in this project?

- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch): I was certainly not new to the Fetch API, but it was a great way to use it again and practice to get the Pokemon from the API.
- [Redux](https://redux.js.org/): I knew this library existed and I thought this project was going to be a great opportunity to learn it because I was finding it too confusing to pass the information from parent to children to children and so on.
- [React](https://es.react.dev/) with [Gatsby](https://www.gatsbyjs.com/guides/react/): I decided to use React Gatsby when I found out that `create-react-app` was [no longer recommended](https://github.com/reactjs/react.dev/pull/5487) by the React team.
- [Typescript](https://www.typescriptlang.org/) to help me reduce involuntary errors.
- [Styled Components](https://styled-components.com/) for the styles.
- [Figma](https://www.figma.com/): where I got the design from.


The live demo is [here.](https://elisamunoz.github.io/pokedex/)

### To run it locally

Clone the repository

- `npm install` to install the dependencies
- `npm start` to run the project

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
