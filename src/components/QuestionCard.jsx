import React from "react";
import ChatImage from "../assets/chatting_bubble.svg"

export const info = {
    "1": {
        time: "10min ",
        title: "What foods should I eat during pregnancy?",
        description: "...",
        comments: 100
    },

    "2": {
        time: "20min ",
        title: "Is it safe to exercise during pregnancy?",
        description: "...",
        comments: 19
    }
}
export default function QuestionCard({contentId, setContentId, setDetail}) {
    let content = info[contentId];
    
    return <article onClick={() => {setContentId(contentId); setDetail(true)}} className="flex flex-col items-start px-4 py-3 gap-1 bg-box rounded-2xl">
        <section className="flex gap-1 items-end">
            <h1 className="font-semibold text-base">{content.title}</h1>
            <div className="text-subtext text-sm text-nowrap">{content.time}ago</div>
        </section>
        <section className="flex justify-between gap-2 items-end w-full">
            <p className="text-subtext text-sm ">
                {content.description}
            </p>
            <div className="flex gap-1 items-center justify-end">
                <img src={ChatImage}/>
                {content.comments}
            </div>
        </section>
    </article>
}