import React from "react";

// const info = {
//     "1": {
//         time: "10분",
//         title: "i use arch btw",
//         description: "ny64 is fury ny64 is fury ny64 is fury ny64 is fury ny64 is fury ny64 is fury",
//         comments: 100
//     },

//     "2": {
//         time: "20분",
//         title: "질문질문질문질문질문질문질문질문",
//         description: "대충 물어보는글대충 물어보는글대충 물어보는글대충 물어보는글대충 물어보는글대충 물어보는글물어보는글",
//         comments: 19
//     }
// }

export default function CommentCard() {
    // let content = info[commentId];
    
    return <article className="flex flex-col items-start px-4 py-3 gap-1">
        <div className="flex flex-col gap-1">
            <p className="text-sm text-subtext">10min ago</p>
            <p>During pregnancy, it's important to eat a balanced diet that includes fresh fruits and vegetables, whole grains, and foods rich in protein. Be sure to consume green vegetables like spinach and broccoli, which are high in folic acid, and choose fish that are low in mercury. Nuts or yogurt make great snacks.</p>
        </div>
    </article>
}