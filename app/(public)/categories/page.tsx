import { Suspense } from "react";
import CategorySection from "../_components/categories/category-section";
import CategorySectionSkeleton from "../_components/categories/category-section-skeleton";

const CategoriesPage = () => {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-10 sm:py-14">
        {/* Page Header */}
        <div className="mb-10 flex flex-col gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              FixItNow Services
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Browse Service Categories
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Explore our home service categories and find qualified
              professionals for plumbing, electrical, cleaning, painting, AC
              repair, and more.
            </p>
          </div>
        </div>

        {/* Categories */}
        <Suspense fallback={<CategorySectionSkeleton />}>
          <CategorySection />
        </Suspense>
      </section>
    </main>
  );
};

export default CategoriesPage;
