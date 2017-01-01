export function initialize(appInstance) {
  var socketService = appInstance.lookup('service:socket');
  socketService.init();
}

export default {
  name: 'socket',
  initialize
};
