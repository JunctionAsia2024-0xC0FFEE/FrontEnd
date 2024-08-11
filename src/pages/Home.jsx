import { useBlocker, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Card from "../components/Card";
import Kid from "../assets/kid.svg";
// import ArrowRight from "../assets/arrow_right.svg";
import ChattingBubble from "../assets/chatting_bubble.svg";
import QuestionCard from "../components/QuestionCard";
import { ArrowRight } from "lucide-react";
export default function Home() {
	// useBlocker(({ currentLocation, nextLocation }) => currentLocation.pathname !== nextLocation.pathname);
	const navigate = useNavigate();
	return (
		<main className="flex flex-col mx-5 mt-10 mb-28">
			<div className="flex flex-col gap-10">
				<Card className="flex flex-col gap-2">
					<div className="flex w-full content-between">
						<div className="flex gap-2 items-center w-full">
							<img src={Kid} alt="아이 이모지" />
							<div className="flex flex-col">
								<span className="text-xs text-subtext">Birth date</span>
								<span className="text-primary font-bold">D - 130</span>
							</div>
						</div>
						<ArrowRight />
						{/* <img src={} alt="->" /> */}
					</div>
					<div className="flex items-center gap-2">
						{/* <span className="text-xs text-subtext">아이 이름</span> */}
						<div className="relative flex-grow h-2 bg-gray-200 rounded">
							<div className="absolute top-0 left-0 h-full bg-primary rounded" style={{ width: "50%" }}></div>
						</div>
						<span className="text-xs text-subtext">50%</span>
					</div>
				</Card>

				<div className="flex flex-col gap-4">
					<div className="flex justify-between">
						<span className="text-xl font-semibold">QnA</span>
						<span className="flex text-subtext items-center" onClick={() => { navigate("/questions") }}>more <ArrowRight size={16} /> </span>
					</div>

					<div className="flex flex-col gap-3">
						<QuestionCard contentId="1" setDetail={null} setContentId={null} />
						<QuestionCard contentId="2" setDetail={null} setContentId={null} />

					</div>
				</div>

				<div className="flex flex-col gap-4">
					<span className="text-xl font-semibold">추천 식단</span>

					<div className="flex overflow-x-scroll gap-3">
						<Card className="min-w-36">
							<span>아침</span>
							<ul>
								<li>참치김치볶음밥</li>
								<li>유부된장국</li>
								<li>꼬들단무지</li>
								<li>국물떡볶이</li>
								<li>모듬튀김</li>
								<li>쥬시쿨</li>
							</ul>
						</Card>
						<Card className="min-w-36">
							<span>점심</span>
							<ul>

								<li>발아현미밥</li>
								<li>가쓰오장국</li>
								<li>목살큐브스테이크</li>
								<li>오지치즈후라이</li>
								<li>배추김치</li>
								<li>골드키위</li>
							</ul>
						</Card>
						<Card className="min-w-36">
							<span>저녁</span>
							<ul>
								<li>푸팟퐁커리</li>
								<li>콩나물국</li>
								<li>생선까스/타르타르소스</li>
								<li>깍두기</li>
								<li>푸딩</li>
								<li>망고후르츠샐러드</li>
							</ul>
						</Card>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
