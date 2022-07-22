// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const name = document.querySelector('#name');
const job = document.querySelector('#job');
const text = document.querySelector('#text');
const img = document.querySelector('#img');
const btns = document.querySelectorAll('.btns');
const prevoiusBtn = document.querySelectorAll('.previous');
const nextBtn = document.querySelectorAll('.next');

//console.log(prevoiusBtn);

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //to fetch the current name to find the the proper id linked to that name
    let currentName = reviews.find(function (person) {
      return person.name === name.textContent;
    });
    //mapping the id from the array
    let currentId = currentName.id;
    let data;
    //get all the classes linked to the button
    let operation = e.currentTarget.classList;
    //operation for previous button
    if (operation.contains('previous')) {
      if (currentId === 1) {
        btn.disabled = true;
        //console.log(btn);
      } else {
        currentId--;
        data = reviews.find(function (person) {
          return person.id === currentId;
        });
        btn.nextElementSibling.disabled = false;
        name.textContent = data.name;
        job.textContent = data.job;
        img.setAttribute('src', data.img);
        text.textContent = data.text;
      }
    }
    //operation for next button
    else if (operation.contains('next')) {
      if (currentId === reviews.length) {
        btn.disabled = true;
        //console.log(btn);
      } else {
        btn.previousElementSibling.disabled = false;
        currentId++;
        data = reviews.find(function (person) {
          return person.id === currentId;
        });
        name.textContent = data.name;
        job.textContent = data.job;
        img.setAttribute('src', data.img);
        text.textContent = data.text;
      }
    }
  });
});
//Experiment
