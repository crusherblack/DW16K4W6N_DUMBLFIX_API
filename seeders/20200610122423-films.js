'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('films', [
      {
        title: 'The Witcher ',
        thumbnailFilm: 'thewitcher.jpg',
        year: 2019,
        categoryId: 1,
        description:
          'The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Joker ',
        thumbnailFilm: 'joker.jpg',
        year: 2019,
        categoryId: 1,
        description:
          'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. Arthur Fleck works as a clown and is an aspiring stand-up comic.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Money Heist',
        thumbnailFilm: 'moneyheist.jpg',
        year: 2017,
        categoryId: 1,
        description:
          'Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('films', null, {});
  },
};
