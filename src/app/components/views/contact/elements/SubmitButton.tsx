import { FC } from "react";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ loading }) => {
  return (
    <button
      className="bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
      type="submit"
      disabled={loading}
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
};

export default SubmitButton;
