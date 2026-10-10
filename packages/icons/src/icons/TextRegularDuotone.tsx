import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h-4c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z" opacity={.4} />
        <path d="M15 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM17 3.25c1.52 0 2.75 1.23 2.75 2.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.52 1.23-2.75 2.75-2.75z" />
    </IconBase>
  ))
);

TextRegularDuotone.displayName = 'TextRegularDuotone';

// Triple export pattern
export { TextRegularDuotone, TextRegularDuotone as TextRegularDuotoneIcon, TextRegularDuotone as SiTextRegularDuotone };
export default TextRegularDuotone;
export type { TextRegularDuotoneProps };
