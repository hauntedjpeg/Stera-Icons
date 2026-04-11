import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.06 5.88.06.01.05.05.01.07-.02.06-3.04 4.26c-.72 1-.72 2.34 0 3.34l3.04 4.26.02.06-.01.07-.05.05-.06.02H8.03c-.36 0-.7-.18-.92-.48l-3.57-5c-.28-.39-.28-.91 0-1.3l3.57-5c.21-.3.56-.47.92-.47z" opacity={.4} />
        <path fillRule="evenodd" d="M20.06 4.13a1.88 1.88 0 0 1 1.52 2.96l-3.04 4.26c-.28.39-.28.91 0 1.3l3.04 4.26c.89 1.24 0 2.97-1.52 2.97H8.03c-.93 0-1.8-.45-2.34-1.2l-3.57-5c-.72-1-.72-2.35 0-3.35l3.57-5a2.9 2.9 0 0 1 2.34-1.2zM8.03 5.88c-.36 0-.7.17-.92.47l-3.57 5c-.28.39-.28.91 0 1.3l3.57 5c.22.3.56.47.92.48h12.03l.06-.02.05-.05.01-.07-.02-.06-3.04-4.26c-.72-1-.72-2.34 0-3.34l3.04-4.26.02-.06-.01-.07-.05-.05-.06-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltFillDuotone.displayName = 'LabelAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltFillDuotone, LabelAltFillDuotone as LabelAltFillDuotoneIcon, LabelAltFillDuotone as SiLabelAltFillDuotone };
export default LabelAltFillDuotone;
export type { LabelAltFillDuotoneProps };
