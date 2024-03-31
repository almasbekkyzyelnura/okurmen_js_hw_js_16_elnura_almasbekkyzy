

document.addEventListener('DOMContentLoaded', () => {
  const urlAPI = 'https://jsonplaceholder.typicode.com/todos/1';


  
     const xhr = new XMLHttpRequest();
     xhr.open('GET', urlAPI, true);
     xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
       if ( xhr.status === 200 ) {
       const data = JSON.parse(xhr.responseText);
        
      }
    }
      
     }
     xhr.send();




     fetch(urlAPI)
       .then(function (response) {
         if (response.ok) {
           return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(function (data) {
         console.log('data', data);
         renderData(data);
        })
        .catch(function (error) {
          console.log('error', error);
        });
  
  
  
     axios
       .get(urlAPI)
       .then(function (response) {
         renderData(response.data);
         console.log('response', response);
       })
       .catch(function (error) {
         console.log(error);
       });
}); 