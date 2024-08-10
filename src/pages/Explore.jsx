import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import Footer from "../components/Footer";
import Photo from "../assets/photo.svg";
import Camera from "../assets/camera.svg";
import TempImg from "../assets/temp_img.png";

export default function Explore() {
	const [isOpen, setIsOpen] = useState(true);
	const webcamRef = useRef();

	return (
		<main className="w-full h-full">
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
					<div className="bg-white flex items-center justify-center p-3 rounded-xl h-fit shadow-2xl cursor-pointer transform active:scale-110 transition-transform">
						<img src={Photo} alt="사진" />
					</div>
					<div className="bg-white flex items-center justify-center p-5 rounded-full shadow-2xl cursor-pointer transform active:scale-110 transition-transform">
						<img src={Camera} alt="카메라" />
					</div>
					<div className="opacity-0 p-3">
						<img src={Photo} alt="사진" />
					</div>
				</div>
			</div>
			<Drawer open={isOpen} onClose={() => setIsOpen(false)} direction="bottom" className="mb-12 flex flex-col rounded-t-[20px] px-5 pt-6 gap-5">
				<div className="flex gap-2">
					<img src={TempImg} alt="임시 이미지" className="object-cover w-24 h-24" />
					<div className="flex flex-col gap-2">
						<span className="text-xl font-bold">링티제로 복숭아맛</span>
						<div>
							<span>영양정보</span>
							<ul className="flex flex-wrap gap-1">
								<li>복숭아</li>
								<li>복숭아</li>
								<li>복숭아</li>
								<li>복숭아</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-lg">
					<p>
						에ㅔㅔ에에에ㅔㅔ에에에에ㅔㅇ에ㅔaasdfasfsadㅁㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ에ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ에에에에ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ아샷추사줘
					</p>
				</div>
			</Drawer>
			<Footer className="z-50" />
		</main>
	);
}
