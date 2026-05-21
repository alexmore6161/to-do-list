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

      if (item.tagName === "LI") {
        item.classList.toggle("struck");

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