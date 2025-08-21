export default function About({ data }) {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">{data.heading}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{data.paragraph}</p>
    </section>
  );
}
