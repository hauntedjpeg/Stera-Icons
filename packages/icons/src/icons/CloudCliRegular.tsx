import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudCliRegularProps = Omit<IconBaseProps, 'children'>;

const CloudCliRegular = memo(
  forwardRef<SVGSVGElement, CloudCliRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.25a6.8 6.8 0 0 1 6.16 4A5.75 5.75 0 0 1 23.76 14a.75.75 0 0 1-1.5 0 4.25 4.25 0 0 0-4.54-4.24.75.75 0 0 1-.76-.5A5.25 5.25 0 0 0 6.75 11v.11a.75.75 0 0 1-.93.74A3.26 3.26 0 0 0 1.75 15c0 1.8 1.46 3.25 3.25 3.25h3a.75.75 0 0 1 0 1.5H5a4.75 4.75 0 1 1 .3-9.5c.36-3.37 3.22-6 6.7-6" />
        <path d="M12.47 11.47c.3-.3.77-.3 1.06 0l3.5 3.5c.3.3.3.77 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.97-2.97-2.97-2.97a.75.75 0 0 1 0-1.06M23 18.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CloudCliRegular.displayName = 'CloudCliRegular';

// Triple export pattern (lucide-react style)
export { CloudCliRegular, CloudCliRegular as CloudCliRegularIcon, CloudCliRegular as SiCloudCliRegular };
export default CloudCliRegular;
export type { CloudCliRegularProps };
