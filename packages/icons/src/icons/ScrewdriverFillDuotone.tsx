import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="screwdriver-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.24 3.44a4.47 4.47 0 1 1 6.33 6.32l-3.82 3.81a1 1 0 0 1-.62.26h-.97l-.29 1.41a1 1 0 0 1-.24.45l-1.69 1.7a.9.9 0 0 1-1.24 0l-5.08-5.1a.9.9 0 0 1 0-1.23l1.7-1.7.1-.08q.15-.11.34-.15l1.42-.29v-.97q0-.37.25-.62zm3.78 2.54a.9.9 0 0 0-1.23 0l-2.55 2.54a.88.88 0 0 0 1.24 1.24l2.54-2.55a.9.9 0 0 0 0-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M16.79 5.98a.88.88 0 0 1 1.23 1.23l-2.54 2.55a.88.88 0 0 1-1.24-1.24zM9.78 15.46l-6.16 6.16a.88.88 0 0 1-1.24-1.24l6.16-6.16z" />
    </IconBase>
  ))
);

ScrewdriverFillDuotone.displayName = 'ScrewdriverFillDuotone';

// Triple export pattern (lucide-react style)
export { ScrewdriverFillDuotone, ScrewdriverFillDuotone as ScrewdriverFillDuotoneIcon, ScrewdriverFillDuotone as SiScrewdriverFillDuotone };
export default ScrewdriverFillDuotone;
export type { ScrewdriverFillDuotoneProps };
