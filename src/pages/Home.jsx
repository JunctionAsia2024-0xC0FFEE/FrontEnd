import { useBlocker } from "react-router-dom";

export default function Home() {
	let blocker = useBlocker(({ currentLocation, nextLocation }) => value !== "" && currentLocation.pathname !== nextLocation.pathname);
	// Add valid code here


	return (
			blocker.state === "blocked" ? (
				<div>
					<p>Are you sure you want to leave?</p>
					<button onClick={() => blocker.proceed()}>Proceed</button>
					<button onClick={() => blocker.reset()}>Cancel</button>
				</div>
			) : null;
	);
}
