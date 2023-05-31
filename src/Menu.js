import React from 'react'
import './App.css'
export default function Menu() {
	return (
		<>
			<div class="side-menu">
				<ul>
					<li class="current all">
						<span class="effect-text" data-text="PROJECT">
							PROJECT
						</span>
						<div class="effect"></div>
					</li>
					<li class="line"></li>
					<li class=" profile">
						<span class="effect-text" data-text="PROFILE">
							PROFILE
						</span>
						<div class="effect"></div>
					</li>
					<li class="line"></li>
					<li class=" contact">
						<span class="effect-text" data-text="CONTACT">
							CONTACT
						</span>
						<div class="effect"></div>
					</li>
				</ul>
				<div class="lang-switch">
					<div class="lang-list">
						<ul>
							<li>
								<span class="effect-text" data-text="EN">
									ENGLISH
								</span>
								<div class="effect"></div>
							</li>
							<li class="line"></li>
							<li>
								<span class="effect-text" data-text="JP">
									JAPANESE
								</span>
								<div class="effect"></div>
							</li>
							<li class="line"></li>
							<li>
								<span class="effect-text" data-text="CS">
									CHINESE
								</span>
								<div class="effect"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="search">
				<input type="text" placeholder="PLEASE INPUT KEYWORD" />
				<div class="button"></div>
			</div>
		</>
	)
}
