const StatsSection = () => {
  const stats = [
    { value: "$10K+", label: "PRIZES", bg: "bg-purple" },
    { value: "500+", label: "HACKERS", bg: "bg-cyan" },
    { value: "50+", label: "PROJECTS", bg: "bg-yellow" },
  ];

  return (
    <section className="py-0">
      <div className="grid md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} border-4 border-black p-12 md:p-16 text-center hover:scale-105 transition-transform`}
          >
            <div className="text-5xl md:text-7xl font-black text-black mb-2">
              {stat.value}
            </div>
            <div className="text-xl md:text-2xl font-black text-black">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
