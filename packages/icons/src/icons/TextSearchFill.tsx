import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchFillProps = Omit<IconBaseProps, 'children'>;

const TextSearchFill = memo(
  forwardRef<SVGSVGElement, TextSearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 8.75c2.62 0 4.75 2.13 4.75 4.75q-.01 1.16-.5 2.13l1.81 1.8c.59.6.59 1.54 0 2.13s-1.53.59-2.12 0l-1.81-1.81q-.98.49-2.13.5c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75m0 2.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path d="M8 16.75c.69 0 1.25.56 1.25 1.25S8.69 19.25 8 19.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM8 10.75c.69 0 1.25.56 1.25 1.25S8.69 13.25 8 13.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextSearchFill.displayName = 'TextSearchFill';

// Triple export pattern
export { TextSearchFill, TextSearchFill as TextSearchFillIcon, TextSearchFill as SiTextSearchFill };
export default TextSearchFill;
export type { TextSearchFillProps };
