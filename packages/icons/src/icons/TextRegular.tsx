import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextRegularProps = Omit<IconBaseProps, 'children'>;

const TextRegular = memo(
  forwardRef<SVGSVGElement, TextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3.25c1.52 0 2.75 1.23 2.75 2.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h1c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.52 1.23-2.75 2.75-2.75z" />
    </IconBase>
  ))
);

TextRegular.displayName = 'TextRegular';

// Triple export pattern
export { TextRegular, TextRegular as TextRegularIcon, TextRegular as SiTextRegular };
export default TextRegular;
export type { TextRegularProps };
