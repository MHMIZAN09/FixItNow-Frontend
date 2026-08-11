import { Category } from "../../../../types/category";
import { getCategoriesAction } from "../../_actions/categories.actions";
import CategoryCard from "./category-card";

const CategorySection = async () => {
  const result = await getCategoriesAction();

  if (!result.success) {
    return null;
  }

  const categories = result.data;

  return (
    <section>
      <div>
        {/* Categories */}
        {categories.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category: Category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border bg-background p-10 text-center">
            <p className="text-sm text-muted-foreground">
              No categories available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
