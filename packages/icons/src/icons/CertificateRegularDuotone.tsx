import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CertificateRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CertificateRegularDuotone = memo(
  forwardRef<SVGSVGElement, CertificateRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.8 3.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.52.03 1.3-.18-.13-.37-.24-.54-.3-1.14-.48l-.01-.46c-.03-.29-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H6.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v7.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h8.05v1.5H6.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" opacity={0.4} />
        <path d="M9 11.75c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM10.5 8.75c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M18 6.25q1.31.01 2.38.64c1.41.82 2.37 2.35 2.37 4.11 0 1.1-.37 2.1-1 2.91v7.1c0 .27-.15.52-.4.65-.24.13-.54.12-.77-.04L18 19.9l-2.58 1.73c-.23.15-.53.16-.77.03-.25-.13-.4-.38-.4-.66v-7.09c-.63-.8-1-1.81-1-2.91 0-2.62 2.13-4.75 4.75-4.75m2.25 8.93q-.37.2-.78.34h-.05l-.23.08-.09.02-.18.04-.14.02-.18.03q-.3.04-.6.04h-.28l-.12-.02-.16-.01-.11-.02-.19-.03-.08-.01-.18-.05-.1-.02-.18-.05-.08-.03q-.4-.13-.77-.32v4.41l1.83-1.22.1-.06c.24-.1.52-.09.74.06l1.83 1.22zM18 7.75c-1.8 0-3.25 1.46-3.25 3.25 0 .82.3 1.58.81 2.15.6.68 1.47 1.1 2.44 1.1q.9-.01 1.62-.43.46-.27.82-.67c.5-.57.81-1.33.81-2.15 0-1.2-.65-2.25-1.63-2.82q-.72-.42-1.62-.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CertificateRegularDuotone.displayName = 'CertificateRegularDuotone';

// Triple export pattern
export { CertificateRegularDuotone, CertificateRegularDuotone as CertificateRegularDuotoneIcon, CertificateRegularDuotone as SiCertificateRegularDuotone };
export default CertificateRegularDuotone;
export type { CertificateRegularDuotoneProps };
