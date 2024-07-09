import Link from "next/link";

type HashtagProps = {
  tags: string[];
  size: "sm" | "lg";
  selectedTag?: string;
};

function Hashtag({ tags, size, selectedTag }: HashtagProps) {
  return (
    <div className="flex gap-x-6">
      {tags.map((tag, i) => (
        <Link
          href={`/posts?keyword=${selectedTag === tag ? "" : tag}`}
          key={i}
          className={`text-${size} ${
            selectedTag === tag ? "text-primary font-semibold" : "text-gray-500"
          }  hover:text-primary`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

export default Hashtag;
