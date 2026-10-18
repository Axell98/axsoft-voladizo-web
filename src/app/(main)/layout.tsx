import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CompanyProvider } from "@/context/CompanyContext";
import { getCompany } from "@/lib/api";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const companyData = await getCompany().catch(() => null);

  return (
    <CompanyProvider initialData={companyData}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </CompanyProvider>
  );
}
