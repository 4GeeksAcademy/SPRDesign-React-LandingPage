import React from "react";
import blueHairGirlImage from "../../img/blue_hair_girl.jpg";
import littleDeer from "../../img/little_deer.jpg";
import flowing from "../../img/Flowing.jpg";
import meditatingMonk from "../../img/meditating_monk.jpg";

const images = {
  blueHairGirlImage,
  littleDeer,
  flowing,
  meditatingMonk,
};

const imageStyle = {
  maxWidth: '500px',
  maxHeight: '325px',
  overflow: 'hidden',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

const Card = ({ image, title, description }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <div className="card-img-container" style={imageStyle}>
          <img src={images[image]} className="card-img-top img-fluid" alt={title} />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-light text-center border-0">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
	return (
		
		<div className="landing-page">
			
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="container mt-4 mb-4 bg-light">
				<div className="jumbotron-fluid">
					<div className="container p-5">
						<h1 className="display-3"><strong>A Warm Welcome!</strong></h1>
						<p className="lead p-2">
						Welcome to our bustling online hub! Here, embark on a journey through a digital realm brimming with boundless opportunities, knowledge, and creativity. Discover, learn, and thrive amidst a tapestry woven with diverse perspectives and endless inspiration. We invite you to explore and immerse yourself in a world where possibilities know no limits!
						</p>
						<p>
							<a href="#" className="btn btn-primary btn-lg">
								Call to Action!
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">

					<Card
						image="littleDeer"
						title="Kawaii Bamby!"
						description="Bamby, a darling young fawn with shimmering doe eyes and a coat adorned in soft, caramel-hued spots, gracefully explores the forest, her delicate steps echoing innocence and charm."
					/>

					<Card
						image="flowing"
						title="Colors Flowing"
						description="Colors flowing in a vivid dance, painting the canvas of life with vibrant hues, weaving stories with every brushstroke, a symphony of kaleidoscopic beauty."
					/>

					<Card
						image="blueHairGirlImage"
						title="Bubbles!"
						description="A girl with azure hair gleefully plays with bubbles, her laughter painting the air with joyous hues, a whimsical dance amidst floating iridescence. Her blue locks swirl as she creates magic."
					/>

					<Card
						image="meditatingMonk"
						title="Deep Meditation"
						description="An old wise monk serenely meditates beneath a cascading waterfall, finding tranquility amidst nature's relentless flow, a union of peace and eternal motion."
					/>
					
				</div>
			</div>

			<footer className="bg-dark text-light text-center py-2">
				<div className="footer-container">
	  				<p>Copyright &copy; SPR Design 2023</p>
	  			</div>
  			</footer>
	
		</div>
		
	);
};

export default Home;

