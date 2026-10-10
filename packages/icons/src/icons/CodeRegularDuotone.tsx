import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CodeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.28 4.8c.11-.4.53-.63.93-.52s.62.53.51.93l-4 14c-.11.4-.53.62-.93.51s-.62-.53-.51-.93z" opacity={.4} />
        <path d="M6.47 7.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L4.06 12l3.47 3.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4c-.3-.3-.3-.77 0-1.06zM16.47 7.47c.3-.3.77-.3 1.06 0l4 4q.22.22.22.53t-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L19.94 12l-3.47-3.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CodeRegularDuotone.displayName = 'CodeRegularDuotone';

// Triple export pattern
export { CodeRegularDuotone, CodeRegularDuotone as CodeRegularDuotoneIcon, CodeRegularDuotone as SiCodeRegularDuotone };
export default CodeRegularDuotone;
export type { CodeRegularDuotoneProps };
