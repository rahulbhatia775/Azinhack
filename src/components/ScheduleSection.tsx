const ScheduleSection = () => {
  const schedule = [
    { time: "08:30 AM - 10:00 AM", event: "Reporting & Registration of teams", day: "Day 1" },
    { time: "12:30 PM", event: "Hackathon officially commences (coding starts)", day: "Day 1" },
    { time: "09:00 PM - 10:30 PM", event: "Dinner & Refreshment Break", day: "Day 1" },
    { time: "11:00 PM", event: "First Mentorship Round (Mentors visit teams, feedback & guidance)", day: "Day 1" },
    { time: "06:00 AM", event: "Second Mentorship Round (Mentors interact with teams again)", day: "Day 2" },
    { time: "08:30 AM", event: "Results of Mentorship Round (Shortlisted/qualified teams announced)", day: "Day 2" },
    { time: "09:00 AM", event: "Final Presentations by shortlisted teams", day: "Day 2" },
    { time: "12:00 PM", event: "Result Announcement & Closing Ceremony", day: "Day 2" },
  ];

  return (
    <section id="schedule" className="bg-yellow py-20 md:py-32 border-y-8 border-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan border-4 border-black rotate-12 animate-float opacity-20" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-magenta border-4 border-black animate-float opacity-20" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple border-4 border-black -rotate-12 animate-float opacity-20" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-lime border-4 border-black rotate-45 animate-float opacity-20" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full bg-cyan border-4 border-black animate-float opacity-20" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-20 right-1/3 w-36 h-36 bg-magenta border-4 border-black rotate-6 animate-float opacity-20" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-black mb-16 text-center">
          SCHEDULE
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm p-6 md:p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-magenta border-2 border-black px-4 py-2 font-black text-black text-sm inline-block w-fit">
                  {item.day}
                </div>
                <div className="text-xl md:text-2xl font-black text-black min-w-fit">
                  {item.time}
                </div>
                <div className="flex-1 text-lg md:text-xl font-bold text-black">
                  {item.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
