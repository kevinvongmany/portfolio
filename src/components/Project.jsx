
export default function Project({ index, image, repository }) {
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
            alt={`Project ${index + 1}: ${repository}`}
            className="w-full h-48 object-cover"
          />
        </a>
    </>
  );
}