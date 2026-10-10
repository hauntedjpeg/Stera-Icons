import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextSearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.1 17c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M8.1 11c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.5 9c2.49 0 4.5 2.01 4.5 4.5q-.01 1.33-.7 2.4l1.9 1.9c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-1.9-1.9q-1.06.69-2.4.7c-2.49 0-4.5-2.01-4.5-4.5S13.01 9 15.5 9m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSearchBoldDuotone.displayName = 'TextSearchBoldDuotone';

// Triple export pattern
export { TextSearchBoldDuotone, TextSearchBoldDuotone as TextSearchBoldDuotoneIcon, TextSearchBoldDuotone as SiTextSearchBoldDuotone };
export default TextSearchBoldDuotone;
export type { TextSearchBoldDuotoneProps };
