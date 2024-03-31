import CompanyCard from "./components/company_card";
import Company from "./types/company";

export default async function Home() {
  const response = await fetch('http://localhost:8000/v1/company')
  const data = await response.json()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        {
          // TODO - Fix phone return in backend (returning switched values with email)
          data.map((company:Company) => <CompanyCard key={company.id} id={company.id} name={company.name} phone={company.phone} email={company.email} />)
        }
    </main>
  );
}
