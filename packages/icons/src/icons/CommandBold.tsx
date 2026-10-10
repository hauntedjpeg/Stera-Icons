import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandBoldProps = Omit<IconBaseProps, 'children'>;

const CommandBold = memo(
  forwardRef<SVGSVGElement, CommandBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.33 3C19.36 3 21 4.64 21 6.67c0 2.02-1.64 3.66-3.67 3.66h-1.66v3.34h1.66c2.03 0 3.67 1.64 3.67 3.66S19.36 21 17.33 21c-2.02 0-3.66-1.64-3.66-3.67v-1.66h-3.34v1.66c0 2.03-1.64 3.67-3.66 3.67S3 19.36 3 17.33c0-2.02 1.64-3.66 3.67-3.66h1.66v-3.34H6.67C4.64 10.33 3 8.7 3 6.67S4.64 3 6.67 3c2.02 0 3.66 1.64 3.66 3.67v1.66h3.34V6.67C13.67 4.64 15.3 3 17.33 3M6.67 15.67c-.92 0-1.67.74-1.67 1.66S5.75 19 6.67 19s1.66-.75 1.66-1.67v-1.66zm9 1.66c0 .92.74 1.67 1.66 1.67S19 18.25 19 17.33s-.75-1.66-1.67-1.66h-1.66zm-5.34-3.66h3.34v-3.34h-3.34zM6.67 5C5.75 5 5 5.75 5 6.67s.75 1.66 1.67 1.66h1.66V6.67C8.33 5.75 7.6 5 6.67 5m10.66 0c-.92 0-1.66.75-1.66 1.67v1.66h1.66c.92 0 1.67-.74 1.67-1.66S18.25 5 17.33 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandBold.displayName = 'CommandBold';

// Triple export pattern
export { CommandBold, CommandBold as CommandBoldIcon, CommandBold as SiCommandBold };
export default CommandBold;
export type { CommandBoldProps };
