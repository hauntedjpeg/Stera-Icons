import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleBoldProps = Omit<IconBaseProps, 'children'>;

const TextSparkleBold = memo(
  forwardRef<SVGSVGElement, TextSparkleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.39 10.26c.2-.58 1.02-.58 1.22 0l.25.69c.52 1.5 1.7 2.67 3.2 3.2l.68.24c.58.2.58 1.02 0 1.22l-.69.25c-1.5.52-2.67 1.7-3.2 3.2l-.24.68c-.2.58-1.02.58-1.22 0l-.25-.69c-.52-1.5-1.7-2.67-3.2-3.2l-.68-.24c-.58-.2-.58-1.02 0-1.22l.69-.25c1.5-.52 2.67-1.7 3.2-3.2zM8.1 17c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M8.1 11c.5.06.9.48.9 1s-.4.94-.9 1H3c-.55 0-1-.45-1-1s.45-1 1-1h5.1M21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextSparkleBold.displayName = 'TextSparkleBold';

// Triple export pattern
export { TextSparkleBold, TextSparkleBold as TextSparkleBoldIcon, TextSparkleBold as SiTextSparkleBold };
export default TextSparkleBold;
export type { TextSparkleBoldProps };
