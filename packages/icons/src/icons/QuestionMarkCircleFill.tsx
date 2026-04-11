import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 13a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.75m0-9c-1.65 0-3.24 1.02-3.6 2.6a.88.88 0 0 0 1.7.39c.15-.62.88-1.24 1.9-1.24 1.15 0 1.88.79 1.88 1.52 0 .57-.42 1.16-1.17 1.41-.72.24-1.58.91-1.59 1.99v.2a.88.88 0 0 0 1.76 0v-.2q-.02-.03.06-.13a1 1 0 0 1 .32-.2 3.3 3.3 0 0 0 2.37-3.07c0-1.92-1.74-3.28-3.63-3.28" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleFill.displayName = 'QuestionMarkCircleFill';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFill, QuestionMarkCircleFill as QuestionMarkCircleFillIcon, QuestionMarkCircleFill as SiQuestionMarkCircleFill };
export default QuestionMarkCircleFill;
export type { QuestionMarkCircleFillProps };
