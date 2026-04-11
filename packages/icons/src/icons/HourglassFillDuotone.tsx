import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassFillDuotone = memo(
  forwardRef<SVGSVGElement, HourglassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.45 14.78c.8.56 1.04.74 1.21.96q.26.32.38.72c.08.26.09.57.09 1.54v1.13H7.88V18c0-.97 0-1.28.08-1.54q.12-.39.38-.72c.17-.22.42-.4 1.2-.96L12 13.07zM16.13 4.88V6c0 .97-.01 1.28-.1 1.54q-.11.39-.37.72c-.17.22-.42.4-1.2.96L12 10.93 9.55 9.22a6 6 0 0 1-1.21-.96q-.26-.32-.38-.72A6 6 0 0 1 7.88 6V4.88z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.5 3.13a.88.88 0 0 1 0 1.75h-.62V6c0 .86 0 1.47-.16 2.04q-.23.72-.69 1.31c-.37.46-.87.8-1.58 1.3L13.53 12l1.92 1.35c.71.5 1.21.84 1.58 1.3q.46.59.69 1.31c.16.57.16 1.18.16 2.04v1.13h.62a.88.88 0 0 1 0 1.75h-13a.88.88 0 0 1 0-1.75h.63V18c0-.86-.01-1.47.15-2.04q.22-.72.69-1.31c.37-.46.87-.8 1.58-1.3L10.47 12l-1.92-1.35c-.71-.5-1.21-.84-1.58-1.3a4 4 0 0 1-.69-1.31c-.16-.57-.16-1.18-.16-2.04V4.88H5.5a.87.87 0 1 1 0-1.75zM9.55 14.78c-.8.56-1.04.74-1.21.96q-.26.32-.38.72c-.08.26-.08.57-.08 1.54v1.13h8.25V18c0-.97-.01-1.28-.1-1.54q-.11-.39-.37-.72c-.17-.22-.42-.4-1.2-.96L12 13.07zM7.87 6c0 .97.01 1.28.1 1.54q.11.39.37.72c.17.22.42.4 1.2.96L12 10.93l2.45-1.71c.8-.56 1.04-.74 1.21-.96q.26-.32.38-.72c.08-.26.09-.57.09-1.54V4.88H7.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassFillDuotone.displayName = 'HourglassFillDuotone';

// Triple export pattern (lucide-react style)
export { HourglassFillDuotone, HourglassFillDuotone as HourglassFillDuotoneIcon, HourglassFillDuotone as SiHourglassFillDuotone };
export default HourglassFillDuotone;
export type { HourglassFillDuotoneProps };
