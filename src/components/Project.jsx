
export default function Project({ index, image, repository, name }) {
  return (
    <>
      <a
        key={index}
        href={`https://github.com/kevinvongmany/${repository}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
      >
        <img
        src={`${image}`}
        alt={`Project ${index + 1}: ${name}`}
        className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white text-center py-2">
        <span className="text-lg font-semibold">{name}</span>
        </div>
      </a>
    </>
  );
}