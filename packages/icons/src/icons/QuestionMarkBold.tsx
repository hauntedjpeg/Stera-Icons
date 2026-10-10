import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkBoldProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkBold = memo(
  forwardRef<SVGSVGElement, QuestionMarkBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M12 2c3.69 0 7 2.52 7 6 0 3.16-2.73 5.53-6 5.94v1.56c0 .55-.45 1-1 1s-1-.45-1-1V13c0-.55.45-1 1-1 2.94 0 5-1.95 5-4s-2.06-4-5-4C9.42 4 7.39 5.52 6.97 7.24c-.13.53-.67.86-1.2.73-.54-.13-.87-.67-.74-1.2C5.73 3.9 8.77 2 12 2" />
    </IconBase>
  ))
);

QuestionMarkBold.displayName = 'QuestionMarkBold';

// Triple export pattern
export { QuestionMarkBold, QuestionMarkBold as QuestionMarkBoldIcon, QuestionMarkBold as SiQuestionMarkBold };
export default QuestionMarkBold;
export type { QuestionMarkBoldProps };
