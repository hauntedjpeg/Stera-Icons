import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateFillProps = Omit<IconBaseProps, 'children'>;

const CertificateFill = memo(
  forwardRef<SVGSVGElement, CertificateFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 3.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.04.51.03 1.24c1.22.89 2 2.32 2 3.94 0 1.11-.37 2.14-1 2.96V21c0 .32-.17.62-.46.77-.28.15-.63.14-.9-.04L18 20.05l-2.51 1.68c-.27.18-.62.2-.9.04-.29-.15-.46-.45-.46-.77v-2.12H6.2q-.82.01-1.38-.04-.6-.03-1.13-.28-.83-.42-1.25-1.25-.25-.54-.28-1.13-.05-.55-.04-1.38V7.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zm-.93 16.24 1.64-1.1.12-.06c.27-.13.6-.1.86.06l1.64 1.1v-3.98q-.33.15-.67.26l-.13.04-.14.04q-.08 0-.14.03l-.14.03-.2.03-.09.01-.21.03h-.1l-.31.02q-.21 0-.43-.03h-.13l-.06-.01-.21-.04h-.05l-.2-.05-.1-.02q-.48-.12-.95-.34zM18 7.87c-1.73 0-3.12 1.4-3.12 3.13 0 .8.29 1.52.78 2.07.57.65 1.4 1.05 2.34 1.05q.86-.01 1.56-.41.45-.26.78-.64c.49-.55.79-1.28.79-2.07 0-1.16-.63-2.17-1.57-2.7q-.7-.42-1.56-.43M6.5 12.14c-.48 0-.87.39-.87.87s.39.88.87.88H9c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-4c-.48 0-.87.39-.87.87s.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateFill.displayName = 'CertificateFill';

// Triple export pattern
export { CertificateFill, CertificateFill as CertificateFillIcon, CertificateFill as SiCertificateFill };
export default CertificateFill;
export type { CertificateFillProps };
