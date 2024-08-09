import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import pregnantWoman from "./assets/pregnant_woman.svg";
import DatePicker from "./components/datePicker";
import "./App.css";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main className="flex justify-center items-center h-dvh w-dvw">
			<div className="flex justify-center flex-col items-center">
				<div className="flex justify-center flex-col items-center gap-8">
					<span className="text-2xl font-semibold text-[#25252c]">출산 예정일이 언제인가요?</span>
					<img src={pregnantWoman} alt="임신한 여자 이모지" width={178} height={178} />
				</div>
				<DatePicker />
			</div>
		</main>
	);
}

export default App;
