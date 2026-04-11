import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassFullFillDuotone = memo(
  forwardRef<SVGSVGElement, HourglassFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.45 14.78c.8.56 1.04.74 1.21.96q.26.32.38.72c.08.26.09.57.09 1.54v1.13H7.88V18c0-.97 0-1.28.08-1.54q.12-.39.38-.72c.17-.22.42-.4 1.2-.96L12 13.07z" opacity={.4} />
        <path fillRule="evenodd" d="M18.5 3.13a.88.88 0 0 1 0 1.75h-.62V6c0 .86 0 1.47-.16 2.04q-.23.72-.69 1.31c-.37.46-.87.8-1.58 1.3L13.53 12l1.92 1.35c.71.5 1.21.84 1.58 1.3q.46.59.69 1.31c.16.57.16 1.18.16 2.04v1.13h.62a.88.88 0 0 1 0 1.75h-13a.88.88 0 0 1 0-1.75h.63V18c0-.86-.01-1.47.15-2.04q.22-.72.69-1.31c.37-.46.87-.8 1.58-1.3L10.47 12l-1.92-1.35-.5-.35a3.88 3.88 0 0 1-1.77-2.26c-.16-.57-.15-1.18-.15-2.04V4.88H5.5a.87.87 0 1 1 0-1.75zM9.55 14.78c-.8.56-1.04.74-1.21.96q-.26.32-.38.72c-.08.26-.08.57-.08 1.54v1.13h8.25V18c0-.97-.01-1.28-.1-1.54q-.11-.39-.37-.72c-.17-.22-.42-.4-1.2-.96L12 13.07z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassFullFillDuotone.displayName = 'HourglassFullFillDuotone';

// Triple export pattern (lucide-react style)
export { HourglassFullFillDuotone, HourglassFullFillDuotone as HourglassFullFillDuotoneIcon, HourglassFullFillDuotone as SiHourglassFullFillDuotone };
export default HourglassFullFillDuotone;
export type { HourglassFullFillDuotoneProps };
