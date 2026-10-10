import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBoldProps = Omit<IconBaseProps, 'children'>;

const TextBold = memo(
  forwardRef<SVGSVGElement, TextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1-.52 0-.94-.4-1-.9v-.2c-.06-.5-.48-.9-1-.9h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H7c-.52 0-.94.4-1 .9v.2c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1 0-1.66 1.34-3 3-3z" />
    </IconBase>
  ))
);

TextBold.displayName = 'TextBold';

// Triple export pattern
export { TextBold, TextBold as TextBoldIcon, TextBold as SiTextBold };
export default TextBold;
export type { TextBoldProps };
