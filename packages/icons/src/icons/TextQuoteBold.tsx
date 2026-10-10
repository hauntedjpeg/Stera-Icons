import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteBoldProps = Omit<IconBaseProps, 'children'>;

const TextQuoteBold = memo(
  forwardRef<SVGSVGElement, TextQuoteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 11c.55 0 1 .45 1 1v6.1c-.06.5-.48.9-1 .9s-.94-.4-1-.9V12c0-.55.45-1 1-1M21 17c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM16 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextQuoteBold.displayName = 'TextQuoteBold';

// Triple export pattern
export { TextQuoteBold, TextQuoteBold as TextQuoteBoldIcon, TextQuoteBold as SiTextQuoteBold };
export default TextQuoteBold;
export type { TextQuoteBoldProps };
