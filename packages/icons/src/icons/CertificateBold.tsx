import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateBoldProps = Omit<IconBaseProps, 'children'>;

const CertificateBold = memo(
  forwardRef<SVGSVGElement, CertificateBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 12a1 1 0 1 1 0 2H6.5a1 1 0 1 1 0-2zM10.5 8a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M16.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.51.03 1.2a5 5 0 0 1 1 7v7a1 1 0 0 1-1.55.83L18 20.2l-2.45 1.63A1 1 0 0 1 14 21v-2H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 2.99 6.2 3zM20 15.58q-.22.1-.47.18h-.01q-.3.1-.63.16-.1 0-.17.03l-.34.03h-.06l-.6.01h-.03l-.23-.02-.12-.02-.14-.01-.14-.03-.12-.02-.2-.05-.03-.01q-.24-.07-.46-.15h-.02l-.23-.1v3.55l1.45-.96.13-.08a1 1 0 0 1 .97.08l1.45.96zM6.2 5c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C4 6.25 4 6.62 4 7.2v7.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H14v-3a5 5 0 0 1-.85-1.77v-.04l-.03-.11-.02-.1-.02-.12-.02-.1-.02-.09-.01-.13L13 11a5 5 0 0 1 5.63-4.96h.06l.3.06-.01-.13a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C17.75 5 17.38 5 16.8 5zM18 8a3 3 0 1 0 2.08 5.16l.17-.18a3 3 0 0 0-.75-4.58q-.67-.39-1.5-.4" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateBold.displayName = 'CertificateBold';

// Triple export pattern (lucide-react style)
export { CertificateBold, CertificateBold as CertificateBoldIcon, CertificateBold as SiCertificateBold };
export default CertificateBold;
export type { CertificateBoldProps };
