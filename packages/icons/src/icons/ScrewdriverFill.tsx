import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverFillProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFill = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.24 3.44a4.47 4.47 0 1 1 6.33 6.32l-3.82 3.81a1 1 0 0 1-.62.26h-.97l-.29 1.41a1 1 0 0 1-.24.45l-1.7 1.7a.9.9 0 0 1-1.23 0l-1.92-1.93-6.16 6.16a.88.88 0 0 1-1.24-1.24l6.16-6.16-1.92-1.92a.9.9 0 0 1 0-1.24l1.7-1.7.09-.08q.15-.11.35-.15l1.41-.29v-.97q.01-.37.26-.62zm3.78 2.54a.9.9 0 0 0-1.23 0l-2.55 2.54a.88.88 0 0 0 1.24 1.24l2.54-2.55a.9.9 0 0 0 0-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverFill.displayName = 'ScrewdriverFill';

// Triple export pattern (lucide-react style)
export { ScrewdriverFill, ScrewdriverFill as ScrewdriverFillIcon, ScrewdriverFill as SiScrewdriverFill };
export default ScrewdriverFill;
export type { ScrewdriverFillProps };
