import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";

export default function Footer() {
	const isIos = navigator.userAgent.includes("iPhone");
	const location = useLocation();

	const items = [
		{ path: "/explore", icon: <Compass active={location.pathname === "/explore"} />, text: "탐색" },
		{ path: "/home", icon: <Home active={location.pathname === "/home"} />, text: "홈" },
		{ path: "/questions", icon: <Question active={location.pathname === "/questions"} />, text: "질문" },
	];

	return (
		<footer className={`fixed z-10 bottom-0 left-0 w-full flex items-center h-16 justify-around rounded-[20px] border-box border-t-2 bg-white ${isIos ? "pb-4" : ""}`}>
			{items.map((item, index) => (
				<Item key={index} icon={item.icon} text={item.text} active={location.pathname === item.path} />
			))}
		</footer>
	);
}

function Item({ icon, text, active }) {
	return (
		<div className="flex flex-col items-center">
			{icon}
			<span className={`text-sm ${active ? "text-primary" : ""}`}>{text}</span>
		</div>
	);
}

function Compass({ active }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
			<mask id="mask0_76_80" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
				<rect width="28" height="28" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_76_80)">
				<path
					d="M14.0001 15.1667C13.6695 15.1667 13.3924 15.0549 13.1688 14.8313C12.9452 14.6077 12.8334 14.3306 12.8334 14.0001C12.8334 13.6695 12.9452 13.3924 13.1688 13.1688C13.3924 12.9452 13.6695 12.8334 14.0001 12.8334C14.3306 12.8334 14.6077 12.9452 14.8313 13.1688C15.0549 13.3924 15.1667 13.6695 15.1667 14.0001C15.1667 14.3306 15.0549 14.6077 14.8313 14.8313C14.6077 15.0549 14.3306 15.1667 14.0001 15.1667ZM14.0021 25.0834C12.4691 25.0834 11.0282 24.7925 9.67933 24.2107C8.33047 23.629 7.15719 22.8394 6.1595 21.8421C5.1618 20.8448 4.37187 19.672 3.78971 18.3237C3.20773 16.9755 2.91675 15.5349 2.91675 14.0021C2.91675 12.4691 3.20764 11.0282 3.78941 9.67933C4.37119 8.33047 5.16073 7.15719 6.15804 6.1595C7.15535 5.1618 8.32814 4.37187 9.67641 3.78971C11.0247 3.20773 12.4652 2.91675 13.998 2.91675C15.531 2.91675 16.972 3.20764 18.3208 3.78941C19.6697 4.37119 20.843 5.16073 21.8407 6.15804C22.8384 7.15535 23.6283 8.32814 24.2105 9.67641C24.7924 11.0247 25.0834 12.4652 25.0834 13.998C25.0834 15.531 24.7925 16.972 24.2107 18.3208C23.629 19.6697 22.8394 20.843 21.8421 21.8407C20.8448 22.8384 19.672 23.6283 18.3237 24.2105C16.9755 24.7924 15.5349 25.0834 14.0021 25.0834ZM14.0001 23.3334C16.6056 23.3334 18.8126 22.4292 20.6209 20.6209C22.4292 18.8126 23.3334 16.6056 23.3334 14.0001C23.3334 11.3945 22.4292 9.18758 20.6209 7.37925C18.8126 5.57091 16.6056 4.66675 14.0001 4.66675C11.3945 4.66675 9.18758 5.57091 7.37925 7.37925C5.57091 9.18758 4.66675 11.3945 4.66675 14.0001C4.66675 16.6056 5.57091 18.8126 7.37925 20.6209C9.18758 22.4292 11.3945 23.3334 14.0001 23.3334ZM9.15608 19.4385L15.7075 16.1718C15.8092 16.1211 15.8993 16.0564 15.9779 15.9779C16.0564 15.8993 16.1211 15.8092 16.1718 15.7075L19.4385 9.15608C19.5431 8.96164 19.5203 8.78965 19.37 8.64012C19.2197 8.49059 19.0444 8.46444 18.8441 8.56166L12.2927 11.8283C12.191 11.8791 12.1008 11.9437 12.0223 12.0223C11.9437 12.1008 11.8791 12.191 11.8283 12.2927L8.56167 18.8441C8.45705 19.0459 8.47951 19.2216 8.62904 19.3711C8.77857 19.5207 8.95425 19.5431 9.15608 19.4385Z"
					fill={active ? "#FFA500" : "#25252C"}
				/>
			</g>
		</svg>
	);
}

function Home({ active }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
			<mask id="mask0_76_85" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
				<rect width="28" height="28" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_76_85)">
				<path
					d="M5.24998 21.8076V13.1136L3.76919 14.2648C3.56425 14.4143 3.34734 14.4734 3.11848 14.4419C2.88981 14.4105 2.70062 14.2924 2.5509 14.0875C2.40137 13.8825 2.34343 13.6656 2.37706 13.4368C2.4107 13.2079 2.52406 13.0187 2.71715 12.8692L12.7056 5.20739C12.8969 5.06681 13.1029 4.96132 13.3236 4.89094C13.5441 4.82074 13.7696 4.78564 14 4.78564C14.2304 4.78564 14.454 4.82074 14.6708 4.89094C14.8876 4.96132 15.0918 5.06681 15.2833 5.20739L25.3009 12.8692C25.4938 13.0187 25.6041 13.2079 25.6319 13.4368C25.6595 13.6656 25.5986 13.8825 25.4491 14.0875C25.2993 14.2804 25.1101 14.3926 24.8815 14.4241C24.6526 14.4554 24.4416 14.3963 24.2486 14.2467L22.75 13.1136V21.8076C22.75 22.3894 22.544 22.8864 22.1319 23.2986C21.7197 23.7106 21.2227 23.9166 20.6409 23.9166H7.35902C6.77725 23.9166 6.28025 23.7106 5.86802 23.2986C5.456 22.8864 5.24998 22.3894 5.24998 21.8076ZM7.35902 22.1666H20.6409C20.7457 22.1666 20.8318 22.133 20.8991 22.0657C20.9663 21.9985 21 21.9124 21 21.8076V11.7833L14.2132 6.6141C14.1533 6.5618 14.0822 6.53564 14 6.53564C13.9177 6.53564 13.8467 6.5618 13.7868 6.6141L6.99998 11.7833V21.8076C6.99998 21.9124 7.03362 21.9985 7.1009 22.0657C7.16818 22.133 7.25422 22.1666 7.35902 22.1666ZM7.35902 22.1666H6.99998H21H7.35902Z"
					fill={active ? "#FFA500" : "#25252C"}
				/>
			</g>
		</svg>
	);
}

function Question({ active }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
			<mask id="mask0_76_91" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
				<rect width="28" height="28" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_76_91)">
				<path
					d="M5.91851 24.2084C5.32934 24.2084 4.83059 24.0042 4.42226 23.5959C4.01393 23.1876 3.80976 22.6887 3.80976 22.0994V12.7795C3.33998 12.3937 2.98736 11.893 2.75188 11.2774C2.51622 10.662 2.51136 9.99754 2.7373 9.28412L3.91738 5.42946C4.07294 4.93887 4.3369 4.54328 4.70926 4.24267C5.08181 3.94205 5.5268 3.79175 6.04422 3.79175H21.9692C22.4868 3.79175 22.9288 3.93535 23.2951 4.22254C23.6617 4.50973 23.9286 4.90465 24.0961 5.40729L25.2986 9.28412C25.5245 9.99754 25.5197 10.6597 25.284 11.2707C25.0485 11.8818 24.6959 12.3922 24.2261 12.8019V22.0994C24.2261 22.6887 24.022 23.1876 23.6136 23.5959C23.2053 24.0042 22.7066 24.2084 22.1174 24.2084H5.91851ZM16.5848 11.9584C17.222 11.9584 17.701 11.7636 18.0218 11.3739C18.3426 10.9842 18.4739 10.5658 18.4156 10.1186L17.7065 5.54175H14.8928V10.1501C14.8928 10.6407 15.0589 11.0647 15.391 11.4223C15.7231 11.7797 16.121 11.9584 16.5848 11.9584ZM11.3348 11.9584C11.8716 11.9584 12.3072 11.7797 12.6414 11.4223C12.9759 11.0647 13.1431 10.6407 13.1431 10.1501V5.54175H10.3294L9.62063 10.1635C9.55763 10.5779 9.68772 10.9807 10.0109 11.3719C10.3341 11.7629 10.7753 11.9584 11.3348 11.9584ZM6.14309 11.9584C6.57534 11.9584 6.94702 11.8077 7.25813 11.5063C7.56925 11.2049 7.76145 10.8262 7.83476 10.37L8.52105 5.54175H6.04422C5.91705 5.54175 5.81613 5.56975 5.74147 5.62575C5.66661 5.68194 5.61051 5.76614 5.57318 5.87833L4.45113 9.67437C4.29713 10.1755 4.36976 10.6814 4.66901 11.1922C4.96806 11.703 5.45943 11.9584 6.14309 11.9584ZM21.8931 11.9584C22.5243 11.9584 23.0074 11.7105 23.3424 11.2147C23.6774 10.7188 23.7582 10.2054 23.5848 9.67437L22.4044 5.85587C22.3671 5.74368 22.3111 5.66328 22.2364 5.61466C22.1615 5.56605 22.0605 5.54175 21.9333 5.54175H19.5148L20.2011 10.37C20.2744 10.8262 20.4667 11.2049 20.7778 11.5063C21.0889 11.8077 21.4606 11.9584 21.8931 11.9584ZM5.91851 22.4584H22.1174C22.222 22.4584 22.3079 22.4248 22.3752 22.3575C22.4427 22.2902 22.4764 22.2042 22.4764 22.0994V13.6052C22.3493 13.6516 22.243 13.6804 22.1576 13.6915C22.0725 13.7028 21.9843 13.7084 21.8931 13.7084C21.3681 13.7084 20.9063 13.6134 20.5077 13.4235C20.1091 13.2335 19.7227 12.9291 19.3486 12.5102C19.0211 12.8752 18.6338 13.1662 18.1866 13.3832C17.7394 13.6 17.2293 13.7084 16.6565 13.7084C16.1615 13.7084 15.6948 13.6056 15.2565 13.3998C14.8182 13.1943 14.4054 12.8978 14.0181 12.5102C13.6576 12.8978 13.2493 13.1943 12.7931 13.3998C12.3367 13.6056 11.8745 13.7084 11.4065 13.7084C10.88 13.7084 10.3864 13.613 9.92572 13.4223C9.46508 13.2315 9.05976 12.9275 8.70976 12.5102C8.21898 13.0008 7.7668 13.3232 7.35322 13.4774C6.93983 13.6314 6.53645 13.7084 6.14309 13.7084C6.0517 13.7084 5.9574 13.7028 5.86018 13.6915C5.76295 13.6804 5.66272 13.6516 5.55947 13.6052V22.0994C5.55947 22.2042 5.5932 22.2902 5.66068 22.3575C5.72795 22.4248 5.8139 22.4584 5.91851 22.4584Z"
					fill={active ? "#FFA500" : "#25252C"}
				/>
			</g>
		</svg>
	);
}
