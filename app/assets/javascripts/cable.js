// Action Cable provides the framework to deal with WebSockets in Rails.
<<<<<<< HEAD
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
=======
// You can generate new channels where WebSocket features live using the rails generate channel command.
>>>>>>> fc41821962e2e09f6903425e1def27a1176c5a64
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
