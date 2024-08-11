import { useState } from "react"
import Footer from "../components/Footer"
import QuestionCard, { info } from "../components/QuestionCard"
import CommentCard from "../components/Comment"
import { PenLineIcon } from "lucide-react"

export default function Questions() {
    const [detail, setDetail] = useState(null)
    const [contentId, setContentId] = useState(false)
    const [textinput, setTextinput] = useState(false)

    return <main className="h-dvh overflow-hidden mx-5">

{textinput?<div className="fixed w-dvw h-dvh left-0 top-0 flex items-center justify-center z-40 bg-black/40" onClick={() => setTextinput(false)}></div>:<></>}
        {textinput?
            <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col bg-white gap-2 px-3 py-4 rounded-[20px] w-[calc(100%-40px)]">
                {detail?<></>:<input className="text-xl font-bold border-none outline-none" type="title" placeholder="input title..." />}
                <textarea className="border-none outline-none h-52" type="description" placeholder={detail? "input answer...": "input description..."} />
                <input className="bg-box py-2 rounded-lg" type="submit" value="submit" />
            </form>:<></>}

        <div className="h-[calc(100dvh-80px)] overflow-y-scroll">
            <Q setContentId={setContentId} setDetail={setDetail} />
            <A setDetail={setDetail} contentId={contentId} detail={detail} />
        </div>
        <div className="fixed right-[20px] bottom-[100px] bg-primary p-3 rounded-full" onClick={() => setTextinput(true)}>
            <PenLineIcon className="text-white w-8 h-8"/>
        </div>
        <Footer />
    </main>
}


const Q = ({ setContentId, setDetail }) => {
    return <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold mt-10">QnA</h1>
        <div className="flex flex-col gap-3">
            <QuestionCard contentId="2" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
            <QuestionCard contentId="1" setDetail={setDetail} setContentId={setContentId} />
        </div>
    </div>

}
const A = ({ contentId, detail, setDetail }) => {
    if (!contentId)
        return <div className={`overflow-visible fixed top-0 left-0 w-dvw h-dvh p-5 flex-col gap-4 bg-white transition-all duration-700 ${detail ? 'translate-x-0' : 'translate-x-full'}`}></div>

    let content = info[contentId];
    return <div className={`overflow-visible pb-20 fixed top-0 left-0 w-dvw h-dvh p-5 flex-col gap-4 bg-white transition-all duration-700 ${detail ? 'translate-x-0' : 'translate-x-full'}`}>
        <p className="text-subtext" onClick={() => setDetail(false)}>{"< "}back</p>
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
                <h1 className="text-xl font-bold">{content.title}</h1>
                <p className="text-sm text-subtext">{content.time}전</p>
            </div>
            <h2>{content.description}</h2>
        </div>
        <div className="w-dvw translate-x-[-20px] h-3 bg-box my-14"></div>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
    </div>

}