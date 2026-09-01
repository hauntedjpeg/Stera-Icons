import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateFillProps = Omit<IconBaseProps, 'children'>;

const CertificateFill = memo(
  forwardRef<SVGSVGElement, CertificateFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 3.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.04.51.03 1.24a4.87 4.87 0 0 1 1 6.9V21a.88.88 0 0 1-1.36.73L18 20.05l-2.51 1.68a.88.88 0 0 1-1.37-.73v-2.12H6.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.55-.04-1.38V7.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zm-.93 16.24 1.64-1.1.12-.06c.27-.13.6-.1.86.06l1.64 1.1v-3.98q-.33.15-.67.26l-.13.04-.28.07-.14.03-.2.03-.09.01-.21.03h-.1a5 5 0 0 1-.74 0l-.13-.02h-.06l-.47-.09-.08-.02q-.5-.12-.95-.34zM18 7.87a3.12 3.12 0 1 0 0 6.25 3.12 3.12 0 0 0 0-6.24M6.5 12.14a.88.88 0 0 0 0 1.74H9a.88.88 0 0 0 0-1.74zm0-4a.88.88 0 0 0 0 1.74h4a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateFill.displayName = 'CertificateFill';

// Triple export pattern (lucide-react style)
export { CertificateFill, CertificateFill as CertificateFillIcon, CertificateFill as SiCertificateFill };
export default CertificateFill;
export type { CertificateFillProps };
