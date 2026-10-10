import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.1 17c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M8.1 11c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.19 3.2l.7.24c.57.2.57 1.02 0 1.22l-.7.25c-1.5.52-2.67 1.7-3.2 3.19l-.24.7c-.2.57-1.02.57-1.22 0l-.25-.7c-.52-1.5-1.7-2.67-3.19-3.2l-.7-.24c-.57-.2-.57-1.02 0-1.22l.7-.25c1.5-.52 2.67-1.7 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleBoldDuotone.displayName = 'TextSparkleBoldDuotone';

// Triple export pattern
export { TextSparkleBoldDuotone, TextSparkleBoldDuotone as TextSparkleBoldDuotoneIcon, TextSparkleBoldDuotone as SiTextSparkleBoldDuotone };
export default TextSparkleBoldDuotone;
export type { TextSparkleBoldDuotoneProps };
