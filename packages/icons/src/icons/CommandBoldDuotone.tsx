import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandBoldDuotone = memo(
  forwardRef<SVGSVGElement, CommandBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.67 13.67h1.66c2.03 0 3.67 1.64 3.67 3.66S19.36 21 17.33 21c-2.02 0-3.66-1.64-3.66-3.67v-7.1h2zm0 3.66c0 .92.74 1.67 1.66 1.67S19 18.25 19 17.33s-.75-1.66-1.67-1.66h-1.66zM6.67 3c2.02 0 3.66 1.64 3.66 3.67v7.1h-2v-3.44H6.67C4.64 10.33 3 8.7 3 6.67S4.64 3 6.67 3m0 2C5.75 5 5 5.75 5 6.67s.75 1.66 1.67 1.66h1.66V6.67C8.33 5.75 7.6 5 6.67 5" opacity={0.4} />
        <path fillRule="evenodd" d="M13.78 15.67h-3.45v1.66c0 2.03-1.64 3.67-3.66 3.67S3 19.36 3 17.33c0-2.02 1.64-3.66 3.67-3.66h7.1zm-7.11 0c-.92 0-1.67.74-1.67 1.66S5.75 19 6.67 19s1.66-.75 1.66-1.67v-1.66zM17.33 3C19.36 3 21 4.64 21 6.67c0 2.02-1.64 3.66-3.67 3.66h-7.1v-2h3.44V6.67C13.67 4.64 15.3 3 17.33 3m0 2c-.92 0-1.66.75-1.66 1.67v1.66h1.66c.92 0 1.67-.74 1.67-1.66S18.25 5 17.33 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandBoldDuotone.displayName = 'CommandBoldDuotone';

// Triple export pattern
export { CommandBoldDuotone, CommandBoldDuotone as CommandBoldDuotoneIcon, CommandBoldDuotone as SiCommandBoldDuotone };
export default CommandBoldDuotone;
export type { CommandBoldDuotoneProps };
