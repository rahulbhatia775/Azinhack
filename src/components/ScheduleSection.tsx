const ScheduleSection = () => {
  const schedule = [
    { time: "6:00 PM", event: "Check-in & Registration", day: "Day 1" },
    { time: "7:00 PM", event: "Opening Ceremony", day: "Day 1" },
    { time: "8:00 PM", event: "Hacking Begins!", day: "Day 1" },
    { time: "9:00 PM", event: "Dinner & Networking", day: "Day 1" },
    { time: "11:00 PM", event: "Workshop: AI & ML Basics", day: "Day 1" },
    { time: "12:00 AM", event: "Midnight Snacks", day: "Night" },
    { time: "8:00 AM", event: "Breakfast", day: "Day 2" },
    { time: "12:00 PM", event: "Lunch", day: "Day 2" },
    { time: "2:00 PM", event: "Hacking Ends", day: "Day 2" },
    { time: "3:00 PM", event: "Project Demos", day: "Day 2" },
    { time: "5:00 PM", event: "Judging", day: "Day 2" },
    { time: "6:00 PM", event: "Closing & Awards Ceremony", day: "Day 2" },
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
        
        <div className="max-w-4xl mx-auto space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-bold-sm p-6 md:p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-magenta border-2 border-black px-4 py-2 font-black text-black text-sm inline-block w-fit">
                  {item.day}
                </div>
                <div className="text-2xl md:text-3xl font-black text-black">
                  {item.time}
                </div>
                <div className="flex-1 text-xl md:text-2xl font-bold text-black">
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
