import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchBoldProps = Omit<IconBaseProps, 'children'>;

const TextSearchBold = memo(
  forwardRef<SVGSVGElement, TextSearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.5 9c2.49 0 4.5 2.01 4.5 4.5q-.01 1.2-.56 2.17l1.94 1.95c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-1.95-1.94q-.97.55-2.17.56c-2.49 0-4.5-2.01-4.5-4.5S13.01 9 15.5 9m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
        <path d="M8.1 17c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M8.1 11c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextSearchBold.displayName = 'TextSearchBold';

// Triple export pattern
export { TextSearchBold, TextSearchBold as TextSearchBoldIcon, TextSearchBold as SiTextSearchBold };
export default TextSearchBold;
export type { TextSearchBoldProps };
