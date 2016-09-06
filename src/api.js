const API_ROOT = 'http://localhost:3001/'

export default function(path, args) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', API_ROOT);
    xhr.setRequestHeader("Content-Type", 'application/json');

    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        debugger;
        resolve(JSON.parse(this.response))
      }
    };
    xhr.send(JSON.stringify({path: path, args: args}));
  })
};
