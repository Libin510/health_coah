export default function FAQ({ data }) {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">FAQ</h2>
      <div className="space-y-6">
        {data.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="font-medium">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
