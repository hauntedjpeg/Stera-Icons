import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-fill" {...props}>
      <path d="M12 18.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75M12 1.75c3.78 0 7.25 2.6 7.25 6.25 0 3.25-2.74 5.66-6 6.15v1.1a1.25 1.25 0 0 1-2.5 0V13c0-.69.56-1.25 1.25-1.25 2.85 0 4.75-1.88 4.75-3.75S14.85 4.25 12 4.25c-2.5 0-4.4 1.47-4.78 3.05a1.25 1.25 0 0 1-2.43-.6C5.5 3.71 8.69 1.75 12 1.75" />
    </IconBase>
  ))
);

QuestionMarkFill.displayName = 'QuestionMarkFill';

// Triple export pattern (lucide-react style)
export { QuestionMarkFill, QuestionMarkFill as QuestionMarkFillIcon, QuestionMarkFill as SiQuestionMarkFill };
export default QuestionMarkFill;
export type { QuestionMarkFillProps };
