'use client'
import { Phone, At } from "@phosphor-icons/react"

type CompanyCardProps = {
    name: string
    phone: string
    email: string
}

export default function CompanyCard({ name, phone, email }: CompanyCardProps) {
    return (
        <div className="w-1/4 h-fit text-black bg-gray-300 rounded-2xl p-4 mb-4">
            <h1 className="mb-2 font-semibold text-3xl">{name}</h1>
            <div className="w-3/4 mb-2 flex flex-row items-center">
                <At size={24}/>
                <p className="text-lg ml-2">{email}</p>
            </div>
            <div className="w-3/4 flex flex-row items-center">
                <Phone size={24}/>
                <p className="text-lg ml-2">{phone}</p>
            </div>
        </div>
    )
}