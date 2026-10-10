import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverRegularProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverRegular = memo(
  forwardRef<SVGSVGElement, ScrewdriverRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.87 6.06c.3-.29.77-.29 1.07 0 .29.3.29.77 0 1.07l-2.55 2.54c-.29.29-.76.29-1.06 0-.29-.3-.29-.77 0-1.06z" />
        <path fillRule="evenodd" d="M14.33 3.52c1.7-1.7 4.45-1.7 6.15 0s1.7 4.45 0 6.15l-3.82 3.81q-.22.22-.53.22h-1.08l-.3 1.52q-.05.21-.2.38l-1.7 1.7c-.3.29-.77.29-1.06 0l-2.01-2.02-6.25 6.25c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l6.25-6.25-2.01-2.01q-.21-.22-.22-.53 0-.32.22-.53l1.7-1.7.07-.07q.15-.09.3-.13l1.52-.3V7.87q0-.32.22-.53zm5.09 1.06c-1.11-1.1-2.92-1.1-4.03 0l-3.59 3.6v1.38c0 .36-.25.67-.6.74l-1.9.37-1 1 4.02 4.03 1-1 .38-1.9.04-.12c.11-.29.39-.48.7-.48h1.38l3.6-3.6c1.1-1.1 1.1-2.9 0-4.02" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverRegular.displayName = 'ScrewdriverRegular';

// Triple export pattern
export { ScrewdriverRegular, ScrewdriverRegular as ScrewdriverRegularIcon, ScrewdriverRegular as SiScrewdriverRegular };
export default ScrewdriverRegular;
export type { ScrewdriverRegularProps };
