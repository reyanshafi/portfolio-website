export default function SkillsCard({ skill, icon }) {
  return (
    <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-yellow-400 transition-all duration-200">
      <div className="text-yellow-400 text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-gray-200">{skill}</h3>
      </div>
    </div>
  );
}