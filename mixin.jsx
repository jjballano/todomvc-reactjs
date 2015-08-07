var MixinES = {
  componentDidMount: function(){
    console.log('Hola Mundo!');
  }	
};

var MixinFR = {
  componentDidMount: function(){
    console.log('Bonjour le Mounde!');
  }
};

var Hello = React.createClass({
  mixins: [MixinES, MixinFR],

  componentDidMount: function(){
    console.log('Hello World!');
  }
});

React.render(<Hello />, document.getElementById('content'));

/*
It will print this:

Hola Mundo!
Bounjour le Mounde!
Hello World!

Mixins first and the order is the same as they are in the array mixins
*/