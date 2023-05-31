import React from 'react'

function PicCard() {
	return (
		<>
			<div class="img">
				<div class="lazyload-wrapper">
					<img
						class="project-thums"
						src="/cms/wp-content/uploads/2023/05/UNIQLO-LOGO-STORE_MAEBASHI_SQUARE-1125x1125.jpg"
					/>
				</div>
			</div>
			<div class="text">
				<span
					class="project-name effect-text"
					data-text="UNIQLO LOGO STORE"
				>
					UNIQLO LOGO STORE
				</span>
				<div class="project-desc ">
					<p class="">Client : FAST RETAILING CO., LTD.</p>
					<p class="">
						Total creative direction・Design supervision : Kashiwa
						Sato
					</p>
					<p class="">
						Lead Architect・Architectural Design・Sustainable Design
						: TAKENAKA CORPORATION
					</p>
					<p class="">
						Interior Design : TAKENAKA CORPORATION / NOMURA
					</p>
					<p class="more">
						<span>READ MORE </span>
						<span class="plus">+</span>
					</p>
				</div>
				<div class="effect"></div>
			</div>
		</>
	)
}

export default PicCard
