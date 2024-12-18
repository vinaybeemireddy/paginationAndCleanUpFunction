// three phases of lifecycle in react.

1. mounting phase---> when the component renders on the dom.

2. updating phase--->when ever there is a change in state or props.

3. deletion phase/ unmounting phase---> making changes on the basis of condition and removing the component.

//useEffect

useEffect(callback)---> for every render this useEffect will be called.

useEffect(callback, [updateChange]) ---> only when there is change in "updateChange" .

useEffect(callback, [])--->mount phase( only when the component renders at first)
