# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a web UI library. React improves DOM update performance, provides a way to offload state, and makes the DOM API easier to use.

1. What does it mean to think in react?

The mindset in developing a React app is different than in a static html/css website. The developer has to think about how to create general components that can be composed together and to manage how the data flows through the app. An example of that is when you start a mockup for an app you have to:

• Create a component hierarchy to break down the UI
• Initially create a static version of the app in React
• Determine what the minimal amount of state is required for the app
• Determine where your state will live within the app
• Pass down state and props (adding inverse data flow

1. Describe state.

State is the data that represents the change to our application.

1. Describe props.

Props are the vehicle for state. We pass state throughout our application by way of props.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that can cause a component to return a different
output from the same state and props.  We have the ability to sync effects in a React component to state or prop changes by passing in a dependency array to the effect hook.
