import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CertificateRegularDuotone = memo(
  forwardRef<SVGSVGElement, CertificateRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.8 3.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.52.03 1.3a5 5 0 0 0-1.5-.72l-.02-.46a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H6.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v7.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h8.05v1.5H6.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" opacity={0.4} />
        <path d="M9 11.75a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1 0-1.5zM10.5 8.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M18 6.25a4.73 4.73 0 0 1 3.75 7.66v7.1a.75.75 0 0 1-1.17.61L18 19.9l-2.58 1.73a.75.75 0 0 1-1.17-.63v-7.09A4.73 4.73 0 0 1 18 6.25m2.25 8.93q-.37.2-.78.34h-.05l-.23.08-.09.02-.18.04-.14.02-.18.03a5 5 0 0 1-.88.03h-.12a5 5 0 0 1-1-.2l-.08-.03q-.4-.13-.77-.32v4.41l1.83-1.22.1-.06c.24-.1.52-.09.74.06l1.83 1.22zM18 7.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateRegularDuotone.displayName = 'CertificateRegularDuotone';

// Triple export pattern (lucide-react style)
export { CertificateRegularDuotone, CertificateRegularDuotone as CertificateRegularDuotoneIcon, CertificateRegularDuotone as SiCertificateRegularDuotone };
export default CertificateRegularDuotone;
export type { CertificateRegularDuotoneProps };
