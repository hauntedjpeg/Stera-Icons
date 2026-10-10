import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.92 2.39c1.93-.24 3.28-.21 4.34 0 1.07.2 1.81.58 2.49.93.66.35 1.26.68 2.14.9s2.1.35 3.96.24c1-.06 1.9.71 1.9 1.76v7.92c0 .89-.68 1.66-1.6 1.73-2.02.15-3.44.04-4.54-.22-1.1-.27-1.86-.68-2.53-1.03-.66-.36-1.24-.66-2.09-.83-.75-.15-1.76-.21-3.24-.07v-1.5c1.51-.14 2.63-.08 3.54.1 1.08.22 1.82.61 2.5.97.66.36 1.27.69 2.17.9s2.16.33 4.08.18c.11 0 .21-.1.21-.23V6.22c0-.13-.13-.28-.31-.26-1.97.12-3.34-.02-4.42-.29S11.71 5 11.05 4.65c-.65-.34-1.23-.63-2.08-.8-.75-.14-1.75-.2-3.22-.05v-.67c0-.41-.34-.75-.75-.75z" opacity={.4} />
        <path d="M5 2.38c.41 0 .75.34.75.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.13c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

FlagRegularDuotone.displayName = 'FlagRegularDuotone';

// Triple export pattern
export { FlagRegularDuotone, FlagRegularDuotone as FlagRegularDuotoneIcon, FlagRegularDuotone as SiFlagRegularDuotone };
export default FlagRegularDuotone;
export type { FlagRegularDuotoneProps };
