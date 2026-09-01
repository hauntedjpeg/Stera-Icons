import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CertificateFillDuotone = memo(
  forwardRef<SVGSVGElement, CertificateFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 4.88c.57 0 .95 0 1.24.02.28.02.4.06.47.1q.32.16.5.49c.03.07.07.19.1.47v.3l-.26-.06h-.02l-.24-.04h-.1l-.2-.03H18a4.87 4.87 0 0 0-3.87 7.83v3.16H6.2c-.57 0-.95 0-1.24-.02-.28-.02-.4-.06-.47-.1q-.32-.16-.5-.49a1 1 0 0 1-.1-.47 17 17 0 0 1-.02-1.24V7.2c0-.57 0-.95.03-1.24.02-.28.06-.4.1-.47q.16-.32.49-.5c.07-.03.19-.07.47-.1l1.24-.01zm-10.3 7a.88.88 0 0 0 0 1.74H9a.88.88 0 0 0 0-1.74zm0-3.5a.87.87 0 1 0 0 1.74h4a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M9 11.88a.88.88 0 0 1 0 1.74H6.5a.88.88 0 0 1 0-1.74zM10.5 8.38a.88.88 0 0 1 0 1.74h-4a.87.87 0 1 1 0-1.74z" />
        <path fillRule="evenodd" d="M16.8 3.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.04.51.03 1.24a4.87 4.87 0 0 1 1 6.9V21a.88.88 0 0 1-1.36.73L18 20.05l-2.51 1.68a.88.88 0 0 1-1.37-.73v-2.12H6.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.55-.04-1.38V7.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zm-.93 16.24 1.64-1.1.12-.06c.27-.13.6-.1.86.06l1.64 1.1v-3.98q-.33.15-.67.26l-.13.04-.28.07-.14.03-.2.03-.09.01-.21.03h-.1a5 5 0 0 1-.74 0l-.13-.02h-.06l-.47-.09-.08-.02q-.5-.12-.95-.34zM6.2 4.87c-.57 0-.95 0-1.24.03-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47L3.88 7.2v7.6c0 .57 0 .95.03 1.24.02.28.06.4.1.47q.16.32.49.5c.07.03.19.07.47.1l1.24.02h7.93v-3.17A4.86 4.86 0 0 1 18 6.12l.3.01.2.02.09.01.24.04h.02l.26.05v-.3q-.05-.39-.1-.46-.18-.32-.5-.5a1 1 0 0 0-.47-.1 17 17 0 0 0-1.24-.01zm11.8 3a3.12 3.12 0 1 0 0 6.25 3.12 3.12 0 0 0 0-6.24" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateFillDuotone.displayName = 'CertificateFillDuotone';

// Triple export pattern (lucide-react style)
export { CertificateFillDuotone, CertificateFillDuotone as CertificateFillDuotoneIcon, CertificateFillDuotone as SiCertificateFillDuotone };
export default CertificateFillDuotone;
export type { CertificateFillDuotoneProps };
