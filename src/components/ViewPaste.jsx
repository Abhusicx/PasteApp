import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
  <div className="flex flex-col gap-y-6 items-start">
    {/* Title Input */}
    <input
      type="text"
      placeholder="Title"
      value={paste.title}
      disabled
      className="w-full text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm cursor-not-allowed"
    />

    {/* Content Container */}
    <div className="w-full flex flex-col items-start relative rounded-lg border border-gray-300 bg-white/10 backdrop-blur-xl shadow-lg">
      {/* Header with Dots & Copy Button */}
      <div className="w-full flex items-center justify-between gap-x-4 px-5 py-3 border-b border-gray-300 bg-gray-50/40 backdrop-blur-md rounded-t-lg">
        {/* MacOS Style Dots */}
        <div className="flex gap-x-2 items-center">
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-md"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-md"></div>
          <div className="w-4 h-4 rounded-full bg-green-500 shadow-md"></div>
        </div>

        {/* Copy Button */}
        <button
          className="flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          onClick={() => {
            navigator.clipboard.writeText(paste.content);
            toast.success("Copied to Clipboard");
          }}
        >
          <Copy className="text-gray-700 hover:text-blue-600" size={22} />
        </button>
      </div>

      {/* Content Area */}
      <textarea
        value={paste.content}
        disabled
        placeholder="Write Your Content Here..."
        className="w-full p-4 text-lg text-gray-700 bg-transparent outline-none resize-none cursor-not-allowed"
        rows={20}
      />
    </div>
  </div>
</div>

  );
};

export default ViewPaste;
