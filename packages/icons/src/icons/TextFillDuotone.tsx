import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-fill-duotone" {...props}>
      <path d="M14 5.25a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h-4c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75z" opacity={.4} />
        <path d="M15 18.75a1.25 1.25 0 1 1 0 2.5H9a1.25 1.25 0 1 1 0-2.5zM17 2.75c1.8 0 3.25 1.46 3.25 3.25a1.25 1.25 0 1 1-2.5 0 .75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75 1.25 1.25 0 1 1-2.5 0c0-1.8 1.46-3.25 3.25-3.25z" />
    </IconBase>
  ))
);

TextFillDuotone.displayName = 'TextFillDuotone';

// Triple export pattern (lucide-react style)
export { TextFillDuotone, TextFillDuotone as TextFillDuotoneIcon, TextFillDuotone as SiTextFillDuotone };
export default TextFillDuotone;
export type { TextFillDuotoneProps };
