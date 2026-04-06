const Skills = () => {
  const skills = ["React JS", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git"];

  return (
    <section>
      <h2 className="text-3xl font-serif text-moss text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 px-5 py-2 rounded-full border border-harvest/40 bg-harvest/10 hover:bg-harvest hover:text-white transition cursor-default">
            🌿 {skill}
          </div>
        ))}
      </div>
    </section>
  );
};