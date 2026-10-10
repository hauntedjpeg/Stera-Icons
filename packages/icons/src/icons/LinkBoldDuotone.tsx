import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkBoldDuotone = memo(
  forwardRef<SVGSVGElement, LinkBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.06 8.54c.5-.24 1.1-.03 1.34.47s.03 1.1-.46 1.33q-.51.25-.93.67c-1.34 1.34-1.34 3.51 0 4.85l3.13 3.13c1.34 1.35 3.51 1.35 4.85 0 1.34-1.34 1.34-3.51 0-4.85l-1.7-1.7c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l1.7 1.7c2.12 2.13 2.12 5.57 0 7.69s-5.56 2.12-7.68 0l-3.14-3.14c-2.12-2.12-2.12-5.56 0-7.68q.67-.66 1.47-1.05" opacity={.4} />
        <path d="M3.6 3.6c2.11-2.13 5.55-2.13 7.67 0l3.14 3.13c2.12 2.12 2.12 5.56 0 7.68q-.67.67-1.47 1.05c-.5.24-1.1.03-1.34-.47s-.03-1.1.46-1.33q.51-.24.93-.67c1.34-1.34 1.34-3.5 0-4.85L9.86 5.01C8.52 3.67 6.35 3.67 5.01 5S3.67 8.52 5 9.86l1.7 1.7c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-1.7-1.7c-2.12-2.13-2.12-5.57 0-7.69" />
    </IconBase>
  ))
);

LinkBoldDuotone.displayName = 'LinkBoldDuotone';

// Triple export pattern
export { LinkBoldDuotone, LinkBoldDuotone as LinkBoldDuotoneIcon, LinkBoldDuotone as SiLinkBoldDuotone };
export default LinkBoldDuotone;
export type { LinkBoldDuotoneProps };
