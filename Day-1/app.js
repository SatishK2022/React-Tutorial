// # Creating an element from JS
// const root = document.querySelector(".root");
// const heading = document.createElement("h1");
// heading.innerText = "Hello World"
// root.appendChild(heading)

// # Creating an element from React
const heading1 = React.createElement("h1", { id: "title", className: "title" }, "Heading1");
const heading2 = React.createElement("h2", { id: "title", className: "title" }, "Heading2");
const container = React.createElement("div", { id: "container" }, [heading1, heading2])

const root = ReactDOM.createRoot(document.querySelector(".root"))

root.render(container)