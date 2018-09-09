//*******************        }***********************************************************
/*
1. INPUT '_params': An Array of Objects
[Object.selector]: An html tag or an id, e.g. 'h1' or '#someId'
[Object.key]: A property to set, e.g. 'font-size'
[Object.value]: The value for _params.key to set, e.g. '2rem'

2. OUTPUT 'output': Object

*/
const css_manipulate = (_params) => {
  return new Promise(
    (resolve, reject) => {
      Promise.resolve(_params)
      .then(input => {
        if(input.constructor === Array) {
          input.forEach(obj => {
            let elements = document.querySelectorAll(obj.selector);
            elements.forEach(element => {
              obj.attributes.forEach(attribute => {
                element.style[attribute.key] = `${attribute.value.target}${attribute.value.unit ? attribute.value.unit : ''}`;
              });
            });
          })
        }
      })
      .then(output => resolve(output))
    }
  );
}
