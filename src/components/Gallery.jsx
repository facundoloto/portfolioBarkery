import bakeryItems from "../data/bakeryItems";

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        My Creations
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bakeryItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-stone-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}