const getResponse = (url, onload, onerror) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.onload = (evt) =>
    onload(evt.target.response);
  xhr.onerror = (evt) =>
    onerror(evt.target.status);
  xhr.send({"n":1});
};

getResponse('http://2f6a2807.ngrok.io/', (response) => {
  if (response.status == 401) {
    alert("rrr")
  };
}, (errorStatus) => {
  console.warn(`Error #${errorStatus} happened`);
});