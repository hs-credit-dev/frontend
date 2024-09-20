import React, { forwardRef } from 'react';

export type Option = {
	id?: string | number;
	label: string;
	value: string;
};
type Props = {
	placeHolder?: string;
	options: Option[];
	showMenu: boolean;
	onItemClick: (option: Option) => void;
	onClick: () => void;
	selectedValue: Option;
};

const Icon = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<svg
			className={`w-[0.6875rem] h-[0.4375rem] fill-none ${isOpen ? 'rotate-180' : ''}`}
			viewBox='0 0 11 7'
		>
			<path
				d='M1.32031 1L5.52486 6L9.72942 1'
				className='opacity-[0.8] stroke-black stroke-[0.0875rem] [stroke-linecap:round] [stroke-linejoin:round]  '
			/>
		</svg>
	);
};
// eslint-disable-next-line react/display-name
const Select = forwardRef<HTMLButtonElement, Props>(
	({ placeHolder, options, showMenu, onClick, onItemClick, selectedValue }, ref) => {
		const getDisplay = () => {
			if (!selectedValue) {
				return placeHolder || <>&nbsp;</>;
			}
			return selectedValue.label;
		};

		const isSelected = (option: Option) => {
			if (!selectedValue) {
				return false;
			}

			return selectedValue.value === option.value;
		};

		const getOptions = () => {
			return options;
		};

		return (
			<div className='relative'>
				<button
					type='button'
					ref={ref}
					onClick={onClick}
					className='text-[1.01rem] text-left flex items-center gap-x-10 rouded-lg shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] pl-[0.875rem] py-5 pr-[0.939rem]'
					value={selectedValue?.value || ''}
				>
					<div className='min-w-[9.6875rem]'>{getDisplay()}</div>
					<div className='dropdown-tools'>
						<div className='dropdown-tool'>
							<Icon isOpen={showMenu} />
						</div>
					</div>
				</button>

				{showMenu && (
					<div className='flex flex-col absolute top-[4.25rem] bg-white rounded-lg justify-center gap-[1px] left-0 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] w-full z-20'>
						{getOptions().map((option) => (
							<button
								type='button'
								onClick={() => onItemClick(option)}
								key={option.value}
								className={`text-left pt-3 px-4 pb-[1.0625rem]${
									isSelected(option) ? ' selected' : ''
								}`}
							>
								{option.label}
							</button>
						))}
					</div>
				)}
			</div>
		);
	},
);

export default Select;
