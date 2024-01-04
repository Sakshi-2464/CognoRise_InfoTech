
function book(){
  var name = document.getElementById('name').value;
  var des = document.getElementById('destination').value;
  var dep = document.getElementById('departure').value;
  var re = document.getElementById('return').value;
  var adults = document.getElementById('adults').value;
  var children = document.getElementById('children').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  if (name.trim() === '') {
    alert('Please enter name.');
  }else if (des.trim() === '') {
    alert('Please select destination.');
  }else if (dep.trim() === '') {
    alert('Please select departure dates.');
  }else if (re.trim() === '') {
    alert('Please select return dates.');
  }else if (adults.trim() === '') {
    alert('Please enter number of adults.');
  }else if (children.trim() === '') {
    alert('Please enter number of children.');
  }else if (phone.trim() === '') {
    alert('Please enter contact number.');
  } else if (email.trim() === '') {
    alert('Please enter email id.');
  }else {
    alert('Thank You! We will contact you soon');
  }
  }
  
