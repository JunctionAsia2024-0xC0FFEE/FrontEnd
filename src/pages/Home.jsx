import { useBlocker } from "react-router-dom";

export default function Home() {
	useBlocker(({ currentLocation, nextLocation }) => value !== "" && currentLocation.pathname !== nextLocation.pathname);

	return <></>;
}
