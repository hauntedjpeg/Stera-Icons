import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanDocumentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-document-fill-duotone" {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.35 6.25q.41-.02.8.06.3.07.59.25.32.23.6.54l1.64 1.72q.29.27.49.58a2 2 0 0 1 .23.56q.06.37.05.76v4.68q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.33.17-.68.26-.5.77-.76.35-.17.67-.17.3-.03.72-.02zm.42 1.25a.27.27 0 0 0-.27.27V9c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h1.23a.27.27 0 0 0 .2-.45l-2.48-2.47a.3.3 0 0 0-.18-.08" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanDocumentFillDuotone.displayName = 'ScanDocumentFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanDocumentFillDuotone, ScanDocumentFillDuotone as ScanDocumentFillDuotoneIcon, ScanDocumentFillDuotone as SiScanDocumentFillDuotone };
export default ScanDocumentFillDuotone;
export type { ScanDocumentFillDuotoneProps };
