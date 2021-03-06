(function () {
  'use strict';

  angular
    .module('tableplannings')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Tableplannings',
      state: 'tableplannings',
      type: 'dropdown',
      roles: ['admin']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'tableplannings', {
      title: 'List Tableplannings',
      state: 'tableplannings.list',
      roles: ['admin']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'tableplannings', {
      title: 'Create Tableplanning',
      state: 'tableplannings.create',
      roles: ['admin']
    });
  }
})();
