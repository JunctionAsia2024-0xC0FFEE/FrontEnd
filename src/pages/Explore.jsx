import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import axios from "axios";

import Footer from "../components/Footer";
import Photo from "../assets/photo.svg";
import Camera from "../assets/camera.svg";
import TempImg from "../assets/temp_img.png";

export default function Explore() {
	const [isOpen, setIsOpen] = useState(false);
	const webcamRef = useRef();
	const fileInputRef = useRef();
	const [recognitionResult, setRecognitionResult] = useState(null);

	useEffect(() => {
		if (recognitionResult) {
			setIsOpen(true);
		}
	}, [recognitionResult]);

	const handelGalleryOpen = () => {
		fileInputRef.current.click();

		fileInputRef.current.onchange = async (e) => {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = async () => {
				const data = {
					image: reader.result,
				};
				const headers = {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzOTA0OTQ3LCJpYXQiOjE3MjMzMDQ5NDcsImp0aSI6ImYyYTlhMTc1YTMxZjQ3OTM4ZTFhMGJmZjU0NWNlMzU4IiwidXNlcl9pZCI6MX0.tK6zBLk3EZdt9u3QyDWfUS1IJ_vuDkNz3KadTmN9f1E",
				};

				try {
					const response = await axios.post("https://ja2024.ny64.kr/api/foods/recognize/", data, { headers });
					console.log(response.data);
					setRecognitionResult(response.data);
				} catch (error) {
					console.log(error);
				}
			};
		};

		// remove selected file
		fileInputRef.current.value = "";
	};

	const handelCapture = async () => {
		const imageSrc = webcamRef.current.getScreenshot();
		const data = {
			image: String(imageSrc),
		};
		const headers = {
			"Content-Type": "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzOTA0OTQ3LCJpYXQiOjE3MjMzMDQ5NDcsImp0aSI6ImYyYTlhMTc1YTMxZjQ3OTM4ZTFhMGJmZjU0NWNlMzU4IiwidXNlcl9pZCI6MX0.tK6zBLk3EZdt9u3QyDWfUS1IJ_vuDkNz3KadTmN9f1E",
		};

		try {
			const response = await axios.post("https://ja2024.ny64.kr/api/foods/recognize/", data, { headers });
			console.log(response.data);
			setRecognitionResult(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="w-full h-full">
			<input type="file" hidden ref={fileInputRef} />
			<div className="top-0 left-0 w-full h-full overflow-hidden">
				<Webcam
					ref={webcamRef}
					audio={false}
					screenshotFormat="image/jpeg"
					videoConstraints={{
						facingMode: "environment",
					}}
					disablePictureInPicture={true}
					className="absolute top-0 left-0 w-full h-full object-cover"
				/>
			</div>
			<div className="absolute bottom-0 mb-[15dvh] w-full">
				<div className="mx-11 flex justify-between items-center">
					<div
						className="bg-white flex items-center justify-center p-3 rounded-xl h-fit shadow-2xl cursor-pointer transform active:scale-110 transition-transform"
						onClick={handelGalleryOpen}>
						<img src={Photo} alt="사진" />
					</div>
					<div className="bg-white flex items-center justify-center p-5 rounded-full shadow-2xl cursor-pointer transform active:scale-110 transition-transform" onClick={handelCapture}>
						<img src={Camera} alt="카메라" />
					</div>
					<div className="opacity-0 p-3">
						<img src={Photo} alt="사진" />
					</div>
				</div>
			</div>
			<Drawer
				open={isOpen}
				onClose={() => {
					setIsOpen(false);
					setRecognitionResult(null);
				}}
				direction="bottom"
				className="mb-12 flex flex-col rounded-t-[20px] px-5 pt-6 gap-5">
				{recognitionResult ? (
					<div className="h-fit">
						<div className="flex gap-2">
							{/* <img src={TempImg} alt="임시 이미지" className="object-cover w-24 h-24" /> */}
							<div className="flex flex-col gap-2">
								<span className="text-xl font-bold">{recognitionResult.food_name}</span>
								{/* <div>
									<span>영양정보</span>
									<ul className="flex flex-wrap gap-1">
										<li>복숭아</li>
										<li>복숭아</li>
										<li>복숭아</li>
										<li>복숭아</li>
									</ul>
								</div> */}
							</div>
						</div>
						<div className="text-lg">
							<p>is_safe: {recognitionResult.safety_info.answer.is_safe}</p>
							<p>general_safety: {recognitionResult.safety_info.answer.general_safety}</p>
							<p>nutritional_benefits: {recognitionResult.safety_info.answer.nutritional_benefits}</p>
							<p>potential_risks: {recognitionResult.safety_info.answer.potential_risks}</p>
							<p>recommended_intake: {recognitionResult.safety_info.answer.recommended_intake}</p>
							<p>preparation_advice: {recognitionResult.safety_info.answer.preparation_advice}</p>
							<p>alternatives: {recognitionResult.safety_info.answer.alternatives}</p>
						</div>
					</div>
				) : (
					<div>로딩중...</div>
				)}
			</Drawer>
			<Footer className="z-50" />
		</main>
	);
}
