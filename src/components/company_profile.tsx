type Props = {
    name: string,
    phone: string,
    email: string,
}


export default function CompanyProfile({ name, phone, email }: Props) {
    return (
        <main className="bg-slate-500 h-80 w-1/2 rounded-xl grid grid-cols-12 gap-5">
            <div className="col-span-4">
                imagem
            </div>
            <div className="pt-20 pb-20 w-full flex flex-col justify-between col-span-2">
                <div>
                    <p className="font-light">Nome</p>
                    <p className="">{name}</p>
                </div>
                <div>
                    <p className="font-light">Telefone</p>
                    <p className="">{phone}</p>
                </div>
            </div>
            <div className="pt-20 pb-20 w-full flex flex-col justify-between col-span-2">
                <div>
                    <p className="font-light">Endereco</p>
                    <p className="">Rua da companhia, 123 - Construcao</p>
                </div>
                <div>
                    <p className="font-light">Email</p>
                    <p className="">{email}</p>
                </div>
            </div>
            <div className="pt-20 pb-20 w-full flex flex-col justify-between col-span-2">
                <div>
                    <p className="font-light">Avaliacao</p>
                    <p className="">3.5/5</p>
                </div>
            </div>
            <div className="pt-9 pb-9 w-full flex flex-col justify-between col-span-4">sobre nos</div>
        </main>
    )
}
