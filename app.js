    let parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag"),
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag"),
        ]),
    ]);
    let root=ReactDOM.createRoot(document.querySelector(".root"));
    root.render(parent);

    // let head = document.createElement("h1");
    // head.innerText = "This is created by JavaScript";
    // let root=document.querySelector(".root");
    // root.appendChild(head);