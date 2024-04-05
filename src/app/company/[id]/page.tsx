import CommentCard from "@/components/comment_card"
import CompanyProfile from "@/components/company_profile"
import Company from "@/types/company"

type Props = {
    params: {
        id: string
    }
}

export default async function CompanyPage({ params }: Props) {
    const response = await fetch(`http://localhost:8000/v1/company/${params.id}`)
    const data = await response.json() as Company

    return (
        <div className="flex h-screen flex-col items-center gap-5">
            <CompanyProfile name={data.name} phone={data.phone} email={data.email} />
            <CommentCard userName="Gabriel Diniz" comment={"Testando os comentarios"} commentDate={new Date()} grade={3}/>
        </div>
    )
}
