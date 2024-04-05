export function formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat("pt-BR", { month: "short" })

    return `${date.getDate()} de ${formatter.format(date).replace(".", "")}, ${date.getFullYear()}`
}
