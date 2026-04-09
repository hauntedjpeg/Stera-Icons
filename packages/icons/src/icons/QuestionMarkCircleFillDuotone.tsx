import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 13a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75m0-9c-1.65 0-3.24 1.02-3.6 2.6a.88.88 0 0 0 1.7.39c.14-.62.88-1.24 1.9-1.24 1.15 0 1.87.79 1.87 1.52 0 .57-.42 1.16-1.16 1.41-.72.24-1.59.91-1.59 1.99v.2a.88.88 0 0 0 1.75 0v-.2q-.01-.03.07-.13a1 1 0 0 1 .32-.2 3.3 3.3 0 0 0 2.36-3.07c0-1.92-1.73-3.28-3.62-3.28" clipRule="evenodd" opacity={.4} />
        <path d="M12 15.13a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.75M12 6.13c1.89 0 3.62 1.35 3.62 3.27a3.3 3.3 0 0 1-2.36 3.07 1 1 0 0 0-.32.2q-.08.1-.07.13v.2a.87.87 0 1 1-1.75 0v-.2c0-1.08.87-1.75 1.59-1.99.75-.25 1.16-.84 1.16-1.41 0-.73-.72-1.53-1.87-1.53-1.02 0-1.75.63-1.9 1.25a.88.88 0 0 1-1.7-.4c.36-1.57 1.95-2.6 3.6-2.6" />
    </IconBase>
  ))
);

QuestionMarkCircleFillDuotone.displayName = 'QuestionMarkCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFillDuotone, QuestionMarkCircleFillDuotone as QuestionMarkCircleFillDuotoneIcon, QuestionMarkCircleFillDuotone as SiQuestionMarkCircleFillDuotone };
export default QuestionMarkCircleFillDuotone;
export type { QuestionMarkCircleFillDuotoneProps };
