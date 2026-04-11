import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDocumentFillProps = Omit<IconBaseProps, 'children'>;

const ScanDocumentFill = memo(
  forwardRef<SVGSVGElement, ScanDocumentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87" />
        <path fillRule="evenodd" d="M12.35 6.25q.41-.01.8.06.3.07.59.25.32.22.6.54l1.64 1.72q.29.27.49.58a2 2 0 0 1 .23.56q.06.37.05.76v4.68q0 .4-.02.72 0 .33-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H9.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm.42 1.25a.27.27 0 0 0-.27.27V9c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08h1.23a.27.27 0 0 0 .2-.45l-2.48-2.47a.3.3 0 0 0-.18-.08" clipRule="evenodd" />
        <path d="M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

ScanDocumentFill.displayName = 'ScanDocumentFill';

// Triple export pattern (lucide-react style)
export { ScanDocumentFill, ScanDocumentFill as ScanDocumentFillIcon, ScanDocumentFill as SiScanDocumentFill };
export default ScanDocumentFill;
export type { ScanDocumentFillProps };
