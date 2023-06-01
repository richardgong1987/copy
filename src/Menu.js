import React from 'react'
import './App.css'
export default function Menu() {
	return (
		<>
			<div className="side-menu">
				<ul>
					<li className="title">
						<span className="effect-text" data-text="PROJECT">
							PROJECT
						</span>
					</li>
					<li className="line"></li>
					<li className="title">
						<span className="effect-text" data-text="PROFILE">
							PROFILE
						</span>
					</li>
					<li className="line"></li>
					<li className="title">
						<span className="effect-text" data-text="CONTACT">
							CONTACT
						</span>
					</li>
				</ul>
				<div className="lang-switch">
					<div className="lang-list">
						<ul>
							<li className="title">
								<span className="effect-text" data-text="EN">
									ENGLISH
								</span>
							</li>
							<li className="line"></li>
							<li className="title">
								<span className="effect-text" data-text="JP">
									JAPANESE
								</span>
							</li>
							<li className="line"></li>
							<li className="title">
								<span className="effect-text" data-text="CS">
									CHINESE
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="search">
				<input type="text" placeholder="PLEASE INPUT KEYWORD" />
				<div className="button"></div>
			</div>
		</>
	)
}
