type HashtagProps = {
  tags: string[];
};

function Hashtag({ tags }: HashtagProps) {
  return (
    <div>
      {tags.map((tag, i) => (
        <span key={i} className="">
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default Hashtag;
