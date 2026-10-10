import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudXRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudXRegularDuotone = memo(
  forwardRef<SVGSVGElement, CloudXRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.25c2.75 0 5.11 1.65 6.16 4 3.1.1 5.59 2.63 5.59 5.75 0 3.18-2.57 5.75-5.75 5.75H5C2.38 19.75.25 17.62.25 15S2.38 10.25 5 10.25h.3c.36-3.37 3.22-6 6.7-6m0 1.5C9.1 5.75 6.75 8.1 6.75 11v.11c0 .23-.1.46-.28.6q-.3.23-.65.14-.4-.1-.82-.1c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25h13c2.35 0 4.25-1.9 4.25-4.25S20.35 9.75 18 9.75l-.29.01c-.34.02-.65-.18-.76-.5-.72-2.04-2.66-3.51-4.95-3.51" clipRule="evenodd" opacity={.4} />
        <path d="M13.47 10.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L13.06 13l1.47 1.47c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 14.06l-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 13l-1.47-1.47c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 11.94z" />
    </IconBase>
  ))
);

CloudXRegularDuotone.displayName = 'CloudXRegularDuotone';

// Triple export pattern
export { CloudXRegularDuotone, CloudXRegularDuotone as CloudXRegularDuotoneIcon, CloudXRegularDuotone as SiCloudXRegularDuotone };
export default CloudXRegularDuotone;
export type { CloudXRegularDuotoneProps };
