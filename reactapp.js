/* const heaading = React.createElement("h1",{id:"heading"},"Your First React Hello World")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heaading) */ 

/* Creating nested HTML Tags

<div id="parent"> 
    <div id="child">
        <h1> React H1 tag </h1>
    </div>
</div>

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{}, "React H1 Tag")
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
*/ 

/* NESTED LOOPS
<div id="parent"> 
    <div id="child">
        <h1> React H1 tag </h1>
        <h2> React H2 Tag </h2>
    </div>
    <div id="child2">
        <h1> React H1 tag </h1>
        <h2> React H2 Tag </h2>
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"React H1 tag"),React.createElement("h2",{},"React H2 Tag")]), 
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"React H1 tag"),
                React.createElement("h2",{},"React H2 Tag")])
    ])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
