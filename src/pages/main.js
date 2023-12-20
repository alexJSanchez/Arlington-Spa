import React from "react";
import image from "../images/oil.jpg";
import commonArea from "../images/commonAreaSmall.jpg";
import footM from "../images/footMassage.jpg";
import facial from "../images/depositphotos_13789300-stock-photo-latin-woman-spa.jpg";
import americanexpress from "../images/americanExpress.png";
import mastercard from "../images/mastercard.png";
import visa from "../images/visa.png";
import discover from "../images/discover.png";
function Main() {
	return (
		<div className="main">
			<div className="image-container">
				<div className="gradient-overlay"></div>
				<div className="header-content">
					<div>
						<h1>ARLINGTON FOOTSPA</h1>
						<p>696 Dutchess turnpike poughkepsie, NY 12603</p>
						<p>845-345-9223</p>
						<h3>Store Hours</h3>
						<p>
							<span>Mon-Sat</span>: 10am-9pm
						</p>
						<p>
							<span>Sun</span>: 11am-730pm
						</p>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<img src={americanexpress} />
						<img style={{ width: "41px", height: "40px" }} src={mastercard} />
						<img style={{ width: "41px", height: "40px" }} src={visa} />
						<img style={{ width: "41px", height: "40px" }} src={discover} />
					</div>
				</div>
			</div>
			<div className="service-container">
				<div className="service-box">
					<div>
						<img src={facial} className="circular-image" />
						<h3>Facial</h3>
					</div>
					<div className="service-box-price">
						<p>Time(30min/60min)</p>
						<p>$30/$60</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img src={commonArea} className="circular-image" />
						<h3>Chair Relaxing</h3>
					</div>
					<div className="service-box-price">
						<p>Time(10min/15min/20min/30min)</p>
						<p>$15/$20/$25/$35</p>
					</div>
				</div>
				<div className="service-box">
					<div>
						<img src={footM} className="circular-image" />
						<h3>SeaSalt Foot Reflexology</h3>
					</div>
					<div className="service-box-price">
						<p>Time(30min/60min)</p>
						<p>$30/$45</p>
					</div>
				</div>

				<div className="service-box">
					<div>
						<img src={image} className="circular-image" />
						<h3>Body Work</h3>
					</div>
					<div className="service-box-price">
						<p>Swedish(30min/60min/90min)</p>
						<p>$35/$60/$90</p>
						<p>DeepTissue(30min/60min/90min)</p>
						<p>$40/$70/$90</p>
					</div>
				</div>
				<div className="service-box">
					<div className="service-box-image service-box-image-ovelay">
						<img
							src={footM}
							className="circular-image circular-image-left"
							alt="FootM Image"
						/>
						<img
							src={image}
							className="circular-image circular-image-right"
							alt="Second Image"
						/>
					</div>
					<h3>Body&Feet Combo</h3>
					<div className="service-box-price">
						<p>Time(30+30/30+60/60+30/60+60)</p>
						<p>$60/$80/$90/$100</p>
					</div>
				</div>

				<div className="service-box">
					<div className="service-box-image service-box-image-ovelay">
						<img
							src={image}
							className="circular-image circular-image-left"
							alt="FootM Image"
						/>
						<img
							src={commonArea}
							className="circular-image circular-image-right"
							alt="Second Image"
						/>
					</div>
					<h3>Body&Chair Combo</h3>
					<div className="service-box-price">
						<p>Time(30+30/30+60/60+30/60+60)</p>
						<p>$60/$80/$90/$100</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
