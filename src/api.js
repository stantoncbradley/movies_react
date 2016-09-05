// const API_ROOT = 'http://localhost:3001/'

export default function(path, args) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_ROOT + path + '?' + args);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        resolve({
          status: this.status,
          text: this.responseText
        })
      }
    };
    xhr.send();
  })
};
