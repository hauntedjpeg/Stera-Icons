import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v2c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.93 0-3.5-1.57-3.5-3.5v-2c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v2c0 1.93-1.57 3.5-3.5 3.5h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.83 0 1.5-.67 1.5-1.5v-2c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-.83 0-1.5.67-1.5 1.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-1.93 1.57-3.5 3.5-3.5zM18 2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.83-.67-1.5-1.5-1.5h-2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.35 6q.4-.02.86.07.35.08.66.28c.25.16.46.38.64.57l1.65 1.72q.29.27.52.63.18.3.26.64c.07.28.06.56.06.81v4.68q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02H9.6q-.4 0-.74-.02-.36-.01-.77-.2-.57-.3-.87-.87c-.14-.27-.18-.54-.2-.77Q7 15.8 7 15.4V8.6q0-.4.02-.74.01-.36.2-.77.3-.57.87-.87.42-.2.77-.2Q9.2 6 9.6 6zM9.6 8l-.58.01v.01C9 8.14 9 8.3 9 8.6v6.8l.01.58h.01c.12.02.28.02.58.02h4.8l.58-.01v-.01c.02-.12.02-.28.02-.58V12h-1.4q-.4 0-.74-.02-.36-.01-.77-.2-.57-.3-.87-.87-.19-.42-.2-.77Q11 9.8 11 9.4V8zM13 9.4l.01.58h.01c.12.02.28.02.58.02h1.1l-1.63-1.7-.07-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentBoldDuotone.displayName = 'ScanDocumentBoldDuotone';

// Triple export pattern
export { ScanDocumentBoldDuotone, ScanDocumentBoldDuotone as ScanDocumentBoldDuotoneIcon, ScanDocumentBoldDuotone as SiScanDocumentBoldDuotone };
export default ScanDocumentBoldDuotone;
export type { ScanDocumentBoldDuotoneProps };
