

(async () => {
    let DB = await(await fetch('../brick/JS/dataFBS.json')).json();
 
   var root = document.getElementById('root');
   DB.forEach(element => root.insertAdjacentHTML('beforebegin', ` <td>${element.name}</td><td>${element.long}</td><td>${element.width}</td><td>${element.height}</td><td><a class="open-popup" href="https://wa.me/79879970471">${element.price}</a></td></tr>`));
})();


