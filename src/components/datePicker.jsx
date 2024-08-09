import React, { useState, useRef } from "react";
import arrowDown from "../assets/arrow_down.svg";

export default function DatePicker() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const inputRef = useRef(null);

	const handleChange = (event) => {
		setSelectedDate(new Date(event.target.value));
	};

	const formattedDate = selectedDate.toISOString().substr(0, 10);

	return (
		<div className="h-9 pl-3 pr-2 py-2 bg-[#f2f4f6] rounded-md justify-center items-center gap-1 inline-flex">
			<div className="justify-start items-center flex">
				<select name="" id="">
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
					<option value="2021">2021년</option>
				</select>
				{/* <div className="text-[#25252c] text-base font-medium">2024년</div> */}
			</div>
			<img src={arrowDown} alt="화살표 아이콘" className="w-4 h-4" />
		</div>
	);
}
