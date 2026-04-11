import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LassoDashFillProps = Omit<IconBaseProps, 'children'>;

const LassoDashFill = memo(
  forwardRef<SVGSVGElement, LassoDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.3 19.7a1.25 1.25 0 1 1 .33 2.49 14 14 0 0 1-1.06.1 1.25 1.25 0 0 1-.1-2.5zM5.8 19.26a1.25 1.25 0 0 1 1.73-.41q.34.2.7.37a1.25 1.25 0 0 1-1 2.29 9 9 0 0 1-1.01-.53 1.25 1.25 0 0 1-.41-1.72M16.21 18.36a1.25 1.25 0 1 1 1.32 2.12q-.45.28-.92.52a1.25 1.25 0 0 1-1.12-2.24q.38-.19.72-.4M3.32 15.1c.64-.26 1.37.04 1.64.67q.16.39.37.75a1.25 1.25 0 0 1-2.19 1.22q-.26-.48-.48-1c-.27-.63.03-1.36.66-1.63M18.98 15.48a1.25 1.25 0 0 1 2.2 1.18 10 10 0 0 1-.56.92 1.25 1.25 0 0 1-2.05-1.42 7 7 0 0 0 .41-.68M3.1 10.3c.7.05 1.21.64 1.16 1.33a5 5 0 0 0 0 .8 1.25 1.25 0 0 1-2.5.1 14 14 0 0 1 .01-1.08c.05-.69.65-1.2 1.34-1.15M20.79 10.25c.68-.09 1.3.4 1.4 1.08a8 8 0 0 1 .07 1.15 1.25 1.25 0 0 1-2.5-.02 7 7 0 0 0-.05-.8c-.09-.68.4-1.31 1.08-1.4M8.77 7.66A1.25 1.25 0 0 1 10.1 9.8l-.4.25a1.25 1.25 0 0 1-1.38-2.08zM3.64 6.57a1.25 1.25 0 0 1 2.02 1.47q-.24.33-.44.67a1.25 1.25 0 0 1-2.15-1.27q.25-.44.57-.87M17.02 6.95c.3-.62 1.05-.87 1.67-.57q.57.28 1.07.66a1.25 1.25 0 0 1-1.51 2 4 4 0 0 0-.66-.41 1.25 1.25 0 0 1-.57-1.68M14 5.7a1.25 1.25 0 0 1 .32 2.48q-.42.06-.87.16a1.25 1.25 0 0 1-.58-2.43q.57-.15 1.13-.2M7.5 3.22a1.25 1.25 0 0 1 1.2 2.2q-.37.2-.7.41a1.25 1.25 0 0 1-1.38-2.08q.42-.29.88-.53M11.8 1.77a1.25 1.25 0 0 1 .4 2.46l-.4.08a1.25 1.25 0 0 1-.5-2.45z" />
    </IconBase>
  ))
);

LassoDashFill.displayName = 'LassoDashFill';

// Triple export pattern (lucide-react style)
export { LassoDashFill, LassoDashFill as LassoDashFillIcon, LassoDashFill as SiLassoDashFill };
export default LassoDashFill;
export type { LassoDashFillProps };
