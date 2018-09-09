//******************************************************************************
/*
1. INPUT '_params': Object
[_params.selector]: An html tag or an id, e.g. 'h1' or '#someId'
[_params.key]: A property to set, e.g. 'font-size'
[_params.value]: The value for _params.key to set, e.g. '2rem'

2. OUTPUT 'output': Object

*/
const css_manipulate = (_params) => {
  return new Promise(
    (resolve, reject) => {
      Promise.resolve(_params)
      .then(input => {
        if(input.constructor === Array) {
          input.forEach(query => {
            console.log(query)
            let elements = document.querySelectorAll(query.selector);
            console.log(elements)
            elements.forEach(element => {
              query.attributes.forEach(attribute => {
                console.log(attribute)
                element.style[attribute.key] = attribute.value
              });
            });
          })
        }
      })
      .then(output => resolve(output))
    }
  );
}
