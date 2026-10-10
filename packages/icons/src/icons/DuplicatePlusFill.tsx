import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicatePlusFillProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusFill = memo(
  forwardRef<SVGSVGElement, DuplicatePlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 2.12c1.32 0 2.2 0 2.95.25 1.25.44 2.24 1.43 2.68 2.68.2.57.24 1.22.24 2.08q.5.01.9.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v1.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72-.42.82-1.09 1.49-1.91 1.9-.52.27-1.08.38-1.72.43q-.93.07-2.37.05h-1.8q-1.44.01-2.37-.05c-.64-.05-1.2-.16-1.72-.42-.82-.42-1.49-1.1-1.9-1.91-.27-.52-.38-1.08-.43-1.72q-.04-.4-.05-.9c-.86 0-1.51-.04-2.08-.24-1.25-.44-2.24-1.43-2.68-2.68-.26-.74-.25-1.63-.25-2.95V8.6q-.01-1.44.06-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43q.93-.08 2.37-.06zm3.5 8.5c-.48 0-.87.4-.88.88v2.12H11.5c-.48 0-.87.4-.88.88 0 .48.4.87.88.87h2.12v2.13c0 .48.4.87.88.87s.87-.39.87-.87v-2.13h2.13c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-2.13V11.5c0-.48-.39-.88-.87-.88M8.6 3.87c-1 0-1.69 0-2.23.05-.53.04-.83.12-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.05 1.24-.05 2.23V11c0 1.47.02 1.98.15 2.37.27.75.86 1.34 1.61 1.6.3.11.67.14 1.5.15V13.6q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43q.93-.07 2.37-.06h1.52c0-.82-.04-1.2-.14-1.49-.27-.75-.86-1.34-1.61-1.6-.39-.14-.9-.16-2.37-.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

DuplicatePlusFill.displayName = 'DuplicatePlusFill';

// Triple export pattern
export { DuplicatePlusFill, DuplicatePlusFill as DuplicatePlusFillIcon, DuplicatePlusFill as SiDuplicatePlusFill };
export default DuplicatePlusFill;
export type { DuplicatePlusFillProps };
