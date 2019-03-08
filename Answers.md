1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    ########### A reducer is the brains of the brains of the operation, it is the function that makes the changes to the single shared state.
    ########### An action is a type of 'change' that gets sent to the reducer. The reducer looks at the type of change and makes changes to the                  state according to the action.
    ########### Because it is set up to me the only location that we store the data that is needed throughout the application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

3b) ########### Component state is state that is use only by the component that stores it.

1.  What is middleware?
    ###########  it produces an action between the moment the action is dispatched and the moment it reaches the reducer. it can stop, add, change                or altere that action.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    ########### It is a middleware that lets you call action creators that return a function instead of an single action object. It allows us to                 conditionally choose an action object to call based on the outcome of our request.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    ########### {connect}


1b) 

1c) 