import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getCategoriesByIdAction } from "../../_actions/categories.actions";
import CategoryDetails from "../../_components/categories/category-details";

interface CategoryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const CategoryDetailsPage = async ({ params }: CategoryDetailsPageProps) => {
  const { id } = await params;

  const result = await getCategoriesByIdAction(id);

  if (!result.success) {
    return (
      <main className="min-h-screen">
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-lg rounded-2xl border bg-card p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold">Category Not Found</h1>

            <p className="mt-3 text-sm text-muted-foreground">
              {result.message ||
                "The requested service category could not be found."}
            </p>

            <Button asChild className="mt-6">
              <Link href="/categories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Breadcrumb / Back */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-5">
          <Button asChild variant="ghost" size="sm" className="-ml-3">
            <Link href="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Categories
            </Link>
          </Button>
        </div>
      </section>

      {/* Category Details */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <CategoryDetails category={result.data} />
        </div>
      </section>s
    </main>
  );
};

export default CategoryDetailsPage;
