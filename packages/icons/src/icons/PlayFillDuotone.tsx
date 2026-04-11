import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayFillDuotone = memo(
  forwardRef<SVGSVGElement, PlayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.33 3.78c.16-.02.44.02.99.28.55.25 1.24.65 2.24 1.22l7.02 4.04c1 .57 1.69.97 2.18 1.32s.66.56.73.7c.18.42.18.9 0 1.31-.07.15-.24.36-.73.71-.5.35-1.19.75-2.18 1.32l-7.02 4.04c-1 .57-1.7.97-2.24 1.23-.55.25-.83.29-1 .27a1.6 1.6 0 0 1-1.14-.65c-.1-.13-.2-.39-.25-.99s-.05-1.4-.05-2.54V7.96c0-1.14 0-1.94.05-2.54s.16-.85.25-.98c.27-.37.69-.61 1.15-.66" opacity={.4} />
        <path fillRule="evenodd" d="M6.15 2.04c.64-.07 1.27.13 1.9.42q.95.46 2.39 1.3l7 4.04c.97.56 1.75 1 2.32 1.4s1.06.85 1.32 1.43c.4.87.4 1.87 0 2.74a3.6 3.6 0 0 1-1.32 1.42q-.86.59-2.31 1.4l-7.01 4.04q-1.44.85-2.39 1.3c-.63.3-1.26.5-1.9.43-.95-.1-1.82-.6-2.38-1.36a3.6 3.6 0 0 1-.58-1.86c-.07-.7-.06-1.59-.06-2.7V7.96q-.02-1.65.06-2.7c.06-.7.2-1.34.58-1.86a3.4 3.4 0 0 1 2.38-1.36m.18 1.74c-.46.05-.88.29-1.15.65-.1.14-.2.39-.25.99s-.05 1.4-.05 2.54v8.08c0 1.14 0 1.94.05 2.54s.16.86.25.99c.27.37.69.6 1.15.65.16.02.44-.02.99-.27.55-.26 1.24-.66 2.24-1.23l7.02-4.04c1-.57 1.69-.97 2.18-1.32s.66-.56.73-.7a1.6 1.6 0 0 0 0-1.31c-.07-.15-.24-.36-.73-.71-.5-.35-1.19-.75-2.18-1.32L9.56 5.28c-1-.57-1.7-.97-2.24-1.23-.55-.25-.83-.29-1-.27" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayFillDuotone.displayName = 'PlayFillDuotone';

// Triple export pattern (lucide-react style)
export { PlayFillDuotone, PlayFillDuotone as PlayFillDuotoneIcon, PlayFillDuotone as SiPlayFillDuotone };
export default PlayFillDuotone;
export type { PlayFillDuotoneProps };
