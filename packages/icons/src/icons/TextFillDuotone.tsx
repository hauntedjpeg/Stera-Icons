import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextFillDuotone = memo(
  forwardRef<SVGSVGElement, TextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 5.25c-.41 0-.75.34-.75.75v12c0 .41.34.75.75.75h-4c.41 0 .75-.34.75-.75V6c0-.41-.34-.75-.75-.75z" opacity={.4} />
        <path d="M15 18.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM17 2.75c1.8 0 3.25 1.46 3.25 3.25 0 .69-.56 1.25-1.25 1.25S17.75 6.69 17.75 6c0-.41-.34-.75-.75-.75H7c-.41 0-.75.34-.75.75 0 .69-.56 1.25-1.25 1.25S3.75 6.69 3.75 6c0-1.8 1.46-3.25 3.25-3.25z" />
    </IconBase>
  ))
);

TextFillDuotone.displayName = 'TextFillDuotone';

// Triple export pattern
export { TextFillDuotone, TextFillDuotone as TextFillDuotoneIcon, TextFillDuotone as SiTextFillDuotone };
export default TextFillDuotone;
export type { TextFillDuotoneProps };
