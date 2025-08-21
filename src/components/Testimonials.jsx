export default function Testimonials({ data }) {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow">
            <p className="text-gray-700 mb-4">“{item.testimonial}”</p>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
