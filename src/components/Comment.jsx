import React from "react";

const info = {
    "1": {
        time: "10min",
        description: "During pregnancy, it's important to eat a balanced diet that includes fresh fruits and vegetables, whole grains, and foods rich in protein. Be sure to consume green vegetables like spinach and broccoli, which are high in folic acid, and choose fish that are low in mercury. Nuts or yogurt make great snacks.",
    },

    "2": {
        time: "7min",
        description: "Adequate nutrition is essential during pregnancy. Starting the day with healthy grains and ensuring that lunch and dinner include protein and vitamin-rich foods is beneficial. Red meat or lentils, which are high in iron, should be consumed frequently, and pairing them with vitamin C-rich fruits will aid iron absorption.",
    },
    "3": {
        time: "7min",
        description: "Your diet during pregnancy directly affects your baby's growth. It's crucial to include dairy products, protein-rich foods, and those high in folic acid. For snacks, choose fresh fruits over processed foods, and don't forget to stay well-hydrated by drinking plenty of water. Prioritize natural foods when making your choices.",
    },
}

export default function CommentCard({commentId}) {
    let content = info[commentId];
    
    return <article className="flex flex-col items-start px-4 py-3 gap-1">
        <div className="flex flex-col gap-1">
            <p className="text-sm text-subtext">{content?.time} ago</p>
            <p>{content?.description}</p>
        </div>
    </article>
}