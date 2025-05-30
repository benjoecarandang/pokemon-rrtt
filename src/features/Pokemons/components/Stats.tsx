import React from "react";

interface Stat {
  base_stat: string; // Ideally this should be a number if possible
  stat: {
    name: string;
  };
  color?: string;
}

interface StatsProps {
  stats: Stat[];
}

interface Mappings {
  displayName: string;
  color: string;
}

const StatBar: React.FC<{ name: string; value: string; color: string }> = ({
  name,
  value,
  color
}) => (
  <div className="flex items-center mb-2">
    <div className={`min-w-20 uppercase`}>{name}</div>
    <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
      <div
        className={`h-full rounded-lg ${color}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const Stats: React.FC<StatsProps> = ({ stats }) => {
  // Define the mapping for name and color in a constant
  const STAT_MAPPINGS: Record<string, Mappings> = {
    hp: { displayName: "HP", color: "bg-green-500" },
    attack: { displayName: "ATK", color: "bg-red-500" },
    defense: { displayName: "DEF", color: "bg-blue-500" },
    speed: { displayName: "SPD", color: "bg-yellow-500" },
    "special-attack": { displayName: "SP. ATK.", color: "bg-pink-500" },
    "special-defense": { displayName: "SP. DEF.", color: "bg-orange-500" }
  };

  // Filter out unwanted stats and map to a modified format
  const modifiedStats = stats.map(({ base_stat, stat: { name } }) => {
    const mappedStat = STAT_MAPPINGS[name.toLowerCase()];
    return {
      base_stat,
      stat: {
        name: mappedStat?.displayName || name
      },
      color: mappedStat?.color || "bg-gray-500"
    };
  });

  return (
    <div className="rounded-md transition duration-300 bg-opacity-80 text-gray-5">
      <h2 className="font-bold text-xl text-gray-8 mb-4">
        Statistics
      </h2>

      <div>
        {modifiedStats.map(({ stat: { name }, base_stat, color }) => (
          <StatBar key={name} name={name} value={base_stat} color={color!} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
