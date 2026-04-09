import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, TextItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-italic-fill-duotone" {...props}>
      <path d="M17.08 5.25c-.73 0-1.38.45-1.64 1.14l-.28.74v.01L11.2 17.66l-.03.08a.75.75 0 0 0 .7 1.01H6.93c.73 0 1.38-.45 1.64-1.14l4.23-11.27.03-.08a.75.75 0 0 0-.7-1.01z" opacity={.4} />
        <path d="M14 18.75a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5zM19 2.75a1.25 1.25 0 1 1 0 2.5h-9a1.25 1.25 0 0 1 0-2.5z" />
    </IconBase>
  ))
);

TextItalicFillDuotone.displayName = 'TextItalicFillDuotone';

// Triple export pattern (lucide-react style)
export { TextItalicFillDuotone, TextItalicFillDuotone as TextItalicFillDuotoneIcon, TextItalicFillDuotone as SiTextItalicFillDuotone };
export default TextItalicFillDuotone;
export type { TextItalicFillDuotoneProps };
