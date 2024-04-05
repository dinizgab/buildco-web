'use client'
import { At, InstagramLogo, Phone, WhatsappLogo } from "@phosphor-icons/react"
import HoverCardContact from "./hover_card_contacts"

type Props = {
    name: string,
    phone: string,
    email: string,
}

export default function CompanyProfile({ name, phone, email }: Props) {
    const contactInfo = [
        { contact: phone, icon: Phone },
        { contact: email, icon: At },
        { contact: "4123-4123", icon: WhatsappLogo },
        { contact: "@testco", icon: InstagramLogo }
    ]

    return (
        <section className="h-3/5 w-1/2 flex flex-col mt-12 mx-auto rounded-3xl">
            <img src="/banner-image.jpg" className="h-2/5 rounded-t-3xl" />

            <div className="w-full px-6 pb-8 rounded-b-3xl grid grid-cols-3 bg-sky-50 shadow-lg">
                <div className="flex flex-row gap-5 justify-center mt-6">
                    <div className="flex flex-col items-center">
                        <p className="text-center font-medium text-xl">3/5</p>
                        <p className="text-gray-500 text-sm text-center">Avaliacao</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-center font-medium text-xl">36</p>
                        <p className="text-gray-500 text-sm text-center">Comentarios</p>
                    </div>
                </div>

                <div className="flex flex-col items-center h-full gap-4">
                    <img src="/logo-generica.jpg" className="shadow-xl rounded-full w-64 h-64 -mt-32" />
                    <div>
                        <h2 className="font-medium text-3xl text-center">{name}</h2>
                        <p className="text-gray-500 text-center">Desde 2025</p>
                    </div>
                    <div className="rounded-xl bg-slate-200 py-1 px-9">
                        <p className="">Campina Grande - PB</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-center text-sm">Endereço</p>
                        <p className="text-center text-medium">Rua da companhia, 123 - Bairro</p>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-3 mt-6 relative">
                    {
                        contactInfo.map(contact => <HoverCardContact contactInfo={contact.contact} Icon={contact.icon} />)
                    }
                </div>
            </div>
        </section>
    )
}
