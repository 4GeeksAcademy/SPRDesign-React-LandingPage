import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { cardData } from "./cardData";

const Home = () => {
	return (

		<div className="landing-page">

			<Navbar />
			<Jumbotron />

			<div className="container">
				<div className="row">
					{cardData.map((card, index) => (
						<Card
							key={index} 
							image={card.image}
							title={card.title}
							text={card.text}
						/>
					))}
				</div>
			</div>

			<Footer />

		</div>

	);
};

export default Home;

