import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.25 3.44c1.74-1.75 4.57-1.75 6.32 0 1.74 1.74 1.74 4.57 0 6.32l-3.82 3.81q-.25.25-.62.26h-.97l-.29 1.41q-.04.26-.24.45l-1.69 1.7c-.34.33-.9.33-1.24 0l-5.08-5.1c-.34-.33-.34-.89 0-1.23l1.7-1.7.1-.08q.15-.11.34-.15l1.42-.29v-.97q0-.37.25-.62zm3.77 2.54c-.34-.35-.9-.35-1.23 0l-2.55 2.54c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.54-2.55c.35-.34.35-.9 0-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M16.79 5.98c.34-.35.9-.35 1.23 0 .35.34.35.9 0 1.23l-2.54 2.55c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM9.78 15.46l-6.16 6.16c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l6.16-6.16z" />
    </IconBase>
  ))
);

ScrewdriverFillDuotone.displayName = 'ScrewdriverFillDuotone';

// Triple export pattern
export { ScrewdriverFillDuotone, ScrewdriverFillDuotone as ScrewdriverFillDuotoneIcon, ScrewdriverFillDuotone as SiScrewdriverFillDuotone };
export default ScrewdriverFillDuotone;
export type { ScrewdriverFillDuotoneProps };
