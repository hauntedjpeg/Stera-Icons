import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h-4c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z" opacity={.4} />
        <path d="M15 19c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1zM17 3c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1-.52 0-.94-.4-1-.9v-.2c-.06-.5-.48-.9-1-.9H7c-.52 0-.94.4-1 .9v.2c-.06.5-.48.9-1 .9-.55 0-1-.45-1-1 0-1.66 1.34-3 3-3z" />
    </IconBase>
  ))
);

TextBoldDuotone.displayName = 'TextBoldDuotone';

// Triple export pattern
export { TextBoldDuotone, TextBoldDuotone as TextBoldDuotoneIcon, TextBoldDuotone as SiTextBoldDuotone };
export default TextBoldDuotone;
export type { TextBoldDuotoneProps };
