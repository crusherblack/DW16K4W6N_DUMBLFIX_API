'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'The Witcher: Episode 1',
        thumbnailEp: 'thewitcher1.jpg',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Witcher: Episode 2',
        thumbnailEp: 'thewitcher2.jpg',
        linkEp:
          'https://cdn1.diebutx.com/own1mp4/2020/c83286a119dd4b0cf36169f8e516bf8d/480p.mp4?wmsAuthSign=c2VydmVyX3RpbWU9Ni8xMi8yMDIwIDg6NDY6NDMgQU0maGFzaF92YWx1ZT1jNmtZR2pDNzlMSGFvZnEvQjh5ZytRPT0mdmFsaWRtaW51dGVzPTIwMCZpZD1kMzkxOWMzZjRmYmFmZWQ4ODdhYjQ3NjllZGYxOTFiNw==&nimblesessionid=16682701',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Witcher: Episode 3',
        thumbnailEp: 'thewitcher3.jpg',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Joker',
        thumbnailEp: 'joker1.jpg',
        linkEp: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        filmId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  },
};
