import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrewdriverRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScrewdriverRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.33 3.52c1.7-1.7 4.45-1.7 6.15 0s1.7 4.45 0 6.15l-3.82 3.81q-.22.21-.53.22h-1.08l-.3 1.52q-.05.21-.2.38l-1.7 1.7c-.3.29-.77.29-1.06 0l-5.08-5.1c-.3-.28-.3-.76 0-1.05l1.69-1.7.08-.07q.15-.09.3-.13l1.52-.3V7.87q0-.32.22-.53zm5.09 1.06c-1.12-1.1-2.92-1.1-4.03 0l-3.6 3.6v1.38c0 .36-.24.67-.6.74l-1.9.37-1 1 4.03 4.03 1-1 .38-1.9c.07-.35.38-.6.74-.6h1.38l3.6-3.6c1.1-1.1 1.1-2.9 0-4.02" clipRule="evenodd" opacity={.4} />
        <path d="m9.78 15.28-6.25 6.25c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l6.25-6.25zM10.3 13.7h.02l-.02-.02zM16.87 6.06c.3-.29.77-.29 1.07 0 .29.3.29.77 0 1.07l-2.55 2.54c-.29.29-.76.29-1.06 0-.29-.3-.29-.77 0-1.06z" />
    </IconBase>
  ))
);

ScrewdriverRegularDuotone.displayName = 'ScrewdriverRegularDuotone';

// Triple export pattern
export { ScrewdriverRegularDuotone, ScrewdriverRegularDuotone as ScrewdriverRegularDuotoneIcon, ScrewdriverRegularDuotone as SiScrewdriverRegularDuotone };
export default ScrewdriverRegularDuotone;
export type { ScrewdriverRegularDuotoneProps };
