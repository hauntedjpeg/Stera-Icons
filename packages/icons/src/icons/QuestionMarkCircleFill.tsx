import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 13c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m0-9c-1.65 0-3.24 1.02-3.6 2.6-.11.46.18.93.65 1.04s.94-.18 1.05-.65c.15-.62.88-1.24 1.9-1.24 1.15 0 1.88.79 1.88 1.52 0 .57-.42 1.16-1.17 1.41-.72.24-1.58.91-1.59 1.99v.2c0 .48.4.88.88.88s.88-.4.88-.88v-.2q-.02-.03.06-.13.1-.12.32-.2c1.32-.44 2.36-1.6 2.37-3.07 0-1.92-1.74-3.28-3.63-3.28" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleFill.displayName = 'QuestionMarkCircleFill';

// Triple export pattern
export { QuestionMarkCircleFill, QuestionMarkCircleFill as QuestionMarkCircleFillIcon, QuestionMarkCircleFill as SiQuestionMarkCircleFill };
export default QuestionMarkCircleFill;
export type { QuestionMarkCircleFillProps };
