import React, { useState } from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homy.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import { Link } from "react-router-dom";
import KitchenKingBordermid from "../../assets/KitchenKingBordermid.svg";
import KitchenKingbgmid from "../../assets/KitchenKingbgmid.svg";
import classNames from "classnames";
import { IoStarOutline } from "react-icons/io5";


const Homy = () => {

	const [selectedButton, setSelectedButton] = useState(null);
	const selectButton = (buttonNumber) => {
		if (selectedButton !== null) {
			setSelectedButton(null);
		}
		setSelectedButton(buttonNumber);
	};
	return (
		<div className="KitchenKing-homy">
			<div className="KitchenKing-homy-top">
				<div className="KitchenKing-homy-upper-background">
					<img className="desktopviewh " src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
					<img className="midviewkkh" src={KitchenKingbgmid} alt="" />
				</div>
				<div className="KitchenKing-homyimg">
					<img className="desktopviewh midviewkkh" src={KithcenKingimg} />
					<img
						className="mobileview"
						src={KitchenKingMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homy-Heading">
					<h1>HOMY</h1>
				</div>
				<div className="KitchenKing-homy-content">
					<p>
						Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					</p>
					<div className="KitchenKing-homy-features">
						<p style={{ color: "red" }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>Chefs with cooking expertise</li>
							<li>Equipped with kitchen kits</li>
							<li>Verified for hygiene and well-trained</li>
							<li>Vaccinated for safety</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="KitchenKing-homy-bottom">
				<div className="KitchenKing-homy-lower-background">
					<img className="desktopviewh" src={KitchenKingBorder} />
					<img className="midviewkkh" src={KitchenKingBordermid} />
				</div>
				<div className="KitchenKing-homy-price">
				<div className="KitchenKing-homypromax-table">
				<div
							// className={classNames('pricecard,{selectedButton === 1 ? "selected" : ""})}
							// onClick={() => selectButton(1)}
							className={classNames("pricecard", {
								selected: selectedButton === 1,
							})}
							onClick={() => selectButton(1)}
						>
							DAILY
							<br />
							<span className="red">499</span>
						</div>
						<div
							className={classNames("pricecard", {
								selected: selectedButton === 2,
							})}
							onClick={() => selectButton(2)}

						>
							WEEKLY
							<br />
							<span className="red">2,099</span>
						</div>
						<div
							className={classNames("pricecard", {
								selected: selectedButton === 3,
							})}
							onClick={() => selectButton(3)}

						>
							MONTHLY
							<br />
							<span className="red">4,499</span>
						</div>
						<div
							className={classNames("pricecard", {
								selected: selectedButton === 4,
								
							})}
							onClick={() => selectButton(4)}

						>
							HALF YEARLY
							<br />
							<span className="red">22,499</span>
						</div>
						<div
							className={classNames("pricecard", {
								selected: selectedButton === 5,
							})}
							onClick={() => selectButton(5)}

						>
							YEARLY
							<br />
							<span className="red">35,999</span>
						</div>
					</div>
					<div className="connect-button book-now-btnh">BOOK NOW</div>
					<h3 className="checkout-plansh">
						Check our other beneficial plans{" "}
					</h3>
				</div>

				<div className="KitchenKing-homy-cards">
					<div className="KitchenKing-homy-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY PRO
						</h2>
						<ul>
							<li>Versatile culinary expert </li>
							<li>Skilled in crafting diverse dishes.</li>
							<li>Possesses a professional degree</li>
							<li className="middle">
								Equipped with kitchen kits
							</li>
							<li className="middle">Vaccinated for safety</li>
						</ul>{" "}
						<Link to="/homypro">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-homy-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY PRO MAX
						</h2>
						<ul>
							<li>
								Access to all premium nutrition & workout plans
							</li>
							<li>5-star professional chef at home</li>
							<li className="middle">
								Customizable gourmet meals
							</li>
							<li className="middle">
								Get dietician once a month
							</li>
						</ul>
						<Link to="/homypromax">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homy;
