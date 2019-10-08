const articlesList = [
  { title: 'Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів',   category:'kids',    theme: 'КОРИСНІ СТАТТІ',   date: [2017, 10, 1],     views: 980,   img:{src:'ravlik.jpg',alt:'Ravlik'}},
  { title: 'Тварини Патріка Джорджа: врятуй їх усіх',                         category:'kids',    theme: 'ПОРАДИ',           date: [2018, 10, 2],     views: 132,   img:{src:'Book.png',alt:'Book'}},
  { title: 'Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів',   category:'kids',    theme: 'ОГЛЯДИ',           date: [2017, 10, 3],     views: 24,    img:{src:'Knowledge.png',alt:'Book in a city'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'kids',    theme: 'НОВИНИ',           date: [2017, 10, 4],     views: 90,    img:{src:'photo.png',alt:'Photo girl'}},
  { title: '"Любий щоденнику": ваш "настільний" психоаналітик',               category:'kids',    theme: 'КОРИСНІ СТАТТІ',   date: [2020, 11, 1],     views: 540,   img:{src:'cute-brain-cartoon2.jpeg',alt:'Cute brain'}},
  { title: 'Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів',   category:'kids',    theme: 'ФІЛЬМИ',           date: [2017, 11, 1],     views: 430,   img:{src:'photo.png',alt:'Photo girl'}},
  { title: '"Любий щоденнику": ваш "настільний" психоаналітик',               category:'teens',   theme: 'ПОРАДИ',           date: [2017,  1, 1],     views: 132,   img:{src:'Book.png',alt:'Book'}},
  { title: 'Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів',   category:'teens',   theme: 'ФІЛЬМИ',           date: [2017,  9, 1],     views: 1000,  img:{src:'Knowledge.png',alt:'Book in a city'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'teens',   theme: 'ОГЛЯДИ',           date: [2017,  3, 1],     views: 312,   img:{src:'beavers.jpg',alt:'Beavers'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'teens',   theme: 'ПОРАДИ',           date: [2017, 10, 1],     views: 468,   img:{src:'Knowledge.png',alt:'Book in a city'}},
  { title: 'Тварини Патріка Джорджа: врятуй їх усіх',                         category:'teens',   theme: 'ФІЛЬМИ',           date: [2017, 10, 1],     views: 985,   img:{src:'Book.png',alt:'Book'}},
  { title: '"Любий щоденнику": ваш "настільний" психоаналітик',               category:'teens',   theme: 'КОРИСНІ СТАТТІ',   date: [2017, 10, 1],     views: 332,   img:{src:'photo.png',alt:'Photo girl'}},
  { title: 'Бути собою разом із Туве Янссон: 5 диваків Долини мумі-тролів',   category:'teens',   theme: 'ОГЛЯДИ',           date: [2017, 10, 1],     views: 127,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: 'Тварини Патріка Джорджа: врятуй їх усіх',                         category:'teens',   theme: 'ФІЛЬМИ',           date: [2017, 10, 1],     views: 256,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'teens',   theme: 'КОРИСНІ СТАТТІ',   date: [2017, 10, 1],     views: 132,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: '"Любий щоденнику": ваш "настільний" психоаналітик',               category:'kids',    theme: 'ПОРАДИ',           date: [2017, 10, 1],     views: 478,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: 'Тварини Патріка Джорджа: врятуй їх усіх',                         category:'kids',    theme: 'ФІЛЬМИ',           date: [2017, 10, 1],     views: 682,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'kids',    theme: 'ОГЛЯДИ',           date: [2017, 10, 1],     views: 980,   img:{src:'Creatures.png',alt:'Mice'}},
  { title: '"Любий щоденнику": ваш "настільний" психоаналітик',               category:'kids',    theme: 'ПОРАДИ',           date: [2017, 10, 1],     views: 14,    img:{src:'Creatures.png',alt:'Mice'}},
  { title: 'Шість пригодницьких історій для літнього читання',                category:'kids',    theme: 'ФІЛЬМИ',           date: [2017, 10, 1],     views: 890,   img:{src:'Creatures.png',alt:'Mice'}},
]

module.exports = articlesList;