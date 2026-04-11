import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveFillProps = Omit<IconBaseProps, 'children'>;

const SaveFill = memo(
  forwardRef<SVGSVGElement, SaveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.63c.48 0 .88.39.88.87v2.63h-1.76V2.5c0-.48.4-.87.88-.87" />
        <path d="M12.88 5.13q1.79-.01 2.95.06c.8.07 1.49.2 2.11.52a5.4 5.4 0 0 1 2.35 2.35c.32.62.45 1.3.52 2.11s.07 1.78.07 3.03v.6c0 1.25 0 2.23-.07 3.03s-.2 1.49-.52 2.11a5.4 5.4 0 0 1-2.35 2.35c-.62.32-1.3.45-2.11.52s-1.78.07-3.03.07h-1.6c-1.25 0-2.23 0-3.03-.07s-1.49-.2-2.11-.52a5.4 5.4 0 0 1-2.35-2.35 6 6 0 0 1-.52-2.11c-.07-.8-.06-1.78-.06-3.03v-.6c0-1.25 0-2.23.06-3.03.07-.8.2-1.49.52-2.11a5.4 5.4 0 0 1 2.35-2.35c.62-.32 1.3-.45 2.11-.52q1.15-.07 2.96-.07v7.77l-2.51-2.5a.88.88 0 0 0-1.24 1.23l4 4c.34.34.9.34 1.24 0l4-4a.88.88 0 0 0-1.24-1.24l-2.5 2.5z" />
    </IconBase>
  ))
);

SaveFill.displayName = 'SaveFill';

// Triple export pattern (lucide-react style)
export { SaveFill, SaveFill as SaveFillIcon, SaveFill as SiSaveFill };
export default SaveFill;
export type { SaveFillProps };
