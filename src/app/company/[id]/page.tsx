type Props = {
    params: {
        id: string
    }
}

export default function CompanyPage({ params }: Props) {
    return (
        <div>
            Company id: {params.id}
        </div>
    )
}
