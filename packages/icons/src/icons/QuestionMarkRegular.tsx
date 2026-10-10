import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkRegularProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkRegular = memo(
  forwardRef<SVGSVGElement, QuestionMarkRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 2.25c3.6 0 6.75 2.45 6.75 5.75 0 3.07-2.73 5.4-6 5.71V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75 3.03 0 5.25-2.03 5.25-4.25S15.03 3.75 12 3.75c-2.66 0-4.82 1.57-5.27 3.43-.1.4-.5.65-.9.55s-.66-.5-.56-.9C5.93 4.1 8.85 2.24 12 2.24" />
    </IconBase>
  ))
);

QuestionMarkRegular.displayName = 'QuestionMarkRegular';

// Triple export pattern
export { QuestionMarkRegular, QuestionMarkRegular as QuestionMarkRegularIcon, QuestionMarkRegular as SiQuestionMarkRegular };
export default QuestionMarkRegular;
export type { QuestionMarkRegularProps };
