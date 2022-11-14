/**
* Take an el which matches with che el of the DOM passed as arg
* 
* @param {string} el - specific DOM element
* @returns HTMLelement
*/
const qs = (el) => document.querySelector(el);

/**
* Send a GET req to the end-point specified as arg
* 
* @param {string} url
* @returns data
*/
const GET = async url => {
  const res = await fetch(url);
  const data = await res.json();
  return await data;
}

export {qs, GET};
