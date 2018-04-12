var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'https://i.ebayimg.com/images/g/Z54AAOSwnFZXV1Eh/s-l300.jpg'
	},														
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowidający historię króla sawanny',
		image: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},
	{
		id: 3,
		title: "Pan życia i śmierci",
		desc: "Film o handlarzu bronią",
		image: "http://www.placecage.com/g/155/300"
	},
	{
		id: 4,
		title: "Lot skazańców",
		desc: "Film o locie skazańców :)",
		image: "http://www.placecage.com/c/460/300"
	},
	{
		id: 5,
		title: "Bez twarzy",
		desc: "Kolejny świetny film z Nickiem :)",
		image: "http://www.placecage.com/c/200/300"
	},
];


//Movie

var Movie = React.createClass({
	propTypes:{
		movie: React.PropTypes.object.isRequired,
	},
	render: function(){
		return( React.createElement('li', {}, // Tworzę 3 elementy wewnątrz elementu li!
					React.createElement(MovieTitle, {title: this.props.movie.title}), // do komponentu przekazuje title w {...}
					React.createElement(MovieDescription, {desc: this.props.movie.desc}), // do komponentu przekazuje desc w {...}
					React.createElement(MoviePoster, {image: this.props.movie.image})) // do komponentu przekazuje image w {...}
			   );
	}
});

//Title

var MovieTitle = React.createClass({
	propTypes:{
		title: React.PropTypes.string.isRequired,
	},

	render: function(){
		return(	React.createElement('h2', {}, this.props.title) //funkcja render zawsze zwraca (return) ReactElement
		);
	}
});

//Description

var MovieDescription = React.createClass({
	propTypes:{
		desc: React.PropTypes.string.isRequired,
	},

	render: function(){
		return ( React.createElement('p', {}, this.props.desc)
		);
	}
});

//Poster 

var MoviePoster = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},

	render: function(){
		return (React.createElement('img', {src: this.props.image})
		);
	}
});

// Movie List

MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function(){
  	var moviesElements = movies.map(function(movie){
  		return React.createElement(Movie ,{key: movie.id ,movie: movie}); // key przekazujemy, żeby każdy element był unikatowwy
  		});

    return React.createElement('ul', {}, moviesElements);
	}
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement(MovieList, {movies: movies}), // w movies,
		console.log(movies)
		);

ReactDOM.render(element, document.getElementById('app'));
