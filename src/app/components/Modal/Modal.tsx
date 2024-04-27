type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
};

const Modal = ({ isVisible, onClose }: ModalProps) => {
	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[300px] h-[200px] flex flex-col p-6 rounded-lg shadow bg-white">
				<h2 className="font-semibold mb-2 text-gray-800">Feedback</h2>
				<textarea
					className="bg-white p-2 rounded text-sm border-2 h-20"
					placeholder="Leave feedback..."
				/>
				<div className="flex justify-end items-center mt-3 text-xs gap-2">
					<button
						className="h-7 w-16 rounded-full bg-slate-300 text-blacktext-xs hover:bg-slate-500 hover:text-white"
						onClick={onClose}
					>
						Close
					</button>
					<button
						className="h-7 w-16 rounded-full bg-hsPurple text-white text-xs hover:bg-violet-800"
						onClick={onClose}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
