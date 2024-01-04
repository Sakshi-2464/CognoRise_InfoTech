
var my_list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < my_list.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  
 
  var img = document.createElement("IMG");
  img.src = "trash-regular-24.png"; 
  

  span.appendChild(img);

  my_list[i].appendChild(span);
}



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
      var li = document.createElement("li");
      var val = document.getElementById("input").value;
      var n = document.createTextNode(val);
      li.appendChild(n);

      if (val === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }

      document.getElementById("input").value = "";

      var img = document.createElement("img");
      img.src = 'trash-regular-24.png'; 
      img.alt = 'Close';
      img.className = 'close';
      img.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };

      li.appendChild(img);
    }

   