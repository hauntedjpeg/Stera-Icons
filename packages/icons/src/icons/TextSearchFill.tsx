import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchFillProps = Omit<IconBaseProps, 'children'>;

const TextSearchFill = memo(
  forwardRef<SVGSVGElement, TextSearchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-search-fill" {...props}>
      <path fillRule="evenodd" d="M15.5 8.75a4.75 4.75 0 0 1 4.25 6.88l1.81 1.8a1.5 1.5 0 1 1-2.12 2.13l-1.81-1.81q-.98.49-2.13.5a4.75 4.75 0 1 1 0-9.5m0 2.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path d="M8 16.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM8 10.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextSearchFill.displayName = 'TextSearchFill';

// Triple export pattern (lucide-react style)
export { TextSearchFill, TextSearchFill as TextSearchFillIcon, TextSearchFill as SiTextSearchFill };
export default TextSearchFill;
export type { TextSearchFillProps };
