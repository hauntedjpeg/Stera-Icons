import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverFillProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFill = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.24 3.44c1.75-1.75 4.58-1.75 6.33 0 1.74 1.74 1.74 4.57 0 6.32l-3.82 3.81q-.25.25-.62.26h-.97l-.29 1.41q-.04.26-.24.45l-1.69 1.7c-.34.33-.9.33-1.24 0l-1.92-1.93-6.16 6.16c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l6.16-6.16-1.92-1.92c-.34-.34-.34-.9 0-1.24l1.7-1.7.09-.08q.15-.11.35-.15l1.42-.29v-.97q0-.37.25-.62zm3.78 2.54c-.34-.35-.9-.35-1.23 0l-2.55 2.54c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.54-2.55c.35-.34.35-.9 0-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverFill.displayName = 'ScrewdriverFill';

// Triple export pattern
export { ScrewdriverFill, ScrewdriverFill as ScrewdriverFillIcon, ScrewdriverFill as SiScrewdriverFill };
export default ScrewdriverFill;
export type { ScrewdriverFillProps };
