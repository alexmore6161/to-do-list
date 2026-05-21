// function Strike(element) {
//     element.classList.toggle('struck');
// }

// const list = document.getElementById('bucket-list');
// if (element.classList.contains('struck')) {
//     list.appendChild(element);
// }else {
//     list.prepend(element);
// }

 
   const list = document.getElementById("bucket-list");

    list.addEventListener("click", function(e) {
      const item = e.target;

      if (item) {
        item.classList.toggle("struck");

        if (item.classList.contains("struck")) {
         // add timestamp
         const time = document.createElement("span");
         time.classList.add("timestamp");
         time.textContent = new Date().toLocaleTimeString();
         item.appendChild(time);
       } else {
         // remove timestamp when unclicked
         const time = item.querySelector(".timestamp");
         if (time) time.remove();
       }
        reorder();
      }
    });

    function reorder() {
      const items = Array.from(list.children);

      const normal = items.filter(i => !i.classList.contains("struck"));
      const struck = items.filter(i => i.classList.contains("struck"));

      // clear and re-append in correct order
      [...normal, ...struck].forEach(i => list.appendChild(i));
    }