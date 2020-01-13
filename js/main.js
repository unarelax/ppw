const first = document.getElementById('first');
const second = document.getElementById('second');
first.addEventListener('click',
   function () {
      //  console.log(second.style.height);
      if (!second.style.height) {
         second.style.height = '100%';
      } else {
         second.style.height = '';
      }

   });

const preS = document.getElementById('preS');
const pre = document.getElementById('pre');
preS.addEventListener('click',
   function () {
      console.log(100);
      if (!pre.style.display || pre.style.display == 'none') {
         pre.style.display = 'block';
         console.log(200);
      } else {
         pre.style.display = 'none';
         console.log(300);
      }

   });

const lifeS = document.getElementById('lifeS');
const life = document.getElementById('life');
lifeS.addEventListener('click',
   function () {
      if (!life.style.display || life.style.display == 'none') {
         life.style.display = 'block';
      } else {
         life.style.display = 'none';
      }

   });

const sportS = document.getElementById('sportS');
const sport = document.getElementById('sport');
sportS.addEventListener('click',
   function () {
      if (!sport.style.display || sport.style.display == 'none') {
         sport.style.display = 'block';
      } else {
         sport.style.display = 'none';
      }

   });


// const first = document.getElementById('first');
// const second = document.getElementById('second');
// first.addEventListener('click', menuMore(first, second));
// function menuMore(first, second) {
//    console.log(second.style.height);
//    if (!second.style.height) {
//       second.style.height = '100%';
//    } else {
//       second.style.height = '';
//    }
// }

// const sportS = document.getElementById('sportS');
// const sport = document.getElementById('sport');
// sportS.addEventListener('click',displayNav(sport));

// function displayNav (a) {
//    console.log(100);
//    if (a.classname == 'openNav') {
//       a.style.display = 'block';
//       a.classlist.remove('openNav');
//       console.log(200);
//    }
//    else {
//       a.style.display = 'none';
//       a.classlist.add('openNav');
//       console.log(300);
//    }
// };


