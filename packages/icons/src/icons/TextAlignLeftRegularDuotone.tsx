import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M17 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignLeftRegularDuotone.displayName = 'TextAlignLeftRegularDuotone';

// Triple export pattern
export { TextAlignLeftRegularDuotone, TextAlignLeftRegularDuotone as TextAlignLeftRegularDuotoneIcon, TextAlignLeftRegularDuotone as SiTextAlignLeftRegularDuotone };
export default TextAlignLeftRegularDuotone;
export type { TextAlignLeftRegularDuotoneProps };
