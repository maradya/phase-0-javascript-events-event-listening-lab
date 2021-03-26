function addingEventListener() {
    const input = document.getElementById('input');
    function clickAlert() {   
      alert('Cheers!');
    }
    
    input.addEventListener('click', clickAlert); 
      } 

const input = document.getElementById('input');
      input.addEventListener('click', function() {
        alert('Cheers!');
      });      