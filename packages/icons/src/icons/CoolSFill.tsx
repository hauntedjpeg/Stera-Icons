import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSFillProps = Omit<IconBaseProps, 'children'>;

const CoolSFill = memo(
  forwardRef<SVGSVGElement, CoolSFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.4 1.45c.36-.27.84-.27 1.2 0l5 3.75c.25.19.4.49.4.8v2.3c0 .56-.45 1-1 1h-3.22q-.39 0-.67-.26l-.29-.26q-.31-.29-.32-.73V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.2q0 .21.16.37l5.98 5.04q.35.31.36.77V18c0 .31-.15.61-.4.8l-5 3.75c-.36.27-.84.27-1.2 0l-5-3.75c-.25-.19-.4-.49-.4-.8v-2.3c0-.55.45-1 1-1h3.22q.39 0 .67.27l.28.25q.32.31.33.74v1.54c0 .28.22.5.5.5s.5-.22.5-.5v-2.2q0-.21-.16-.37L6.36 9.9Q6 9.58 6 9.12V6c0-.31.15-.61.4-.8z" />
    </IconBase>
  ))
);

CoolSFill.displayName = 'CoolSFill';

// Triple export pattern
export { CoolSFill, CoolSFill as CoolSFillIcon, CoolSFill as SiCoolSFill };
export default CoolSFill;
export type { CoolSFillProps };
