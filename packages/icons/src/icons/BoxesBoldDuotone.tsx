import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoxesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoxesBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoxesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21.5 12.42c.3.18.5.5.5.87v5.14c0 .36-.2.69-.5.87L17 21.87c-.31.17-.69.17-1 0l-4-2.29-4 2.29c-.31.17-.69.17-1 0L2.5 19.3c-.3-.18-.5-.51-.5-.87v-5.14c0-.36.2-.7.5-.87l4-2.29v.58c0 .36.2.7.5.87l.5.29L5 13.29 7.5 14.7l2.48-1.41 1.52.86c.31.18.69.18 1 0l1.52-.86 2.48 1.41 2.48-1.41-2.48-1.42.5-.29c.3-.18.5-.5.5-.87v-.58zM4 17.85l2.5 1.43v-2.84L4 15zm4.5-1.41v2.84l2.5-1.43V15zm4.5 1.4 2.5 1.44v-2.84L13 15zm4.5-1.4v2.84l2.5-1.43V15z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.62 2.07c.28-.11.6-.1.88.06L17 4.7c.3.18.5.51.5.87v5.14c0 .36-.2.7-.5.87l-4.5 2.57c-.31.18-.69.18-1 0L7 11.58c-.3-.18-.5-.5-.5-.87V5.57c0-.36.2-.69.5-.87l4.5-2.57zM8.5 10.13l2.5 1.43V8.72L8.5 7.3zm4.5-1.4v2.83l2.5-1.43V7.3zM9.51 5.56 12 7l2.48-1.42L12 4.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoxesBoldDuotone.displayName = 'BoxesBoldDuotone';

// Triple export pattern
export { BoxesBoldDuotone, BoxesBoldDuotone as BoxesBoldDuotoneIcon, BoxesBoldDuotone as SiBoxesBoldDuotone };
export default BoxesBoldDuotone;
export type { BoxesBoldDuotoneProps };
