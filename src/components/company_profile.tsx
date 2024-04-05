'use client'
import { At, InstagramLogo, MapPin, Phone, Star, WhatsappLogo } from "@phosphor-icons/react"

type Props = {
    name: string,
    phone: string,
    email: string,
}


export default function CompanyProfile({ name, phone, email }: Props) {
    return (
        <section className="h-3/5 w-1/2 flex flex-col m-auto rounded-3xl">
            <div className="bg-blue-300">banner</div>

            <div className="flex flex-col w-full bg-red-300 py-6 rounded-b-3xl relative items-center">
                <div className="rounded-full bg-sky-50 w-64 h-64 absolute -top-32" />

                <div className="flex flex-col items-center h-full gap-4 mt-32">
                    <div>
                        <h2 className="font-medium text-3xl text-center">{name}</h2>
                        <p className="text-gray-500 text-center">Desde 2025</p>
                    </div>
                    <div className="rounded-xl bg-slate-300 py-1 px-9">
                        <p>Campina Grande - PB</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-center">Endereço</p>
                        <div className="flex flex-row gap-2 items-center">
                            <MapPin size={32} />
                            <p className="">Rua da companhia, 123 - Bairro</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-500 text-center">Avaliacao</p>
                        <div className="flex flex-row gap-2 items-center">
                            <Star size={32} />
                            <p className="">3/5</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Phone size={32} />
                        <At size={32} />
                        <InstagramLogo size={32} />
                        <WhatsappLogo size={32} />
                    </div>

                </div>
            </div>
        </section>
    )
}
