import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  title: string;
  subtitle: string;
  message: string;
  submessage?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({
  title,
  subtitle,
  message,
  onClose,
  submessage,
  onConfirm,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex z-20 items-center justify-center overflow-y-auto overflow-x-hidden">
      <div className="fixed inset-0 bg-black bg-opacity-5"></div>

      <div className="relative p-4 w-full max-w-xl max-h-full z-10">
        <div className="relative py-8 bg-white rounded-lg shadow-2xl">
          <button
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <AiOutlineClose className="text-black text-lg" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <p className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-800">
              {title}
            </p>
            <p className="mb-5 text-black text-lg">{subtitle}</p>
            <h3 className="mb-5 text-lg font-normal text-gray-800 dark:text-gray-800">
              {message}
            </h3>
            {submessage && (
              <p className="mb-5 text-gray-800 text-lg">{submessage}</p>
            )}
            <button
              className="text-white font-bold bg-pink-400 hover:bg-pink-600 focus:ring-white focus:outline-none rounded-full text-sm inline-flex items-center px-14 py-2.5 text-center mt-8"
              onClick={onConfirm}
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
