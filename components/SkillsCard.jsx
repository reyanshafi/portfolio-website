export default function SkillsCard({ skill, icon }) {
  return (
    <div className="flex items-center space-x-4 bg-gradient-to-r from-[#101011] to-[#090909] text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-yellow-400 text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{skill}</h3>
      </div>
    </div>
  );
}