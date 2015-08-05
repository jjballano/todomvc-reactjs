var heroesListData = [
  {name: 'Superman', power: 'fly with underwear'},
  {name: 'Batman', power: 'belt with gadgets'},
  {name: 'Spiderman', power: 'Jump like a monkey'},
  {name: 'Hulk', power: 'Angry with anyone'}
];

var Heroes = React.createClass({
  componentDidMount: function(){
    this._fetchData();
  },

  onResetClick: function(event){
    event.preventDefault();
    this.setState({list:[]});
  },

  onFetchClick: function(event){
    event.preventDefault();
    this._fetchData();
  },

  getInitialState: function(){
    return ({
      list: []
    });
  },

  render: function(){
    if (!this.state.list.length){
      return (
        <div>No Heroes!</div>
        <br />
        <a href="#fetch" onClick={this.onFetchClick}>Fetch</a>
      );
    }
    return (
      <div>
        <ul>
          {
            this.state.list.map(function(heroe, index){
              return (
                <li key={index}>
                  {heroe.name} the {heroe.power}!
                </li>
              );
            });
          }
        </ul>
        <a href="#reset" onClick={this.onResetClick}>Reset</a>
      </div>  
    );
  },

  _fetchData: function(){
    setTimeout(function(){
      this.setState({list: heroesListData});
    }.bind(this), 2000);
  }
});

React.render(<Heroes />, document.getElementById('content'));