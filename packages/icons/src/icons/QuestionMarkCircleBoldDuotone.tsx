import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 15c.83 0 1.5.67 1.5 1.5S12.83 18 12 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6c1.94 0 3.75 1.4 3.75 3.4 0 1.54-1.1 2.74-2.45 3.2q-.18.06-.26.15-.06.08-.04.05v.2c0 .55-.45 1-1 1s-1-.45-1-1v-.2c0-1.15.92-1.86 1.67-2.1.7-.24 1.08-.79 1.08-1.3 0-.65-.65-1.4-1.75-1.4-.97 0-1.65.6-1.78 1.15-.12.53-.66.87-1.2.74-.53-.12-.87-.66-.74-1.2C8.66 7.05 10.3 6 12 6" />
    </IconBase>
  ))
);

QuestionMarkCircleBoldDuotone.displayName = 'QuestionMarkCircleBoldDuotone';

// Triple export pattern
export { QuestionMarkCircleBoldDuotone, QuestionMarkCircleBoldDuotone as QuestionMarkCircleBoldDuotoneIcon, QuestionMarkCircleBoldDuotone as SiQuestionMarkCircleBoldDuotone };
export default QuestionMarkCircleBoldDuotone;
export type { QuestionMarkCircleBoldDuotoneProps };
