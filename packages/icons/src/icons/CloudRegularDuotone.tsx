import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudRegularDuotone = memo(
  forwardRef<SVGSVGElement, CloudRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.25c2.75 0 5.11 1.65 6.16 4 3.1.1 5.59 2.63 5.59 5.75 0 3.18-2.57 5.75-5.75 5.75v-1.5c2.35 0 4.25-1.9 4.25-4.25S20.35 9.75 18 9.75l-.29.01c-.34.02-.65-.18-.76-.5-.72-2.04-2.66-3.51-4.95-3.51-2.9 0-5.25 2.35-5.25 5.25v.11c0 .23-.1.46-.28.6q-.3.23-.65.14-.4-.1-.82-.1c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25v1.5C2.38 19.75.25 17.62.25 15S2.38 10.25 5 10.25h.3c.36-3.37 3.22-6 6.7-6" />
        <path d="M18 19.75H5v-1.5h13z" opacity={.4} />
    </IconBase>
  ))
);

CloudRegularDuotone.displayName = 'CloudRegularDuotone';

// Triple export pattern
export { CloudRegularDuotone, CloudRegularDuotone as CloudRegularDuotoneIcon, CloudRegularDuotone as SiCloudRegularDuotone };
export default CloudRegularDuotone;
export type { CloudRegularDuotoneProps };
