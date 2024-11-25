import { CommentData } from "../data/CommentData";
const CommentBox = ({ data }) => {
  return data?.map((comment, idx) => (
    <div key={idx} className="px-4 border-l-8 border-black">
      <div className="flex">
        <div>😍</div>
        <div>{comment?.username}</div>
      </div>
      <div className="px-2">
        <div className="px-4">{comment?.comment}</div>
      </div>
      <div>{comment?.replies && <CommentBox data={comment?.replies} />}</div>
    </div>
  ));
};
const Comment = () => {
  return (
    <div>
      <CommentBox data={CommentData} />
    </div>
  );
};

export default Comment;
