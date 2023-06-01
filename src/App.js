import React, { useState } from 'react'
import './App.css'
import Menu from './Menu'
import PicCard from './PicCard'
function App() {
	const [text, setText] = useState('Hover over me!')
	const handleMouseOver = () => {
		// Generate a shuffled version of the text
		const shuffledText = shuffleText(text)
		setText(shuffledText)
	}
	// Function to shuffle the text
	const shuffleText = (text) => {
		// Convert the text into an array of characters
		const chars = text.split('')

		// Shuffle the array
		for (let i = chars.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[chars[i], chars[j]] = [chars[j], chars[i]]
		}

		// Convert the shuffled array back to a string
		return chars.join('')
	}
	return (
		<div className="App">
			<header>
				<div
					className="left"
					onMouseOver={handleMouseOver}
					onMouseOut={() => setText('Hover over me!')}
				>
					KASHIWA SATO{' '}
					<span
					// class="title effect-text"
					// data-text="SAMURAI INC. TOKYO"
					// data-reactid=".0.0.0.0.0.1"
					// style="visibility: visible;"
					>
						SAMURAI INC. TOKYO
					</span>
				</div>
				<div className="right">
					<Menu />
				</div>
			</header>
			<PicCard />
		</div>
	)
}

export default App
