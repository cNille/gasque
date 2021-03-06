(function () {
  'use strict';

  angular
    .module('reservations')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('reservations', {
        abstract: true,
        url: '/reservations',
        template: '<ui-view/>'
      })
      .state('reservations.list', {
        url: '',
        templateUrl: 'modules/reservations/client/views/list-reservations.client.view.html',
        controller: 'ReservationsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Reservations List'
        }
      })
      .state('reservations.enrolled', {
        url: '/enrolled',
        templateUrl: 'modules/reservations/client/views/list-enrolled.client.view.html',
        controller: 'EnrolledListController',
        controllerAs: 'vm',
      })
      .state('reservations.payment', {
        url: '/payment',
        templateUrl: 'modules/reservations/client/views/list-payment.client.view.html',
        controller: 'PaymentListController',
        controllerAs: 'vm',
      })
      .state('reservations.reserves', {
        url: '/reserves',
        templateUrl: 'modules/reservations/client/views/list-reserves.client.view.html',
        controller: 'ReservesListController',
        controllerAs: 'vm',
      })
      .state('reservations.paying', {
        url: '/anmalan',
        templateUrl: 'modules/reservations/client/views/form-reservation.client.view.html',
        controller: 'ReservationsController',
        controllerAs: 'vm',
        resolve: {
          reservationResolve: newReservation
        },
        data: {
          pageTitle: 'Make a Reservation',
          isPaying: true,
          creating: true
        }
      })
      .state('reservations.nonpaying', {
        url: '/inbjudan',
        templateUrl: 'modules/reservations/client/views/form-reservation.client.view.html',
        controller: 'ReservationsController',
        controllerAs: 'vm',
        resolve: {
          reservationResolve: newReservation
        },
        data: {
          pageTitle : 'Make a Reservation',
          isPaying: false,
          creating: true
        }
      })
      .state('reservations.loadcompany', {
        url: '/loadcompany',
        templateUrl: 'modules/reservations/client/views/company-reservations.client.view.html',
        controller: 'CompanyReservationsController',
        controllerAs: 'vm'
      })
      .state('reservations.edit', {
        url: '/:reservationId/edit',
        templateUrl: 'modules/reservations/client/views/form-reservation.client.view.html',
        controller: 'ReservationsController',
        controllerAs: 'vm',
        resolve: {
          reservationResolve: getReservation
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Reservation {{ reservationResolve.name }}',
          creating: false
        }
      })
      .state('reservations.view', {
        url: '/:reservationId',
        templateUrl: 'modules/reservations/client/views/view-reservation.client.view.html',
        controller: 'ReservationsController',
        controllerAs: 'vm',
        resolve: {
          reservationResolve: getReservation
        },
        data:{
          pageTitle: 'Reservation {{ articleResolve.name }}',
          creating: false
        }
      })
      .state('reservations.thankyou', {
        url: '/thankyou/:reservationId',
        templateUrl: 'modules/reservations/client/views/thankyou.client.view.html',
        controller: 'MailController',
        controllerAs: 'vm',
        resolve: {
          reservationResolve: getReservation
        }
      });
  }

  getReservation.$inject = ['$stateParams', 'ReservationsService'];

  function getReservation($stateParams, ReservationsService) {
    return ReservationsService.get({
      reservationId: $stateParams.reservationId
    }).$promise;
  }

  newReservation.$inject = ['ReservationsService'];

  function newReservation(ReservationsService) {
    return new ReservationsService();
  }
})();
