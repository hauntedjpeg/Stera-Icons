import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedFillProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFill = memo(
  forwardRef<SVGSVGElement, EyeClosedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.85 8.42c.32-.61 1.08-.85 1.69-.53s.84 1.08.52 1.69q-.52.99-1.25 1.86l1.54 1.42c.5.47.54 1.26.07 1.77-.47.5-1.26.53-1.77.06l-1.66-1.53q-1.3.97-2.87 1.55l.56 1.94c.19.67-.2 1.36-.86 1.55-.66.2-1.35-.19-1.54-.85l-.59-2.02q-.83.11-1.69.12t-1.7-.12l-.58 2.02c-.19.66-.88 1.04-1.54.85-.67-.2-1.05-.88-.86-1.55l.56-1.94q-1.56-.57-2.87-1.55l-1.66 1.53c-.5.47-1.3.44-1.77-.06s-.44-1.3.07-1.77l1.54-1.42q-.73-.86-1.25-1.86c-.32-.61-.09-1.37.52-1.69s1.37-.08 1.69.53c1.07 2.05 3.09 3.63 5.56 4.25l.06.01h.01q1.06.27 2.22.27 1.15-.01 2.22-.26l.06-.02c2.48-.62 4.5-2.2 5.57-4.25" />
    </IconBase>
  ))
);

EyeClosedFill.displayName = 'EyeClosedFill';

// Triple export pattern
export { EyeClosedFill, EyeClosedFill as EyeClosedFillIcon, EyeClosedFill as SiEyeClosedFill };
export default EyeClosedFill;
export type { EyeClosedFillProps };
