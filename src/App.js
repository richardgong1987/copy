import './App.css'
import Menu from './Menu'
import PicCard from './PicCard'
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
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
				<div class="right">
					<Menu />
				</div>
			</header>
			<PicCard />
		</div>
	)
}

export default App
