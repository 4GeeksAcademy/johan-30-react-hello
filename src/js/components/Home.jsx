import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Cards = [

	{ image: "https://picsum.photos/seed/picsum/200/300", title:"Card 1", text:"Lorem ipsum dolor sit amet", buttonText:"Find More", buttonLink:"https://picsum.photos/"},
	{ image: "https://picsum.photos/seed/picsum/200/300", title:"Card 2", text:"Lorem ipsum dolor sit amet", buttonText:"Find More", buttonLink:"https://picsum.photos/"},
	{ image: "https://picsum.photos/seed/picsum/200/300", title:"Card 3", text:"Lorem ipsum dolor sit amet", buttonText:"Find More", buttonLink:"https://picsum.photos/"},
	{ image: "https://picsum.photos/seed/picsum/200/300", title:"Card 4", text:"Lorem ipsum dolor sit amet", buttonText:"Find More", buttonLink:"https://picsum.photos/"},
	

]


const Home = () => {
	return (
		<div className="text-start">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{Cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-lg-3 mb-4" key={index}>
							<Card {...item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;