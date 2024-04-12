'use client'
import { formatDate } from "@/utils/format_date"
import { Star, ThumbsDown, ThumbsUp } from "@phosphor-icons/react"

type Props = {
    userName: string,
    comment: string
    commentDate: Date,
    grade: number
}

export default function CommentCard({ userName, comment, commentDate, grade }: Props) {
    return (
        <div className="w-1/2 min-h-fit p-6 bg-sky-50 rounded-3xl shadow-lg flex flex-col gap-3">
            <div className="flex flex-row items-center gap-4 w-full">
                <img src="/cleber.jpg" className="rounded-full bg-blue-500 w-8 h-8" />
                <span className="font-medium text-lg -ml-2">{userName}</span>
                <span className="text-zinc-500">{formatDate(commentDate)}</span>

                <div className="ml-auto flex flex-row items-center gap-2">
                    <Star size={32} weight="fill" color="#ebbd34" />
                    <span className="text-xl">{`${grade}/5`}</span>
                </div>
            </div>
            <div>{comment}</div>
            <div className="flex flex-row items-center gap-4">
                <ThumbsUp size={36} />
                <ThumbsDown size={36} />
            </div>
        </div>
    )
}
