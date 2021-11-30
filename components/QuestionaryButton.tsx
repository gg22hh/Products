import React from 'react'

export interface QuestionaryButtonProps {
	plus?: 'yes' | 'minus';
	children
}

export const QuestionaryButton = ({plus = "yes", children}: QuestionaryButtonProps) => {
	return (
        <div>
            {plus == "yes" && (
                <button className="questionary__item-button">{children}</button>
            )}
            {plus != "yes" && (
                <button className="questionary__item-button.minus">
					{children};;
				</button>
            )}
        </div>
    );
}
