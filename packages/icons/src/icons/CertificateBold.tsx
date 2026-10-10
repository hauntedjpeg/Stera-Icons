import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateBoldProps = Omit<IconBaseProps, 'children'>;

const CertificateBold = memo(
  forwardRef<SVGSVGElement, CertificateBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 12c.55 0 1 .45 1 1s-.45 1-1 1H6.5c-.55 0-1-.45-1-1s.45-1 1-1zM10.5 8c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M16.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.51.03 1.2c1.21.91 2 2.36 2 4 0 1.12-.37 2.16-1 3v7c0 .37-.2.7-.53.88-.32.18-.72.16-1.02-.05L18 20.2l-2.45 1.63c-.3.2-.7.23-1.02.05S14 21.37 14 21v-2H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3Q5.4 2.99 6.2 3zM20 15.58q-.22.1-.47.18h-.01q-.3.1-.63.16-.1 0-.17.03l-.1.01-.24.02h-.06L18 16h-.28l-.03-.01-.23-.02-.12-.02-.14-.01-.14-.03-.12-.02-.2-.05-.03-.01q-.24-.07-.46-.15h-.02l-.23-.1v3.55l1.45-.96.13-.08c.3-.14.68-.12.97.08l1.45.96zM6.2 5c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42C4 6.25 4 6.62 4 7.2v7.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H14v-3q-.46-.6-.7-1.31l-.1-.29-.05-.17v-.04l-.03-.11-.02-.1-.02-.12-.02-.1-.02-.09-.01-.13-.02-.3L13 11c0-2.76 2.24-5 5-5l.32.01h.04l.27.03h.06l.3.06-.01-.13c-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09C17.75 5 17.38 5 16.8 5zM18 8c-1.66 0-3 1.34-3 3 0 .76.28 1.45.75 1.98C16.3 13.61 17.1 14 18 14q.83-.01 1.5-.4.2-.12.4-.28l.18-.16.17-.18c.47-.53.75-1.22.75-1.98 0-1.1-.6-2.08-1.5-2.6q-.67-.39-1.5-.4" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateBold.displayName = 'CertificateBold';

// Triple export pattern
export { CertificateBold, CertificateBold as CertificateBoldIcon, CertificateBold as SiCertificateBold };
export default CertificateBold;
export type { CertificateBoldProps };
