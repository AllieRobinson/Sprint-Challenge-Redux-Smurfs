1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Methods: map, forEach, and the spread operartor.
We use the spread operator to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - An action is simply an object that is passed to the reducer. This object has to have a `type` and can have other information on it as well, often referred to as the `payload` (though calling it payload is just convention). 

Reducers - A reducer is a pure function that takes in an action and state as arguments and sends updated information to the store based on the action type it received. The reducer is where you write the code that actually ends up changing the state, often in the form of a spread operator that accesses one of the keys in state and changes the value there. 

Store - The store is where state is kept in Redux. Like an action, it is just an object. However, this is the object that holds state. In React, state was in App.js (or wherever you decided to put it based on your needs). In Redux, state is no longer kept in any of your components. Instead, it is “outsourced” to the store.

The “single source of truth” is referring to Redux’s controlled components. Without Redux, there are two sources of truth -- the value kept in the browser (rendered by the DOM) and the value kept in your code (state). With React, the browser’s `input` values are equal to the ones provided from javascript using the `value` attribute, so they are one and the same, or a “single source of truth.” 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Redux is a library that makes a global application state possible; State here can be directly passed to any component (so long as that component is subscribed to the store). Component state lives within a specific component and if you want state to be on more than one component, it must be passed to children via props.

Component state is simpler than application state and would serve a developer well in small apps that do not have many components. Application state is more complicated and might be cumbersome to implement in small apps; however, it will be easier in the case of a large application, as passing props down through many subcomponents is complicated and hard to keep track of. Application state also makes components much more reusable than component state allows, as components must be tightly linked to one another when a parent application needs to send information down a long line of subcomponents in order for the application to work properly.    

1.  What is middleware?

Middleware allows asynchronous actions (for instance, a message being displaying while an API is fetching data) in an application. It lives between an action being dispatched and the action reaching the reducers. It allows for fewer errors when functions cannot be executed synchronously because of lag.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that lives between an action being dispatched and the action reaching the reducers. It allows normally synchronous actions to become asynchronous. This is important when the app needs to communicate with an external API. With Redux-thunk, actions can be running in the background while information is being fetched. 

The action-creators are changed in that they now return a function instead of an action object. That function receives the dispatch method from the store. It is also changed in that we use axios in the action-creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
